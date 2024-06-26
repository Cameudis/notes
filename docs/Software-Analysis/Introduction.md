# 软件分析

随着计算机在人类社会中的普及，越来越多的基础服务、重要服务都由计算机程序所负责。软件分析，也就是判断计算机程序是否会按照预期进行工作而没有缺陷，是一个十分重要的议题。

软件分析存在终极的解法，可以彻底避免某个软件出现缺陷吗？我们可以从两个角度来思考这个问题：

- **哥德尔不完备性定理**：计算机程序可以表示自然数和四则运算，因此一定包含一个无法证明的定理，将其记为 $T$，则我们永远无法分析程序 `if (T) bug();` 是否会存在缺陷。
- **停机问题**：反证法（悖论）可以证明，不存在一个可以判断某个程序是否能够跑完的算法，类似也可以证明没有一个算法能够判断一个软件存在某种缺陷。

停机问题是不可判定问题，确定程序有无内存泄露同样是不可判定问题。莱斯定理告诉我们（不严谨地说），一个理论计算机程序的任何性质都是不可判定的。

理论如此悲观，但现实情况似乎好一些：我们使用的计算机受到物理条件的限制，其状态数量是有限的，只要将程序抽象为一个**有限状态的自动机**，并检查其中是否存在环（这意味着程序有可能回到同一个状态），就可以判定这台计算机上的所有程序停机问题。

不过，由于实际上判断这种问题的程序本身需要比问题中更多的状态数量，因此一个程序还是没办法判断自己是否会停机（也就是停机问题证明中的例子）。基于有限状态自动机的抽象来判断停机问题的算法被称为**模型检查**技术，被广泛应用于硬件领域；但在软件领域中，由于**状态爆炸**（状态数太多，超出了检查程序的可处理范围）的问题，模型检查技术几乎无法应用于大型软件。

## 非判定问题

作为工程师，我们都知道近似法的重要性。许多现实中的问题并不可能做到100%的完美解决，但一个近似的答案已经足够有用。对于诸如停机问题这样的判断问题，我们可以允许判定算法输出“我不知道”的结果。当然，判定算法最好多输出一些“是”、“否”，少输出一点“我不知道”。

![我不知道](../assets/image1.png)

近似法的原则是：将能处理好的处理好，不能处理好的就输出不知道。比如，在判定计算结果的正负时，将所有的操作数都抽象为正、零、负和不确定（槑），使用这些域的运算来判断。又比如，在搜索时如果超时，就输出不知道。

软件分析的两大部分就是近似法的两个步骤：

- **抽象**：如何把具体的程序抽象成可以处理的模型？
- **搜索**：有了模型后，如何判断具体问题？
