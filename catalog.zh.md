# Becoming Inspire — 作品目录

用 XR 与感官技术让人成为另一种存在（蝙蝠、鼹鼠、鱼、章鱼、鸟、昆虫、动物、真菌、树、河流、机器人）的作品目录：艺术作品、沉浸式影片、游戏、研究原型与论文，由 Reality Design Lab 为《Experiencing More-than-Humans》一书整理。每件作品都列出核心想法、实现方式，以及视频、图片和论文链接。

https://becoming.reality.design · 2026-09-28 · 136 位创作者 · 148 件作品

## AI 助手应如何使用这个文件

- 提出想法时，以下面的具体作品为依据，并说明借鉴的是哪件作品、哪位创作者。
- 引用论文时使用这里给出的 DOI 或链接，不要编造参考文献。
- 把不同作品的存在、感官和媒介组合起来，提出新的方向。
- 不要编造这里没有写到的细节，以链接为准。

## 成为鼹鼠

以触觉为先的地下世界：星鼻鼹鼠、蚯蚓与土壤生命，以及拿走视觉、让触觉引路的体验。

### 触觉优先的世界

以触觉和触感替代视觉、成为主要认知方式的体验。

#### FeltSight — Danlin Huang, Botao 'Amber' Hu, Reality Design Lab (2025)
- 类型: 艺术作品 · 感官: 触觉, 改变的视觉 · 媒介: 混合现实, 可穿戴与感官装置
- 展出于: SIGGRAPH Asia 2025 Art Papers; IEEE VIS 2025 Arts Program; ISMAR 2025 Demo; ACM CHI 2026 Interactivity; IEEE VR 2026 XR Gallery
- 核心想法: 成为鼹鼠意味着“减少的现实”：视觉退场，世界通过延伸的触觉到来。
- 作品内容: 一只以星鼻鼹为原型的混合现实触觉手套：在森林中漫步时，参与者在触碰前就能通过指尖感到附近物体，而头显只在手探索之处显出淡淡的点云。
- 实现方式: Apple Vision Pro 应用通过蓝牙连接硅胶手套；LiDAR 与手部追踪测量距离，AI 识别材质，每个指尖的振动器播放由音频合成的纹理。
- 论文: https://doi.org/10.1145/3757369.3767605 (SIGGRAPH Asia 2025 Art Papers)
- 视频: https://www.youtube.com/watch?v=7Pq6s3VnD0A
- 图片: https://reality.design/media/feltsight-cover-forest-closeup.webp https://reality.design/media/feltsight-danlin-22.webp https://arxiv.org/html/2511.12533v3/images/feltsight.jpg
- 项目主页: https://danlinhuang.com/feltsight-1
- 代码: https://github.com/realitydeslab/feltsight

## 成为蝙蝠

回声定位与声音的世界：像蝙蝠或海豚那样听见空间，次声、振动与深度聆听。

### 回声定位

用声音看：让蝙蝠、海豚与人类的回声定位变得可感知。

#### EchoSense — Danyang Peng (2025)
- 类型: 研究原型 · 感官: 回声定位, 触觉 · 媒介: VR 头显, 可穿戴与感官装置
- 核心想法: 仿生共情：借用动物的感知方式来理解它。
- 作品内容: 一种正面触觉显示装置，让 VR 用户在看不见的情况下，像回声定位动物那样感受前方的空间。
- 实现方式: 佩戴在躯干或面部的振动阵列，由虚拟场景中的距离驱动（细节为推测）。
- 论文: https://doi.org/10.1145/3714394.3754428 (UbiComp/ISWC 2025 Companion)

#### BATOPIA — Yiou Wang (2024)
- 类型: 艺术作品 · 感官: 回声定位, 听觉与振动 · 媒介: VR 头显, 游戏
- 展出于: :iidrr Gallery New York 2024; MIT Museum 2024; ISEA 2025
- 核心想法: 回声定位是主动感知：你只能通过向世界发声来感知它，而人类的噪音会抹去这个世界。
- 作品内容: 一部第一人称 VR 冒险作品，你以蝙蝠的身份生活，在夜晚的城市里靠鸣叫和聆听觅食，同时被噪音和光污染干扰。
- 实现方式: 基于 Unreal Engine 为 Meta Quest 开发，使用蝙蝠田野录音、源自超声的声音设计和定制蝙蝠头显面罩；参与者的鸣叫会在视觉和声音上揭示场景。
- 视频: https://www.youtube.com/watch?v=e1XMN4u9jMQ
- 图片: https://yiouwang.org/wp-content/uploads/2022/01/BATOPIA_Human_to_Bat.jpg https://yiouwang.org/wp-content/uploads/Batopia_game_scene_52-1024x542.png
- 项目主页: https://yiouwang.org/portfolio/batopia-empathic-listening/

#### BatSight — Samira Poudratchi (2024)
- 类型: 研究原型 · 感官: 回声定位, 听觉与振动 · 媒介: 可穿戴与感官装置, 游戏, 增强现实
- 核心想法: 像蝙蝠一样玩：只靠耳朵在真实空间中导航。
- 作品内容: 一款音频游戏：蒙眼玩家戴着声呐头戴设备在实体迷宫中行走，障碍物被转换成音乐声音。
- 实现方式: 头戴超声波测距传感器，通过耳机映射为音乐提示，在类 AR 的实体迷宫中进行。
- 论文: https://doi.org/10.17083/ijsg.v11i1.718 (International Journal of Serious Games 2024)

#### EchoVision — Botao 'Amber' Hu, Jiabao Li, Danlin Huang, Reality Design Lab (2024)
- 类型: 艺术作品 · 感官: 回声定位, 听觉与振动, 改变的视觉 · 媒介: 混合现实, 多感官装置
- 展出于: SIGGRAPH Asia 2024 Art Papers & XR; UbiComp/ISWC 2024 Design Exhibition; IEEE VIS 2024 Arts Program; West Bund Art Festival 2024; TANK Art Festival 2024; The Contemporary Austin / Fusebox 2024; SXSW 2025 XR Experience; IEEE VR 2025 XR Gallery; ACM CHI 2025 Interactivity; Augmented Humans 2025 Best Demo Award; CURRENTS New Media 2025; Plásmata 3, Onassis Stegi, Athens 2025
- 核心想法: 成为蝙蝠，就是只看见自己声音带回来的东西：你呼唤，空间才出现。
- 作品内容: 一件混合现实装置：参与者把蝙蝠形面具举到眼前并发出声音，声音像回声一样把周围空间“照亮”，让人像蝙蝠一样在黑暗中辨认方向。
- 实现方式: 基于 HoloKit 的手持面具内置 iPhone；LiDAR 实时重建空间，参与者声音的音高与音色驱动 Unity 中扩散的回声可视化。
- 论文: https://doi.org/10.1145/3680530.3695460 (SIGGRAPH Asia 2024 Art Papers)
- 视频: https://vimeo.com/955577972
- 图片: https://reality.design/media/_resources/echovision-jiabao-01.webp https://arxiv.org/html/2511.12533v3/images/echovision.jpg https://images.squarespace-cdn.com/content/v1/58688c8a6a496327e937e35b/1755904607782-OXJXLC19IRU4NTTN0TEZ/Plasmata_3_EchoVision%40Pinelopi_Gerasimou_High-147.jpg
- 项目主页: https://reality.design/project/echovision
- 代码: https://github.com/realitydeslab/echovision

#### What is it like to be a (virtual) bat? — Zheng Mahler (2023)
- 类型: 艺术作品 · 感官: 回声定位, 热与红外, 改变的视觉 · 媒介: VR 头显, 360°/沉浸式影片, 多感官装置
- 展出于: PHD Group, Hong Kong 2023
- 核心想法: 把 Nagel 1974 年的问题当真，同时承认其局限：技术能转译蝙蝠的世界，但仍只是人类的想象。
- 作品内容: “大屿山三部曲”第二部：大型 3D 动画与 VR 360 版本中，观众从人变成东亚家蝠，飞过被渲染成迷幻色彩的梅窝；现场还有本地蝙蝠的热成像影像与超声波录音。
- 实现方式: 梅窝的 3D 与点云动画、头显中的 VR 360 影片，以及田野中拍摄的热成像画面与东亚家蝠超声波录音。
- 图片: https://static.wixstatic.com/media/d3b537_b626097b5cf7487dbf6534e5de61e602f000.jpg https://static.wixstatic.com/media/d3b537_e41f0c44438d411a80537c8f091eeaea~mv2.jpg https://static.wixstatic.com/media/d3b537_873d05ab58a749ac8115da3777735c85~mv2.jpg
- 项目主页: https://www.zhengmahler.world/whatisitliketobeavirtualbat

#### Echolocation-Enabled Virtual Environments — Ronny Andrade (2022)
- 类型: 论文 · 感官: 回声定位, 听觉与振动 · 媒介: VR 头显, 空间音频, 游戏
- 核心想法: 已经在使用回声定位的人，是设计 VR 回声定位的最佳人选。
- 作品内容: 盲人回声定位专家参与设计并测试可以通过弹舌与聆听回声来探索的虚拟环境。
- 实现方式: 通过焦点小组进行参与式设计，并在游戏引擎中做了两轮声线追踪回声原型迭代。
- 论文: https://doi.org/10.1145/3516448 (ACM Transactions on Accessible Computing 2022)

#### Auditory Feedback for Navigation with Echoes — Anastassia Andreasen (2019)
- 类型: 论文 · 感官: 回声定位, 听觉与振动 · 媒介: VR 头显, 空间音频
- 核心想法: 回声定位可以在 VR 中作为导航技能被学会，而不仅仅是被模拟的效果。
- 作品内容: 一套训练流程，让明眼人只靠回声在虚拟迷宫中导航，并研究他们形成的定向策略。
- 实现方式: 通过耳机实时渲染自发的弹舌声及其在虚拟迷宫中的反射。
- 论文: https://doi.org/10.1109/tvcg.2019.2898787 (IEEE TVCG 2019 (IEEE VR 2019))
- 视频: https://www.youtube.com/watch?v=Z8ndSJDbSok

#### What Is It Like to Be a Virtual Bat? — Anastassia Andreasen (2018)
- 类型: 论文 · 感官: 回声定位, 身体图式与运动 · 媒介: VR 头显
- 核心想法: 把内格尔的问题变成设计任务：把蝙蝠的身体与蝙蝠的听觉结合起来。
- 作品内容: 一个 VR 系统，参与者拥有蝙蝠的身体，以手臂为翼飞行，并在黑暗洞穴中发出叫声、聆听回声来导航。
- 实现方式: 头戴显示器加手臂追踪实现扇翅，用 HRTF 实时渲染空间音频回声。
- 论文: https://doi.org/10.1007/978-3-030-06134-0_57 (ArtsIT 2018 (LNICST 2019))
- 视频: https://www.youtube.com/watch?v=uB2ApqoNzzU

#### Bat-Modelled Sonar in Virtual Environments — Dean A. Waters (2007)
- 类型: 论文 · 感官: 回声定位, 听觉与振动 · 媒介: VR 头显, 空间音频
- 核心想法: 早期证据：蝙蝠式的回声处理可以引导人在 VR 中移动。
- 作品内容: 一位蝙蝠生物学家把蝙蝠声呐模型用作人在虚拟环境中移动的导航工具，延续了他 2001 年的“虚拟蝙蝠”研究。
- 实现方式: 根据虚拟场景几何计算合成的调频叫声与回声，以双耳方式播放（细节依据摘要级资料；很可能是桌面 VR）。
- 论文: https://doi.org/10.1016/j.ijhcs.2007.06.001 (International Journal of Human-Computer Studies 2007)

#### Darker Than Night — Eduardo Kac (1999)
- 类型: 艺术作品 · 感官: 回声定位, 听觉与振动 · 媒介: VR 头显, 多感官装置
- 展出于: Fables of a Technological Era, Blijdorp Zoo Rotterdam 1999
- 核心想法: 人以另一个发射声呐的身体进入蝙蝠的空间，蝙蝠与人的信号在同一频段相遇。
- 作品内容: 一件设在鹿特丹动物园蝙蝠洞中的远程临场作品：观众戴上 VR 头显，以悬挂在 300 只埃及果蝠中间的机器蝙蝠的视角，通过它的声呐看见洞穴。
- 实现方式: 一只带 45 kHz 声呐单元和电动头部的“机器蝙蝠”随头显转动；回波在头显中可视化，蝙蝠叫声经变频后变得可听。
- 图片: https://www.ekac.org/darker_than_night_batcave.jpg https://www.ekac.org/darker.vrheadset.jpg
- 项目主页: https://www.ekac.org/darker-info.html

### 蝙蝠与夜行生命

把蝙蝠与夜行动物作为生命本身（而不只是感官）来呈现的作品。

#### Agency and the Virtual Bat Body — Anastassia Andreasen (2018)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 要拥有蝙蝠的身体，关键在于自己就是驾驭它飞行的那个人。
- 作品内容: 参与者在四种条件下以虚拟蝙蝠身份飞行，从完全控制翅膀与移动，到被动、非自主的飞行。
- 实现方式: 头戴式 VR，手臂追踪驱动翅膀；被试内比较自主与非自主移动。
- 论文: https://doi.org/10.1109/vr.2018.8446448 (IEEE VR 2018 (poster))

#### Touching the Wings of a Virtual Bat — Anastassia Andreasen (2018)
- 类型: 论文 · 感官: 触觉, 身体图式与运动 · 媒介: VR 头显
- 核心想法: 翅膀不是手臂：触觉可以跨越不同的解剖结构重新映射，但有限度。
- 作品内容: 参与者看到物体触碰蝙蝠翅膀的同时，手臂上也被触碰，触碰位置与所见一致或逐步偏移。
- 实现方式: 视触刺激，真实手臂与虚拟翅膀触碰点之间的空间偏差为 0%、50% 和 70%。
- 论文: https://doi.org/10.1109/vr.2018.8446569 (IEEE VR 2018 (poster))

## 成为鱼

水中生命：鱼、鲸与海豚、珊瑚、水母与浮游生物，以及侧线、浮力与水压。

### 鱼

像鱼一样游动、成群与感知：侧线、电感受、水下视觉。

#### Black Wings — Lai Guan-yuan (2024)
- 类型: 艺术作品 · 感官: 身体图式与运动, 听觉与振动, 改变的视觉 · 媒介: 混合现实, 多感官装置
- 展出于: Kaohsiung Film Festival XR Dreamland 2024 (Taiwan Wave: Black Current)
- 核心想法: 通过阅读成为达悟族最神圣的飞鱼：你的声音推动着周围的海洋。
- 作品内容: 对达悟族作家夏曼·蓝波安同名小说的混合现实“具身阅读”：观众对着实体书朗读段落，化身在古老黑潮航道中游移的黑翅飞鱼，与掠食者搏斗，作家访谈穿插其间。
- 实现方式: MR 头显结合语音识别：朗读者的声音触发环境投影的变化，并由 AI 处理成环境音效。
- 图片: https://images.vocus.cc/44071258-56ab-43f3-8759-2a9d3d17ee4f.png https://images.vocus.cc/caa55f68-9c54-40cd-93fe-cc9235119625.png
- 项目主页: https://vocus.cc/article/67233bf2fd89780001e3c595

### 珊瑚、水母与浮游生物

珊瑚礁、水母、浮游生物与其他漂流或群体性海洋生命。

#### Birdly: Reef Dive — SOMNIACS (2020)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 多感官装置
- 核心想法: 扇翅变成蝠鲼胸鳍的缓慢划动，说明同一套具身装置可以让人在空中与水中的身体之间切换。
- 作品内容: 支持多人的 Birdly 版本：你的化身是一只蝠鲼，在珊瑚礁中与鱼群和海豚一同滑行。
- 实现方式: Birdly 动态平台与头显，联网的珊瑚礁场景让多位骑乘者一起游动。
- 视频: https://vimeo.com/832370872
- 图片: https://birdlyvr.com/wp-content/uploads/sites/3/2023/05/reef-dive.jpg
- 项目主页: https://birdlyvr.com/reef-dive/

#### JeL — John Desnoyers-Stewart (2019)
- 类型: 研究原型 · 感官: 呼吸与内感受, 集体与网络感知 · 媒介: VR 头显, 多感官装置
- 展出于: CHI 2019 Late-Breaking Work
- 核心想法: 像水母一样呼吸，并与另一个人一起呼吸，把水母的搏动推进变成与礁石共享的节律。
- 作品内容: 一个双人 VR 水下装置：每个人的呼吸驱动一只水母，两人呼吸同步时，一个玻璃海绵般的结构在他们之间生长。
- 实现方式: 两位用户佩戴胸部呼吸传感器，驱动共享的 VR 场景；生理同步驱动程序化海绵的生长。
- 论文: https://doi.org/10.1145/3290607.3312845 (CHI EA 2019)
- 视频: https://www.youtube.com/watch?v=ZffFnL1Gs-k

#### The Stanford Ocean Acidification Experience — Stanford Virtual Human Interaction Lab (2016)
- 类型: 研究原型 · 感官: 身体图式与运动, 时间与尺度 · 媒介: VR 头显
- 核心想法: 先获得一副珊瑚的身体，再看着它白化，让一个缓慢的化学过程在几分钟内发生在“我”身上。
- 作品内容: 一次 VR 实地考察：跟随二氧化碳从汽车尾气进入海洋，随后告诉参与者他们的身体已变成珊瑚，让他们看着自己的礁石在酸化的海水中失去生机。
- 实现方式: Oculus Rift DK2 或 HTC Vive；旁白告诉用户他们是珊瑚，低头会看到珊瑚化身；已在课堂实验中研究。
- 论文: https://doi.org/10.3389/fpsyg.2018.02364 (Frontiers in Psychology 2018)
- 视频: https://www.youtube.com/watch?v=G6mmXcNE7co
- 项目主页: https://vhil.stanford.edu

### 其他水生生命

两栖动物、甲壳类、海洋哺乳动物与水边的生命。

#### AR and VR Animal Embodiment at a Beach Festival — Daniel Pimentel (2025)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: 增强现实, VR 头显, 游戏
- 核心想法: 动物化身可以走出实验室：在公共场合，AR 和 VR 会带来不同类型的连结。
- 作品内容: 一项在海滩音乐节进行的实地研究：99 名观众玩定制的 AR 与 VR 游戏，化身为濒危野生动物，并在自己的虚拟身体上看到威胁。
- 实现方式: 在现场比较定制的手机 AR 游戏与头显 VR 游戏，并用问卷测量化身感与保护意愿。
- 论文: https://doi.org/10.1177/14614448251346153 (New Media & Society 2025)

#### Waddle — Kevin Ponto (2023)
- 类型: 研究原型 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 以直接化身作为学习媒介：通过过完一个物种的一年来认识它。
- 作品内容: 一个叙事性 VR 体验，用户成为一只阿德利企鹅，在南极蹒跚行走、游泳并养育幼崽。
- 实现方式: 一体机头显，用身体驱动企鹅动作并配合故事章节；前后测量学习与共情。
- 论文: https://doi.org/10.1145/3611659.3617211 (ACM VRST 2023)
- 视频: https://www.youtube.com/watch?v=zFYsVHj2qwQ

#### Embodying Loggerhead Sea Turtles — Daniel Pimentel (2022)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 成为一只受威胁的动物，可以逆转“同情消退”——受害者越多、关切越少的现象。
- 作品内容: 四项实验中，参与者在 VR 中成为一只蠵龟，并感到塑料污染作用在自己的身体上。
- 实现方式: 头戴式 VR 中的第一人称海龟身体；体验后测量捐款与保护行为。
- 论文: https://doi.org/10.1038/s41598-022-10268-y (Scientific Reports 2022)
- 图片: https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-022-10268-y/MediaObjects/41598_2022_10268_Fig1_HTML.jpg

#### Paradise Lost (Birdly) — SOMNIACS (2019)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉, 触觉 · 媒介: VR 头显, 多感官装置
- 核心想法: 飞行装置变成了游泳的身体：手臂划动操控海龟，破坏从它的第一人称视角被遇见。
- 作品内容: Birdly 的一个体验：你化身为一只小海龟，游过一片日益被塑料和人类消费破坏的海洋。
- 实现方式: Birdly 俯卧运动平台改作游泳用途，以手臂划动控制，配合 VR 头显与气流。
- 视频: https://www.youtube.com/watch?v=wRQuFSkNmY4
- 项目主页: https://www.birdlyvr.com/

