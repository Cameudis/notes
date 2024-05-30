import{_ as a,c as e,o as s,a4 as i}from"./chunks/framework.DZjHTG0m.js";const z=JSON.parse('{"title":"Fuzzing 基础","description":"","frontmatter":{},"headers":[],"relativePath":"Fuzzing/Fuzzing-Basic.md","filePath":"Fuzzing/Fuzzing-Basic.md"}'),n={name:"Fuzzing/Fuzzing-Basic.md"},t=i(`<h1 id="fuzzing-基础" tabindex="-1">Fuzzing 基础 <a class="header-anchor" href="#fuzzing-基础" aria-label="Permalink to &quot;Fuzzing 基础&quot;">​</a></h1><p>在软件开发的领域，测试是必要的一环。我们需要通过动态运行程序，来检测其是否能正常工作、其行为是否能符合我们的预期。在漏洞挖掘领域，尤其是内存漏洞的挖掘领域，动态测试的方法也是漏洞猎手们的主力工具。</p><p>手动进行测试是一种灵活的测试方法，但是根据著名的不知出自哪里的自动化原则“如果你重复做了某件事三遍及以上，说明你需要将它自动化”，想要更好地进行测试就必须要将测试的各个步骤全都进行自动化，包括测试样例生成、测试执行以及测试结果检查这整个流程。</p><p>所谓 <strong>Fuzzing</strong> 技术，其核心在与<strong>生成随机的测试样例</strong>，以测试程序的<strong>健壮性（robustness）</strong>。通过测试程序在随机输入下的行为，我们可以捕捉到各种非预期的行为，比如抛出未捕获的异常、内存访问错误、直接崩溃等等，只要我们能够识别出相应的表现。对于内存漏洞，<code>Address Sanitizer</code> 就是一个非常关键的、帮助我们识别漏洞的工具。</p><h2 id="coverage" tabindex="-1">Coverage <a class="header-anchor" href="#coverage" aria-label="Permalink to &quot;Coverage&quot;">​</a></h2><p>为了判断某个测试的有效程度，以及指导测试样例的生成，我们往往会测量测试中程序的哪一部分被实际执行了，这就是代码覆盖率的概念。测量代码覆盖率在多数情况下是一种简单而完全自动化的方法，而且在指导测试样例生成中扮演着至关重要的地位。</p><p>有许多种不同的覆盖率，比如最常用的 statement coverage 以及 branch coverage。前者即跑的代码越多越好，属于是最直观的覆盖率。后者则是面向这样一种场景：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cond:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     do_something_A()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> do_something_B()</span></span></code></pre></div><p>在计算 statement coverage 时，如果在样例集中有一个满足 <code>cond == TRUE</code> 的样例，这组样例集就可以达到最高的覆盖率；然而这样一来我们就忽略了 <code>cond == FALSE</code>，也就是没有执行 <code>do_something_A()</code> 而直接执行了 <code>do_something_B()</code>的情况。</p><p>在这种情况下，我们需要 branch coverage，以控制流向量（一条语句指向另一条语句）而不是语句本身来计算测试的覆盖率。</p><p>在上面的例子中，statement coverage 以及 branch coverage 的全覆盖率分别为：<code>[1, 2, 3]</code> 和 <code>[(1, 2), (1, 3), (2, 3)]</code>，尽管数量一样，但后者包含的信息更多。</p><h2 id="mutation-based-fuzzing" tabindex="-1">Mutation-Based Fuzzing <a class="header-anchor" href="#mutation-based-fuzzing" aria-label="Permalink to &quot;Mutation-Based Fuzzing&quot;">​</a></h2>`,12),o=[t];function c(r,d,h,p,g,l){return s(),e("div",null,o)}const _=a(n,[["render",c]]);export{z as __pageData,_ as default};
