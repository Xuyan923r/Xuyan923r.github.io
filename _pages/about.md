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

Hi!👋 My name is Xuyan Ye. I am a third-year undergraduate student majoring in AI at the **Gaoling School of Artificial Intelligence, Renmin University of China**. My research interests include **LLM Reasoning, Self-Evolving Agents, and Agentic RL**. ‼️ **I am actively seeking a CS/AI PhD positions for Fall 2027 entry. If you are interested in my research experience, I would be very happy to connect.**


# 🔥 News
- *2026.08*: &nbsp;🎉 **[AgentDebugX](https://arxiv.org/abs/2607.18754)** has been accepted to the **EMNLP 2026 Demo Track**! Huge thanks to all my collaborators for making this possible!
- *2026.07*: &nbsp;🇸🇬 I’m delighted to join the **[BREATHE AI](https://breathelab.ai/)** at Nanyang Technological University as a summer research intern. I’m grateful to [Prof. Lu](https://breathelab.ai/WeiLu.html) for this opportunity and his guidance, and I look forward to the next three months in Singapore.
- *2026.05*: &nbsp;🎉 I am delighted to share that **[AgentProcessBench](https://rucbm.github.io/AgentProcessBench-Homepage/)** has been accepted to the **KDD 2026 Datasets and Benchmarks Track**! 
- *2026.02*: &nbsp;💻 I’m excited to share that I’ve started collaborating closely with **[U-Lab](https://ulab-uiuc.github.io/), UIUC**! Deeply grateful to Prof. [Jiaxuan You](https://cs.stanford.edu/people/jiaxuan/) and the PhD mentors in the group for their invaluable guidance and support.
- *2026.01*: &nbsp;📑 My first project, **[DARC](https://arxiv.org/abs/2601.13761)**, which I co-authored as a co–first author, is now available on **arXiv**! Huge thanks to Senior Fan and Prof. Lin for their guidance and support. I hope more people will check out **DARC**—if you have any ideas about self-evolving agents, feel free to reach out and chat!
- *2025.09*: &nbsp;💻 I started my research internship at **RUCBM**! Many thanks to Professor [Yankai Lin](https://linyankai.github.io/) and the senior students at RUCBM for their guidance and support! 
- *2025.05*: &nbsp;🎉 I transferred from the **[School of Finance](http://sf.ruc.edu.cn/)** at Renmin University of China to the **[Gaoling School of Artificial Intelligence](http://ai.ruc.edu.cn/)**, and I’m really looking forward to studying at **GSAI** over the next two years!
- *2025.01*: &nbsp;⛰️ I began my three-month exchange at the **University of California, Davis**, and I am truly grateful to Renmin University of China for this valuable opportunity, as well as to the warm and welcoming faculty and students at UC Davis.


<span class='anchor' id='publications'></span>

# 📝 Preprints and Publications 

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

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/OPD.png' alt="sym" width="100%"></div></div>
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


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/DARC.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**DARC: Decoupled Asymmetric Reasoning Curriculum for LLM Evolution**

Shengda Fan<sup>*</sup>, **Xuyan Ye<sup>*</sup>**, Yankai Lin<sup>†</sup>  
<sup>*</sup> Equal contribution. <sup>†</sup> Corresponding author.


[📓 **arXiv**](https://arxiv.org/abs/2601.13761)

[🤗 **Huggingface**](https://huggingface.co/papers/2601.13761)

[💻 **Github**](https://github.com/RUCBM/DARC)
</div>
</div>

# 📖 Educations
- *2023.09 - 2027.06 (expected)*: Undergraduate student at the Gaoling School of Artificial Intelligence, **Renmin University of China**, Beijing. 
- *2025.01 - 2025.03*: Exchange student at the **University of California, Davis**, USA.

# 💻 Internships
- *2025.09 - 2025.11*: LLM Application Intern, Content Quality and Data Service Platform, **ByteDance**.
- *2025.05 - 2025.08*: AI Product Manager Intern, Large Language Model Division, **Tencent**.

# 🎖 Honors and Awards
- *2025.10* Renmin University of China Academic Excellence Scholarship. 
- *2025.04* Renmin University of China Presidential Scholarship.