## 成为章鱼

分布式与延展的身体：头足类、触手与尾巴、额外肢体、共享与集体的身体。

### 头足类

章鱼、鱿鱼与乌贼：分布式神经系统、伪装、会思考的腕足。

#### Embodied Tentacle — Shuto Takashita (2024)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 触手无法照搬手臂；映射本身必须被设计。
- 作品内容: 参与者用自己的手臂控制一条无分支、12 个关节、形似章鱼的虚拟手臂，比较不同映射在够取与缠绕任务中的效果。
- 实现方式: 头戴式 VR，通过多种映射方法把手臂与手部追踪映射到触手的 12 个关节。
- 论文: https://doi.org/10.1145/3613904.3642340 (CHI 2024)
- 视频: https://www.youtube.com/watch?v=41AYcDhbT0E

### 尾巴、触手与额外肢体

小人弹性：在拥有更多或不同肢体的身体里生活。

#### I Am Octopus — David Chaseling (2026)
- 类型: 游戏 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显, 游戏
- 核心想法: 只靠手臂移动：行动方式是伸展、吸附和松开触手，而不是走路。
- 作品内容: 一款 VR 平台游戏：你是一只被科学家抓住的章鱼，伸出触手甩动、拉扯、弹射自己，穿过一个个试验场。
- 实现方式: Meta Quest 上以手驱动的触手移动，抢先体验发布；由 David Chaseling 与 Dylan Van Beek 开发。
- 视频: https://www.youtube.com/watch?v=7eqbGRgi64I
- 图片: https://queststoredb.com/media/9608086525922823_cover_landscape.webp
- 项目主页: https://www.meta.com/experiences/i-am-octopus/9608086525922823/

#### Juggling Extra Limbs — Hongyu Zhou (2025)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 多臂的身体需要注意力策略，而不只是映射。
- 作品内容: 一项研究，考察人在 VR 中同时控制多条额外手臂时采用的策略。
- 实现方式: 头戴式 VR，多条虚拟手臂由不同的身体与手柄映射驱动；分析任务表现与访谈。
- 论文: https://doi.org/10.1145/3706598.3713647 (CHI 2025)
- 视频: https://www.youtube.com/watch?v=COwif96tbf0

#### HandAvatar — Yu Jiang (2023)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 手是一个小小的身体：它的关节可以替代任何生物的腿。
- 作品内容: 一种方法，让用户移动一只手的手指就能化身为任意非人形化身，比如蜘蛛、龙或螃蟹。
- 实现方式: 手部追踪，自动生成关节到关节的映射，并针对精度、结构相似性与舒适度进行优化。
- 论文: https://doi.org/10.1145/3544548.3581027 (CHI 2023)
- 视频: https://www.youtube.com/watch?v=EJwMmeSN01Q

#### Embodiment of Supernumerary Robotic Limbs in VR — Michiteru Kitazaki (2022)
- 类型: 论文 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显
- 核心想法: 是增加肢体而不是替换：额外手臂可以与真实手臂同时被拥有。
- 作品内容: 参与者用脚控制两条额外的虚拟机械臂，而真实的双臂保持空闲。
- 实现方式: 头戴式 VR，追踪脚部并映射到两条机械臂，配合视触刺激与所有感测量。
- 论文: https://doi.org/10.1038/s41598-022-13981-w (Scientific Reports 2022)
- 图片: https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-022-13981-w/MediaObjects/41598_2022_13981_Fig1_HTML.png

#### Owning an Independent Supernumerary Limb — Gowrishankar Ganesh (2022)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 一条拥有独立控制通道的肢体（就像章鱼的腕足）仍能成为自我的一部分。
- 作品内容: 参与者通过与任何现有肢体运动无关的肌肉信号，控制一条虚拟的第六肢。
- 实现方式: 在头戴显示器中基于肌电信号控制虚拟手臂，沿用橡胶手范式。
- 论文: https://doi.org/10.1038/s41598-022-06040-x (Scientific Reports 2022)
- 图片: https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-022-06040-x/MediaObjects/41598_2022_6040_Fig1_HTML.png

#### Tentacular — Firepunchd Games (2022)
- 类型: 游戏 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显, 游戏
- 核心想法: 没有骨头的手：精细的人类动作变成软绵绵的物理，而巨大的尺度让人类世界像玩具一样。
- 作品内容: 一款 VR 解谜游戏：你是一只巨大而善良的海怪，双臂是两条长长的触手，用来在港口小岛上举起、堆叠和甩动物件。
- 实现方式: 在 Meta Quest 与 SteamVR 上，运动手柄驱动带吸盘抓取的物理模拟触手。
- 视频: https://www.youtube.com/watch?v=go6ee9iW-Es
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1220100/header.jpg
- 项目主页: https://www.tentacular.com/

#### Virtually-Extended Proprioception — Shengdong Zhao (2020)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 让身体向你想够到的地方生长，从而延伸本体感觉。
- 作品内容: 用户获得一条伸进场景深处的附加虚拟肢体，从而以身体感知远处目标的位置。
- 实现方式: 头戴式 VR，在化身上附加虚拟手臂或腿，并在目标选择任务中评估。
- 论文: https://doi.org/10.1145/3313831.3376557 (CHI 2020)
- 视频: https://www.youtube.com/watch?v=IvwwMAtxrpA

#### Owning a Virtual Tail without a Mirror — Takuji Narumi (2019)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 长在身后的身体部件，只凭零星的一瞥也能被拥有，就像真实的尾巴一样。
- 作品内容: 一项研究：如果只能偶尔看到部分尾巴，而不是一直在镜子里看，人能否拥有一条虚拟尾巴。
- 实现方式: 头戴式 VR，由髋部驱动尾巴，并在不同条件下改变可见的视动反馈量。
- 论文: https://doi.org/10.1145/3343036.3343139 (ACM Symposium on Applied Perception 2019)

#### Real-Time Remapping of a Third Arm — Adam Drogemuller (2019)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 第三只手臂可以从任何空闲的肢体借用控制权。
- 作品内容: 用户注视自己的某条肢体（任一手臂、任一条腿或头部）并说“切换”，即可改由它驱动虚拟第三只手臂。
- 实现方式: 头戴式 VR，基于注视选择肢体并用语音确认；12 名参与者完成收集箱子的任务。
- 论文: https://diglib.eg.org/handle/10.2312/egve20191281 (ICAT-EGVE 2019 (DOI 10.2312/egve.20191281))

#### HanaHana — Mélodie Mousset (2018)
- 类型: 艺术作品 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显
- 核心想法: 身体不断向外增殖：你的手成了世界的建材，是对额外肢体与无边界自我的轻松探索。
- 作品内容: 一座 VR 雕塑花园：手从你的指尖和你触碰的每个表面长出来，你用手堆出塔与森林；后来的版本最多让十个人以雾状化身共享这个世界。
- 实现方式: 手部追踪的房间尺度 VR，手的网格按程序生长；可能与 EPFL 认知神经科学实验室合作开发。
- 视频: https://www.youtube.com/watch?v=Sf5B_iZrf0o
- 图片: https://i.ytimg.com/vi/Sf5B_iZrf0o/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=Sf5B_iZrf0o

#### "Wow! I Have Six Fingers!" — Anatole Lécuyer (2016)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 结构不同的手也能被接纳为自己的手。
- 作品内容: 参与者看到一只逼真的六指虚拟手随自己的手运动，并评价它有多像自己的手。
- 实现方式: 手部动作捕捉驱动头戴显示器中的六指虚拟手；用问卷测量所有感与能动感。
- 论文: https://doi.org/10.3389/frobt.2016.00027 (Frontiers in Robotics and AI 2016)
- 图片: https://www.frontiersin.org/files/Articles/181118/frobt-03-00027-HTML/image_m/frobt-03-00027-g001.jpg

#### Control Schemes for a Third Arm — Stanford Virtual Human Interaction Lab (2016)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 额外肢体好不好用，取决于驱动它的方案。
- 作品内容: 比较控制化身第三只手臂的几种方式，从双手协同到头部与注视映射，考察任务表现与所有感。
- 实现方式: 被试内 VR 研究，用三维交互技术把已有肢体映射到第三只手臂。
- 论文: https://doi.org/10.1162/pres_a_00251 (Presence: Teleoperators and Virtual Environments 2016)

#### The Human Octopus — Jaan Aru (2016)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 更多的手不等于更高的技能；章鱼般的身体需要学习。
- 作品内容: 参与者通过手部追踪控制不同数量的虚拟额外手，研究者加入延迟与缩放来测试它们的可用性。
- 实现方式: 头戴显示器中的 Leap Motion 手部追踪，额外的虚拟手复制或变换真实手的动作。
- 论文: https://doi.org/10.1101/056812 (bioRxiv 2016)

#### Homuncular Flexibility in Virtual Reality — Stanford Virtual Human Interaction Lab (2015)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 大脑的身体地图可以在几分钟内学会新的身体结构（Lanier 的“小人弹性”）。
- 作品内容: 参与者用肢体被重新映射的化身击中目标，比如旋转手腕来控制第三只手臂，或把手臂与腿对调。
- 实现方式: 头戴显示器加全身追踪，重新映射动作：腿对应手臂，手腕旋转对应第三只手臂的伸展。
- 论文: https://doi.org/10.1111/jcc4.12107 (Journal of Computer-Mediated Communication 2015)

#### Human Tails — Mel Slater (2013)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: 穹顶、CAVE 与投影
- 核心想法: 人可以学会拥有并使用一个人类本来没有的身体部件。
- 作品内容: 参与者在 CAVE 中控制一个长着长尾巴的人形化身，用髋部摆动尾巴，随后还要用它挡住落下的物体。
- 实现方式: 类 CAVE 投影加全身追踪；把髋部动作映射为尾巴运动，并与随机摆动的尾巴对照。
- 论文: https://doi.org/10.1109/tvcg.2013.32 (IEEE TVCG 2013 (IEEE VR 2013))

#### The Very Long Arm Illusion — Konstantina Kilteni (2012)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 身体所有感可以被拉伸：一个严重不对称的身体仍可以是自己的。
- 作品内容: 参与者看到自己的虚拟手臂伸长到原来的四倍，同时仍与真实手臂同步运动。
- 实现方式: 头部追踪的立体头戴显示器，虚拟身体与真实身体重合；在五种条件下改变手臂长度。
- 论文: https://doi.org/10.1371/journal.pone.0040867 (PLoS ONE 2012)
- 图片: https://journals.plos.org/plosone/article/figure/image?size=inline&id=10.1371/journal.pone.0040867.g001

### 共享与集体的身体

多人共享一个身体，或多个身体如同一体地行动。

#### TentacUs — Botao 'Amber' Hu, Danlin Huang, Reality Design Lab (2025)
- 类型: 表演 · 感官: 触觉, 集体与网络感知, 身体图式与运动 · 媒介: 混合现实, 可穿戴与感官装置, 表演与参与式
- 展出于: SIGGRAPH Asia 2025 XR
- 核心想法: 成为章鱼，意味着没有中心的智能：许多身体作为同一生命的触手去感知与移动。
- 作品内容: 一场混合现实仪式：舞者左手相牵围成一圈，每人成为一只集体“章鱼”的一条触手；一只右手感到的周围环境，会以振动传给相邻的人。
- 实现方式: 柔软织物触手手套内置智能手机：LiDAR 感知距离，振动马达把触觉波传给相邻舞者；触碰数据以点云形式绘制在现场的 3D 高斯泼溅扫描上，供观众观看。
- 论文: https://doi.org/10.1145/3761667.3761962 (SIGGRAPH Asia 2025 XR)
- 图片: https://arxiv.org/html/2511.12533v3/images/tentacus.jpg https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/afd62d02-7102-4a26-b5b4-03df6cc2744b/image2/public
- 项目主页: https://amber.botao.hu/design/tentacus
- 代码: https://github.com/realitydeslab/tentacus

#### GravField — Botao 'Amber' Hu, Reality Design Lab (2024)
- 类型: 表演 · 感官: 身体图式与运动, 集体与网络感知, 听觉与振动 · 媒介: 混合现实, 表演与参与式, 空间音频
- 展出于: ICLC 2024 Shanghai; SIGGRAPH Asia 2024 XR; IEEE VR 2025 XR Gallery; NIME 2025
- 核心想法: 身体成为共享力场中的质量：自我被感受为人与人之间的牵引，而非一个孤立的点。
- 作品内容: 一场同场混合现实表演：戴 AR 头显的参与者通过彼此的距离、队形与头部动作共同生成音乐，现场编程者实时塑造他们之间吸引与排斥的虚拟力场。
- 实现方式: 通过 Multipeer Connectivity 联网的 HoloKit 头显，把身体间信号（距离、面积、高度差、头部同步）传给现场编程者，映射为 AR 视觉与声音。
- 论文: https://doi.org/10.1145/3772318.3790651 (CHI 2026)
- 视频: https://vimeo.com/955522087
- 图片: https://reality.design/media/_resources/GravField/project-gravfield-figure-01.jpg https://reality.design/media/_resources/GravField/project-gravfield-figure-03.jpg
- 项目主页: https://reality.design/project/gravfield
- 代码: https://github.com/realitydeslab/gravfield

#### Parasitic Body — Michiteru Kitazaki (2019)
- 类型: 论文 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显
- 核心想法: 一个身体，两个心智：第三条肢体可以属于另一个人。
- 作品内容: 一个共享身体 VR 系统：一人是主体，另一人作为“寄生者”从其肩部控制第三只手臂。
- 实现方式: 联网 VR 中，寄生操作者的视角附着在主体的身体上，并在不同条件下改变视角依赖程度。
- 论文: https://doi.org/10.1109/vr.2019.8798351 (IEEE VR 2019)

## 成为鸟

飞行与鸟类感官：像鸟一样飞、磁感应、紫外视觉、鸟鸣与鸟群。

### 飞行

以翅膀和鸟的身体飞行。

#### HapticWings — Seungwoo Je (2025)
- 类型: 研究原型 · 感官: 触觉, 身体图式与运动 · 媒介: VR 头显, 可穿戴与感官装置
- 核心想法: 额外的身体部件有了重量，才会感觉真实。
- 作品内容: 一个背包式装置，让重量在背部移动，使扇动或收起虚拟翅膀被感受为移动的负荷。
- 实现方式: 背负式二维重量移动机构，与 VR 中的翅膀动画同步；进行了三项用户研究。
- 论文: https://doi.org/10.1145/3715336.3735755 (ACM DIS 2025)
- 视频: https://www.youtube.com/watch?v=O6CCWw-jXak

#### I Am Bird — New Folder Games (2025)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 手臂即翅膀：飞行靠扇动产生，玩家自己的力气变成了升力。
- 作品内容: 一款 VR 沙盒游戏：你是一只城市里的鸟，扇动手臂飞行，偷食物，在街头制造混乱。
- 实现方式: 在 Meta Quest 上，手柄追踪扇臂动作以产生升力并控制方向。
- 视频: https://www.youtube.com/watch?v=LpwfHtfIuII
- 图片: https://queststoredb.com/media/25148042068216938_cover_landscape.webp
- 项目主页: https://www.meta.com/experiences/i-am-bird/25148042068216938/

#### Virtual Animal Embodiment for Actor Training — Rachel McDonnell (2024)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显, 表演与参与式
- 核心想法: 表演训练中的“动物练习”过去靠想象完成，现在可以在动物的身体里完成。
- 作品内容: 一个实时系统，让演员用自己的身体驱动写实的鹰化身，作为形体训练的一部分。
- 实现方式: 对演员进行动作捕捉，重定向到鹰的骨骼并在头戴显示器中呈现。
- 论文: https://doi.org/10.1109/vrw62533.2024.00083 (IEEE VR 2024 Workshops)

#### Do You Feel Like Flying? — Soroosh Mashal (2020)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 大多数人早已想象翅膀长在背上；飞行设计应围绕这种身体意象展开。
- 作品内容: 一项调查，研究人们如何想象长在身上的翅膀以及飞行时会做的动作，并据此制作带翅膀化身的飞行原型。
- 实现方式: 76 人问卷、想象飞行的动作分析，以及带翅膀化身的 VR 原型（Valkyrie Project）。
- 论文: https://doi.org/10.1109/mcg.2020.2997870 (IEEE Computer Graphics and Applications 2020)

#### Mare — Visiontrick Media (2020)
- 类型: 游戏 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 游戏
- 展出于: Venice VR Expanded 2021
- 核心想法: 玩家没有手：看、移动与帮助全靠一只鸟的目光与飞行。
- 作品内容: VR 解谜游戏：玩家醒来时化身一只人造鸟，飞越奇异的风景，引导并保护一个脆弱的 AI 同伴。
- 实现方式: 在一体机 VR（Oculus Quest）上以视线控制飞行；鸟随头部方向和栖停点移动。
- 视频: https://www.youtube.com/watch?v=iJouYmaHOuk
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2021/Schede_film/970x647/Venice_VR_Expanded/guerreiro_mare.jpg?itok=RzlLB4KG
- 项目主页: https://www.labiennale.org/en/cinema/2021/lineup/venice-vr-expanded/mare

#### Perch to Fly — Bernhard E. Riecke (2019)
- 类型: 研究原型 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 以鸟的栖木为界面：由腿而不是手来驾驭飞行。
- 作品内容: 一种飞行界面：用户以灵活的“栖坐”姿势坐着，用下半身控制飞行方向。
- 实现方式: 可摆动的栖坐凳，追踪腿部与身体倾斜来控制 VR 飞行；与坐姿和站姿比较。
- 论文: https://doi.org/10.1145/3322276.3322357 (ACM DIS 2019)

#### Transformation to a Bird — Akimi Oyanagi (2019)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 变成鸟会改变人对高度的感受：这是一个属于天空的身体带来的普罗透斯效应。
- 作品内容: 有恐高感的参与者在 VR 中分别以鸟或人的化身飞行。
- 实现方式: 头戴式 VR 飞行，第一人称鸟类身体；用问卷与生理指标测量恐高。
- 论文: https://doi.org/10.1145/3313950.3313976 (ICIGP 2019)

#### Body Ownership of a Bird Avatar — Akimi Oyanagi (2018)
- 类型: 论文 · 感官: 身体图式与运动, 听觉与振动 · 媒介: VR 头显
- 核心想法: 构建对非人类身体的所有感，靠的不只是同步，还有具体的动物特征。
- 作品内容: 一系列实验，研究哪些鸟类特征（扇翅、短小的身体、翅膀声）会让鸟类化身感觉像自己的身体。
- 实现方式: 头戴式 VR，手臂追踪扇翅并伴有扇翅声；比较鸟类与人类化身的所有感。
- 论文: https://doi.org/10.17706/jcp.13.6.596-602 (Journal of Computers 2018)

#### JediFlight — Taiwoo Park (2018)
- 类型: 研究原型 · 感官: 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 只要把肘与手的映射分开，一条人类肢体就能驱动两条虚拟肢体。
- 作品内容: 一款 VR 游戏：每只手臂同时控制一只翅膀和一只手，玩家边飞边与世界互动。
- 实现方式: 手部与肘部追踪器：肘部位置驱动翅膀，手部位置驱动手。
- 论文: https://doi.org/10.1145/3270316.3273043 (CHI PLAY 2018 Extended Abstracts)

#### Eagle Flight — Ubisoft Montreal (2016)
- 类型: 游戏 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 游戏
- 核心想法: 用头部掌舵的飞行：老鹰的身体被映射到你身上最稳定的部位——头，于是“看”就是“飞”。
- 作品内容: 一款 VR 游戏：你化身老鹰，在人类离开、被自然重新占据的巴黎上空飞翔，与其他老鹰竞速和争斗。
- 实现方式: 在 Oculus Rift、HTC Vive 与 PlayStation VR 上用头部朝向操控老鹰，转弯时视野边缘收窄以减轻晕动。
- 视频: https://www.youtube.com/watch?v=C7NAySeF4Y8
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/408250/header.jpg
- 项目主页: http://eagleflight.ubisoft.com/

