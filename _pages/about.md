---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👋 About Me

Hello! My name is Xuyan Ye. I am a fourth-year undergraduate student majoring in AI at the **Gaoling School of Artificial Intelligence, Renmin University of China**, advised by **[Prof. Yankai Lin](https://linyankai.github.io/)** at **RUCBM**. I am currently an LLM Research Intern at **Ant Group**, advised by **[Wei Wu](https://sites.google.com/view/wei-wu-homepage/home)**, working on Agentic RL and LLM Reasoning.

I have also collaborated with **[Prof. Jiaxuan You](https://cs.stanford.edu/people/jiaxuan/)** and **[Prof. Heng Ji](https://blender.cs.illinois.edu/hengji.html)** at **[UIUC](https://illinois.edu/)**. Previously, I spent a wonderful summer at **[BREATHE-AI](https://breathelab.ai/)**, **Nanyang Technological University**, Singapore, conducting research under the guidance of **[Prof. Wei Lu](https://dr.ntu.edu.sg/entities/person/Wei-Lu)**.

My research interests include **LLM Reasoning, Fine-Grained Agent Evaluation, and Process Supervision in Agentic RL**.

<div class="phd-callout" markdown="1">
**I am actively seeking CS/AI PhD positions for Fall 2027 entry.** If you are interested in my research experience, I would be very happy to connect. I also warmly welcome academic discussions and research collaborations of all kinds—please feel free to email me directly at [xuyan923r@gmail.com](mailto:xuyan923r@gmail.com).
</div>


# 🔥 News

<div class="news-panel" role="region" aria-label="News" tabindex="0" markdown="1">

- *2026.09*: &nbsp;👏 **[The Many Faces of On-Policy Distillation](https://arxiv.org/abs/2605.11182)** has been accepted to **NeurIPS 2026**! Looking forward to meeting you in Sydney!
- *2026.08*: &nbsp;🎉 **[AgentDebugX](https://arxiv.org/abs/2607.18754)** has been accepted to the **EMNLP 2026 Demo Track**! Huge thanks to all my collaborators for making this possible!
- *2026.07*: &nbsp;🇸🇬 I’m delighted to join the **[BREATHE AI](https://breathelab.ai/)** at Nanyang Technological University as a summer research intern. I’m grateful to [Prof. Lu](https://breathelab.ai/WeiLu.html) for this opportunity and his guidance, and I look forward to the next three months in Singapore.
- *2026.05*: &nbsp;🎉 I am delighted to share that **[AgentProcessBench](https://rucbm.github.io/AgentProcessBench-Homepage/)** has been accepted to the **KDD 2026 Datasets and Benchmarks Track**! 
- *2026.02*: &nbsp;💻 I’m excited to share that I’ve started collaborating closely with **[U-Lab](https://ulab-uiuc.github.io/), UIUC**! Deeply grateful to Prof. [Jiaxuan You](https://cs.stanford.edu/people/jiaxuan/) and the PhD mentors in the group for their invaluable guidance and support.
- *2026.01*: &nbsp;📑 My first project, **[DARC](https://arxiv.org/abs/2601.13761)**, which I co-authored as a co–first author, is now available on **arXiv**! Huge thanks to Senior Fan and Prof. Lin for their guidance and support. I hope more people will check out **DARC**—if you have any ideas about self-evolving agents, feel free to reach out and chat!
- *2025.09*: &nbsp;💻 I started my research internship at **RUCBM**! Many thanks to Professor [Yankai Lin](https://linyankai.github.io/) and the senior students at RUCBM for their guidance and support! 
- *2025.05*: &nbsp;🎉 I transferred from the **[School of Finance](http://sf.ruc.edu.cn/)** at Renmin University of China to the **[Gaoling School of Artificial Intelligence](http://ai.ruc.edu.cn/)**, and I’m really looking forward to studying at **GSAI** over the next two years!
- *2025.01*: &nbsp;🇺🇸 I began my three-month exchange at the **University of California, Davis**, and I am truly grateful to Renmin University of China for this valuable opportunity, as well as to the warm and welcoming faculty and students at UC Davis.


</div>

<span class='anchor' id='publications'></span>

# 📝 Preprints and Publications 

<div class="publication-tabs" data-publication-tabs>
<div class="publication-tablist" role="tablist" aria-label="Research areas" hidden>
<button type="button" role="tab" id="tab-all" data-category="all" aria-controls="publication-results" aria-selected="false" tabindex="-1">All</button>
<button type="button" role="tab" id="tab-reasoning" data-category="reasoning" aria-controls="publication-results" aria-selected="false" tabindex="-1">LLM Reasoning</button>
<button type="button" role="tab" id="tab-evaluation" data-category="evaluation" aria-controls="publication-results" aria-selected="false" tabindex="-1">Fine-Grained Agent Evaluation</button>
<button type="button" role="tab" id="tab-supervision" data-category="supervision" aria-controls="publication-results" aria-selected="false" tabindex="-1">Process Supervision in Agentic RL</button>
</div>

<div id="publication-results" role="tabpanel" aria-labelledby="tab-all" tabindex="0">

<div id="panel-reasoning" class="publication-panel" data-category="reasoning">

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2026</div><img src='images/OPD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


**The Many Faces of On-Policy Distillation: Pitfalls, Mechanisms, and Fixes**

Siqi Zhu, **Xuyan Ye<sup>*</sup>**, Hongyu Lu<sup>*</sup>, Weiye Shi, Ge Liu<sup>†</sup> 

<sup>*</sup> Equal contribution. <sup>†</sup> Corresponding author.

[🌍 **Homepage**](https://ulab-uiuc.github.io/OPD_website/)

[📓 **arXiv**](https://arxiv.org/abs/2605.11182)

[🤗 **Huggingface**](https://huggingface.co/papers/2605.11182)

[💻 **Github**](https://github.com/ulab-uiuc/Open-On-Policy-Distillation)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/DARC.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**DARC: Decoupled Asymmetric Reasoning Curriculum for LLM Evolution**

Shengda Fan<sup>*</sup>, **Xuyan Ye<sup>*</sup>**, Yankai Lin<sup>†</sup><br>
<sup>*</sup> Equal contribution. <sup>†</sup> Corresponding author.


[📓 **arXiv**](https://arxiv.org/abs/2601.13761)

[🤗 **Huggingface**](https://huggingface.co/papers/2601.13761)

[💻 **Github**](https://github.com/RUCBM/DARC)
</div>
</div>


</div>

<div id="panel-evaluation" class="publication-panel" data-category="evaluation">

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">KDD D&B Track 2026</div><img src='images/APBench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**AgentProcessBench: Diagnosing Step-Level Process Quality in Tool-Using Agents**

Shengda Fan<sup>*</sup>, **Xuyan Ye<sup>*</sup>**, Yupeng Huo, Zhiyuan Chen, Yiju Guo, Shenzhi Yang, Wenkai Yang, Shuqi Ye, Jingwen Chen, Haotian Chen, Xin Cong, Yankai Lin<sup>†</sup>  
<sup>*</sup> Equal contribution. <sup>†</sup> Corresponding author.

[🌍 **Homepage**](https://rucbm.github.io/AgentProcessBench-Homepage/)

[📓 **arXiv**](https://arxiv.org/abs/2603.14465)

[🤗 **Huggingface**](https://huggingface.co/papers/2603.14465)

[💻 **Github**](https://github.com/RUCBM/AgentProcessBench)
</div>
</div>



</div>

<div id="panel-supervision" class="publication-panel" data-category="supervision">

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/CoPE.png' alt="CoPE joint training of acting and forecasting" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Co-Evolving Acting and Forecasting for Language Agents**

Haofei Yu<sup>*</sup>, Yixing Chen<sup>*</sup>, Yining Zhao, **Xuyan Ye**, Yuxiang Liu, Zhigang Hua, Yan Xie, Shuang Yang, Jiaxuan You

<sup>*</sup> Equal contribution.

[📓 **arXiv**](https://arxiv.org/abs/2610.20597)

[💻 **Github**](https://github.com/ulab-uiuc/CoPE)

</div>
</div>

<div class='paper-box' data-sort-priority='1'><div class='paper-box-image'><div><div class="badge">Under Review</div><img src='images/DeltaTTG.png' alt="DeltaTTG progress meter training and credit assignment" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**DeltaTTG: Training Multi-Turn Agents with a Token-to-Go Progress Meter**

**Xuyan Ye<sup>*</sup>**, Xiyan Fu<sup>*</sup>, Shengda Fan<sup>*</sup>, Jiawei Cui, Yankai Lin, Wei Lu<sup>†</sup>

<sup>*</sup> Equal contribution. <sup>†</sup> Corresponding author.

[📓 **arXiv**](https://arxiv.org/abs/2610.17666)

[🤗 **Huggingface**](https://huggingface.co/papers/2610.17666)

[💻 **Github**](https://github.com/Xuyan923r/DeltaTTG)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/AgentErrorDataset.png' alt="Agent Error Dataset overview" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Agent Error Dataset: Scaling 50,000 Error-Diagnosis Pairs for Failure Analysis and Error-Aware Post-Training**

Kunlun Zhu, **Xuyan Ye**, Yibo Li, Cheng Qian, Beibin Li, Heng Ji<sup>†</sup>

<sup>†</sup> Corresponding author.

[📓 **arXiv**](https://arxiv.org/abs/2609.40111)

[🤗 **Huggingface**](https://huggingface.co/papers/2609.40111)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP Demo Track 2026</div><img src='images/AgentDebugX.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**AgentDebugX: An Open-Source Toolkit for Failure Observability, Attribution, and Recovery in LLM Agents**

Kunlun Zhu<sup>*</sup>, **Xuyan Ye<sup>*</sup>**, Zhiguang Han<sup>*</sup>, Yuchen Zhao, Bingxuan Li, Weijia Zhang, Muxin Tian, Xiangru Tang, Pan Lu, James Zhou, Jiaxuan You, Heng Ji

<sup>*</sup> Equal contribution. <sup>†</sup> Corresponding author.

[🌍 **Homepage**](https://www.agentdebugx.com/)

[📓 **arXiv**](https://arxiv.org/abs/2607.18754)

[🤗 **Huggingface**](https://huggingface.co/papers/2607.18754)

[💻 **Github**](https://github.com/AgentDebugX/AgentDebugX)
</div>
</div>


</div>

</div>
</div>
<script src="{{ "/assets/js/publication-tabs.js" | relative_url }}" defer></script>

# 📖 Educations
- *2023.09 - 2027.06 (expected)*: Undergraduate student at the Gaoling School of Artificial Intelligence, **Renmin University of China**, Beijing. 
- *2025.01 - 2025.03*: Exchange student at the **University of California, Davis**, USA.

# 💻 Internships
- *2026.09 - Present*: LLM Research Intern, **Ant Group**, Beijing.
- *2025.09 - 2025.11*: LLM Application Intern, Content Quality and Data Service Platform, **ByteDance**.
- *2025.05 - 2025.08*: AI Product Manager Intern, Large Language Model Division, **Tencent**.

# 🎖 Honors and Awards
- *2026.05* Beijing Natural Science Foundation Undergraduate “Qiyan” Project (启研计划), RMB 50,000.
- *2025.10* Renmin University of China Academic Excellence Scholarship, RMB 40,000.
- *2025.04* Renmin University of China Presidential Scholarship.


# 🙏 Acknowledgements
{: #acknowledgements}

Beyond my heartfelt thanks to the professors mentioned above for their guidance and support, I would also like to thank the senior peers and friends who have helped me along the way.

<div class="acknowledgements-grid">
<section class="acknowledgements-column">
<h3>Senior Peers</h3>
<p><strong><a href="https://xingying-stack.github.io/">Shengda Fan</a></strong> — Ph.D. student in Artificial Intelligence at Renmin Univ.</p>
<p><strong><a href="https://kunlun-zhu.github.io/">Kunlun Zhu</a></strong> — Ph.D. student in Computer Science at UIUC.</p>
<p><strong><a href="https://haofeiyu.me/">Haofei Yu</a></strong> — Ph.D. student in Computer Science at UIUC.</p>
<p><strong><a href="https://quao627.github.io/">Ao Qu</a></strong> — Ph.D. student in Computer Science at MIT.</p>
</section>
<section class="acknowledgements-column">
<h3>Friends</h3>
<p><strong><a href="https://liuyuhan31.github.io/">Yuhan Liu</a></strong> — Postdoctoral Research Fellow at MBZUAI.</p>
<p><strong><a href="https://shengxuanqiu.github.io/">Shengxuan Qiu</a></strong> — Undergraduate at Peking University.</p>
<p><strong>Qiuyang Li</strong> — Undergraduate at Renmin Univ.</p>
</section>
</div>
