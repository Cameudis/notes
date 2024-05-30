# 静态单赋值和稀疏分析

在程序中，一个变量可能会被赋值很多次。许多数据流分析都需要追踪某个变量的定义和使用，因此我们往往会先计算程序的 Def-Use Chain。此外，我们还可以将程序转化为静态单赋值形式（Static Single-Assignment Form），更加便于对程序进行优化、分析。

在 SSA 形式中，每个变量在代码中只有一次赋值。这个赋值在实际运行中可能会跑很多遍，但是我们静态分析只关心代码，因此才叫做*静态*单赋值形式。由于每个变量都只有一次赋值，所以数据流分析和优化算法都会变得更加简单。

## SSA 转换

将一个普通的程序转化为 SSA 形式是一个比较复杂的流程，这一点笔者在写编译器的 LLVM IR 生成时非常有感触。由于编译教材《虎书》和老师 slide 上的算法都不完全正确，因此等有时间了会把自己写的 SSA 转换代码给放过来。

转换整体的流程可以大致总结为以下几个步骤：

0. 对程序进行 Liveness 分析；
1. 计算节点之间的 dominance 关系；
2. 根据 dominance 关系，计算出每个节点的 dominance frontier；
3. 遍历所有的节点，如果节点有对于某个变量的定义，就遍历该节点的 dominance frontier：如果遍历的节点有对于该变量的引用或 Liveout，就在节点开头为这个变量插入一个相应的 Phi 函数。（当然，此时 Phi 函数的参数还不能够确定）
4. 遍历所有的 Basic Block，将每个变量更新成新的变量名，并添加到每个变量的栈中。对于当前内 Basic Block 的后继，如果其开头有相应的 Phi 函数，就把变量当前的最新副本（位于栈顶）作为参数更新进去。