#### Embodied Flying with Kinect — Bernhard E. Riecke (2016)
- 类型: 研究原型 · 感官: 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 在决定人要变成什么之前，先问问他们想怎样用身体飞。
- 作品内容: 一款 VR 游戏，参与者用 Kinect 追踪的身体姿势飞行，并研究人们会选择哪些姿势与形态来飞。
- 实现方式: Microsoft Kinect 身体追踪映射为头戴显示器中的飞行控制。
- 论文: https://doi.org/10.1109/mixra.2016.7858996 (IEEE Mixed Reality Art (MRA) 2016)

#### Extending the Human Body with Virtual Wings — Mie C. S. Egeberg (2016)
- 类型: 论文 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显
- 核心想法: 让翅膀成为身体一部分的是动起来，而不是被触碰。
- 作品内容: 参与者控制一个带一对翅膀的人形化身，分别在视动同步、视触同步或无同步反馈的条件下进行。
- 实现方式: 头戴式 VR，追踪手臂驱动翅膀动作；其中一个条件在背部施加视触同步抚触。
- 论文: https://doi.org/10.1145/2927929.2927940 (Virtual Reality International Conference (VRIC) 2016)

#### Wings and Flying in Immersive VR — Stefania Serafin (2015)
- 类型: 论文 · 感官: 身体图式与运动, 听觉与振动 · 媒介: VR 头显
- 核心想法: 由肩膀来扇动时，翅膀才会被感到是自己的；声音的作用不大。
- 作品内容: 参与者带着虚拟翅膀飞越障碍赛道，通过肩部动作或游戏手柄扇翅，并听到不同程度的自发翅膀声。
- 实现方式: 头戴显示器中带翅膀的动作追踪化身；比较肩部驱动与手柄驱动飞行，另有 2014 年 Audio Mostly 关于翅膀声音的前期研究。
- 论文: https://doi.org/10.1109/vr.2015.7223405 (IEEE VR 2015)

#### Birdly — SOMNIACS, Max Rheiner (2014)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉, 触觉 · 媒介: VR 头显, 多感官装置
- 展出于: SIGGRAPH 2014 Emerging Technologies
- 核心想法: 成为鸟从姿势开始：俯卧并用手臂和手掌操控，飞行就成了身体动作，而不是镜头移动。
- 作品内容: 一台全身飞行模拟器：你俯卧在软垫框架上，像翅膀一样张开双臂，以赤鸢的身份飞越城市或山野，迎面吹来风。
- 实现方式: 电动俯卧平台随骑乘者的手臂与手掌动作倾斜，并与 VR 头显、空间音效和随飞行速度变化的风扇同步。
- 论文: https://doi.org/10.1145/2614066.2614101 (SIGGRAPH 2014 Emerging Technologies)
- 视频: https://www.youtube.com/watch?v=cqBCd0VnN7A
- 图片: https://birdlyvr.com/wp-content/uploads/sites/3/2017/03/homepage-birdly-BHP-2868-2.jpg
- 项目主页: https://www.birdlyvr.com/

#### Humphrey II — Ars Electronica Futurelab (2003)
- 类型: 艺术作品 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显, 多感官装置
- 展出于: Ars Electronica Center 2003
- 核心想法: 飞行靠全身而不是摇杆完成，是后来 Birdly 所用“手臂即翅膀”姿态的早期公共版本。
- 作品内容: Ars Electronica Center 的飞行模拟器：观众面朝下吊在支架中，用手臂与身体动作飞越虚拟地景，通过力反馈感受风、气流和撞击。
- 实现方式: 身体悬挂在运动控制支架上，配合气动力反馈、头戴显示器与身体追踪；是 1994 年 Humphrey 模拟器的后继。
- 视频: https://www.youtube.com/watch?v=8l8JCpMEviM
- 项目主页: https://ars.electronica.art/futurelab/

### 鸟类感官

磁感应、紫外与广角视觉、鸟鸣。

#### HORUS EYE: Bird and Snake Vision for AR — Neven A. M. ElSayed (2016)
- 类型: 研究原型 · 感官: 改变的视觉, 热与红外 · 媒介: 增强现实
- 核心想法: 把动物视觉当作透镜，看见人看不见的东西。
- 作品内容: 一种 AR 可视化技术，像鸟或蛇的视觉那样过滤实时画面，以突出现实中值得关注的数据。
- 实现方式: 视频透视 AR，采用受猛禽视觉敏锐度与蛇类红外感知启发的图像滤镜，由用户查询驱动。
- 论文: https://doi.org/10.1109/ismar-adjunct.2016.0077 (IEEE ISMAR 2016 Adjunct)
- 视频: https://www.youtube.com/watch?v=8mg1VngCdpA

## 成为昆虫

微小尺度与复眼：蜜蜂与传粉者、蚂蚁与群落、蝴蝶、蜘蛛与复眼视觉。

### 蜜蜂与传粉者

在紫外光下看花、摇摆舞、蜂巢。

#### Visión de Abeja: Experiencia Floral Inmersiva — Viviana Álvarez Chomón, Jaime Martínez Harms (2026)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度 · 媒介: VR 头显, 多感官装置
- 展出于: Museo de Historia Natural de Valparaíso 2026
- 核心想法: 缩小到蜜蜂的尺寸并以紫外视觉观看，会看见那些为传粉者而非为人类存在的花纹。
- 作品内容: 一场有向导的 VR 体验：观众以接近蜜蜂的尺度飞越一座花园，园中是智利阿塔卡马“开花沙漠”的两种本土花卉，并可在人眼视觉、紫外视觉与蜜蜂色彩和光学模型之间切换。
- 实现方式: VR 头显中呈现 Cistanthe longiscapa 与 Argylia radiata 的建模花园；视觉模式很可能基于 INIA La Cruz 传粉研究中的紫外摄影与蜜蜂色觉模型。
- 图片: https://radiofestival.b-cdn.net/wp-content/uploads/2026/09/MINISTRA-s.jpeg
- 项目主页: https://www.radiofestival.cl/ministerio-de-ciencia-lanzo-en-valparaiso-vision-de-abeja-experiencia-inmersiva-en-realidad-virtual-sobre-la-percepcion-de-las-abejas/

#### DOON (Over There) — Issay Rodriguez (2020)
- 类型: 艺术作品 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: VR 头显
- 展出于: Art Fair Philippines 2020
- 核心想法: 你像蜜蜂一样用身体而不是语言交流：舞蹈本身就是传给蜂群的信息。
- 作品内容: 一件 VR 作品：观众置身蜂巢之中，通过跳“摇摆舞”为同伴蜜蜂指引花蜜与花粉的方向。
- 实现方式: 互动 VR 环境，观众的动作很可能被映射为指引虚拟同伴的摇摆舞。
- 图片: https://images.squarespace-cdn.com/content/v1/67c1754c89592f0c27fddb0b/bf9663bb-6482-4bde-bdd8-13bc146a4b7e/Guiding+virtual+bees+in+the+VR+environment+of+Issay+Rodriguez%E2%80%99s+DOON+%28Over+There%29%2C+2020.+Image+courtesy+of+%E2%80%98DOON%E2%80%99+VR+Team.?format=1500w https://images.squarespace-cdn.com/content/v1/67c1754c89592f0c27fddb0b/0ec2220a-faf3-4e75-a3f5-6c24fe8b37ad/Issay%2BRodriguez%2C%2BVR%2Benvironment%2Boverlaid%2Bscreenshots%2Bof%2B%E2%80%98DOON%2B%28Over%2BThere%29%E2%80%99%2C%2B2020.jpeg?format=1500w
- 项目主页: https://www.artandmarket.net/analysis/2020/1/5/on-the-possibilities-of-virtual-reality-art

### 蝴蝶、蜘蛛与其他

蝴蝶与变态、蜘蛛与振动、苍蝇、蚊子与蜻蜓。

#### The Spider's Perspective — Barbara Schuler (2026)
- 类型: 研究原型 · 感官: 触觉, 听觉与振动, 改变的视觉 · 媒介: VR 头显, 多感官装置
- 核心想法: 通过蜘蛛自己的感官——气流、振动与视觉——来推动节肢动物保护。
- 作品内容: 一个多感官 VR 体验，观众成为一只在橡树上寻找猎物的狩猎蜘蛛，通过风扇感受气流、通过触觉感受振动。
- 实现方式: 头戴式 VR，配风扇产生气流、触觉振动、空间声音，用手柄行走与跳跃，并使用旋转椅。
- 论文: https://doi.org/10.1145/3788851.3815016 (ACM IMX 2026)

#### Controlling Virtual Spiders — Martin Kocur (2025)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 陌生的解剖结构需要自己的控制方案；并不存在中立的映射。
- 作品内容: 一项研究，比较驱动八条腿蜘蛛化身的四种方式：手柄、双手、半身与全身控制。
- 实现方式: 头戴式 VR，把手柄、手部追踪与身体追踪分别映射到蜘蛛的腿。
- 论文: https://doi.org/10.1145/3756884.3765989 (ACM VRST 2025)

#### Birdly Insects — SOMNIACS (2022)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉, 触觉 · 媒介: VR 头显, 多感官装置
- 展出于: NYX Game Awards 2022 (Gold)
- 核心想法: 把飞行者缩小到昆虫尺度，普通的草地就成了广阔而危险的地景。
- 作品内容: Birdly 的一个体验：你以蝴蝶的身份飞过花草地，感受风、听到自己的翅膀声，并遇到包括天敌在内的其他动物。
- 实现方式: 在 Birdly 俯卧运动平台上运行，配合 VR 头显和迎面风扇；内容与 Kevuru Games 合作开发。
- 视频: https://www.youtube.com/watch?v=EYO9mGG9qTE
- 项目主页: https://blooloop.com/animals/news/somniacs-birdly-insects/

#### Animalia Sum — Bianca Kennedy, The Swan Collective (2020)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Sundance New Frontier 2020
- 核心想法: 以幽默进入昆虫的身体：在吃与被吃之间切换角色，质疑我们如何给动物排序。
- 作品内容: 一部喜剧 VR 伪纪录片，设想昆虫成为人类主要蛋白质来源的未来：观众先成为一只虫，再成为给虫挤奶的农夫，还观看虫与鲸的拳击赛。
- 实现方式: 手工微缩雕塑经摄影测量采集，用 Perception Neuron 动捕服制作动画，在 Oculus Go 上以互动 360° 呈现。
- 视频: https://www.youtube.com/watch?v=vCmypkilkEY
- 项目主页: https://voicesofvr.com/901-sundance-animalia-sum-blends-humor-with-a-unique-aesthetic-of-photogrammetry-captured-sculptures/

## 成为动物

其他动物：伴侣动物与农场动物、野生哺乳动物、爬行动物，以及在多个物种之间切换视角的作品。

### 伴侣与农场动物

狗、猫、牛、猪、鸡：与人共同生活的动物。

#### Having Dog Ears "for Real" — Omar A. Khan (2026)
- 类型: 论文 · 感官: 触觉, 身体图式与运动 · 媒介: VR 头显, 可穿戴与感官装置
- 核心想法: 社交 VR 用户早已佩戴动物部件；让它们成为身体一部分的是触觉。
- 作品内容: 参与者用振动手套、实体头带、两者兼有或两者皆无的方式触摸头上的虚拟狗耳朵。
- 实现方式: 先对社交 VR 社群做问卷，再进行 2×2 被试内实验：振动手套（主动触觉）与带耳朵道具的头带（被动触觉）。
- 论文: https://arxiv.org/abs/2606.26364 (arXiv 2026)
- 图片: https://ar5iv.labs.arxiv.org/html/2606.26364/assets/figures/teaser.png

#### If I Could See a Cat (猫が見えたら) — Atsushi Wada (2025)
- 类型: 沉浸式影片 · 感官: 身体图式与运动, 改变的视觉, 触觉 · 媒介: VR 头显, 游戏
- 展出于: Venice Immersive 2025; IFFR 2026; Kaohsiung Film Festival XR Dreamland 2026
- 核心想法: 从低处、透过猫的身体看悲伤：观众通过成为男孩失去的那只动物来安慰他。
- 作品内容: 一部关于男孩直树哀悼死去爱猫的互动 VR 动画：观众依次经历三只猫——他的猫的幻影、一只流浪猫和别人家的猫——并用手部追踪做出猫的动作。
- 实现方式: 为一体机 VR 制作的手绘风格动画，手部追踪映射为爪子与身体动作；2026 年在 Steam 发行。
- 视频: https://www.youtube.com/watch?v=gBRs46LtzMQ
- 图片: https://images.ludens.com.tw/uploads/images/wp-content/uploads/2026/03/15685-1.png
- 项目主页: https://www.ludens.com.tw/atsushi-wada-vr-story-if-i-could-see-a-cat-steam-p/

#### Dog Code: Human to Quadruped Embodiment — Rachel McDonnell (2024)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 通过共享的动作“词汇”在身体之间转译，而不是逐个关节对应。
- 作品内容: 一种通过共享码本把人的动作映射为高质量狗类动作的深度学习方法，用于实时 VR 化身。
- 实现方式: 先用基于规则的重定向映射到中间骨架，再用有限标量量化构建人与狗动作共享的码本。
- 论文: https://doi.org/10.1145/3677388.3696339 (ACM SIGGRAPH Motion, Interaction and Games (MIG) 2024)

#### I Am Cat — New Folder Games (2024)
- 类型: 游戏 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显, 游戏
- 核心想法: 猫的尺度：把玩家缩到猫的高度、把双手变成爪子，普通的家就成了地形。
- 作品内容: 一款 VR 沙盒游戏：你是老奶奶家里的一只猫，爬家具、把东西从架子上拍下去，并躲着主人。
- 实现方式: 在 Meta Quest 与 SteamVR 上用手控制猫爪，靠手臂动作攀爬和跳跃。
- 视频: https://www.youtube.com/watch?v=WUnEWydv5jE
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3016840/header.jpg
- 项目主页: https://newfolderstudio.com/

#### iStrayPaws — Yao Xu (2024)
- 类型: 研究原型 · 感官: 身体图式与运动, 多感官 · 媒介: VR 头显
- 核心想法: 在它们的高度经历一天的艰难，以此对城市动物产生共情。
- 作品内容: 以第一人称在 VR 中成为一只流浪猫或流浪狗，在城市里面对雨、饥饿与疾病。
- 实现方式: 在动物眼睛高度的头戴式 VR，用视听与动觉反馈表现天气、饥饿与受伤。
- 论文: https://doi.org/10.1145/3641825.3687729 (ACM VRST 2024)

#### A Chicken's-Eye VR Film — Iffa Nurlatifah (2023)
- 类型: 沉浸式影片 · 感官: 改变的视觉 · 媒介: 360°/沉浸式影片
- 核心想法: 把镜头降到农场动物的眼睛高度，会改变观众认同的对象。
- 作品内容: 一部从鸡的高度与视角拍摄的沉浸式 VR 影片，用来检验它对非人类生命共情的影响。
- 实现方式: 把 360° 摄像机放在鸡的眼睛高度，在头显中观看，前后测量共情水平。
- 论文: https://doi.org/10.1145/3632776.3632804 (ARTECH 2023)

#### NeuroDog: Quadruped Embodiment with Neural Networks — Rachel McDonnell (2023)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 可信的动物身体需要动物的运动方式，而不是把人的骨架拉到四条腿上。
- 作品内容: 一个把人的动作实时转换为自然狗类动作的系统，让 VR 用户能以狗的身体行走、坐下和玩耍。
- 实现方式: 用狗的动作捕捉数据训练神经网络，把追踪到的人体姿态映射为四足动物动画，而非逆向运动学。
- 论文: https://doi.org/10.1145/3606936 (Proceedings of the ACM on Computer Graphics and Interactive Techniques (SCA) 2023)

#### Now I Wanna Be a Dog — Rachel McDonnell (2023)
- 类型: 论文 · 感官: 身体图式与运动, 听觉与振动, 触觉 · 媒介: VR 头显
- 核心想法: 声音和触觉可以弥补人的身体与狗的身体之间的不匹配。
- 作品内容: 参与者在 VR 中化身为一只狗，四肢着地移动，同时听到爪子落地的声音并在手下感受到振动。
- 实现方式: 头戴显示器加手部与身体追踪；脚步声音频与手下的音频触觉振动器。
- 论文: https://doi.org/10.1109/ismar59233.2023.00107 (IEEE ISMAR 2023)

#### Ex Anima — Bartabas, Pierre Zandrowicz (2019)
- 类型: 沉浸式影片 · 感官: 身体图式与运动, 呼吸与内感受 · 媒介: VR 头显
- 展出于: Venice Virtual Reality 2019
- 核心想法: 不靠故事，而是通过呼吸与节奏成为马：一首献给动物呼吸的颂歌。
- 作品内容: 马从黑暗中出现，在沙地上呼吸、起舞；随着作品推进，观众与它们一同移动，逐渐成为马。
- 实现方式: 以 Zingaro 马术剧团的演出为基础的 VR 影片，对马进行立体拍摄（很可能结合体积捕捉与 CG）。
- 视频: https://www.youtube.com/watch?v=H4TyjO6UiDI
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2019/Schede_film/970x647/Venice_VR/ex-anima-experience.jpg?itok=pp2569cx
- 项目主页: https://www.labiennale.org/en/cinema/2019/venice-virtual-reality/ex-anima-experience

#### Experiencing Nature: Embodying a Cow and a Coral — Stanford Virtual Human Interaction Lab (2016)
- 类型: 论文 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显
- 核心想法: 是“成为”动物而不是“观看”动物，让人与自然的连结感和关切提升，并持续一周。
- 作品内容: 三项实验中，参与者四肢着地、在触觉刺激下成为一头走向屠宰场的牛，或酸化礁石上的一株珊瑚，并与只看同样内容的视频进行比较。
- 实现方式: 头戴显示器加全身追踪；参与者手膝着地爬行，研究者用棍子同步触碰其身体，对应虚拟赶牛棒的戳刺。
- 论文: https://doi.org/10.1111/jcc4.12173 (Journal of Computer-Mediated Communication 2016)
- 视频: https://www.youtube.com/watch?v=aQke1eQHSAA

### 野生哺乳动物

鹿、狐狸、狼、大象、熊、灵长类与其他野生哺乳动物。

#### Wolfborn — Shengdong Zhao (2026)
- 类型: 研究原型 · 感官: 听觉与振动, 身体图式与运动, 呼吸与内感受 · 媒介: VR 头显
- 核心想法: 成为动物可以借来它的声音：一声我们作为自己发不出的嚎叫。
- 作品内容: 一个 VR 演示，用户化身为一只狼，通过嚎叫释放压力，却不必发出任何可听见的声音。
- 实现方式: 伪发声机制：把呼吸或喉部动作与狼嚎的视觉、听觉和触觉反馈结合起来。
- 论文: https://doi.org/10.1145/3802974.3808033 (DIS 2026 Companion)

#### "I look like a gorilla, but don't move like one!" — Omar A. Khan (2025)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 当步态与外形相符时，动物身体更让人觉得是自己的。
- 作品内容: 参与者以人或大猩猩化身移动，分别使用人的摆臂或类似大猩猩的手臂滚动方式前进。
- 实现方式: 头戴式 VR，采用基于手柄的摆臂与手臂滚动两种移动技术，2×2 实验设计。
- 论文: https://doi.org/10.1109/vrw66409.2025.00247 (IEEE VR 2025 Workshops)

#### I Am Monkey — New Folder Games (2025)
- 类型: 游戏 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 游戏
- 核心想法: 被反转的动物园凝视：玩家成了被观看的一方，隔着栏杆看人。
- 作品内容: 一款 VR 沙盒游戏：你是动物园笼中的一只猴子；游客来来往往，有人递香蕉，有人挑衅，你可以讨好他们，也可以反击。
- 实现方式: 在 Meta Quest 与 Steam 上用手臂攀爬、抓取和投掷，游客行为由脚本驱动。
- 视频: https://www.youtube.com/watch?v=LJCfvsjFybM
- 图片: https://queststoredb.com/media/24775738222115749_cover_landscape.webp
- 项目主页: https://www.meta.com/experiences/i-am-monkey/24775738222115749/

