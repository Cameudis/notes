# 时间复杂度

我们希望能够衡量一个算法的复杂度，并忽略那些和计算机本身相关的参数，只关注抽象的算法性能。因此，我们采用**渐进分析（Asymptotic Analysis）** 的方法，考虑当问题的输入规模 $n$ 趋向于无穷大时，算法所需时间 $T(n)$ 会如何变化。

## 渐进分析的几种标记

### 大 O 表示法 $O(n)$
表示函数的上界。定义为：

$$f(n)=O(g(n)) \iff \exists\ c, k : (\forall\ n \ge k : 0 \le f(n) \le cg(n))$$

### 大 Ω 表示法 $\Omega(n)$
表示函数的下界。定义为：

$$f(n)=\Omega(g(n)) \iff \exists\ c, k : (\forall\ n \ge k : 0 \le cg(n) \le f(n))$$

### 大 Θ 表示法 $\Theta(n)$
表示函数的 tight bound，定义为：

$$f(n)=O(g(n)) \iff \exists\ c_1, c_2, k : (\forall\ n \ge k : c_1g(n) \le f(n) \le c_2g(n))$$

在这几种表示法中，常数项是可以直接扔掉的！我们主要关注的是“变化”。

一个显然的定理：$(O \& \Omega) \iff \Theta$

## 计算递归函数的时间消耗

递归函数并不像非递归函数那样直观，我们在计算递归算法的时间复杂度时，可以使用一些特殊的方法。在使用以下方法之前，需要先得到递归函数的时间消耗表达式，如 $T(n) = T(n/3) + T(2n/3) + n$。

### 使用迭代法猜测复杂度

我们可以将 $T(n)$ 的表达式使用树形展开，主要观察两点：

1. 树的每一层会消耗多少时间？
2. 树一共有多少层？

例如，在 $T(n) = T(n/3) + T(2n/3) + n$ 中，每一层都会独立消耗时间 $n$，而树一共有 $log_{3/2}n$ 层，因此可以猜测时间复杂度为 $O(nlogn)$。

### 使用代入法证明猜测

如果猜测 $T(n)=O(n^m)$ ，那么可以“假设 $T(k) \le ck^m$”（或是最高为 $m$ 次的一个以 $k$ 为未知数的多项式），然后尝试证明 $T(n) \le$ 一个最高为 $m$ 次的以 $n$ 为未知数的多项式。

### 使用 Master Theorem 秒杀递归函数

之所以 Master Theorem 要叫这个名字，是因为它将递归函数的时间复杂度计算分成了三种情况：

1. 递归树分支极多，时间消耗由 Leaf 主导；
2. 递归树分支和每一次递归的开销类似，两者平手；
3. 递归树的每一次递归合并开销大，时间消耗由 Root 主导。

为了判断究竟属于哪一种情况，首先要把 $T(n)$ 表示成下面这种形式：

$$T(n)=aT(n/b)+f(n), a\ge1, b\gt1$$

然后我们比较 $f(n)$ 与 $n^{log_ba}$，就可以分出以下三种情况（与上面所叙述的三种情况对应）：

**Case 1**: 如果 $f(n)=O(n^{log_ba-\epsilon})$，则有 $T(n)=\Theta(n^{log_ba})$

**Case 2**: 如果 $f(n)=\Theta(n^{log_ba})$，则有 $T(n)=\Theta(n^{log_ba}lgn)$

**Case 3**: 如果 $f(n)=\Omega(n^{log_ba+\epsilon})$，则有 $T(n)=\Theta(f(n))$

---

参考资料：

- [時間複雜度 — 遞迴(下) — Master Theorem](https://mycollegenotebook.medium.com/%E6%99%82%E9%96%93%E8%A4%87%E9%9B%9C%E5%BA%A6-%E9%81%9E%E8%BF%B4-%E4%B8%8B-master-th-307ad4608ab6)