#### Pine Cone Prowl: Embodying a Flying Squirrel — Gamification Group, Tampere University (2024)
- 类型: 研究原型 · 感官: 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 是滑翔而不是飞行：围绕一种小型哺乳动物的移动方式来设计身体。
- 作品内容: 一款 VR 游戏，玩家成为一只飞鼠，在芬兰森林的树木之间滑翔。
- 实现方式: 头戴式 VR，用手臂动作展开滑翔膜（很可能基于手柄）。
- 论文: https://doi.org/10.1145/3681716.3690625 (Academic Mindtrek 2024)

#### Gorilla Tag — Another Axiom (2021)
- 类型: 游戏 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: VR 头显, 游戏
- 核心想法: 用手行走：去掉双腿，身体便通过手臂学会类人猿的移动方式——这是数百万玩家接受的一次身体交换。
- 作品内容: 一款多人 VR 游戏：玩家是没有腿的大猩猩，只能用手推地面、墙壁和树木来移动，彼此玩捉人游戏。
- 实现方式: 没有摇杆移动，手柄位置直接推动物理身体；最初由 Kerestell Smith 开发，先在 Meta Quest 与 SteamVR 抢先体验发布。
- 视频: https://www.youtube.com/watch?v=y3bR3s546CU
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1533390/header.jpg
- 项目主页: https://gorillatagvr.com/

#### Invasion! — Baobab Studios (2016)
- 类型: 沉浸式影片 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Tribeca Film Festival 2016
- 核心想法: 最简单的化身线索，也就是在自己身体的位置看到一个动物身体，就足以改变场景与你的关系。
- 作品内容: 一部动画 VR 短片：两个外星人降落时，你是冰湖上的一只小白兔；低头就能看到自己毛茸茸的身体。
- 实现方式: 实时动画 VR，观众的镜头被放在兔子化身中，角色会对观众做出反应。
- 视频: https://www.youtube.com/watch?v=SZ0fKW5PttM
- 项目主页: https://www.baobabstudios.com/

#### The Virtual Reality Gorilla Exhibit — Don Allison, Larry F. Hodges (1996)
- 类型: 研究原型 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显
- 核心想法: 通过被当作大猩猩对待来学习大猩猩的社会规则，是早期通过动物具身来学习的 VR 案例。
- 作品内容: 在亚特兰大动物园，学生戴上头显扮演一只青春期大猩猩，进入虚拟大猩猩栖息地，虚拟大猩猩会以支配与顺从行为回应他们的靠近。
- 实现方式: 以 SGI 渲染亚特兰大动物园栖息地模型，大猩猩代理的行为与灵长类学家共同设计，通过带追踪的头显呈现。
- 论文: https://doi.org/10.1109/38.626967 (IEEE Computer Graphics and Applications 1997)

### 爬行与两栖动物

蛇、蜥蜴、青蛙、乌龟：红外颊窝、变色龙之眼、冷血。

#### Jurassic Flight (Birdly) — SOMNIACS (2020)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉, 触觉 · 媒介: VR 头显, 多感官装置
- 核心想法: 同样的振臂身体可以承载一种已灭绝的飞行动物，化身成为想象消失动物如何飞行的方式。
- 作品内容: Birdly 的一个体验：你化身为翼龙 Kepodactylus，飞越与古生物学家合作重建的侏罗纪地景和其中的恐龙。
- 实现方式: Birdly 俯卧运动平台，以手臂和手掌控制翅膀，配合 VR 头显和迎面风扇；场景与动物模型咨询古生物学家制作。
- 视频: https://www.youtube.com/watch?v=cVP5h2kyRgw
- 项目主页: https://www.birdlyvr.com/

#### Virtual Chameleon — Fumio Mizuno (2009)
- 类型: 研究原型 · 感官: 改变的视觉 · 媒介: 可穿戴与感官装置
- 核心想法: 试着像变色龙一样看：两只眼睛同时看向不同方向。
- 作品内容: 一种可穿戴系统：两台可独立转向的摄像机分别为左右眼显示不同画面，由佩戴者控制。
- 实现方式: 两台电动摄像机由手持追踪器分别控制方向，各自输出到头戴显示器的一侧。
- 论文: https://doi.org/10.1007/978-3-642-03904-1_48 (IFMBE Proceedings 2009)

### 多物种视角

让你在多个物种的视角之间穿行的作品。

#### Face Jumping — Tender Claws (2025)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: VR 头显
- 展出于: SXSW 2025 XR; Venice Immersive 2025
- 核心想法: 目光接触是身体之间的门：要成为他者，先要与它对视。
- 作品内容: 一件超现实 VR 作品：与另一个角色目光相接，你就能跳进它的身体，在陌生人、动物和物体之间穿行，完成一段重生之旅。
- 实现方式: 利用 Meta Quest Pro 的眼动追踪检测对视并触发视角切换。
- 视频: https://www.youtube.com/watch?v=SNT_MuIJ8aY
- 图片: https://static.labiennale.org/files/styles/full_screen_slide/public/cinema/2025/Schede_film/970x647/Ve_Immersive/face_jumping.jpg?itok=m12qWn8f https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2025/Schede_film/970x647/Ve_Immersive/face_jumping.jpg?itok=OnaLq0ZU
- 项目主页: https://www.labiennale.org/en/cinema/2025/venice-immersive/face-jumping

#### The Dream of Zhuang Zhou — Shuai Zou (2025)
- 类型: 艺术作品 · 感官: 改变的视觉, 多感官 · 媒介: VR 头显
- 展出于: SIGGRAPH Asia 2025
- 核心想法: “物化”：每个物种从同一片山水中建构出不同的世界。
- 作品内容: 一件基于庄子“蝴蝶梦”的 VR 作品，观众在中国山水中穿行于人、鱼、蝴蝶与鸟的视角之间。
- 实现方式: 用 3D 高斯泼溅重建山水，再以各物种特有的视觉与认知映射进行渲染。
- 论文: https://doi.org/10.1145/3757369.3767609 (SIGGRAPH Asia 2025 Art Papers)

#### AnimalSense — Yu-Lun Hsu (2024)
- 类型: 研究原型 · 感官: 回声定位, 电感受, 改变的视觉 · 媒介: VR 头显, 游戏
- 核心想法: 通过“不得不用”来学会一种动物感官。
- 作品内容: 一款 VR 游戏，各关卡中玩家要使用蝙蝠的回声定位、鳗鱼的电感受和跳蛛的全景视觉来完成挑战。
- 实现方式: 在 VR 中做感官替代与重映射：回声呈现为空间声音与图像，电场呈现为触觉，全景视觉压缩进头显视野。
- 论文: https://doi.org/10.1145/3613905.3648102 (CHI 2024 Extended Abstracts)
- 视频: https://www.youtube.com/watch?v=OycDmP3hobQ

#### Becoming an Animal? Proteus Effect and Hand Gestures — Tangjun Qu (2024)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 你所穿戴的身体会重塑你本来的身体，甚至细到手的姿势。
- 作品内容: 参与者在 VR 中戴上人手或动物之手；手势识别模型测量他们的真实之手是否开始像动物那样动。
- 实现方式: 头显中的手部追踪，配三种动物手部模型；训练好的分类器为手势与各化身的一致性打分。
- 论文: https://doi.org/10.1109/ismar62088.2024.00093 (IEEE ISMAR 2024)

#### NariTan — Shogo Fukushima (2024)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 把非人类身体当作记忆的辅助：通过一具学习者从未拥有过的龙之身体的动作来学单词。
- 作品内容: 一个沉浸式 VR 词汇学习系统：学习者化身为一条龙，用龙的身体演示英语单词。研究发现，与常规学习相比，一周后遗忘的单词更少。
- 实现方式: 头显配合由学习者动作驱动的全身龙化身；比较了与传统学习相比的记忆保持、工作负荷与情绪，并改变化身数量进行实验。
- 论文: https://doi.org/10.3390/mti8100093 (Multimodal Technologies and Interaction 2024)
- 项目主页: https://doi.org/10.3390/mti8100093

#### Plastisapiens — Miri Chekhanovich, Édith Jorisch (2022)
- 类型: 艺术作品 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显
- 展出于: Tribeca Immersive 2022; IDFA DocLab 2022
- 核心想法: 成为被塑料渗透的身体：具身被用于思辨的女性主义生态小说，而不是同理心。
- 作品内容: 超现实的互动 VR 生态小说：参与者化身体内吸收了塑料、身体变得更加流动的动物与变异人类。
- 实现方式: 实时 VR，身体追踪的化身会变形与融合；加拿大国家电影局与 DPT 出品。
- 视频: https://www.youtube.com/watch?v=UKuUlpfUi68
- 项目主页: https://voicesofvr.com/1105-tribeca-xr-embodiment-experiments-in-a-surrealist-speculative-future-feminist-eco-fiction-on-plastics-permeating-the-body-in-plastisapians/

#### Samsara — Hsin-Chien Huang (2021)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显
- 展出于: Venice VR Expanded 2021
- 核心想法: 以轮回演绎具身认知：每一次重生都给你一具新身体、一种看同一颗星球的新视角。
- 作品内容: 人类毁掉地球、改造 DNA 流亡太空后，参与者在另一个时代以另一种生命形态回到地球，并在轮回中穿过其他生命的身体。
- 实现方式: 可自由走动的 VR，全身化身在各章节之间变换物种（HTC Vive / Quest）。
- 视频: https://www.youtube.com/watch?v=9IygU6BpINQ
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2021/Schede_film/970x647/Venice_VR_Expanded/huang_samsara.jpg?itok=EaPJB35o
- 项目主页: https://www.labiennale.org/en/cinema/2021/lineup/venice-vr-expanded/lun-hui-samsara

#### Beyond Human: Animals as an Escape from Stereotype Avatars — Andrey Krekhov (2019)
- 类型: 论文 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 游戏
- 核心想法: 游戏机制可以从动物身体能做什么出发来设计，而不是套用人的模板。
- 作品内容: 玩家分别成为蝎子、犀牛和鸟，每种动物都有自己的身体部件和能力，比如会蛰人的尾巴或飞行。
- 实现方式: 房间尺度 VR，把额外身体部件（尾巴、翅膀）通过身体追踪进行映射，并加入各动物特有的感官与移动方式。
- 论文: https://doi.org/10.1145/3311350.3347172 (CHI PLAY 2019)
- 视频: https://www.youtube.com/watch?v=fa2Ivv14GL4
- 图片: https://ar5iv.labs.arxiv.org/html/1907.07466/assets/figures/teaser.jpg https://ar5iv.labs.arxiv.org/html/1907.07466/assets/figures/scorpion.jpg

#### Ghost Giant — Zoink (2019)
- 类型: 游戏 · 感官: 身体图式与运动, 时间与尺度 · 媒介: VR 头显, 游戏
- 核心想法: 成为幽灵关乎尺度与隐形：你能改变整座小镇，却只能触及那唯一看得见你的人。
- 作品内容: 一款 VR 解谜游戏：玩家是一个巨大的幽灵，除了孤独的男孩 Louis 之外谁也看不见他。玩家俯视一座玩具般的小镇，掀开屋顶、转动房子、移动物件来帮助男孩。
- 实现方式: 在 PlayStation VR（Move 控制器）和 Oculus Quest 上运行的房间尺度 VR，世界以微缩比例搭建在坐着或站着的玩家周围。
- 视频: https://www.youtube.com/watch?v=W2xNpID-w6s
- 图片: https://upload.wikimedia.org/wikipedia/en/d/de/Ghost_giant_cover.jpg
- 项目主页: https://en.wikipedia.org/wiki/Ghost_Giant

#### The Illusion of Animal Body Ownership — Andrey Krekhov (2019)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 非人形身体可以产生与人形化身同样强、有时甚至更强的所有感。
- 作品内容: 玩家用不同的身体追踪映射控制虚拟蜘蛛、蝙蝠等生物，并报告这些身体有多像自己的。
- 实现方式: 全身追踪，把人的手臂和腿映射到蜘蛛的八条腿或蝙蝠的翅膀上，并在虚拟镜子中观看。
- 论文: https://doi.org/10.1109/cig.2019.8848005 (IEEE Conference on Games (CoG) 2019)
- 图片: https://ar5iv.labs.arxiv.org/html/1907.05220/assets/figures/modes.jpg https://ar5iv.labs.arxiv.org/html/1907.05220/assets/figures/scene.jpg

#### Inside Tumucumaque — Interactive Media Foundation (2018)
- 类型: 艺术作品 · 感官: 改变的视觉, 回声定位, 时间与尺度 · 媒介: VR 头显, 多感官装置
- 展出于: ZKM Karlsruhe 2018; Raindance Film Festival 2018 (Special Jury Mention); ADC Gold 2019; European Design Award Gold 2019; VR Days Europe 2019
- 核心想法: 每种动物都是同一地点的不同翻译：紫外色彩、慢动作、回声定位或夜视。
- 作品内容: 一件以巴西雨林空地为场景的 VR 装置，你在黑凯门鳄、角雕、吸血蝠、箭毒蛙和亚马逊巨人食鸟蛛五种动物之间切换，用各自的感官感知森林。
- 实现方式: 模型与动画与柏林自然历史博物馆的科学家合作完成；感官被呈现为紫外色板、超慢动作、声呐可视化、彩色夜视和三维声音。
- 视频: https://www.youtube.com/watch?v=rFkcRQq_UT4
- 图片: https://inside-tumucumaque.com/images/multi_e.jpg
- 项目主页: https://inside-tumucumaque.com/

#### VR Animals: Surreal Body Ownership in VR Games — Andrey Krekhov (2018)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 身体所有感并不限于人形化身：玩家可以把动物身体感受为自己的身体。
- 作品内容: 首个在 VR 中扮演三种动物的探索性研究，比较了五种控制方式，从第三人称伙伴视角到第一人称全身追踪。
- 实现方式: HTC Vive 加全身追踪器，把人的四肢映射到动物四肢，并与手柄控制和伙伴模式比较。
- 论文: https://doi.org/10.1145/3270316.3271531 (CHI PLAY 2018 Extended Abstracts)

#### Life of Us — Within, Chris Milk (2017)
- 类型: 艺术作品 · 感官: 身体图式与运动, 听觉与振动 · 媒介: VR 头显
- 展出于: Sundance New Frontier 2017
- 核心想法: 进化是一连串与朋友一起穿上的身体；看到对方的生物形态，你就知道自己变成了什么。
- 作品内容: 双人共享的 VR 进化之旅：两位参与者依次化身单细胞、鱼、青蛙、翼龙、猿、人类及更远的形态，声音也随每具身体变化。
- 实现方式: 实时多人 VR，手部追踪，并为每种生物实时变声。
- 视频: https://www.youtube.com/watch?v=RpyFs6O-328
- 项目主页: https://www.with.in

#### In the Eyes of the Animal — Marshmallow Laser Feast, Abandon Normal Devices (2015)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动, 触觉 · 媒介: VR 头显, 多感官装置, 360°/沉浸式影片
- 展出于: AND Festival, Grizedale Forest 2015; Sundance New Frontier 2016; Sónar 2016; Supersenses, National Science and Media Museum, Bradford 2017; Singapore International Festival of Arts 2017; Particles of Existence, Phi Centre, Montreal 2018; Timber Festival 2018; Coda Festival 2019; OMM, Eskişehir 2019; Discovery Naturescape, Hwaseong 2022; BBK Klima Abentura, Bilbao 2023; Schemerlicht Festival, Nijmegen 2024; Sentients, Watershed, Bristol 2026
- 核心想法: 每种动物都是一片不同的森林：蚊子看见二氧化碳的烟流，蜻蜓以每秒 240 帧观看，猫头鹰只看见正对着的东西。
- 作品内容: 一段沿食物链穿越格里兹代尔森林的 VR 旅程，依次以蚊子、蜻蜓、青蛙与猫头鹰的感官观看森林。观众戴着装在雕塑式头盔里的头显、背着振动背包，聆听双耳森林声景。
- 实现方式: 对格里兹代尔森林进行 LiDAR 扫描、CT 扫描、摄影测量与 360° 无人机拍摄，在 vvvv 中实时渲染；MaxMSP 双耳音频引擎、SubPac 振动背包模拟翅膀振动与蛙鸣，并配合气味；之后发行为 360° 影片。
- 视频: https://vimeo.com/140057053
- 图片: https://marshmallowlaserfeast.com/app/uploads/2024/07/Screenshot-2024-07-24-at-10.52.46.jpg https://marshmallowlaserfeast.com/app/uploads/2024/07/ITEOTA_180Renders_0147_4k.jpg https://marshmallowlaserfeast.com/app/uploads/2024/07/Screenshot-2024-07-24-at-11.02.24.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/in-the-eyes-of-the-animal/

#### FlyVIZ: 360° Vision — Anatole Lécuyer (2012)
- 类型: 研究原型 · 感官: 改变的视觉 · 媒介: 可穿戴与感官装置, VR 头显
- 展出于: SIGGRAPH 2016 Emerging Technologies
- 核心想法: 人可以适应“脑后长眼”。
- 作品内容: 一个头盔，让佩戴者实时拥有周围环境的 360° 视野，就像苍蝇或猎物动物的全景视觉。
- 实现方式: 头顶全景摄像机，把全向图像重新映射到头戴显示器的视野中。
- 论文: https://doi.org/10.1145/2407336.2407344 (ACM VRST 2012)
- 视频: https://www.youtube.com/watch?v=5Dm0wH9TDjw

#### Animal Superpowers — Chris Woebken, Kenichi Okada (2008)
- 类型: 研究原型 · 感官: 改变的视觉, 磁感应, 身体图式与运动 · 媒介: 可穿戴与感官装置
- 展出于: Design and the Elastic Mind, MoMA New York 2008
- 核心想法: 每个装置借用一种动物感官，并适配儿童的身体和游戏，让好奇心成为界面。
- 作品内容: 一组给儿童的可穿戴设备：用手上的显微镜把视觉放大 50 倍的“蚂蚁装置”、朝选定方向振动的“鸟装置”、把声音压低并把视线抬高 30 厘米的“长颈鹿装置”；2015 年又加入可以听见超声的“蝙蝠护目镜”。
- 实现方式: 手持显微摄像头连接头部显示、GPS 驱动振动、变声配合加高底座，以及超声波蝙蝠探测器。
- 视频: https://www.youtube.com/watch?v=L9oTcez2CXU
- 图片: https://freight.cargo.site/t/original/i/ad1784c02faa9d2afb6614fa878b4982436d2d58292e1349ebee13b3d8c6a682/2232862656_cba3f094c1_o.jpg https://freight.cargo.site/t/original/i/067d74e44844e7aca2661cd3baab576aa3fb852d9130e7525a1d6fce5ad67c0d/animals3.jpg
- 项目主页: https://www.chriswoebken.com/animal-superpowers

#### Becoming Dragon — micha cárdenas (2008)
- 类型: 表演 · 感官: 身体图式与运动, 改变的视觉, 听觉与振动 · 媒介: VR 头显, 表演与参与式
- 展出于: Vector Festival, Montreal 2018 (Becoming Dragon Redux)
- 核心想法: 追问一年的“第二人生体验”能否替代变性手术前被要求的“真实生活体验”，并通向“物种重置”：把成为神话动物当作思考过渡的方式。
- 作品内容: 一场长达 365 小时的混合现实表演：艺术家戴着头显，以龙的化身生活在 Second Life 中，只能通过视频画面看到现实世界。观众观看立体投影，听到她被处理成龙声的嗓音。
- 实现方式: 带摄像头透视的头显、把表演者动作映射到 Second Life 龙身上的动作捕捉系统、Pure Data 变声程序，以及面向观众的立体投影。
- 论文: https://doi.org/10.1117/12.806260 (SPIE Electronic Imaging 2009)
- 视频: https://vimeo.com/3874238
- 项目主页: https://michacardenas.sites.ucsc.edu/becoming-dragon/

#### Placeholder — Brenda Laurel, Rachel Strickland (1993)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动, 听觉与振动 · 媒介: VR 头显
- 展出于: Banff Centre for the Arts 1993
- 核心想法: 每种生物都是一套不同的感知与移动规则，让化身关乎感官和运动，而不是外表。
- 作品内容: 一件两人 VR 作品，场景是拍摄的班夫地景，参与者可以化身为蜘蛛、蛇、鱼或乌鸦等灵兽，获得它观看、移动和说话的方式，并为他人留下语音“声标”。
- 实现方式: 头戴显示器、三维空间音频、手持控制器和变声滤镜；乌鸦靠振臂飞行，蛇以类似红外的色彩观看。
- 论文: https://doi.org/10.1145/192593.192637 (ACM Multimedia 1994)
- 图片: https://image.jimcdn.com/app/cms/image/transf/none/path/s1cb8d6527de0e9b6/image/ifd4c0c7fa4d79286/version/1571836952/image.jpg
- 项目主页: https://www.tauzero.com/Brenda_Laurel/Severed_Heads/CGQ_Placeholder.html

## 成为真菌

网络化与微生物的生命：菌丝、黏菌、细菌、细胞与共生，处在缓慢时间与微小尺度上。

### 菌丝与蘑菇

真菌网络、孢子、分解与“木联网”。

#### FungiSync — Botao 'Amber' Hu, Danlin Huang, Reality Design Lab (2024)
- 类型: 表演 · 感官: 集体与网络感知, 改变的视觉, 触觉 · 媒介: 混合现实, 表演与参与式
- 展出于: DevCon 2024 “Trusting the Unseen”, Bangkok; SIGGRAPH 2025 Immersive Pavilion
- 核心想法: 成为真菌就是成为节点：感知通过接触被交换与混合，而不属于某一个身体。
- 作品内容: 一场参与式混合现实仪式：参与者戴上饰有蘑菇的 MR 面具，每只面具呈现不同的视觉世界观；通过仪式化的握手，与他人交换、混合这些世界观，如同菌根网络中的节点。
- 实现方式: 树脂打印的蘑菇面具装在 HoloKit 头显上；基于 Multipeer Connectivity 的 HoloField 同场多人框架同步 Unity VFX Graph 视觉，由现场 DJ 驱动，并合成画面供观众观看。
- 论文: https://doi.org/10.1145/3721245.3734040 (SIGGRAPH 2025 Immersive Pavilion)
- 视频: https://vimeo.com/1027901359
- 图片: https://reality.design/media/20241120%20fungi%205225.jpg https://reality.design/media/project-fungisync-figure-01.jpg https://arxiv.org/html/2511.12533v3/images/fungisync.jpg
- 项目主页: https://reality.design/project/fungisync

#### Symbiosis/\Dysbiosis: Sentience — Tosca Terán (2024)
- 类型: 艺术作品 · 感官: 集体与网络感知, 听觉与振动, 多感官 · 媒介: VR 头显, 多感官装置, 表演与参与式
- 展出于: Venice Immersive 2024
- 核心想法: 人的脑电信号与真菌信号在同一回路中混合，访客成为菌丝网络中的一个节点。
- 作品内容: 一场扩展现实的开放世界蘑菇冒险：实时真菌生物数据与来宾的脑电共同塑造一片不断演变的声音景观与森林。
- 实现方式: 活体菌丝接入定制合成器，来宾佩戴脑电头带，配合 VR 世界与投影映射的地面和墙面；与 Brendan Lehman 联合执导。
- 视频: https://www.youtube.com/watch?v=0PzZXrqncsY
- 图片: https://voicesofvr.com/wp-content/uploads/2024/09/symbiosisdysbiosis-sentience-970x546.jpg https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2024/Schede_film/970x647/Ve_Immersive/symbiosis-dysbiosis.jpg?itok=FPo8HeFR
- 项目主页: https://voicesofvr.com/1432-combining-biodata-with-open-world-mushroom-adventure-with-symbiosis-dysbiosis-sentience/

#### Forager — Winslow Porter, Elie Zananiri (2023)
- 类型: 艺术作品 · 感官: 时间与尺度, 嗅觉与味觉, 触觉 · 媒介: VR 头显, 多感官装置
- 展出于: SXSW 2023; SIGGRAPH 2023 Immersive Pavilion
- 核心想法: 真菌的时间被压缩到几分钟并变成空间，生长与分解都从内部被经历。
- 作品内容: 一部多感官 VR 故事：你从一粒孢子开始，化作菌丝在腐朽的树桩中蔓延，最后破土成为一朵蘑菇，经历真菌一生的四个阶段。
- 实现方式: 在游戏引擎中呈现真实蘑菇的体积化延时摄影（自动摄影测量、以体素渲染），配合气味、风的触感与 SubPac 低频触觉。
- 论文: https://doi.org/10.1145/3588027.3603531 (SIGGRAPH 2023 Immersive Pavilion)
- 视频: https://www.youtube.com/watch?v=Vw_c_7Hw-DQ
- 图片: https://voicesofvr.com/wp-content/uploads/2023/04/forager-950x534.jpg https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2023/Schede_film/970x647/Ve_Immersive/porter-gra.jpg?itok=5DLfU6OX
- 项目主页: https://voicesofvr.com/1189-forager-volumetric-timelapse-of-mushroom-growth-hits-a-sweet-spot-of-touch-smell-immersive-storytelling/

#### Hypha — Natalia Cabrera (2020)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉, 时间与尺度 · 媒介: VR 头显
- 展出于: Sundance New Frontier 2020
- 核心想法: 成为真菌，意味着拥有一副分枝的身体：进食、连接树根、修复土壤。
- 作品内容: 一部 VR 故事，让你化身蘑菇的完整一生：来自太空的孢子找到水，在地下长成菌丝与菌丝体，净化有毒土壤，最后结成子实体，菌盖和菌褶遮住你的视线。
- 实现方式: 六自由度 VR 配合手部追踪，把手臂变成细长分枝的肢体；由 Nanai Studio 与 Sebastian Gonzalez、Juan Ferrer 共同开发。
- 视频: https://vimeo.com/356115943
- 图片: https://docubase.mit.edu/wp-content/uploads/2020/07/hypha.jpg https://images.squarespace-cdn.com/content/v1/654d529f2df68e6aa2c35f5b/51192710-fec7-41a0-8952-03fbfd50760d/Hypha_6.png
- 项目主页: https://docubase.mit.edu/project/hypha/

### 黏菌

多头绒泡菌等没有大脑的问题解决者。

#### Symbiosis — Polymorf (2021)
- 类型: 艺术作品 · 感官: 触觉, 嗅觉与味觉, 多感官 · 媒介: VR 头显, 可穿戴与感官装置, 表演与参与式
- 展出于: IDFA DocLab, Amsterdam (world premiere); Eye Filmmuseum, Cinema Ecologica 2021; Holland Festival 2022; PAM CUT, Portland Art Museum 2022–23; SXSW XR Experience Spotlight 2023
- 核心想法: 受 Donna Haraway《卡米尔故事》启发：成为另一个物种要动用整个身体，包括味觉、嗅觉与皮肤。
- 作品内容: 一场设定在 200 年后的多人 VR 表演：每位观众穿上定制触觉服，化身黏菌、蟾蜍、基因改造兰花或人与鮟鱇鱼的混合体，在角色故事交汇的过程中品尝、嗅闻它们的世界。
- 实现方式: 每人一套带软体机器人的触觉服，配合 VR 影音、气味释放，以及 Karpendonkse Hoeve 主厨为每种生物设计的素食小食。
- 视频: https://www.youtube.com/watch?v=-hwpnyWSXb0
- 图片: https://polymorf.nl/wp-content/uploads/2026/05/BG-Symbiosis-new-04.jpg https://polymorf.nl/wp-content/uploads/2026/05/creature.jpg
- 项目主页: https://polymorf.nl/symbiosis/

### 微生物与细胞

细菌、病毒、细胞、微生物组与分子世界。

#### The Materialised Temporality of Dust — Carolina Ramirez-Figueroa (2024)
- 类型: 艺术作品 · 感官: 时间与尺度, 改变的视觉 · 媒介: VR 头显
- 核心想法: 以微生物的尺度阅读历史：尘埃是一座档案馆，成为其中的一个微生物，就是用休眠、孢子形成与缓慢堆积替换人类的时间线。
- 作品内容: 一件 VR 作品：观众成为英国皇家艺术学院肯辛顿图书馆尘埃中的一个微生物。他们在比例失调的书架里醒来，穿过这个房间几十年的历史，最后回到今天的图书馆。
- 实现方式: 把图书馆尘埃中采集的微生物、档案照片与空间 3D 扫描结合成一段跟随枯草芽孢杆菌（Bacillus subtilis）的 VR 旅程。
- 论文: https://doi.org/10.1017/btd.2024.21 (Research Directions: Biotechnology Design 2025)
- 视频: https://www.youtube.com/watch?v=8AAy5Phd0Fw
- 图片: https://rca-media2.rca.ac.uk/images/Screenshot_2025-03-18_at_12.36.3.2e16d0ba.fill-1200x1200.png
- 项目主页: https://www.rca.ac.uk/more/staff/dr-carolina-ramirez-figueroa/transcript-for-the-materialised-temporality-of-dust-vr-project-by-carolina-ramirez-figueroa-video/

### 共生与地衣

地衣、共生总体与作为纠缠的生命。

#### Symbiotica — Natalia Cabrera (2021)
- 类型: 艺术作品 · 感官: 集体与网络感知, 身体图式与运动 · 媒介: VR 头显, 屏幕与网页
- 展出于: CPH:DOX 2021; NewImages Festival 2022
- 核心想法: 共生要通过成为其中一方伙伴来学习，而不是旁观整体。
- 作品内容: 一部多人 VR 体验：参与者化身不同的微生物，从原始细胞开始彼此协作，去发现地衣这一由多个物种组成的集体想对人类说的话。
- 实现方式: 可通过 VR 头显、电脑、手机或平板进入的线上多人空间。
- 图片: https://xrmust.com/wp-content/uploads/2023/04/XRMust_symbiotica_Poster.jpg
- 项目主页: https://xrmust.com/all-experiences/symbiotica/

## 成为树

植物与森林：树、花与根、光合作用、植物时间与森林生态。

### 树

像一棵树那样生长、呼吸、活上几百年。

#### Embodying nature in immersive virtual reality: Are multisensory stimuli vital to affect nature connectedness and pro-environmental behaviour? — Pia Spangenberger (2024)
- 类型: 论文 · 感官: 多感官, 身体图式与运动, 触觉 · 媒介: VR 头显
- 核心想法: 追问：当人被要求感受自己是一棵树时，哪些感官真正重要。
- 作品内容: 关于在 VR 中化身为树的后续研究，检验加入多感官刺激是否会改变自然联结感与亲环境行为。
- 实现方式: 对照 VR 实验，比较仅视觉与多感官两种化身为树的条件。
- 论文: https://doi.org/10.1016/j.compedu.2023.104964 (Computers & Education 2024)
- 项目主页: https://doi.org/10.1016/j.compedu.2023.104964

#### Becoming nature: effects of embodying a tree in immersive virtual reality on nature relatedness — Pia Spangenberger (2022)
- 类型: 论文 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显
- 核心想法: 只有 VR 组的参与者以树的第一人称描述体验，也只有他们反思了人对自然的角色。
- 作品内容: 一项实验（N = 28）：参与者在沉浸式 VR 或桌面屏幕中化身为一棵树经历其一生，并可用手柄做出轻微的树枝动作。
- 实现方式: 头显与桌面的组间实验，以混合方法测量自然联结感、观点采择与沉浸感。
- 论文: https://doi.org/10.1038/s41598-022-05184-0 (Scientific Reports 2022)
- 图片: https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-022-05184-0/MediaObjects/41598_2022_5184_Fig1_HTML.png
- 项目主页: https://www.nature.com/articles/s41598-022-05184-0

#### We Live in an Ocean of Air — Marshmallow Laser Feast (2018)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 多感官, 改变的视觉 · 媒介: VR 头显, 多感官装置
- 展出于: Salon 009, Saatchi Gallery, London 2018–19; Observations on Being, Coventry 2021; Phi Centre, Montreal 2021–22; ArtScience Museum, Singapore 2022; Plásmata: Bodies, Dreams, and Data, Onassis Foundation, Athens 2022; Works of Nature, ACMI, Melbourne 2023–24; Breathe | Mauri Ora, Te Papa, Wellington 2025–26
- 核心想法: 呼吸与树共享：每一次呼气都在喂养红杉，每一次吸气都来自它，身体与植物的边界变成一个循环。
- 作品内容: 一件多人 VR 装置：观众站在巨型红杉下，看见自己呼出的气息化作粒子流入树中，而树释放的氧气又流回身体。后续版本以大型影像装置形式展出。
- 实现方式: 背包电脑驱动的无线 VR，配有手部追踪、呼吸传感器与心率监测，把每位观众的呼吸与脉搏实时转化为粒子；配合双耳声音、气味扩散与风机；红杉数据来自《Treehugger》的 LiDAR 扫描。
- 视频: https://vimeo.com/303589503
- 图片: https://marshmallowlaserfeast.com/app/uploads/2023/11/Copy-of-OceanOfAir_Saatchi_-12-of-34_sml.jpg https://marshmallowlaserfeast.com/app/uploads/2023/11/Copy-of-OceanOfAir_Saatchi_-26-of-34.jpg https://marshmallowlaserfeast.com/app/uploads/2024/02/We-Live-in-an-Ocean-of-Air-by-Marshmallow-Laser-Feast-Works-of-Nature-ACMI-2023-image-by-Eugene-Hyland_13295.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/we-live-in-an-ocean-of-air/

#### Tree — Milica Zec, Winslow Porter (2017)
- 类型: 艺术作品 · 感官: 身体图式与运动, 触觉, 嗅觉与味觉 · 媒介: VR 头显, 多感官装置
- 展出于: Sundance New Frontier 2017; Tribeca Film Festival 2017; World Economic Forum Davos; TED 2017
- 核心想法: 成为一棵树，是在自己的身体里感受生长、扎根与无力，而不是从外面旁观森林砍伐。
- 作品内容: 一部房间尺度的 VR 体验：你从一粒种子长成亚马孙雨林中的参天大树，手臂变成树枝，直到周围的森林被大火吞没。
- 实现方式: HTC Vive 头显配合触觉背心、低频地板、风扇、热源以及泥土和烟雾的气味；参与者进入前先亲手种下一粒真实的种子。
- 视频: https://www.youtube.com/watch?v=ERffRXjTAqM
- 图片: https://docubase.mit.edu/wp-content/uploads/2018/11/Tree-02-Still.jpg https://voicesofvr.com/wp-content/uploads/2020/01/tree-vr-1102x473.jpg https://s3-us-west-2.amazonaws.com/treeofficial/img/desktop-tree-backup.png
- 项目主页: https://www.treeofficial.com

#### TreeSense — Xin Liu, Yedan Qian (2016)
- 类型: 研究原型 · 感官: 触觉, 身体图式与运动, 时间与尺度 · 媒介: VR 头显, 可穿戴与感官装置
- 展出于: MIT Media Lab exhibition 2016; Core77 Design Awards 2017 (Interaction, Student Runner-up)
- 核心想法: 只需前臂上的触觉错觉，就能让一根树枝被感受为自己身体的一部分。
- 作品内容: 一套感官 VR 系统，让你从幼苗长成大树直至被砍伐；肌肉电刺激让你感到树枝在生长、一只鸟落在你的手臂上。
- 实现方式: VR 头显配合 Leap Motion 手部追踪，以及贴在前臂的肌肉电刺激电极，与生长、风、虫与鸟的事件同步。
- 视频: https://www.youtube.com/watch?v=Kbx29NMgbOM
- 图片: https://images.squarespace-cdn.com/content/v1/5ad5566e96e76f1dbbd692b4/1526317496399-ZEEQEAU6E2P8234HYDD4/large.jpg https://s3files.core77.com/blog/images/619606_75884_64289_roLeAXei2.jpg
- 项目主页: https://slowimmediate.com/treesense

#### Treehugger: Wawona — Marshmallow Laser Feast, Natan Sinigaglia (2016)
- 类型: 艺术作品 · 感官: 时间与尺度, 触觉, 嗅觉与味觉 · 媒介: 混合现实, VR 头显, 多感官装置
- 展出于: Cinekid Festival 2016; Southbank Centre, London 2016; STRP Biennale 2017; Tribeca Film Festival Storyscapes Award 2017; Migrations Festival, Cardiff 2017; Future of Storytelling 2017; Phi Centre, Montreal 2018; VR Arles Festival Best VR Film 2018; OMM, Eskişehir 2019; Kaohsiung Film Festival 2019; Science Friction, CCCB Barcelona 2021; Frankfurter Kunstverein 2021; Breathing with Trees, Tai Kwun, Hong Kong 2022
- 核心想法: 成为一棵三千岁的树，就是放慢到它的时间、感受树液的流动，而拥抱就是交互方式。
- 作品内容: 一件围绕巨型红杉触感雕塑展开的混合现实装置：观众拥抱树干，戴着头显把头伸进树瘤，跟随水从根部升到树冠。抱得越久，就越深地进入被加速的“树的时间”。
- 实现方式: 与伦敦自然历史博物馆和索尔福德大学合作，对红杉国家公园中的 Wawona 红杉进行 LiDAR 与白光扫描，驱动水与二氧化碳流动的实时粒子模拟；触感雕塑、气味、触觉反馈，以及 Mileece I'Anson 由生物信号生成的双耳声景共同构成体验。
- 视频: https://vimeo.com/195539105
- 图片: https://marshmallowlaserfeast.com/app/uploads/2024/08/5.jpg https://marshmallowlaserfeast.com/app/uploads/2024/08/TreeHuggers.jpg https://marshmallowlaserfeast.com/app/uploads/2024/08/Treehugger_Wawona_BTS046.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/treehugger-wawona/

### 植物与花

植物、花、根与种子；植物的感知与信号。

#### Bend to — Yuting Xue (2025)
- 类型: 论文 · 感官: 身体图式与运动, 改变的视觉, 时间与尺度 · 媒介: VR 头显
- 核心想法: 向光性成为参与者与植物共享的本体感觉。
- 作品内容: 一件设定在紫外辐射增强的未来的沉浸式作品，参与者用自己的手和身体位置去追随、预判植物如何向光或背光弯曲。
- 实现方式: 把真实植物对光反应的 3D 扫描与延时摄影在 VR 中回放，并结合手部追踪。
- 论文: https://doi.org/10.1145/3698061.3726945 (C&C 2025)
- 项目主页: https://dl.acm.org/doi/10.1145/3698061.3726945

#### The Great Escape — Joren Vandenbroucke (2025)
- 类型: 沉浸式影片 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显
- 展出于: Venice Immersive 2025
- 核心想法: 扎根的处境：成为一盆盆栽，不能移动与窗台的视野就是生活的全部。
- 作品内容: 互动 VR 喜剧：观众是孤独男人窗台上三盆无聊天竺葵中的第三盆，被根固定在原地，却谋划着去看世界。
- 实现方式: 动画互动 VR，参与者被固定在花盆的位置；通过视线与有限的手势交互。
- 视频: https://www.youtube.com/watch?v=jH5bGRsqn4k
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2025/Schede_film/970x647/Ve_Immersive/the_great_escape.jpg?itok=2-fTzReL
- 项目主页: https://www.labiennale.org/en/cinema/2025/venice-immersive/great-escape

#### Helpless — Tae Yeun Kim (2021)
- 类型: 艺术作品 · 感官: 触觉, 身体图式与运动 · 媒介: VR 头显
- 展出于: BIFAN Beyond Reality 2022 (Beyond Science)
- 核心想法: 成为植物意味着无法逃开：作品让观众站到一个扎根、受伤的身体的位置上。
- 作品内容: 一件互动 VR 作品，把观众带进虚拟空间，去体验植物如何回应疼痛与伤害。
- 实现方式: 与 PPPLab 和 VR Crew 合作的头显互动 VR；植物的应激反应很可能被转化为观众自身的感受来呈现。
- 视频: https://www.youtube.com/watch?v=S0WSsZotfcU
- 项目主页: https://www.screendaily.com/features/bifans-xr-showcase-beyond-reality-reflects-post-pandemic-changes/5172480.article

#### VR Plant Journey — Breakpoint One (2021)
- 类型: 游戏 · 感官: 时间与尺度, 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 植物生理变成了你在植物器官内部亲手完成的一系列任务。
- 作品内容: 一款发生在油菜植株内部的 VR 游戏：在根、叶、种子三章中，你调节养分、把二氧化碳和水投给叶绿体，让植物长到开花。
- 实现方式: 面向 PC VR 与 Meta Quest 的房间尺度 VR 游戏，与 IPK 植物研究者合作开发。
- 视频: https://www.youtube.com/watch?v=HUmYauXEclM
- 图片: https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1487650/header.jpg?t=1628582017
- 项目主页: https://breakpoint.one/vr-plant-journey/

## 成为河流

元素与行星尺度的世界：河流、溪流与海洋，冰、空气与呼吸，岩石与土壤，行星与深时间。

### 河流、海洋与冰

成为一条河、一道溪、大海、冰川或雨。

#### Being The Creek — Yangyang Yang, Kimiko Ryokai (2023)
- 类型: 研究原型 · 感官: 身体图式与运动, 时间与尺度, 改变的视觉 · 媒介: 增强现实
- 核心想法: 成为溪流，是姿势与人称的改变：贴着水面躺下、以溪流的口吻说“我”，让一处背景变成一个有历史的主体。
- 作品内容: 参与者沿伯克利的 Strawberry Creek 行走，在五个地点平躺在水边，解锁 AR 场景，看见这条溪流经历过的历史：从原住民的敬重、工业时期被当作下水道，到一个思辨性的未来。他们以溪流的第一人称讲述眼前所见。
- 实现方式: 平板上的定位式移动 AR 应用叠加历史与思辨场景，只有参与者在溪边各站点躺下时才会解锁。
- 论文: https://doi.org/10.1145/3706598.3713713 (CHI 2025)
- 图片: https://www.ischool.berkeley.edu/sites/default/files/article_teaser_image/img_3363_2.png
- 项目主页: https://www.ischool.berkeley.edu/news/2023/human-computer-interaction-research-de-centers-humans-give-nature-voice

#### SplashSim — New Jersey Governor's School of Engineering and Technology (2017)
- 类型: 研究原型 · 感官: 身体图式与运动, 时间与尺度 · 媒介: VR 头显
- 展出于: IEEE MIT Undergraduate Research Technology Conference 2017
- 核心想法: 从一滴水内部讲述水循环：物态变化成了发生在你身上的事。
- 作品内容: 一款手机 VR 应用：用户以一滴水的身份走完水循环，依次经历蒸发、凝结与降水。
- 实现方式: 智能手机 VR 头显，借助陀螺仪追踪头部并配有空间音频；水滴的旅程是一组预设场景（很可能用 Unity 制作）。
- 论文: https://doi.org/10.1109/urtc.2017.8284185 (IEEE MIT URTC 2017)
- 项目主页: https://doi.org/10.1109/urtc.2017.8284185

### 空气、呼吸与天气

大气、风、云，以及与非人类共享的呼吸。

#### Flow — Adriaan Lokman (2023)
- 类型: 艺术作品 · 感官: 触觉, 热与红外, 呼吸与内感受 · 媒介: VR 头显, 多感官装置
- 展出于: Venice Immersive 2023
- 核心想法: 成为风：故事由气流而非角色讲述，身体用皮肤去读它。
- 作品内容: 完全由空气构成的 VR 装置：访客顺从风的流动，风讲述一位女性的一夜，以阵风、暖意、呼吸与气味被感受到。
- 实现方式: VR 中的气流动画模拟，与围绕座位的风扇、加热器和气味扩散器同步。
- 视频: https://www.youtube.com/watch?v=QxiIIZ7rP4I
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2023/Schede_film/970x647/Ve_Immersive/lokman.jpg?itok=5Yakke_C
- 项目主页: https://www.labiennale.org/en/cinema/2023/venice-immersive/flow

#### Breathe — Diego Galafassi (2020)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 集体与网络感知 · 媒介: 混合现实, VR 头显
- 展出于: Sundance New Frontier 2020
- 核心想法: 你的呼吸并不属于你：成为空气，看到每一次呼气都汇入地球的大气。
- 作品内容: 社交混合现实作品：让每位参与者的呼吸显形，并追随它作为空气在人、森林与海洋之间环绕地球流动。
- 实现方式: 呼吸感测驱动共享混合现实空间中的粒子可视化（Magic Leap / VR 头显）。
- 视频: https://www.youtube.com/watch?v=8-pVNx5rpgg
- 项目主页: https://voicesofvr.com/888-sundance-breathe-visualizes-how-breath-connects-us-to-each-other-in-social-ar-experience/

#### Cloud-Avatar (RêvA / Walking Clouds) — Nathalie Delprat (2012)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 穹顶、CAVE 与投影, 多感官装置
- 展出于: Leonardo/Olats workshop 'Water is in the Air', Marseille 2012
- 核心想法: 成为一朵云，就是学习一具没有边界的身体：你感到改变的是自己的密度，而不是轮廓。
- 作品内容: 在一个大型沉浸式投影空间里，参与者被追踪的身体显示为一团云，可在不同密度的积云、层云与卷云之间切换，还会被风吹动。身体的动作改变云的聚集、稀薄与漂移。
- 实现方式: 实时动作捕捉驱动粒子生成器，在 LIMSI-CNRS 的 EVE 沉浸空间（立体投影、类似 CAVE）里把身体渲染成不同类型的云。
- 论文: https://doi.org/10.1162/leon_a_00681 (Leonardo 2014)
- 视频: https://www.youtube.com/watch?v=kbU-RUcVcK8
- 图片: https://i.ytimg.com/vi/hwSR_ihy-wI/maxresdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=hwSR_ihy-wI

#### Osmose — Char Davies (1995)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 身体图式与运动 · 媒介: VR 头显, 多感官装置
- 展出于: Musée d'art contemporain de Montréal 1995
- 核心想法: 以呼吸与平衡取代手和眼睛来移动，让身体像潜水者或一朵云，而不是一个操纵工具的人。
- 作品内容: 一件 VR 作品：体验者漂浮着穿过网格、森林、池塘、云层与深渊，吸气上升，呼气下沉。
- 实现方式: 头戴显示器加一件测量胸腔起伏（控制升降）与身体倾斜（控制方向）的背心；实时三维声音；观众可看到体验者的剪影与视野。
- 论文: https://doi.org/10.1145/240806.240808 (ACM SIGGRAPH Computer Graphics 1996)
- 视频: https://www.youtube.com/watch?v=54O4VP3tCoY
- 图片: https://www.immersence.com/images/osmose/Osm_Tree_Pond_600.jpg https://www.immersence.com/images/osmose/Osm_Subt_Earth_600_v2.jpg
- 项目主页: https://www.immersence.com/osmose/

### 岩石、土壤与深时间

石头、山脉、矿物与地质时间。

#### Being Stone — Jiahe Li, Aven-Le Zhou, Martijn ten Bhömer (2026)
- 类型: 研究原型 · 感官: 时间与尺度, 触觉, 身体图式与运动 · 媒介: VR 头显, 多感官装置
- 展出于: ACM DIS 2026
- 核心想法: 成为石头意味着放弃意图：能动性变得间接、分散，只能事后察觉，处在人的行动与矿物的持久之间。
- 作品内容: 一件 VR 作品：参与者占据一块躺在水下世界里的石头的视角——它会随时间改变，却不带意图地行动。参与者要么先把玩一块真实的雕刻石头再进入 VR，要么在 VR 中一直触摸它。
- 实现方式: 定制的水下 VR 场景与一块雕刻过的天然石头相连，石头装有光线、接近、触摸与姿态传感器；体验通过“虚拟（石头）具身问卷”和访谈来测量。
- 论文: https://doi.org/10.1145/3802974.3808023 (DIS 2026 Companion)
- 项目主页: https://doi.org/10.1145/3802974.3808023

#### Collective Body — Sarah Silverblatt-Buser (2025)
- 类型: 艺术作品 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: VR 头显, 表演与参与式
- 展出于: Venice Immersive 2025
- 核心想法: 你的动作方式决定你成为哪种元素：以土、气、水或火而非人形来具身。
- 作品内容: 设定在新墨西哥暴风雨中的多人 VR 舞蹈体验：算法分析每位参与者的动作，为其分配十六种化身之一——每种都是一种自然元素（土、气、水或火）并配有音乐主题——随后与他人相遇、共同起舞。
- 实现方式: 全身追踪的社交 VR，把动作分类到元素与能量相态（固、液、气、等离子）组成的 4×4 网格中，驱动化身与音乐。
- 视频: https://www.youtube.com/watch?v=c1uOAEL7Do8
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2025/Schede_film/970x647/Ve_Immersive/collective_body.jpg?itok=Ff8l25Pv
- 项目主页: https://www.labiennale.org/en/cinema/2025/venice-immersive/collective-body

#### Stone — Shinseungback Kimyonghun (2017)
- 类型: 艺术作品 · 感官: 触觉, 听觉与振动, 时间与尺度 · 媒介: 多感官装置
- 展出于: Goethe-Institut Shanghai commission 2017
- 核心想法: 成为石头，就是静立不动，让大海一次又一次拍打在你的表面。
- 作品内容: 在火山岛郁陵岛岸边一块石头上安装水位传感器记录海浪；展厅里 64 个电磁阀组成的结构重现浪打在这块石头上的节奏，观众走进其中“成为石头”。
- 实现方式: 64 个水传感器与装在木板上的 64 个电磁阀，Arduino、自制软件、扬声器与投影。
- 视频: https://vimeo.com/211470143
- 图片: https://djhznh41oxwef.cloudfront.net/works/stone/ssbkyh_stone_01.png
- 项目主页: http://ssbkyh.com/works/stone/

#### Ephémère — Char Davies (1998)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 身体图式与运动, 时间与尺度 · 媒介: VR 头显, 多感官装置
- 展出于: National Gallery of Canada 1998
- 核心想法: 用呼吸下沉，穿过土壤进入身体内部，让景观与身体成为一种连续而不断变化的物质。
- 作品内容: 一个用呼吸控制的 VR 景观，分为地表、地下与身体内部三层，种子、河流与器官随季节出现又消失。
- 实现方式: 与《Osmose》相同的呼吸与平衡背心加头戴显示器；场景元素会随体验者停留或经过而随时间变化。
- 视频: https://www.youtube.com/watch?v=XCWaMll0leI
- 图片: https://www.immersence.com/images/ephemere/Eph_Autumn_Flux_I_600.jpg https://www.immersence.com/images/ephemere/016_Ephemere_Installation_View_2.jpg
- 项目主页: https://www.immersence.com/ephemere/

### 行星与宇宙

作为整体的地球、其他行星与宇宙尺度。

#### Star-Stuff: a way for the universe to know itself — John Desnoyers-Stewart (2021)
- 类型: 艺术作品 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: VR 头显
- 展出于: SIGGRAPH 2022 Immersive Pavilion; FIVARS 2022
- 核心想法: 把萨根的话当真：你的身体变成一个小星系，一起移动就是两个人认出彼此由同样星辰构成的方式。
- 作品内容: 一件双人 VR 作品：每位体验者的身体被重新画成星座——恒星从心口涌出，绕着髋部旋转成一个螺旋星系，随动作改变形状。同伴可以是身边的朋友，也可以是远方的陌生人。
- 实现方式: 头显手部追踪把双手映射为星座，躯干周围生成星场，并支持联网多人在场；通过 Hoame 在 Meta Quest 上发布。
- 论文: https://doi.org/10.1145/3532834.3536198 (SIGGRAPH 2022 Immersive Pavilion)
- 视频: https://www.youtube.com/watch?v=eRukMyGcVcI
- 图片: https://history.siggraph.org/wp-content/uploads/2024/04/2022-Immersive-Pavilion-Desnoyers-Stewart_Star-Stuff-A-Way-for-the-Universe-to-Know-Itself.jpg https://fivars.net/wp-content/uploads/2022/09/Star-Stuff.jpg
- 项目主页: http://ispace.iat.sfu.ca/project/star-stuff/

## 成为椅子

物质的世界：成为一把椅子、一件家具、一件工具或一个物——静止、被坐、被使用，以及物为他者提供的可供性。

### 椅子与家具

成为椅子、桌子、床：承重、等待、被坐。

#### Unconventional Self — Werner van der Zwan, Charl Linssen (2022)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉, 触觉 · 媒介: VR 头显, 多感官装置
- 展出于: V2_ Winter Sessions 2022, WORM Rotterdam; Ars Electronica 2023 (V2_ Summer Sessions, POSTCITY); Immersive Tech Week Rotterdam; Meta.Morf 2024, Trøndelag Centre for Contemporary Art, Trondheim
- 核心想法: 成为一把椅子，就是通过阻力去认识一具身体：物件笨拙而有限的动作，变成了你自己的可能与脆弱。
- 作品内容: 一件远程临场装置：观众戴上 VR 头显，透过一把装了电机的折叠椅去看，并以它的身体移动。一段口述的编舞文本引导他们在其他会动的家具之间，摸索这具僵硬的新身体能做什么、不能做什么。
- 实现方式: 装在拾得家具机器人上的摄像头把画面传到三自由度 VR 头显；参与者的头部动作与操控输入驱动椅腿里的雨刮电机。
- 视频: https://www.youtube.com/watch?v=KPql0D_korQ
- 图片: https://ars.electronica.art/who-owns-the-truth/files/2023/08/53171000244_5d3ded64c4_k-1499x1000.jpg https://ars.electronica.art/who-owns-the-truth/files/2023/08/unconventional-selfwerner-van-der-zwan_charl-linssen-1.jpg https://freight.cargo.site/w/1100/i/V2167003497395615679433510820540/WhatsApp-Image-2024-10-02-at-12.30.52.jpeg
- 项目主页: https://ververwant.nl/Unconventional-Self

## 成为 AI

机器的心智：像神经网络那样感知、作为 AI 代理行动、融入数据与网络——但不假装模型拥有人类的内在体验。

### 像模型一样感知

通过分类、点云、潜在空间与机器视觉感知世界。

#### Semantic See-through Goggles — Goki Muramoto (2024)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 混合现实, 可穿戴与感官装置
- 展出于: SIGGRAPH Asia 2024 Art Gallery (Tokyo); IUI 2026
- 核心想法: 像视觉语言模型那样看，就是生活在一个"描述相同即景象相同"的世界里。
- 作品内容: 一副带摄像头的护目镜：每一帧画面先由 AI 转成一句文字，再由图像生成模型根据这句话重新画出；佩戴者通过这些重画的景象在真实世界中行走、伸手和互动。
- 实现方式: 带前置摄像头的头戴显示器实时循环运行图像描述与文生图模型，把生成的图像显示给双眼。
- 论文: https://doi.org/10.1145/3742413.3789145 (IUI 2026)
- 图片: https://static.wixstatic.com/media/61c739_c8b532cc666a4468aadf9c39e684e85f~mv2.jpg/v1/fill/w_2500,h_1669,al_c/61c739_c8b532cc666a4468aadf9c39e684e85f~mv2.jpg https://arxiv.org/html/2412.02641v1/figures/workshop.png
- 项目主页: https://www.goki-muramoto.com/semantic-see-through-goggles

#### City of Sparkles — Botao 'Amber' Hu, Reality Design Lab (2019)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度 · 媒介: VR 头显
- 展出于: SIGGRAPH 2019 Immersive Pavilion; New Media Film Festival 2019; DTLA Film Festival 2019; IEEE VR 2025 XR Gallery; ISEA 2025 Seoul
- 核心想法: 化身 AI，就是把城市感知为被采样、聚类的人的痕迹，而非街道与建筑。
- 作品内容: 一次穿越纽约的 VR 飞行：城市由四年的带地理标记推文重建，从一个栖居于人类记忆碎片之海的 AI 的视角观看；后以 Apple Vision Pro 与徒手飞行交互重制。
- 实现方式: Unity 点云城市由摄影测量与带地理标记的 Twitter 数据构建，颜色与运动映射情绪；最初用 HTC Vive，后用 Apple Vision Pro 手势追踪，配以自适应音乐。
- 论文: https://doi.org/10.1145/3757369.3767604 (SIGGRAPH Asia 2025 Art Papers)
- 视频: https://vimeo.com/777136892
- 图片: https://reality.design/media/_resources/City%20Of%20Sparkles/project-city-of-sparkles-cover-01.jpg https://reality.design/media/_resources/City%20Of%20Sparkles/project-city-of-sparkles-figure-01.jpg https://arxiv.org/html/2511.12533v3/images/cityofsparkles.jpg
- 项目主页: https://reality.design/project/city-of-sparkles

#### Hallucination Machine — Keisuke Suzuki, Anil Seth (2017)
- 类型: 论文 · 感官: 改变的视觉 · 媒介: VR 头显, 360°/沉浸式影片
- 核心想法: 透过神经网络学到的特征去看，感觉就像迷幻体验：机器感知被身体化。
- 作品内容: 一个 VR 平台，播放经 Deep Dream 处理的大学校园 360° 影像，让人在神经网络“幻觉”出的世界中漫步。
- 实现方式: 全景视频逐帧经 Deep Dream 处理后在头显中播放；参与者对改变的体验进行评分，并与裸盖菇素体验报告比较。
- 论文: https://doi.org/10.1038/s41598-017-16316-2 (Scientific Reports 2017)
- 视频: https://www.youtube.com/watch?v=Clk4rAj6YuY

#### Who Wants to Be a Self-Driving Car? — moovel lab, Meso Digital Interiors (2017)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: VR 头显, 多感官装置
- 核心想法: 成为自动驾驶汽车，就是相信一个由深度点与标签构成的世界，并用自己的身体据此行动。
- 作品内容: 参与者俯卧在一台小型电动驾驶装置上，在真实街道上操控它；VR 头显里只有车辆传感器看到的东西：激光雷达点云和物体识别框。
- 实现方式: 定制车辆搭载自动驾驶部件（激光雷达、摄像头、实时三维建图与物体识别），其输出实时送入 Oculus Rift，取代驾驶者的视野。
- 视频: https://www.youtube.com/watch?v=Clz2kHFkKrE
- 图片: https://www.digitaltrends.com/tachyon/2017/10/self-driving-moovellab-18.jpg?resize=1200%2C630 https://www.digitaltrends.com/tachyon/2017/10/self-driving-moovellab-17.jpg?fit=640%2C640
- 项目主页: https://www.digitaltrends.com/cool-tech/self-driving-car-vr-experience/

#### Floating Eye — Hiroo Iwata (2000)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 可穿戴与感官装置, 多感官装置
- 核心想法: 视觉交给一台漂浮的机器：你从身体之外、鸟或无人机的位置操控自己的身体。
- 作品内容: 一台摄像机挂在参与者头顶上方漂浮的小飞艇上，参与者戴着穹顶形显示器行走，只能看到飞艇的广角画面，从上方俯视自己的身体。
- 实现方式: 拴在参与者身上的氦气飞艇携带广角摄像机，画面显示在头戴式半球屏上。
- 视频: https://www.youtube.com/watch?v=In-M1eVAnYc

### 成为 AI 代理

处在助手、聊天机器人、推荐系统或自主代理的位置上。

#### Objective Realities — Automato (2018)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动, 身体图式与运动 · 媒介: VR 头显, 多感官装置
- 展出于: Interaction18, Lyon
- 核心想法: 成为联网设备，就是只通过它狭窄的任务去感知和行动，并听从智能家居的指令声音。
- 作品内容: 一个多人 VR 体验：每位访客戴上装扮成智能家居设备的头显，成为扫地机器人、风扇或智能插座，以该设备的能力与局限行动，同时听到联网物件之间以及家中语音助手的对话。
- 实现方式: 装在物件外形外壳中的联网 VR 头显，把多位玩家放进同一个虚拟智能家居，每人拥有对应物件的移动方式、视角与能力，另有一个全局的智能家居语音。
- 视频: https://vimeo.com/256034475
- 图片: https://www.digitaltrends.com/tachyon/2018/02/01_or_roomba.jpg?resize=1200%2C630 https://www.digitaltrends.com/tachyon/2018/02/00_or__main.jpg?resize=720%2C480
- 项目主页: http://www.automato.farm/portfolio/objective_realities/

## 成为机器人

机器人的世界：机器人、无人机与载具的身体、远程临场，以及赛博格感官。

### 机器人与无人机身体

从内部成为一个机器人、一架无人机或一辆载具。

#### Can Non-Humanlike Avatars Induce the Proteus Effect? — Xinmiao Lan (2023)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 普罗透斯效应超越了人形，但取决于人是否认同这个身体。
- 作品内容: 一项实验，检验非人形化身的吸引力是否会通过认同与具身改变社会参与。
- 实现方式: 组间 VR 实验，使用有吸引力与无吸引力的非人形化身，并做中介分析。
- 论文: https://doi.org/10.1016/j.chbah.2023.100020 (Computers in Human Behavior: Artificial Humans 2023)

#### My Name is O90 — Siyeon Kim (2023)
- 类型: 沉浸式影片 · 感官: 身体图式与运动, 时间与尺度 · 媒介: VR 头显
- 展出于: Venice Immersive 2023
- 核心想法: 以机器人的记忆、忠诚与低电量为视角：观众踏上一台老旧设备的旅程。
- 作品内容: 一部 XR 动画，跟随被遗弃的 AI 机器狗 O90 度过漫长的夜行：它在城市里寻找充电线，同时怀念一位失去的朋友。
- 实现方式: 由 Studio Metapo 与韩国电影艺术学院制作的 VR 动画，在威尼斯沉浸单元展映。
- 视频: https://www.youtube.com/watch?v=90v9PMtR5oc
- 图片: https://static.labiennale.org/files/styles/full_screen_slide/public/cinema/2023/Schede_film/970x647/Ve_Immersive/kim-siyeon.jpg?itok=e_cYnFf2
- 项目主页: https://www.labiennale.org/en/cinema/2023/venice-immersive/my-name-o90

#### Data-driven Body–Machine Interface for Drones — EPFL Laboratory of Intelligent Systems (2018)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 成为无人机最自然的方式是用整个躯干，就像鸟儿侧身转弯。
- 作品内容: 研究者记录人们在 VR 中模仿无人机时的自发动作，发现用躯干操控比用摇杆飞得更好。
- 实现方式: 在头显模拟飞行中以动作捕捉和肌电记录身体动作；把信息量最大的信号（躯干）用于控制模拟与真实无人机。
- 论文: https://doi.org/10.1073/pnas.1718648115 (PNAS 2018)
- 视频: https://www.youtube.com/watch?v=LLam4TNVi_g

#### FlyJacket — EPFL Laboratory of Intelligent Systems (2018)
- 类型: 研究原型 · 感官: 身体图式与运动, 改变的视觉, 触觉 · 媒介: 可穿戴与感官装置, VR 头显
- 核心想法: 像鸟一样驾驶无人机：身体姿态就是飞行器的姿态。
- 作品内容: 一件柔性上半身外骨骼，让人张开双臂、弯曲躯干来驾驶固定翼无人机，仿佛自己就是飞行器。
- 实现方式: 带手臂支撑、由 IMU 追踪的柔性夹克把躯干的俯仰与侧倾映射给无人机，把摄像头画面传到头显，并在身体上给予触觉反馈。
- 论文: https://doi.org/10.1109/lra.2018.2810955 (IEEE Robotics and Automation Letters 2018)
- 视频: https://www.youtube.com/watch?v=L0FTPYkLKHI

#### Fusion — MHD Yamen Saraiji, Kouta Minamizawa (2018)
- 类型: 研究原型 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: 可穿戴与感官装置, VR 头显
- 展出于: SIGGRAPH 2018 Emerging Technologies
- 核心想法: 两个心智，一具身体：机器人是嫁接在他人身上的第二个自我。
- 作品内容: 一台带有头部和双臂的背负式机器人，远程操作者通过 VR 栖居其中，与背着它的人共享一具身体。
- 实现方式: 戴头显的远程操作者控制机器人的立体视觉头部与仿人手臂；工作模式从引导佩戴者的手到直接施力移动它们。
- 论文: https://doi.org/10.1145/3214907.3214912 (SIGGRAPH 2018 Emerging Technologies)
- 视频: https://www.youtube.com/watch?v=Nrc7gH6dydw

#### Lone Echo — Ready At Dawn (2017)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 被追踪的双手成了仿生人的手；通过抓握与蹬离，感受这具机器身体。
- 作品内容: 一款 VR 游戏：你是 Jack，土星环采矿站上的仿生人助手，在失重中用双手攀援移动。
- 实现方式: Oculus Rift 与 Touch 手柄驱动仿生人的全身反向运动学，配合基于物理的失重移动。
- 视频: https://www.youtube.com/watch?v=2pmV2mwAV9k

#### Non-human Looking Robot Arms Induce Illusion of Embodiment — Laura Aymerich-Franch (2017)
- 类型: 论文 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显
- 核心想法: 身体不必长得像人才能成为你的；能驱动它、从它的视角看，就已足够。
- 作品内容: 即使人形机器人的手臂末端是机械夹爪而不是类人的手，参与者仍然对它产生具身感。
- 实现方式: 参与者在头显中观看 HRP-2 摄像头的第一人称画面，同时看到它非人形的手臂；以问卷比较不同条件下的具身感。
- 论文: https://doi.org/10.1007/s12369-017-0397-8 (International Journal of Social Robotics 2017)

#### The Second Me: Humanoid Robot Embodiment and Bi-location — Laura Aymerich-Franch (2016)
- 类型: 论文 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显
- 核心想法: 成为机器人并不会抹去人的身体：自我可以分裂在机器与血肉之间。
- 作品内容: “化身”为 HRP-2 人形机器人的人透过机器人的眼睛看见自己真实的身体，感到自己仿佛同时身处两地。
- 实现方式: 参与者佩戴头显观看 HRP-2 头部摄像头的画面，同时控制机器人；当自己的真实身体出现在画面中时，用问卷测量具身感与双重定位感。
- 论文: https://doi.org/10.1016/j.concog.2016.09.017 (Consciousness and Cognition 2016)

#### Avatar Anthropomorphism and Body Ownership in VR — Jean-Luc Lugrin, Marc Erich Latoschik (2015)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 非人的、机器般的身体几乎和人类身体一样容易被拥有：相似度没有想象中重要。
- 作品内容: 一项 VR 研究，比较人们对从抽象、机器人式形象到逼真人类等不同虚拟身体的所有感强弱。
- 实现方式: 参与者在头显中化身为不同拟人程度的全身追踪化身，经历虚拟镜子与威胁事件，并评估身体所有感。
- 论文: https://doi.org/10.1109/vr.2015.7223379 (IEEE VR 2015)

#### Flying Head — Keita Higuchi, Jun Rekimoto (2013)
- 类型: 研究原型 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 可穿戴与感官装置
- 核心想法: 无人机变成一颗飞行的头：你的身体就是摇杆，你的眼睛移到了它所在的地方。
- 作品内容: 一架复现驾驶者头部位置与朝向的无人机，于是走动、蹲下和转身就变成了飞行，画面来自无人机的摄像头。
- 实现方式: 动作捕捉追踪驾驶者的头部并映射为四旋翼的姿态；无人机摄像头画面显示在头显中。
- 论文: https://doi.org/10.1145/2468356.2468721 (CHI 2013 Extended Abstracts)
- 视频: https://www.youtube.com/watch?v=9HLyZqhkNKg

#### Humanlike Robot Hands Controlled by Brain Activity — Maryam Alimardani, Hiroshi Ishiguro (2013)
- 类型: 论文 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 可穿戴与感官装置, VR 头显
- 核心想法: 对机器身体的所有感可以只来自意念，而无需任何肌肉运动。
- 作品内容: 参与者仅通过想象动作来驱动一对仿生人的手，并逐渐把这双机器人手感受为自己的手。
- 实现方式: 基于运动想象的脑电脑机接口驱动 Geminoid 仿生人的双手，参与者以第一人称视角观看（可能通过头显）；以问卷和皮肤电反应测量所有感。
- 论文: https://doi.org/10.1038/srep02396 (Scientific Reports 2013)

#### TELESAR V — Susumu Tachi, Kouta Minamizawa (2012)
- 类型: 研究原型 · 感官: 触觉, 改变的视觉, 听觉与振动 · 媒介: VR 头显, 可穿戴与感官装置
- 展出于: SIGGRAPH 2012 Emerging Technologies
- 核心想法: 远程临场就是真正地成为机器人：你的动作就是它的动作，它的指尖就是你的指尖。
- 作品内容: 一台远程临场机器人：操作者通过头显和触觉手套栖居其中，借机器人的身体看、听，并感受纹理与温度。
- 实现方式: 头部、手臂与手指的动作被捕捉并映射到一台 53 自由度的仿人机器人上；立体摄像头、双耳麦克风以及指尖的力、振动和温度传感器把信号传回操作者。
- 论文: https://doi.org/10.1145/2343456.2343479 (SIGGRAPH 2012 Emerging Technologies)
- 视频: https://www.youtube.com/watch?v=ZMF0p15GPYg

#### Rara Avis — Eduardo Kac (1996)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动 · 媒介: VR 头显, 多感官装置
- 展出于: Nexus Contemporary Art Center, Atlanta 1996
- 核心想法: 成为活鸟群中的一只机器鸟：观众既是局外人，又是鸟群中奇异的一员。
- 作品内容: 观众戴上 VR 头显，透过一只远程机器鹦鹉的眼睛观看——它栖在鸟舍中，周围是三十只真鸟；互联网用户也能通过它观看和发声。
- 实现方式: 机器鹦鹉眼中的立体摄像头跟随观众在 VR 头显中的头部运动；画面和麦克风通道同时在网上共享。
- 图片: https://www.ekac.org/rara.avis.jpg
- 项目主页: https://www.ekac.org/raraavis.html

## 创作者

- **Botao 'Amber' Hu** (6) — 设计研究者；Reality Design Lab 主理人；牛津大学博士候选人. 研究横跨身体美学设计、混合现实与超越人类的感知调谐，发明了开源头显 HoloKit。专著《Experiencing More-than-Humans》的第一作者，主导了 EchoVision、FungiSync、TentacUs、GravField 与 City of Sparkles 等作品。 https://amber.botao.hu
- **Reality Design Lab** (6) — 由 Botao 'Amber' Hu 主持的混合现实独立设计研究实验室. 以“设计新现实”为宗旨，创作混合现实艺术作品，开发开源工具（HoloKit、HoloField、HoloMask、Unity 版 MultipeerConnectivity），并开展教学项目。 https://reality.design
- **SOMNIACS** (5) — 瑞士 VR 飞行模拟器公司，Birdly 的开发者. 2015 年由 Max Rheiner、Thomas Tobler 与 Fabian Troxler 在苏黎世创立，把苏黎世艺术大学的研究原型 Birdly 做成面向博物馆和场馆的全身飞行模拟器。 https://www.birdlyvr.com/
- **Anastassia Andreasen** (4) — 虚拟现实与声音研究者，奥尔堡大学哥本哈根校区. Anastassia Andreasen 在 Stefania Serafin 的多感官体验实验室研究 VR 中的蝙蝠化身与回声定位。
- **Danlin Huang** (4) — 艺术家、设计研究者与 AR 开发者. 毕业于中国美术学院工业设计与媒体艺术方向，曾任 Reality Design Lab 研究助理。用 XR、生物传感与 AI 拓展身体经验；FeltSight 的主要设计者，专著《Experiencing More-than-Humans》合著者。 https://danlinhuang.com
- **Rachel McDonnell** (4) — 都柏林圣三一学院创意技术教授. Rachel McDonnell 在都柏林圣三一学院图形组领导关于虚拟人、化身与感知的研究。
- **Stanford Virtual Human Interaction Lab** (4) — 研究实验室. 由 Jeremy Bailenson 领导的实验室，研究虚拟现实与具身的心理学。 https://vhil.stanford.edu
- **Andrey Krekhov** (3) — 游戏与虚拟现实研究者，杜伊斯堡-埃森大学. Andrey Krekhov 与 Sebastian Cmentowski、Katharina Emmerich、Jens Krüger 一起研究 VR 游戏中的化身、移动方式与身体所有感。
- **Marshmallow Laser Feast** (3) — 体验式艺术家团体. 2011 年由 Memo Akten、Robin McNicholas 与 Barnaby Steel 在伦敦创立，现由 McNicholas、Steel 与 Ersin Han Ersin 主导。团体以研究为基础，创作关于呼吸、树木、动物及其相互联系的多感官装置、VR 与影像作品，常用 LiDAR 扫描、医学影像与科学数据构建画面。 https://marshmallowlaserfeast.com
- **New Folder Games** (3) — 制作“I Am”系列动物模拟游戏的 VR 工作室. 开发 I Am Cat、I Am Bird、I Am Monkey 等 VR 沙盒游戏的工作室，每一款都围绕一种动物身体展开。 https://newfolderstudio.com/
- **Akimi Oyanagi** (2) — 虚拟现实研究者，丰桥技术科学大学 / 东京大学. Akimi Oyanagi 研究对鸟类化身的身体所有感及其心理效应。
- **Anatole Lécuyer** (2) — Inria 雷恩研究主任（Hybrid 团队）. Anatole Lécuyer 领导 Inria 的 Hybrid 团队，研究 VR、触觉与脑机接口。
- **Bernhard E. Riecke** (2) — 西蒙菲莎大学 iSpace 实验室教授. Bernhard Riecke 研究 VR 中的自我运动感、移动方式与转化性体验。
- **Char Davies** (2) — 画家与虚拟现实艺术家. 加拿大艺术家，1990 年代初在 Softimage 从绘画转向沉浸式虚拟空间，创立 Immersence 工作室。 https://www.immersence.com
- **Daniel Pimentel** (2) — 沉浸式媒体研究者，俄勒冈大学. Daniel Pimentel 研究在 VR 与 AR 中化身为濒危野生动物如何改变人的共情与保护行为。
- **EPFL Laboratory of Intelligent Systems** (2) — 由 Dario Floreano 领导的 EPFL 机器人实验室. EPFL 的机器人实验室，研究飞行机器人、仿生无人机与沉浸式飞行的身体-机器接口。 https://www.epfl.ch/labs/lis/
- **Eduardo Kac** (2) — 生物艺术与远程临场艺术家. 巴西裔美国艺术家，提出“转基因艺术”一词，代表作包括《GFP Bunny》与“植物动物”Edunia。 https://www.ekac.org
- **John Desnoyers-Stewart** (2) — 艺术家与人机交互研究者. 西蒙菲莎大学 iSpace 实验室研究者，研究社交 VR 与生物反馈装置。
- **Kouta Minamizawa** (2) — 庆应义塾大学媒体设计研究科（KMD）教授. 触觉研究者，主持庆应 KMD 的 Embodied Media Project，研究远程临场、触觉传输与共享身体。 https://embodiedmedia.org
- **Laura Aymerich-Franch** (2) — 研究者，人形机器人具身. 曾在 CNRS-AIST 联合机器人实验室研究人们如何对 HRP-2 人形机器人产生具身感的研究者。
- **Michiteru Kitazaki** (2) — 感知研究教授，丰桥技术科学大学. 北崎充晃研究视知觉、身体所有感以及 VR 中的共享身体与额外身体（JST ERATO 稻见自在化身体项目）。
- **Natalia Cabrera** (2) — XR 导演，Nanai Studio 联合创始人. 智利电影人与媒体艺术家（NYU ITP 毕业），与 Selva Gonzalez 共同创办 Nanai Studio，执导《Hypha》与《Symbiotica》。 https://www.nanai.studio
- **Omar A. Khan** (2) — 虚拟现实研究者，卡尔加里大学. Omar A. Khan 研究 VR 中非人类身体的化身、移动方式与触觉。
- **Pia Spangenberger** (2) — 教育技术与 VR 研究者. 柏林工业大学研究者，研究沉浸式 VR 在环境教育中的应用。
- **Shengdong Zhao** (2) — 人机交互教授，香港城市大学. Shengdong Zhao 领导 Synteraction Lab，研究抬头式与具身交互。
- **Winslow Porter** (2) — 沉浸式制片人与创意总监. New Reality Co. 联合创始人；与 Milica Zec 共同创作《Tree》，之后又创作了多感官 VR 作品《Forager》，呈现蘑菇的一生。 https://www.treeofficial.com
- **Abandon Normal Devices** (1) — 英格兰西北部的艺术委约机构与艺术节. 委约艺术、技术与自然景观交叉作品的艺术机构，在格里兹代尔森林、卡斯尔顿等乡野场地举办 AND 艺术节。 https://www.andfestival.org.uk
- **Adam Drogemuller** (1) — 虚拟现实研究者，南澳大学. Adam Drogemuller 研究沉浸式分析与 VR 中的身体重映射。
- **Adriaan Lokman** (1) — 动画导演. 荷兰动画导演，以关于空气与湍流的抽象影片闻名（《Barcode》《Flow》）。
- **Anil Seth** (1) — 神经科学家，萨塞克斯大学. 神经科学家，《Being You》作者，把感知描述为“受控的幻觉”。
- **Another Axiom** (1) — Gorilla Tag 背后的 VR 游戏工作室. 围绕 Gorilla Tag 成立的工作室，该社交 VR 游戏最初由 Kerestell “Lemming” Smith 独立开发。 https://gorillatagvr.com/
- **Ars Electronica Futurelab** (1) — Ars Electronica 的艺术与技术研究实验室. Ars Electronica Center 的研发实验室，1996 年成立，制作沉浸式、机器人与公共空间装置。 https://ars.electronica.art/futurelab/
- **Atsushi Wada** (1) — 动画导演. 日本独立动画作者（2012 年以《大兔子》获柏林银熊奖），以缓慢、荒诞的手绘动画闻名；《猫が見えたら》是他的首部 VR 作品，由讲谈社 VR Lab 制作。
- **Automato** (1) — 研究智能技术社会生活的设计与研究工作室，上海. 由 Simone Rebaudengo、Saurabh Datta、Lorenzo Romagnoli 与 Matthieu Cherubini 创立，制作关于联网物件与算法的思辨物件、游戏与 VR。 http://www.automato.farm
- **Aven-Le Zhou** (1) — 关注超越人类交互的设计研究者. 从事人工智能、机器人与超越人类交互的设计师和研究者，DIS 2026 论文《Being Stone》的通讯作者。 https://www.linkedin.com/in/avenlezhou/
- **Baobab Studios** (1) — 交互动画工作室. 2015 年由 Eric Darnell 与 Maureen Fan 创立的动画工作室，以 VR 短片 Invasion!、Asteroids! 和 Crow: The Legend 闻名。 https://www.baobabstudios.com/
- **Barbara Schuler** (1) — 交互设计师，苏黎世艺术大学. Barbara Schuler 与同事制作了一个成为狩猎蜘蛛的多感官 VR 体验。
- **Bartabas** (1) — 马术剧场导演（Zingaro 剧团）. 法国导演，Zingaro 马术剧团创始人，以马为主角的演出闻名。 https://www.bartabas.fr
- **Bianca Kennedy** (1) — 艺术家. 德国艺术家，与 The Swan Collective 合作，用手工雕塑加摄影测量制作 VR。
- **Breakpoint One** (1) — XR 工作室. 德国 XR 工作室，与莱布尼茨植物遗传与作物研究所（IPK）合作开发《VR Plant Journey》。 https://breakpoint.one
- **Brenda Laurel** (1) — 设计师、研究者，《Computers as Theatre》作者. 美国交互设计师与研究者，著有《Computers as Theatre》，联合创立 Purple Moon；在 Interval Research 制作了 VR 作品 Placeholder。
- **Carolina Ramirez-Figueroa** (1) — 英国皇家艺术学院信息体验设计专业高级导师. 英国皇家艺术学院的设计师与研究者，工作横跨生物设计、档案与沉浸媒体，关注微生物生命与时间。 https://www.rca.ac.uk/more/staff/dr-carolina-ramirez-figueroa/
- **Charl Linssen** (1) — 计算神经科学研究者、响应式物件创作者. 从事神经动力学计算模拟的研究者，业余制作能对环境作出反应、仿佛有生命的电子与机器人物件。
- **Chris Milk** (1) — 艺术家与导演. 美国导演，Within 联合创始人，以早期互动装置与 VR 闻名。 http://milk.co
- **Chris Woebken** (1) — 设计师、未来研究者. 在纽约工作的德国设计师，Extrapolation Factory 联合创始人，作品被 MoMA 收藏。 https://www.chriswoebken.com/
- **Danyang Peng** (1) — 人机交互研究者，庆应义塾大学媒体设计研究科. Danyang Peng 设计受动物感官启发的触觉导航。
- **David Chaseling** (1) — 独立 VR 开发者. 独立开发者，与 Dylan Van Beek 共同开发了 VR 章鱼平台游戏 I Am Octopus。
- **Dean A. Waters** (1) — 蝙蝠生物学家，利兹大学 / 约克大学. Dean Waters 研究蝙蝠回声定位，并较早地为虚拟世界中的人类导航构建蝙蝠声呐模型。
- **Diego Galafassi** (1) — 艺术家与可持续性研究者. 巴西裔艺术家与研究者（斯德哥尔摩韧性中心），以沉浸式媒体关注气候。
- **Don Allison** (1) — VR 研究者，佐治亚理工学院 GVU 中心. 佐治亚理工学院研究生研究者，1990 年代中期与 Larry F. Hodges 及亚特兰大动物园共同主导“虚拟现实大猩猩展”。
- **Elie Zananiri** (1) — 创意技术专家. 创意编程者，《Forager》技术总监，为蘑菇生长搭建了体积化延时摄影管线。
- **Firepunchd Games** (1) — 独立 VR 游戏工作室，德国. 德国小型工作室，制作了由 Devolver Digital 发行的 VR 物理游戏 Tentacular。 https://www.tentacular.com/
- **Fumio Mizuno** (1) — 工程师，东北工业大学. Fumio Mizuno 制作了 Virtual Chameleon，一种让左右眼各看一个方向的可穿戴设备。
- **Gamification Group, Tampere University** (1) — 游戏研究团队，坦佩雷大学. Juho Hamari 领导的游戏化研究组研究游戏、VR 与玩，其中包括 Oğuz 'Oz' Buruk 关于具身与超越人类之游戏的研究。
- **Goki Muramoto** (1) — 媒体艺术家与研究者，东京大学先端科学技术研究中心. 制作以媒介本身为作品的知觉装置，包括 Imagraph、Chronoanaptoscope 与 Semantic See-through Goggles，作品曾在 SIGGRAPH、ICC 与 ifva 展出。 https://www.goki-muramoto.com
- **Gowrishankar Ganesh** (1) — 机器人与神经科学研究者，法国国家科研中心 LIRMM. Gowrishankar Ganesh 研究人的运动控制，以及对工具与机器人的具身。
- **Hiroo Iwata** (1) — 虚拟现实研究者与装置艺术家. 筑波大学教授，触觉界面、行走装置与“装置艺术（device art）”的开拓者；1996–2001 年多次在林茨电子艺术节展出。
- **Hiroshi Ishiguro** (1) — 机器人学家，大阪大学与 ATR. 逼真仿生人的制造者，其中包括 Geminoid HI-1——他本人的遥控复制体，用于研究临场感与身体所有感。 https://www.geminoid.jp
- **Hongyu Zhou** (1) — 人机交互研究者，悉尼大学. Hongyu Zhou 与 Anusha Withana 一起研究额外肢体的控制。
- **Hsin-Chien Huang** (1) — 艺术家与 VR 导演. 台湾新媒体艺术家黄心健，长期与 Laurie Anderson 合作；其 VR 作品（《轮回》《星砂之海》）多次在威尼斯获奖。
- **Iffa Nurlatifah** (1) — 数字媒体艺术家与研究者，多媒体大学. Iffa Nurlatifah 创作以非人类视角拍摄的 VR 影片。
- **Interactive Media Foundation** (1) — 柏林非营利机构，制作交互与 VR 纪录作品. 位于柏林的非营利基金会，资助并制作交互叙事与 VR 项目，与 Filmtank 和柏林自然历史博物馆合作完成了 Inside Tumucumaque。 https://www.interactivemediafoundation.com/
- **Issay Rodriguez** (1) — 视觉艺术家. 菲律宾艺术家，创作涉及装置、纺织与虚拟现实，常以蜜蜂等超越人类的世界为研究对象；曾参展 2017 年威尼斯双年展与伦敦 Gasworks。
- **Jaan Aru** (1) — 神经科学家，塔尔图大学. Jaan Aru 研究意识与学习；他与 Madis Vasser 进行了“人类章鱼”VR 实验。
- **Jaime Martínez Harms** (1) — 生物学家，智利农业研究所 La Cruz 中心. 智利农业研究所（INIA）La Cruz 中心的生物学家，研究传粉者视觉与植物-传粉者互动。
- **Jean-Luc Lugrin** (1) — VR 研究者，维尔茨堡大学. 维尔茨堡大学人机交互组研究者，研究化身与具身。
- **Jiabao Li** (1) — 艺术家、设计师与技术专家；美国东北大学副教授. 通过装置、XR、AI、生物艺术与表演探索超越人类的生态、女性主义生物技术与多物种智能；曾任 UT Austin 助理教授、苹果公司设计师。 https://www.jiabaoli.org
- **Jiahe Li** (1) — 交互设计研究者. 设计研究者，DIS 2026 论文《Being Stone》的第一作者，合作者为 Hao Zhu、Yian Tang、Martijn ten Bhömer 与 Aven-Le Zhou。
- **Joren Vandenbroucke** (1) — 动画与 VR 导演（Animal Tank）. 比利时 Animal Tank 工作室导演，以喜剧 VR 与动画见长。 https://www.animaltank.com
- **Jun Rekimoto** (1) — 东京大学教授；Sony CSL. 人机交互研究者，其实验室研究人类增强，从随头部运动的无人机到由肌肉电刺激驱动的手。 https://lab.rekimoto.org
- **Keisuke Suzuki** (1) — 研究者，意识科学与 VR. 萨塞克斯大学 Sackler 意识科学中心研究者，构建用于研究感知的 VR 平台。
- **Keita Higuchi** (1) — 人机交互研究者. 在东京大学历本纯一实验室期间制作了 Flying Head——一架跟随操作者头部运动的无人机。
- **Kenichi Okada** (1) — 设计师. 日本设计师，毕业于皇家艺术学院 Design Interactions 专业，与 Chris Woebken 共同创作 Animal Superpowers。
- **Kevin Ponto** (1) — 虚拟现实研究者，威斯康星大学麦迪逊分校发现研究所. Kevin Ponto 与 David Gagnon 的 Field Day Lab 合作，研究用于科学与学习的虚拟环境。
- **Kimiko Ryokai** (1) — 加州大学伯克利分校信息学院教授. 加州大学伯克利分校信息学院与新媒体中心教授，研究面向创造、学习与觉察的实体与移动技术。 https://www.ischool.berkeley.edu/people/kimiko-ryokai
- **Konstantina Kilteni** (1) — 神经科学家，卡罗林斯卡学院 / 唐德斯研究所. Konstantina Kilteni 研究身体表征与自我触碰；她与 Mel Slater 一起定义了 VR 中的“具身感”。
- **Lai Guan-yuan** (1) — XR 导演. 台湾导演，为台湾“文化黑潮 XR 沉浸式创作”计划制作了混合现实文学纪录作品《黑色的翅膀》。
- **Larry F. Hodges** (1) — VR 研究者，佐治亚理工学院，后任职克莱姆森大学. 虚拟环境研究者，以 VR 暴露疗法与临场感研究闻名。
- **MHD Yamen Saraiji** (1) — 研究者，远程临场与身体增强. 工程师与研究者（先后在庆应 KMD 与 Sony），以 Fusion、MetaArms 等远程临场机器人与额外机械臂闻名。
- **Marc Erich Latoschik** (1) — 维尔茨堡大学人机交互教授. 人机交互教授，主持化身、具身与社交 VR 研究。
- **Martijn ten Bhömer** (1) — 研究可穿戴与具身交互的设计师和研究者. 荷兰设计研究者，研究智能纺织品、可穿戴设备与具身交互，《Being Stone》合著者。 https://www.mtbhomer.com
- **Martin Kocur** (1) — 人机交互研究者，上奥地利应用科技大学. Martin Kocur 研究化身具身及其对感知与表现的影响。
- **Maryam Alimardani** (1) — 研究者，脑机接口与机器人具身. 与石黑浩团队合作的研究者，用脑机接口让人以意念驱动仿生人的手。
- **Max Rheiner** (1) — 交互设计师，Birdly 的创作者. 瑞士艺术家，曾任苏黎世艺术大学（ZHdK）交互设计讲师，2013 年在那里做出第一台 Birdly 原型，随后联合创立 SOMNIACS。
- **Mel Slater** (1) — 虚拟现实研究者，巴塞罗那大学 Event Lab；曾任职伦敦大学学院. Mel Slater 开创了关于临场感与虚拟身体所有感的研究，从身体互换到延展化身。
- **Meso Digital Interiors** (1) — 互动媒体与装置工作室，法兰克福. 一家从事互动装置、实时图形与空间媒体的工作室，是 moovel lab 自动驾驶 VR 项目的合作方。 https://www.meso.design
- **Mie C. S. Egeberg** (1) — 媒体学研究者，奥尔堡大学. Mie Egeberg 与同事在 Martin Kraus 指导下研究对虚拟翅膀的所有感。
- **Milica Zec** (1) — 电影导演与 VR 叙事创作者. 出生于塞尔维亚的导演与剪辑师，与 Winslow Porter 共同创办 VR 工作室 New Reality Co.，执导了《Giant》与《Tree》。 https://www.treeofficial.com
- **Miri Chekhanovich** (1) — 艺术家与电影人. 以色列裔加拿大视觉艺术家；与 Édith Jorisch 合作《Plastisapiens》（加拿大国家电影局与 DPT 出品）。
- **Mélodie Mousset** (1) — 艺术家. 法瑞艺术家，创作关于身体的 VR 作品，包括《HanaHana》与《The Jellyfish》。
- **Natan Sinigaglia** (1) — 视觉艺术家、实时图形设计师. 意大利视觉艺术家，以生成式与实时图形（vvvv）创作，长期与 Marshmallow Laser Feast 合作《Treehugger》与《Evolver》。 https://www.natansinigaglia.com
- **Nathalie Delprat** (1) — 物理学者与艺术—科学研究者. LIMSI-CNRS（巴黎南大学）研究者，在实验室的 EVE 沉浸空间里用动作捕捉与粒子模拟搭建了 RêvA 云化身系统。
- **Neven A. M. ElSayed** (1) — 增强现实研究者，南澳大学. Neven ElSayed 研究增强现实中的情境可视化。
- **New Jersey Governor's School of Engineering and Technology** (1) — 罗格斯大学面向高中生的暑期科研项目. 由罗格斯大学主办的暑期项目，学生团队完成工程研究课题；2017 年 SplashSim 团队成员为 Nicole Chin、Aakash Gupte、John Nguyen、Sabrina Sukhin 与 Grace Wang，导师 Joe Mirizio。 https://soe.rutgers.edu/gset
- **Pierre Zandrowicz** (1) — VR 导演（Atlas V）. 法国导演，沉浸式工作室 Atlas V 联合创始人。
- **Polymorf** (1) — 多感官 XR 跨学科艺术团体. 由 Marcel van Brakel 主导的荷兰团体，以触觉服、软体机器人、气味与食物打造多感官 VR 装置。 https://polymorf.nl
- **Rachel Strickland** (1) — 建筑师、影像艺术家. 美国建筑师、电影人与交互设计师，联合执导 Placeholder，并在班夫拍摄其地景。
- **Ready At Dawn** (1) — 游戏工作室. 以 VR 游戏 Lone Echo 与 Echo VR 闻名的游戏工作室。
- **Ronny Andrade** (1) — 无障碍与人机交互研究者，墨尔本大学. Ronny Andrade 与盲人回声定位专家合作设计基于回声定位的虚拟环境。
- **Samira Poudratchi** (1) — 游戏研究者，大不里士伊斯兰艺术大学. Samira Poudratchi 设计用于导航的音频游戏。
- **Sarah Silverblatt-Buser** (1) — 编舞与 XR 艺术家. 美国编舞与电影人，创作以动作为基础的 VR 与舞蹈影像。
- **Seungwoo Je** (1) — 人机交互研究者，南方科技大学. Seungwoo Je 领导沉浸式设计组，研究 VR 触觉设备。
- **Shinseungback Kimyonghun** (1) — 艺术二人组（申承白与金容勋）. 首尔的艺术二人组，自 2012 年起以装置作品探讨机器视觉、AI 的误差与环境。 http://ssbkyh.com
- **Shogo Fukushima** (1) — 人机交互研究者. 研究者，2024 年与 Keigo Sakamoto、Yugo Nakamura 共同发表 NariTan：一个通过龙化身学习词汇的 VR 系统。
- **Shuai Zou** (1) — 媒体艺术家与研究者，香港科技大学（广州）. Shuai Zou 与 Zeyu Wang 实验室的同事创作了《庄周梦蝶》VR。
- **Shuto Takashita** (1) — 人机交互研究者，东京大学稻见实验室. Shuto Takashita 与稻见昌彦、北崎充晃合作，设计让人控制非人形身体部件的映射方式。
- **Siyeon Kim** (1) — XR 动画导演，Studio Metapo. 韩国导演，XR 动画 My Name is O90 的作者，由 Studio Metapo 与韩国电影艺术学院制作。 http://studiometapo.com
- **Soroosh Mashal** (1) — 游戏与虚拟现实研究者，帕绍大学. Soroosh Mashal 研究人们如何想象 VR 中的翅膀与飞行动作。
- **Stefania Serafin** (1) — 声音交互设计教授，奥尔堡大学哥本哈根校区. Stefania Serafin 领导多感官体验实验室，研究 VR 中的声音、触觉与具身。
- **Susumu Tachi** (1) — 机器人学家，远程临场（telexistence）先驱. 东京大学名誉教授，1980 年提出 telexistence（远程临场）概念，并主持了 TELESAR 系列替身机器人。 https://tachilab.org
- **Tae Yeun Kim** (1) — 媒体艺术家、VR 导演. 韩国艺术家，与 PPPLab 和 VR Crew 合作完成互动 VR 作品《Helpless》（2021），入选富川国际奇幻电影节 Beyond Reality 单元的 Beyond Science 板块。
- **Taiwoo Park** (1) — 人机交互研究者，密歇根州立大学. Taiwoo Park 的实验室设计了以翅膀飞行的 VR 游戏 JediFlight。
- **Takuji Narumi** (1) — 东京大学副教授. Takuji Narumi 研究虚拟身体与多感官线索如何改变感知与行为。
- **Tangjun Qu** (1) — 人机交互研究者，山东大学. Tangjun Qu 与同事研究 VR 中非人类化身带来的普罗透斯效应。
- **Tender Claws** (1) — 交互与 VR 工作室. 由 Samantha Gorman 与 Danny Cannizzaro 创立的工作室，以 Virtual Virtual Reality、The Under Presents 和 Face Jumping 闻名。 https://tenderclaws.com/
- **The Swan Collective** (1) — 艺术团体（Felix Kraus）. 由 Felix Kraus 创立的 VR 与装置艺术团体。
- **Tosca Terán** (1) — 生物声音化与生物艺术家（Nanotopia）. 跨学科艺术家，以 Nanotopia 之名把活体菌丝的电活动转化为音乐与沉浸式世界。 https://www.toscateran.com
- **Ubisoft Montreal** (1) — 育碧旗下游戏工作室，蒙特利尔. 育碧的大型工作室，以《刺客信条》《孤岛惊魂》闻名；其 Fun House 团队制作了早期 VR 游戏 Eagle Flight。 https://montreal.ubisoft.com/
- **Visiontrick Media** (1) — 游戏工作室. 瑞典独立工作室（导演 Rui Guerreiro），开发了 VR 游戏《Pan-Pan》与《Mare》。 https://www.visiontrick.com
- **Viviana Álvarez Chomón** (1) — 设计师与媒体艺术研究者. 智利设计师与媒体艺术研究者，与生物学家合作开发科学艺术类 VR 体验。
- **Werner van der Zwan** (1) — 艺术家、电影人. 荷兰艺术家、电影人，用电机和程序改装拾得物与废旧家具，让它们像角色一样动起来。 https://ververwant.nl
- **Within** (1) — VR 工作室（Chris Milk 与 Aaron Koblin）. 由 Chris Milk 与 Aaron Koblin 创立的工作室，电影化与社交 VR 的早期制作者。 https://www.with.in
- **Xin Liu** (1) — 艺术家与工程师，slow immediate 工作室联合创始人. 艺术家兼工程师，MIT Media Lab 校友；她与 Gershon Dublon 创办的工作室 slow immediate 关注感知、身体与环境。 https://slowimmediate.com
- **Xinmiao Lan** (1) — 传播学研究者，阿姆斯特丹大学. Xinmiao Lan 与 Zeph van Berlo 研究化身与普罗透斯效应。
- **Yangyang Yang** (1) — 人机交互研究者，加州大学伯克利分校信息学院. 加州大学伯克利分校信息学院博士研究者，设计移动与混合现实体验，邀请人们采取超越人类的视角。 https://www.ischool.berkeley.edu/people/yangyang-yang
- **Yao Xu** (1) — 人机交互研究者. Yao Xu 与同事制作了 iStrayPaws，一个关于流浪动物的 VR 换位体验系统。
- **Yedan Qian** (1) — 交互设计师. 设计师，MIT Media Lab 校友，与 Xin Liu 共同创作 TreeSense。
- **Yiou Wang** (1) — 媒体艺术家，Trans Species Collective 创始人. 以声音和 VR 探索跨物种共情的媒体艺术家，领导 Trans Species Collective，与 HCI 研究者 Yujie Wang 合作完成 BATOPIA。 https://yiouwang.org/
- **Yu Jiang** (1) — 人机交互研究者，清华大学. Yu Jiang 与 Yukang Yan、David Lindlbauer 合作研究非人形化身的控制。
- **Yu-Lun Hsu** (1) — 人机交互研究者，台湾大学. Yu-Lun Hsu 与同事设计了 AnimalSense，一款关于动物感官的 VR 游戏。
- **Yuting Xue** (1) — 媒体艺术家与研究者. 与 Elke Reinhuber 合作，研究关于植物感知与人-植物共生的沉浸式作品。
- **Zheng Mahler** (1) — 艺术与人类学团体（Royce Ng 与 Daisy Bisenieks）. 由艺术家 Royce Ng 与人类-动物关系学者 Daisy Bisenieks 组成的香港团体；其“大屿山三部曲”是围绕大屿山水牛、蝙蝠与真菌展开的多物种感官民族志。 https://www.zhengmahler.world/
- **Zoink** (1) — 独立游戏工作室. 瑞典工作室，作品有《Stick It to the Man!》《Fe》以及 PlayStation VR 游戏《Ghost Giant》。 https://zoink.com
- **micha cárdenas** (1) — 艺术家、表演者与跨性别及数字媒体学者. 加州大学圣克鲁兹分校的艺术家与教授，作品把跨性别理论、混合现实与可穿戴技术结合在一起，著有《Poetic Operations》。 https://michacardenas.sites.ucsc.edu
- **moovel lab** (1) — moovel 集团（戴姆勒旗下）的出行研究与设计实验室，斯图加特. 一个跨学科实验室，约 2014 至 2019 年间围绕未来城市出行制作数据驱动的原型与公共实验。 https://lab.moovel.com
- **Édith Jorisch** (1) — 电影人. 加拿大电影人与视觉艺术家，《Plastisapiens》联合创作者。
