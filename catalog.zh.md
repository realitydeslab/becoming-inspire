# Becoming Inspire — 作品目录

用 XR 与感官技术让人成为另一种存在（蝙蝠、鼹鼠、鱼、章鱼、鸟、昆虫、动物、真菌、树、河流、机器人）的作品目录：艺术作品、沉浸式影片、游戏、研究原型与论文，由 Reality Design Lab 为《Experiencing More-than-Humans》一书整理。每件作品都列出核心想法、实现方式，以及视频、图片和论文链接。

https://becoming.reality.design · 2026-09-28 · 435 位创作者 · 569 件作品

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

#### The Tactile Helmet — Tony J. Prescott (2013)
- 类型: 研究原型 · 感官: 触觉 · 媒介: 可穿戴与感官装置
- 核心想法: 类胡须的远距离触觉，成为在黑暗中移动的新感官。
- 作品内容: 一个带测距传感器的头盔，受啮齿动物胡须启发在头部产生振动，帮助消防员在浓烟中感知墙壁。
- 实现方式: 头盔四周的超声波测距仪，映射到头部的振动触觉器。
- 论文: https://doi.org/10.1007/978-3-642-39802-5_3 (Living Machines 2013)

#### The Enactive Torch — Tom Froese (2012)
- 类型: 论文 · 感官: 触觉, 身体图式与运动 · 媒介: 可穿戴与感官装置
- 核心想法: 一条振动通道只要被主动使用，就会成为空间感：感知存在于移动与感受的回路中，就像鼹鼠的鼻子或老鼠的胡须。
- 作品内容: 一种手持装置，测量所指物体的距离并转成手上的振动，蒙眼的使用者像挥动胡须一样扫动它，感受物体和空隙。
- 实现方式: 超声或红外测距传感器映射到振动马达，记录扫动数据用于感知实验。
- 论文: https://doi.org/10.1109/TOH.2011.57 (IEEE Transactions on Haptics 2012)

#### What Is It Like to Be a Rat? — Ehud Ahissar (2010)
- 类型: 论文 · 感官: 触觉 · 媒介: 可穿戴与感官装置
- 核心想法: 人可以在几分钟内学会通过胡须进行主动触觉。
- 作品内容: 蒙眼参与者在手指上戴上人造胡须，学习像大鼠一样通过扫动胡须来定位物体。
- 实现方式: 把塑料胡须固定在指尖；在定位任务中记录手的运动与接触时间。
- 论文: https://doi.org/10.1007/978-3-642-14064-8_43 (EuroHaptics 2010)

### 地下与土壤生命

鼹鼠、蚯蚓、穴居动物与土壤里的生命。

#### The World Beneath Our Feet — Holition, George Monbiot (2022)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度 · 媒介: 多感官装置, 穹顶、CAVE 与投影
- 展出于: Our Time on Earth, Barbican 2022
- 核心想法: 土壤是一个像珊瑚礁一样值得珍视的活世界：下沉到土壤生物的尺度。
- 作品内容: 环形数字装置，把观众带到地下，不断放大土壤，展现其中丰富的微观生命。
- 实现方式: 多屏环绕投影呈现土壤微观生命动画，基于 Monbiot 著作《Regenesis》的研究。
- 图片: https://holition-com-prod.s3.amazonaws.com/attachments/cl4mm86zv7f8w0gr3vlzcuj0t-barbican-cover.full.jpg https://holition-com-prod.s3.amazonaws.com/attachments/cl3uehhfz6mqu0gr3ycxh3ouh-barbican-otoe-04-4.max.jpg
- 项目主页: https://holition.com/work/barbican-the-world-beneath-our-feet

#### Touchscaping — Saša Spačal (2017)
- 类型: 表演 · 感官: 触觉, 听觉与振动 · 媒介: 表演与参与式, 多感官装置
- 展出于: Tivoli Greenhouse, University Botanic Gardens Ljubljana 2017; Layer House, Kranj 2017
- 核心想法: 景观由物种之间的触碰生成：蚯蚓的土壤世界只有在接触时才被听见、看见。
- 作品内容: 一件活体雕塑：艺术家触摸一窝蚯蚓，传感器把接触转化为脉动的声音与随之生长的投影景观。
- 实现方式: 蚯蚓巢上的触觉传感器驱动生成式声音与投影在表演者周围的动画。
- 图片: https://www.agapea.si/wp-content/uploads/2017/07/20170419_photo_matic_zorman_8002.jpg https://www.agapea.si/wp-content/uploads/2017/08/20170419_photo_matic_zorman_7994.jpg
- 项目主页: https://www.agapea.si/en/projects/toucscaping

#### Mole Mania — Nintendo (1996)
- 类型: 游戏 · 感官: 身体图式与运动, 触觉 · 媒介: 游戏, 屏幕与网页
- 核心想法: 两层世界：挖洞让鼹鼠可以从地下绕过地面上挡路的障碍。
- 作品内容: 一款 Game Boy 解谜游戏：你是鼹鼠 Muddy，在地表与地下两层之间挖洞，把沉重的铁球推过每一屏。
- 实现方式: 在地表与地下两张相连的俯视地图上解谜，挖出的洞就是通道；由宫本茂担任制作人。
- 视频: https://www.youtube.com/watch?v=jkSsFJzjwDM
- 图片: https://i.ytimg.com/vi/jkSsFJzjwDM/hqdefault.jpg
- 项目主页: https://en.wikipedia.org/wiki/Mole_Mania

### 削弱视觉与黑暗

黑暗、模糊或移除的视觉，以及模拟失明的伦理问题。

#### Notes on Blindness: Into Darkness — Arnaud Colinart, Amaury La Burthe (2016)
- 类型: 艺术作品 · 感官: 听觉与振动, 改变的视觉 · 媒介: VR 头显, 空间音频
- 展出于: Sundance New Frontier 2016; Tribeca Film Festival 2016
- 核心想法: 一个由声音而非视觉构成的世界：落在花园里的雨“给一切勾出轮廓”。
- 作品内容: 改编自神学家 John Hull 失明后录音日记的 VR 作品：世界只在声音传来的地方显现为淡蓝色轮廓——雨、风、人声。
- 实现方式: 双耳音频结合实时渲染，几何只在声源处显现；在移动与 PC VR 上以视线交互。
- 视频: https://www.youtube.com/watch?v=Fj1HFTT1Qfk
- 项目主页: https://www.notesonblindness.co.uk

#### Blind Cinema — Britt Hatzius (2015)
- 类型: 表演 · 感官: 听觉与振动 · 媒介: 表演与参与式, 空间音频
- 展出于: International Film Festival Rotterdam 2016; PuSh International Performing Arts Festival 2018
- 核心想法: 图像由孩子在耳边的话语重建，看见依赖于另一个人的感知。
- 作品内容: 蒙着眼睛的成年人坐在电影院里，身后的孩子们低声描述一部只有孩子能看见的电影。
- 实现方式: 眼罩、投影电影，以及坐在观众身后的当地小学生现场低声讲述。
- 视频: https://www.youtube.com/watch?v=_L4Dj8Jbz1o
- 项目主页: https://www.youtube.com/watch?v=Vn8V8HlvLhQ

#### Door Into the Dark — Anagram (2014)
- 类型: 艺术作品 · 感官: 触觉, 听觉与振动, 身体图式与运动 · 媒介: 多感官装置, 空间音频, 表演与参与式
- 展出于: Sheffield DocFest iDocs (work in progress) 2014; Tribeca Film Festival Storyscapes Award 2015; IDFA DocLab
- 核心想法: 拿走视觉，让脚、手和耳朵引路，这是一条不借助头显、通往触觉优先世界的人类路径。
- 作品内容: 一件沉浸式装置：观众蒙眼、赤脚、独自进入，沿着绳索穿过森林、吊桥与变化的房间，耳边是关于迷失的双耳叙事，其中包括《Touching the Rock》作者 John Hull 的讲述。
- 实现方式: 以绳索引导的实体场景，地面材质多变，传感器随参与者前进触发双耳音频，内容来自纪录访谈。
- 视频: https://www.youtube.com/watch?v=ZBJWDMSms_Y
- 图片: https://weareanagram.co.uk/wp-content/uploads/2025/02/DITD_PosterPortrait-scaled.jpg https://weareanagram.co.uk/wp-content/uploads/2025/02/Doclab-Conference_Highres_NichonGlerum-65-768x512.jpg
- 项目主页: https://www.weareanagram.co.uk/door-into-the-dark

#### Your blind passenger — Olafur Eliasson (2010)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动, 触觉 · 媒介: 多感官装置
- 展出于: ARKEN Museum of Modern Art 2010; In Real Life, Tate Modern 2019
- 核心想法: 拿走视觉，让其他感官引路；身体像穴居动物那样，靠距离感和声音找到方向。
- 作品内容: 一条 90 米长、充满浓密彩色雾气的隧道，观众只能看清前方约一米，靠声音、触觉和光色变化前进。
- 实现方式: 在封闭长廊中使用造雾机与彩色荧光灯，沿途光色由黄变蓝。
- 视频: https://www.youtube.com/watch?v=JhQqtNUIlTY

#### Dialogue in the Dark — Andreas Heinecke (1988)
- 类型: 艺术作品 · 感官: 触觉, 听觉与振动 · 媒介: 多感官装置
- 展出于: Frankfurt 1988
- 核心想法: 移除视觉只是一半；另一半是被那些以这个世界为日常的人引导。
- 作品内容: 一场完全黑暗中的展览：观众在盲人或视障向导的带领下，靠触觉、声音和气味穿过公园、街道和咖啡馆等日常场景。
- 实现方式: 完全不透光的房间，布置真实物件、声景和材质，观众拿着白手杖跟随向导行走。
- 视频: https://www.youtube.com/watch?v=GWWJS6uBndo
- 项目主页: https://en.wikipedia.org/wiki/Dialogue_in_the_Dark

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

#### Training Humans in Bat Echolocation — Shizuko Hiryu (2023)
- 类型: 论文 · 感官: 回声定位, 听觉与振动 · 媒介: 空间音频
- 核心想法: 借用蝙蝠自己的叫声设计，而不是人的弹舌声，来教人听见空间。
- 作品内容: 一个训练系统：明眼人聆听模拟的类蝙蝠调频脉冲回声并学习定位物体，眼动仪记录他们看向哪里。
- 实现方式: 用时域有限差分声学模拟向下线性调频脉冲的双耳回声，通过耳机播放并配合眼动仪。
- 论文: https://arxiv.org/abs/2302.08794 (arXiv 2023)

#### What Is It Like to Be a Bat in Virtual Reality? — Jan Waligórski (2023)
- 类型: 论文 · 感官: 回声定位, 身体图式与运动 · 媒介: VR 头显
- 核心想法: VR 可以接近、但永远无法弥合内格尔所说的鸿沟。
- 作品内容: 一篇哲学论文，讨论带有改变感官（如回声定位）的 VR 化身能否让我们更接近另一种动物的视角。
- 实现方式: 借助现象学、具身研究与现有蝙蝠 VR 研究进行概念分析。
- 论文: https://doi.org/10.26913/avant.202302 (Avant 2023)

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

#### Perception — The Deep End Games (2017)
- 类型: 游戏 · 感官: 回声定位, 听觉与振动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 回声视觉作为渲染风格：角色是人类，但声音描绘空间的方式是类蝙蝠感知的参考设计。
- 作品内容: 一款第一人称恐怖游戏：盲人女性 Cassie 用手杖敲击，让闹鬼的房子在短暂的蓝色回声中显现。
- 实现方式: 每个声源都会用蓝色短暂勾勒附近的几何体，随后重新没入黑暗。
- 视频: https://www.youtube.com/watch?v=IlyRfKP-mxg
- 图片: https://i.ytimg.com/vi/IlyRfKP-mxg/hqdefault.jpg
- 项目主页: https://thedeependgames.com/

#### Stifled — Gattai Games (2017)
- 类型: 游戏 · 感官: 回声定位, 听觉与振动 · 媒介: VR 头显, 游戏
- 核心想法: 回声定位是唯一的光：发出声音让你看见，也让怪物听见你。
- 作品内容: 一款在黑暗中进行的恐怖游戏：世界只在声音反弹之处显现；在 VR 中，麦克风收录的玩家自己的声音会照亮房间。
- 实现方式: 麦克风输入与游戏内声音触发附近几何体上扩散的轮廓线；登陆 PlayStation VR 与 PC。
- 视频: https://www.youtube.com/watch?v=Icj6Pm5-yuc
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/514830/header.jpg
- 项目主页: https://gattaigames.com/stifled

#### Echolocation in Humans: An Overview — Lore Thaler (2016)
- 类型: 论文 · 感官: 回声定位, 听觉与振动 · 媒介: 空间音频
- 核心想法: 回声定位不只属于蝙蝠和海豚；它是人的技能，而且会调用视觉皮层。
- 作品内容: 一篇综述，回顾关于用弹舌进行回声定位的盲人的研究，包括回声定位专家大脑中的变化。
- 实现方式: 对弹舌回声定位的行为、声学与神经影像研究进行文献综述。
- 论文: https://doi.org/10.1002/wcs.1408 (WIREs Cognitive Science 2016)

#### Sonic Eye: A Device for Human Ultrasonic Echolocation — Jascha Sohl-Dickstein (2015)
- 类型: 研究原型 · 感官: 回声定位, 听觉与振动 · 媒介: 可穿戴与感官装置
- 核心想法: 听见蝙蝠听到的回声，放慢到人的速度，让耳廓的形状完成空间定位。
- 作品内容: 一个头戴设备：发出超声波啁啾，用装在仿蝙蝠耳廓里的麦克风录下回声，放慢后播放给佩戴者。
- 实现方式: 超声波发射器、装在人工耳廓中的立体声麦克风，以及把回声拉伸到可听范围的时间伸展处理。
- 论文: https://doi.org/10.1109/tbme.2015.2393371 (IEEE Transactions on Biomedical Engineering 2015)
- 视频: https://www.youtube.com/watch?v=md-VkLDwYzc

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

#### Binaural Sonar Aid (Sonicguide) — Leslie Kay (1974)
- 类型: 产品 · 感官: 回声定位, 听觉与振动 · 媒介: 可穿戴与感官装置
- 核心想法: 第一种让人拥有类蝙蝠空气声呐的可穿戴设备。
- 作品内容: 一副发射超声波的眼镜，把回声转换成两耳中可听的音调，让盲人佩戴者听出物体的距离和方向。
- 实现方式: 调频超声波发射器加两个接收器；回声延迟映射为音高，两耳强度差映射为方向。
- 论文: https://doi.org/10.1049/ree.1974.0148 (Radio and Electronic Engineer 1974)

#### Vespers — Alvin Lucier (1968)
- 类型: 表演 · 感官: 回声定位, 听觉与振动 · 媒介: 表演与参与式, 空间音频
- 核心想法: 把人类回声定位变成一场音乐会：观众听见一个房间被咔嗒声测绘出来，像蝙蝠听到的那样。
- 作品内容: 蒙眼的表演者手持咔嗒声发生器穿过黑暗空间，靠聆听回声找到路；作品献给蝙蝠科（Vespertilionidae）的蝙蝠。
- 实现方式: Sondol（声呐玩偶），一种手持脉冲振荡器，表演者改变咔嗒频率，从墙和物体的回声中读取空间。
- 视频: https://www.youtube.com/watch?v=U8CTqqvFNUo

### 声音环境界

其他动物的听觉范围与振动感官：次声、超声、地震波聆听。

#### Patterns of Perception: Hearing — Marshmallow Laser Feast (2026)
- 类型: 艺术作品 · 感官: 听觉与振动, 身体图式与运动 · 媒介: 多感官装置, 空间音频
- 核心想法: 从外部体验人类自己的听觉，使之变得陌生，这是与其他物种声音世界进行比较的第一步。
- 作品内容: 一部概念影片（2026），为 2027 年春将在牛津施瓦茨曼中心开幕的沉浸式装置而作，带领观众“离开身体”，穿行于自身的听觉之中。
- 实现方式: 通过牛津—彭博奖学金项目，与牛津人文学科和医学学者以及声音艺术家 James Bulley 合作开发；装置细节尚未公布。
- 视频: https://vimeo.com/1202169334
- 图片: https://i.vimeocdn.com/video/2169797066-ed64704ef53402bfbfc9482db6d724049eb67fd383d2ea9206348a4dbe638747-d_1280?region=us
- 项目主页: https://vimeo.com/1202169334

### 蝙蝠与夜行生命

把蝙蝠与夜行动物作为生命本身（而不只是感官）来呈现的作品。

#### Bat Night Market — Kuang-Yi Ku, Robert Charles Johnson (2024)
- 类型: 表演 · 感官: 嗅觉与味觉, 多感官 · 媒介: 表演与参与式, 多感官装置
- 展出于: LIFT Festival London 2024; Science Gallery London 2024
- 核心想法: 蝙蝠通过缺席而在场：它们消失后，食物和夜晚会少掉什么。
- 作品内容: 一场设定在未来台湾夜市的表演，那里的蝙蝠已经灭绝；观众品尝并触碰蝙蝠曾经提供的东西，从授粉到控制昆虫。
- 实现方式: 以蝙蝠生态研究为基础的思辨食物、夜市摊位、道具与现场表演。
- 视频: https://www.youtube.com/watch?v=y33bnqHH_yU
- 图片: https://www.liftfestival.com/wp-content/uploads/2024/02/4x3-ratio-website-Bat-NM-scaled.jpg
- 项目主页: https://www.liftfestival.com/event/bat-night-market/

#### Nocturnal Fugue — Jiabao Li, Matt McCorkle, Botao 'Amber' Hu (2024)
- 类型: 艺术作品 · 感官: 听觉与振动, 触觉 · 媒介: 空间音频, 多感官装置, 穹顶、CAVE 与投影
- 展出于: Ars Electronica 2024 “Hope”; Vancouver International Film Festival 2024; Sheffield DocFest 2024 Alternate Realities; The Contemporary Austin / Fusebox 2024; FACT Liverpool 2025; Millennium Docs Against Gravity 2025; AUREA Award 2025
- 核心想法: 在像蝙蝠一样感知之后，再把蝙蝠当作有名字、会唱歌、会争吵的社会性生命来聆听，同时承认其意义仍不可及。
- 作品内容: 与 EchoVision 一同展出的沉浸式声音与投影环境：经 AI 分类的蝙蝠叫声被编成摇篮曲、情歌与争吵，置于虚拟的蝙蝠栖所之中。
- 实现方式: 借助机器学习研究对蝙蝠叫声的行为分类（求偶、觅食、争斗、梳理），创作成空间音频，并配合沉浸式投影与地面触觉振动。
- 视频: https://www.youtube.com/watch?v=Nd5AGxZ7rlI
- 图片: https://static1.squarespace.com/static/58688c8a6a496327e937e35b/t/6567dcf5074e411c1d6aaf22/1701305603470/Nocturnal+Fugue+15.png?format=1500w https://ars.electronica.art/hope/files/2024/08/53972683148_3ef28e94d0_k.jpg
- 项目主页: https://www.jiabaoli.org/nocturnal-fugue

#### The (m)Otherhood of Meep (the bat translator) — Alinta Krauth (2023)
- 类型: 艺术作品 · 感官: 听觉与振动, 回声定位 · 媒介: 多感官装置, 屏幕与网页
- 展出于: S+T+ARTS Prize 2023 (nominated); Art Laboratory Berlin; The Glucksman, Cork; HOTA, Gold Coast
- 核心想法: 以蝙蝠照护者的身份去听：机器给出的是诗意的、坦承不完整的翻译，而不是宣称知道蝙蝠在说什么。
- 作品内容: 一个为灰头狐蝠做的 AI 翻译器，实时聆听它们的叫声并转成诗句，源于艺术家救护、抚养并放归幼蝠的经历。
- 实现方式: 在分类整理的狐蝠发声语料上训练的模型，以 TensorFlow 与 JavaScript 运行，生成文字与图像。
- 视频: https://www.youtube.com/watch?v=J8zNuyS5yj0
- 图片: https://ars.electronica.art/starts-prize/files/2023/06/Meep-Translator_Image2.jpg https://ars.electronica.art/starts-prize/files/2023/06/Meep-Translator_OutdoorTest3.jpg
- 项目主页: https://ars.electronica.art/starts-prize/en/the-motherhood-of-meep/

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

#### I Am Fish — Bossa Studios (2021)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 每条鱼只有一种身体技能——飞、鼓气、啃咬、滚鱼缸——玩家通过鱼的局限认识世界。
- 作品内容: 一款物理游戏：四条从宠物店逃出的鱼推着鱼缸滚动、鼓成球、跃过厨房与悬崖，奔向大海。
- 实现方式: 基于物理的操控把每个物种的运动（河豚鼓气、飞鱼滑翔）映射到手柄上。
- 视频: https://www.youtube.com/watch?v=M280Ztm1ibg
- 图片: https://www.iamfishgame.com/ogimage.jpg
- 项目主页: https://www.iamfishgame.com

#### Maneater — Tripwire Interactive (2020)
- 类型: 游戏 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 游戏, 屏幕与网页
- 核心想法: 对照案例：动物作为力量幻想；鲨鱼的感官被游戏化为一种高亮猎物的“声呐”。
- 作品内容: 一款开放世界动作游戏：你是一条公牛鲨，在墨西哥湾沿岸水域从幼鲨长成巨兽，全程被包装成一档关于猎鲨人的真人秀。
- 实现方式: 第三人称游泳，身体可“进化”升级，声呐脉冲会勾勒出猎物、物品与路线。
- 视频: https://www.youtube.com/watch?v=wIC7xg75Hn0
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/629820/header.jpg
- 项目主页: https://maneatergame.com

#### ABZÛ — Giant Squid (2016)
- 类型: 游戏 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 游戏, 屏幕与网页
- 核心想法: 标志性对照作品：玩家扮演人类潜水者，但成千上万条模拟的鱼，以及可以跟随其中任意一条的冥想模式，把注意力从潜水者转向鱼群的生活。
- 作品内容: 一款水下冒险游戏：潜水者游过珊瑚礁与遗迹，骑着鲸鱼前进，也可以静坐冥想，观看鱼群自主行动。
- 实现方式: 自研的类 boids 群体模拟驱动约一万条真实物种的鱼；冥想雕像把镜头切换为跟随单个动物。
- 视频: https://www.youtube.com/watch?v=P2G54w8H4oM
- 图片: https://freight.cargo.site/i/b316099b899a921b4decfe9870f05bbf6d555de2b270bebd36c26b417bced41e/thumb8.jpg
- 项目主页: https://abzugame.com

#### Drawing on the Water Surface Created by the Dance of Koi and People – Infinity — teamLab (2016)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 多感官装置, 穹顶、CAVE 与投影
- 展出于: teamLab Planets Tokyo 2018
- 核心想法: 站在池中，你的身体成为鱼的环境的一部分：锦鲤像绕开石头一样绕开你。
- 作品内容: 观众在齐膝深的水中行走，投影的锦鲤在腿边游动；锦鲤碰到人时会化作花朵散开。
- 实现方式: 实时计算机图像投影在浅水池上；追踪观众位置并据此引导每条锦鲤的游动。
- 视频: https://www.youtube.com/watch?v=mv5O5Rkc6d8
- 项目主页: https://www.teamlab.art

#### Feed and Grow: Fish — Old B1ood (2016)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 体型即生存：随着身体长大，水下世界的关系随之重组。
- 作品内容: 一款沙盒游戏：你从一条小鱼开始，靠吃其他鱼长大，可以解锁从食人鱼到鲨鱼的多种真实鱼类。
- 实现方式: 第三人称游泳，靠进食成长，不同鱼种有不同的速度与咬合方式。
- 视频: https://www.youtube.com/watch?v=i1zwzRkzSaY
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/429050/header.jpg
- 项目主页: http://www.feedandgrow.net

#### Ocean Rift — Llyr ap Cenydd (2014)
- 类型: 游戏 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 游戏
- 核心想法: 标志性对照作品：玩家以人类潜水者的身份游动，但动物自主游动、成群并作出反应，让海洋成为有自己行动者的地方，而不是一个布景。
- 作品内容: 一个 VR“水下游猎”，有十几个栖息地，玩家与海豚、鲨鱼、海龟、鳐鱼、鲸和史前爬行动物同游。
- 实现方式: 开发者博士研究中的程序化动画驱动每只动物的游动与群聚；运行于 PC VR 与 Quest。
- 视频: https://www.youtube.com/watch?v=Nnsln2TjDtM
- 项目主页: https://ocean-rift.com

#### Leviathan — Lucien Castaing-Taylor, Véréna Paravel (2012)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 听觉与振动, 身体图式与运动 · 媒介: 屏幕与网页
- 展出于: Locarno Film Festival 2012; Toronto International Film Festival 2012
- 核心想法: 摄影机放弃人的视角，在鱼、鸟、渔网与海水之间漂移，是一种非人位置的电影。
- 作品内容: 一部在新贝德福德外海拖网渔船上拍摄的纪录片，小摄像机绑在渔民身上、扔进甲板上垂死的鱼群，或随着海鸥掠过沉入浪下。
- 实现方式: GoPro 摄像机装在身体、杆子和渔网上，几乎不做叙事剪辑，配以稠密的现场声音。
- 视频: https://www.youtube.com/watch?v=vntC7OPDHs8

#### Energy Field — Jana Winderen (2010)
- 类型: 艺术作品 · 感官: 听觉与振动 · 媒介: 空间音频, 多感官装置
- 展出于: Ultima Festival Oslo 2010; Prix Ars Electronica Golden Nica 2011
- 核心想法: 在水面之下聆听，会发现海洋充满鱼与虾的声音——一个人们通常以为寂静的世界。
- 作品内容: 一件多声道声音作品，取材于巴伦支海、格陵兰与挪威的水听器录音：从水面之下听见鳕鱼、甲壳动物与冰。
- 实现方式: 水听器野外录音，部分经过变调进入人耳可听范围，为多声道扬声器创作并由 Touch 发行。
- 视频: https://www.youtube.com/watch?v=xfaYlz2_9lc
- 项目主页: https://www.janawinderen.com

#### Amphibious Architecture — Natalie Jeremijenko, The Living (2009)
- 类型: 艺术作品 · 感官: 改变的视觉, 集体与网络感知 · 媒介: 多感官装置
- 展出于: Toward the Sentient City, Architectural League of New York 2009
- 核心想法: 让岸上的人看见鱼的存在，把城市河流变成人与鱼互相传递信号的界面。
- 作品内容: 漂浮在纽约东河与布朗克斯河上的管状装置装有传感器，探测水下的鱼和溶解氧；有鱼游过时顶部的灯会变色，人们还可以给鱼发短信并收到回复。
- 实现方式: 浮管下方装有声呐鱼探仪与水质传感器，上方是 LED 灯阵，并配有短信接口。
- 视频: https://www.youtube.com/watch?v=tE8gsMUguLY

#### Endless Ocean — Arika (2007)
- 类型: 游戏 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 标志性对照作品：玩家是人类潜水者；没有敌人也没有计时，唯一的目标是与海洋动物共度时光并认识它们。
- 作品内容: 一个潜水游戏系列（2007–2024），玩家在没有战斗的开放海域探索，与数百种海洋生物相遇、喂食并辨认它们。
- 实现方式: Wii 与 Switch 游戏，可自由潜水，附物种图鉴；《Luminous》（2024）加入多人在线潜水。
- 视频: https://www.youtube.com/watch?v=Wj2T6FK5rPA
- 图片: https://upload.wikimedia.org/wikipedia/en/c/cc/Endless_Ocean_Coverart.png
- 项目主页: https://en.wikipedia.org/wiki/Endless_Ocean

#### Uirapuru — Eduardo Kac (1999)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动 · 媒介: 多感官装置, 屏幕与网页
- 展出于: ICC InterCommunication Center, Tokyo 1999
- 核心想法: 远程临场让你进入一种亚马逊神话生物的身体，从飞鱼的视角看森林。
- 作品内容: 一条遥控机器人“飞鱼”悬浮在室内“森林”上方；展厅观众和网上用户操控它，并透过它的摄像头眼睛观看，小型机器人“ping 鸟”则按网络流量鸣唱。
- 实现方式: 装有摄像头的遥控飞艇鱼把画面传到网络和 VRML 世界；ping 鸟的鸣声由网络 ping 延迟驱动。
- 视频: https://www.youtube.com/watch?v=_KEVb6x-9JM
- 项目主页: https://www.ekac.org/uirapuru.html

#### Beizam (shark) dance mask — Ken Thaiday Snr (1996)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 表演与参与式, 多感官装置
- 展出于: Art Gallery of New South Wales collection
- 核心想法: 一种原住民的“成为”技术：舞者的身体让掌管法律与秩序的鲨鱼图腾活过来。
- 作品内容: 托雷斯海峡岛民舞蹈中佩戴的双髻鲨（beizam）动态头饰；舞者一边舞动一边拉动绳索，让鲨鱼的颌与头部开合。
- 实现方式: 胶合板、竹子、羽毛、颜料与由舞者手部操控的绳索机关。
- 视频: https://www.youtube.com/watch?v=GZulMG0qp_E
- 图片: https://i.ytimg.com/vi/GZulMG0qp_E/hqdefault.jpg
- 项目主页: https://www.artgallery.nsw.gov.au/collection/works/4.1997/

#### Fish Flies on Sky — Nam June Paik (1975)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 多感官装置, 屏幕与网页
- 核心想法: 先驱之作：让观众翻转身体，天花板成了水面，人成了水底的生物。
- 作品内容: 数十台电视机从天花板上朝下悬挂，播放游动的鱼；观众躺在地上向上看，仿佛躺在鱼群下方的河床上。
- 实现方式: 悬挂在天花板上的显示器播放鱼（以及飞机）的影像。
- 视频: https://www.youtube.com/watch?v=qZjhP-rwhP8
- 图片: https://i.ytimg.com/vi/qZjhP-rwhP8/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=qZjhP-rwhP8

### 鲸与海豚

成为鲸与海豚：歌声、尺度、迁徙与声呐。

#### Seeing Echoes in the Mind of the Whale — Marshmallow Laser Feast, Tom Mustill (2024)
- 类型: 艺术作品 · 感官: 回声定位, 听觉与振动, 改变的视觉 · 媒介: 多感官装置, 屏幕与网页, 空间音频
- 展出于: The Ocean Speaks, Disseny Hub Barcelona 2024–25; Ecos del Océano, Espacio Fundación Telefónica, Madrid 2025; Biomass, WA Museum Boola Bardip, Perth 2026; As Above, So Below, Collateral Event of La Biennale di Venezia 2026; Eaux Vives, Phi Panorama, Montreal 2026; Into the Ocean, ArtScience Museum, Singapore 2026; Culture House, Sunderland 2026; Sensing Oceans, MIT Museum 2026–27
- 核心想法: 声音成为雕刻工具：海豚的咔哒声塑造图像，座头鲸的歌承载记忆，抹香鲸的声波扫描穿越空间与时间。
- 作品内容: 一件分为三章的大型影像装置，分别跟随宽吻海豚、座头鲸与抹香鲸呼吸和下潜；每一次换气，视角就切换为该物种可能如何通过声音“看见”世界。
- 实现方式: 来自 MBARI 与加泰罗尼亚理工大学应用生物声学实验室的水听器录音经机器学习分类后，驱动实时渲染引擎；生成式 AI 流程把水下影像分割并重建为体积场景；Steffen De Vreese 提供科学支持。
- 视频: https://vimeo.com/1190192875
- 图片: https://marshmallowlaserfeast.com/app/uploads/2024/10/A7400185.jpg https://marshmallowlaserfeast.com/app/uploads/2024/10/A7400191.jpg https://marshmallowlaserfeast.com/app/uploads/2024/10/Screenshot-2025-11-07-at-13.31.20.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/seeing-echoes-in-the-mind-of-the-whale/

#### Critical Distance — Adam May, Chris Campkin (2021)
- 类型: 艺术作品 · 感官: 回声定位, 听觉与振动 · 媒介: 混合现实
- 展出于: Tribeca Immersive 2021; Smithsonian National Museum of Natural History; Canadian Museum of Nature 2024
- 核心想法: 把回声定位看成空间中的声音：虎鲸的声学世界在你身边显形。
- 作品内容: 与萨利希海南方定居虎鲸 Kiki（五岁）及其族群相遇的混合现实体验，展示族群如何依靠声音生活、船舶噪声又如何干扰它们。
- 实现方式: 在 Microsoft HoloLens 2 上呈现全息虎鲸，空间化的咔嗒声与叫声被可视化为空间中的声音。
- 图片: https://www.vision3.tv/imageworks/projects/critical-distance/hero.jpg?w=1200&cache=1a8c406e
- 项目主页: https://www.vision3.tv/projects/critical-distance

#### Beyond Blue — E-Line Media (2020)
- 类型: 游戏 · 感官: 听觉与振动, 改变的视觉 · 媒介: 游戏, 屏幕与网页
- 核心想法: 标志性对照作品：玩家始终是人类科学家，但聆听是核心任务，凭声音追踪鲸的家族，科学内容来自《蓝色星球 II》团队。
- 作品内容: 一款海洋探索游戏：一位海洋科学家与抹香鲸家族一起下潜，扫描动物并通过水听器聆听它们的叫声。
- 实现方式: 游戏包含扫描器与声呐模式；与 BBC Studios 和海洋科学家合作开发，附有纪录短片。
- 视频: https://www.youtube.com/watch?v=Ci2s6aXjRyI
- 图片: https://images.squarespace-cdn.com/content/v1/6721261e98fc254b2a649dcc/b5f23413-b9ae-4f0c-a5b5-15b5a5a673f2/BeyondBlue_FullGame_MasterImage_v2.png
- 项目主页: https://www.beyondbluegame.com

#### theBlu — Wevr (2016)
- 类型: 艺术作品 · 感官: 时间与尺度, 改变的视觉 · 媒介: VR 头显
- 展出于: HTC Vive launch 2016
- 核心想法: 静静站着看一头约 25 米长的鲸经过，让观众以鲸的眼光感受到自己的渺小。
- 作品内容: 一个房间尺度的 VR 系列，场景在沉船甲板与深海；第一集中一头蓝鲸游近，与观众对视。
- 实现方式: 基于 HTC Vive 房间尺度追踪的实时三维；鲸的眼睛与身体动画会回应观众站立的位置。
- 视频: https://www.youtube.com/watch?v=KrE66T2-eAA
- 图片: https://cdn.prod.website-files.com/664649d6380bc93a9f4e1b31/66594a8cd2889d358b9bb8d4_blu-bg.jpg
- 项目主页: https://wevr.com/theblu

#### I Wanna Deliver a Dolphin... — Ai Hasegawa (2011)
- 类型: 艺术作品 · 感官: 身体图式与运动 · 媒介: 屏幕与网页, 多感官装置
- 展出于: GROW YOUR OWN, Science Gallery Dublin 2013
- 核心想法: 成为另一个物种最亲密的方式：与它共享血液与子宫。
- 作品内容: 一件思辨设计作品：一位女性考虑孕育并分娩一只濒危的海豚、鲨鱼或金枪鱼，通过影片、胎盘示意图与“海豚分娩”原型呈现。
- 实现方式: 基于跨物种胎盘与海豚解剖的研究制作思辨影片与物件，案例物种很可能是濒危的毛伊海豚。
- 视频: https://www.youtube.com/watch?v=0ZoD-RtNQXM
- 项目主页: https://www.youtube.com/watch?v=0ZoD-RtNQXM

#### Ecco the Dolphin — Ed Annunziata (1992)
- 类型: 游戏 · 感官: 回声定位, 听觉与振动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 回声定位成为游戏动作：声呐歌声既是地图也是语言，而氧气条提醒你是一只哺乳动物。
- 作品内容: 一款横版游戏：你是一只宽吻海豚，寻找失散的族群；你的声呐歌声能描绘周围环境、与其他生物交谈，而你必须浮出水面呼吸。
- 实现方式: 按一个键发出声呐，返回附近区域的地图并触发与鲸和石碑的对话；由 Ed Annunziata 与 Novotrade International 为世嘉 Mega Drive / Genesis 开发。
- 视频: https://www.youtube.com/watch?v=xfbl_HOzHng
- 图片: https://i.ytimg.com/vi/xfbl_HOzHng/hqdefault.jpg
- 项目主页: https://en.wikipedia.org/wiki/Ecco_the_Dolphin_(video_game)

#### Dolphin Embassy — Ant Farm (1974)
- 类型: 艺术作品 · 感官: 听觉与振动, 集体与网络感知 · 媒介: 多感官装置, 表演与参与式
- 展出于: More than Human, Design Museum 2025
- 核心想法: 物种之间的大使馆：让建筑在海豚的介质中与它们相遇，而不是在水族箱里。
- 作品内容: 一个为人与海豚平等相遇与交流而设计的漂浮海洋中心的研究计划，以图纸、模型与影像记录。
- 实现方式: 思辨建筑，构想了水下聆听与影像系统；以图纸、模型与考察（1974–78）呈现。
- 视频: https://www.youtube.com/watch?v=29y1NB6ELao
- 项目主页: https://designmuseum.org/exhibitions/more-than-human

#### Songs of the Humpback Whale — Roger Payne (1970)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 空间音频
- 核心想法: 对照作品：听到鲸鱼唱出漫长而有结构的歌，人们第一次能够想象它们的内心世界。
- 作品内容: 一张收录百慕大海域座头鲸歌声水听器录音的唱片，是最畅销的自然录音，也推动了“拯救鲸鱼”运动。
- 实现方式: 由 Frank Watlington 与 Roger Payne 录制的水听器录音，Capitol Records 发行黑胶唱片。
- 视频: https://www.youtube.com/watch?v=b-Uj_2Cqb-4
- 图片: https://upload.wikimedia.org/wikipedia/en/d/d2/Roger_Payne_-_Whale.jpg
- 项目主页: https://en.wikipedia.org/wiki/Songs_of_the_Humpback_Whale_(album)

### 珊瑚、水母与浮游生物

珊瑚礁、水母、浮游生物与其他漂流或群体性海洋生命。

#### The Long Fall: A Descent into the Ocean's Living Memory — Jiabao Li (2025)
- 类型: 表演 · 感官: 时间与尺度, 听觉与振动, 改变的视觉 · 媒介: 穹顶、CAVE 与投影, 表演与参与式, 空间音频
- 展出于: Ars Electronica Deep Space 8K; Fusebox Festival, Austin 2025
- 核心想法: 观众站在浮游生物的视角无尽下坠，体会这些微小生命如何把地球大量的碳沉入深海。
- 作品内容: 一场 15 分钟的视听表演，让观众从多佛白崖坠入海洋水柱，与单个浮游生物细胞一起漂流，直到它们死去、化作海洋雪下沉。
- 实现方式: 使用斯坦福 Prakash 实验室的显微数据（PlanktonScope、Gravity Machine）制作沉浸式投影，并配以现场低频配乐。
- 视频: https://www.youtube.com/watch?v=84QXfKdI4xg
- 图片: https://images.squarespace-cdn.com/content/v1/58688c8a6a496327e937e35b/1748490664246-Z163ZARKTZSD744BGG89/The+Long+Fall+Jiabao+Li+1.jpg
- 项目主页: https://www.jiabaoli.org/long-fall

#### La plage de sable étoilé (The Starry Sand Beach) — Nina Barbier, Hsin-Chien Huang (2021)
- 类型: 沉浸式影片 · 感官: 时间与尺度, 改变的视觉 · 媒介: VR 头显
- 展出于: Venice VR Expanded 2021
- 核心想法: 一场尺度游戏：你小到单细胞生物那样，在群星之间又同样渺小。
- 作品内容: 一则科学童话：把参与者缩小到星砂有孔虫（Baculogypsina sphaerulata）的尺度——东海海滩的星形沙粒——并回溯它们四亿年的历史。
- 实现方式: 实时 VR（Vive/Quest），采用法国国家自然历史博物馆的科学模型。
- 视频: https://www.youtube.com/watch?v=RX1ZBV_CSq4
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2021/Schede_film/970x647/Venice_VR_Expanded/barbier_huang_la_plage_de_sable_etoile.jpg?itok=haNW5Mlv
- 项目主页: https://www.labiennale.org/en/cinema/2021/lineup/venice-vr-expanded/la-plage-de-sable-%C3%A9toil%C3%A9

#### Birdly: Reef Dive — SOMNIACS (2020)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 多感官装置
- 核心想法: 扇翅变成蝠鲼胸鳍的缓慢划动，说明同一套具身装置可以让人在空中与水中的身体之间切换。
- 作品内容: 支持多人的 Birdly 版本：你的化身是一只蝠鲼，在珊瑚礁中与鱼群和海豚一同滑行。
- 实现方式: Birdly 动态平台与头显，联网的珊瑚礁场景让多位骑乘者一起游动。
- 视频: https://vimeo.com/832370872
- 图片: https://birdlyvr.com/wp-content/uploads/sites/3/2023/05/reef-dive.jpg
- 项目主页: https://birdlyvr.com/reef-dive/

#### The Jellyfish — Mélodie Mousset, Edo Fouilloux (2020)
- 类型: 艺术作品 · 感官: 听觉与振动, 呼吸与内感受 · 媒介: VR 头显, 空间音频
- 展出于: Zabludowicz Collection, 360 2021
- 核心想法: 通过水母歌唱，让声音成为与漂流动物共享的身体，而不是发给它们的信号。
- 作品内容: 一个水下 VR 声景：发光的水母邀请参与者歌唱，它们的身体随声音的音高与强度搏动、伸展并发出回响。
- 实现方式: 头显麦克风的输入实时驱动水母的动画与声音；基于 PatchXR 引擎，运行于 Quest。
- 视频: https://www.youtube.com/watch?v=iWXokeqNxcE
- 图片: https://fabbula.com/wp-content/uploads/2021/05/melodie-mousset_the-jellyfish_2021-2.png
- 项目主页: https://fabbula.com/artists/the-jellyfish-by-melodie-mousset-edo-fouilloux/

#### Drop in the Ocean — Vision3 (2019)
- 类型: 艺术作品 · 感官: 时间与尺度, 身体图式与运动 · 媒介: VR 头显, 多感官装置
- 展出于: Tribeca Film Festival 2019
- 核心想法: 缩小到浮游生物的大小，让海洋中最小的漂流者和塑料碎片与你的身体同样大小。
- 作品内容: 一个多人 VR 体验：四位观众被缩小到约五厘米，骑着水母穿过浮游生物与鲸鲨，清理水中的塑料。
- 实现方式: 用 12 台摄像机与 The Captury Live 做无标记全身追踪，配合 HP Reverb 头显和一个水母造型的实体展位。
- 视频: https://www.youtube.com/watch?v=Ps5zZMGM4yo
- 图片: https://static.wixstatic.com/media/f08ce2_2fd24f10cd2d46cc986a1ea629ec5cb7~mv2.jpg/v1/fill/w_720,h_420,al_c,lg_1,q_80/f08ce2_2fd24f10cd2d46cc986a1ea629ec5cb7~mv2.jpg
- 项目主页: https://www.target3d.co.uk/post/immersive-vr-takes-tribeca-film-festival-by-storm

#### JeL — John Desnoyers-Stewart (2019)
- 类型: 研究原型 · 感官: 呼吸与内感受, 集体与网络感知 · 媒介: VR 头显, 多感官装置
- 展出于: CHI 2019 Late-Breaking Work
- 核心想法: 像水母一样呼吸，并与另一个人一起呼吸，把水母的搏动推进变成与礁石共享的节律。
- 作品内容: 一个双人 VR 水下装置：每个人的呼吸驱动一只水母，两人呼吸同步时，一个玻璃海绵般的结构在他们之间生长。
- 实现方式: 两位用户佩戴胸部呼吸传感器，驱动共享的 VR 场景；生理同步驱动程序化海绵的生长。
- 论文: https://doi.org/10.1145/3290607.3312845 (CHI EA 2019)
- 视频: https://www.youtube.com/watch?v=ZffFnL1Gs-k

#### Unexpected Growth — Tamiko Thiel (2018)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度 · 媒介: 增强现实
- 展出于: Whitney Museum of American Art 2018
- 核心想法: 从珊瑚的视角看被淹没的未来城市：礁石已经占领一切，人类站在本该是鱼游动的地方。
- 作品内容: 惠特尼美术馆露台上的 AR 作品：一片由塑料垃圾构成的珊瑚礁在观众周围生长，并随一天中的时间变化。
- 实现方式: 基于位置的手机 AR 应用，锚定在惠特尼露台；珊瑚礁状态随当地时间变化。与 /p 合作。
- 图片: https://tamikothiel.com/unexpectedgrowth/media/UnexpectedGrowth_10p_800w.jpg https://tamikothiel.com/unexpectedgrowth/media/UnexpectedGrowth_3phases_800w.jpg
- 项目主页: https://tamikothiel.com/unexpectedgrowth/

#### Spring Bloom in the Marginal Ice Zone — Jana Winderen (2017)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 空间音频, 多感官装置
- 展出于: Sonic Acts Festival Amsterdam 2017; Post Natural Studies, CentroCentro Madrid 2021
- 核心想法: 浮游生物大爆发——地球一半氧气的来源——变成可以置身其中聆听的东西。
- 作品内容: 一件声音装置，取材于北极海冰边缘春季浮游植物大爆发时的水听器录音，让以此为食的动物发声。
- 实现方式: 来自巴伦支海科考航次的水听器录音，在多声道装置中空间化呈现。
- 视频: https://www.youtube.com/watch?v=oxGIQF3iRYM
- 项目主页: https://www.janawinderen.com

#### Noise Aquarium — Victoria Vesna (2016)
- 类型: 艺术作品 · 感官: 听觉与振动, 身体图式与运动 · 媒介: 多感官装置, 穹顶、CAVE 与投影
- 展出于: Ars Electronica Deep Space 2018; Our Time on Earth, Barbican 2022
- 核心想法: 从浮游生物一侧感受噪声污染：微小的漂流者被放大，在声音面前脆弱。
- 作品内容: 沉浸式视听装置：放大的三维扫描浮游生物处在水下世界中；访客被邀请制造干扰性噪声，并看到它对这些生物的影响。
- 实现方式: 浮游生物的三维科学成像，以投影或穹顶呈现并配合海洋噪声录音；访客的输入（声音，部分版本还有平衡板）会扰动画面。
- 视频: https://www.youtube.com/watch?v=SVtkPaa-LM8
- 项目主页: https://victoriavesna.com

#### The Stanford Ocean Acidification Experience — Stanford Virtual Human Interaction Lab (2016)
- 类型: 研究原型 · 感官: 身体图式与运动, 时间与尺度 · 媒介: VR 头显
- 核心想法: 先获得一副珊瑚的身体，再看着它白化，让一个缓慢的化学过程在几分钟内发生在“我”身上。
- 作品内容: 一次 VR 实地考察：跟随二氧化碳从汽车尾气进入海洋，随后告诉参与者他们的身体已变成珊瑚，让他们看着自己的礁石在酸化的海水中失去生机。
- 实现方式: Oculus Rift DK2 或 HTC Vive；旁白告诉用户他们是珊瑚，低头会看到珊瑚化身；已在课堂实验中研究。
- 论文: https://doi.org/10.3389/fpsyg.2018.02364 (Frontiers in Psychology 2018)
- 视频: https://www.youtube.com/watch?v=G6mmXcNE7co
- 项目主页: https://vhil.stanford.edu

#### Coral: Rekindling Venus — Lynette Wallworth (2012)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 时间与尺度 · 媒介: 穹顶、CAVE 与投影, 360°/沉浸式影片
- 展出于: Planetariums worldwide, transit of Venus 2012
- 核心想法: 躺在珊瑚穹顶之下，天空变成了珊瑚礁，观众仿佛进入一个行星尺度的群体动物体内。
- 作品内容: 一部球幕电影，让天文馆穹顶布满荧光珊瑚与珊瑚礁生命，于 2012 年金星凌日前后在全球天文馆首映。
- 实现方式: 球幕投影大堡礁的水下显微与荧光影像，配乐由 Antony and the Johnsons 参与。
- 视频: https://www.youtube.com/watch?v=cysFRCSM7Nw
- 项目主页: https://www.lynettewallworth.com

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

#### Why Not Hand Over a “Shelter” to Hermit Crabs? — AKI INOMATA (2009)
- 类型: 艺术作品 · 感官: 触觉, 身体图式与运动 · 媒介: 多感官装置, 屏幕与网页
- 展出于: No Man's Land, former French Embassy Tokyo 2009
- 核心想法: 对照作品：由寄居蟹而不是艺术家来决定一座人造城市能否成为它的家，设计是从动物的立场被评判的。
- 作品内容: 水族箱中的活寄居蟹得到了透明的 3D 打印贝壳，壳上是世界各地城市的微缩模型，有些寄居蟹会选择搬进去。
- 实现方式: 用 CT 扫描真实贝壳获得内部螺旋结构，艺术家以树脂 3D 打印带有城市天际线的贝壳，并拍摄寄居蟹换壳的过程。
- 视频: https://www.youtube.com/watch?v=4qMrcdjpYEM
- 图片: https://www.aki-inomata.com/shared/img/works/10/10-01.jpg https://www.aki-inomata.com/shared/img/works/10/10-02.jpg
- 项目主页: https://www.aki-inomata.com/works/hermit/

## 成为章鱼

分布式与延展的身体：头足类、触手与尾巴、额外肢体、共享与集体的身体。

### 头足类

章鱼、鱿鱼与乌贼：分布式神经系统、伪装、会思考的腕足。

#### Octopocalypse — Luma Octo (2026)
- 类型: 艺术作品 · 感官: 听觉与振动, 触觉, 集体与网络感知 · 媒介: 多感官装置, VR 头显
- 展出于: Venice Immersive 2026
- 核心想法: 按章鱼心智自己的方式与它相遇：联系通过节奏与触觉发生，放慢速度是唯一的入口。
- 作品内容: 三人沉浸式装置，设定在流星风暴之后：参与者面对一只脆弱而具预言能力的外星章鱼，它试图通过音乐、触觉、节奏与幻象建立联系，参与者要决定是审问它，还是倾听并赢得信任。
- 实现方式: 多人装置，结合沉浸式影像、触觉与节奏输入；参与者用章鱼发出的模式共同搭建一段音乐（生成式 AI 用于原型制作）。
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2026/Schede_film/970x647/Ve_Immersive/octopocalypse.jpg?itok=Y7TyKEIK
- 项目主页: https://www.labiennale.org/en/cinema/2026/venice-immersive/octopocalypse

#### Embodied Tentacle — Shuto Takashita (2024)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 触手无法照搬手臂；映射本身必须被设计。
- 作品内容: 参与者用自己的手臂控制一条无分支、12 个关节、形似章鱼的虚拟手臂，比较不同映射在够取与缠绕任务中的效果。
- 实现方式: 头戴式 VR，通过多种映射方法把手臂与手部追踪映射到触手的 12 个关节。
- 论文: https://doi.org/10.1145/3613904.3642340 (CHI 2024)
- 视频: https://www.youtube.com/watch?v=41AYcDhbT0E

#### Chthulucene — Jiabao Li (2022)
- 类型: 艺术作品 · 感官: 身体图式与运动, 触觉 · 媒介: 表演与参与式, 屏幕与网页
- 展出于: Venice Architecture Biennale, European Cultural Centre 2023; Ecological Soup, Currents New Media 2023
- 核心想法: 成为章鱼意味着从中央大脑与视觉转向分布式智能与触觉，并为人类设计一个让下一个物种温柔记起的退场。
- 作品内容: 设定在海平面上升、章鱼继承地球的未来的思辨项目；人类尝试通过身体的“跨物种变形”学习章鱼的动作，与它们建立联系。
- 实现方式: 以动作研究、服装与摄影系列呈现，表演者模仿章鱼的运动方式；可能以图像与影像而非 XR 呈现。
- 图片: https://images.squarespace-cdn.com/content/v1/58688c8a6a496327e937e35b/1646285074576-8A956ZPPTEIUAVV09FKB/Jiabao+Li+Chthulucene1.jpg https://images.squarespace-cdn.com/content/v1/58688c8a6a496327e937e35b/1646290524890-B05S64LZ44Q1H89IJPMA/Jiabao+Li+Chthulucene2.jpg
- 项目主页: https://www.jiabaoli.org/chthulucene

#### Squid Map — Jiabao Li (2022)
- 类型: 艺术作品 · 感官: 触觉, 身体图式与运动 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Embodied Ecology, New Museum New York 2022; ISEA 2022 Barcelona; Ars Electronica 2024
- 核心想法: 乌贼只把地图读作可以藏身的沙，人类的边界在另一种身体的空间使用方式下消解。
- 作品内容: 一只夏威夷短尾乌贼在铺有黑白沙、沙子被塑成国家形状的水箱中生活了一个月；它钻沙、伪装，重画了这张地图，作品展示前后对比。
- 实现方式: 在夏威夷采集的沙子被在 Kewalo 海洋实验室的水箱中摆成国家形状，并连续拍摄一个月。
- 图片: https://images.squarespace-cdn.com/content/v1/58688c8a6a496327e937e35b/84e3a87b-a9df-41ed-9ef2-7732a42f489b/squid+map+before+after.jpg https://images.squarespace-cdn.com/content/v1/58688c8a6a496327e937e35b/b889ed3e-4ddd-48f6-95a3-b591ab4a3ce7/jiabao+li+squid+map+2+copy.jpg
- 项目主页: https://www.jiabaoli.org/squid-map

#### Think Evolution #1: Kiku-ishi (Ammonite) — AKI INOMATA (2016)
- 类型: 艺术作品 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 多感官装置, 屏幕与网页
- 核心想法: 一场反向演化的思想实验：章鱼试穿它的家族早已放弃的身体。
- 作品内容: 艺术家依据化石的 CT 扫描复原了一枚菊石壳，把它交给一只章鱼——章鱼的祖先在数百万年前就抛弃了外壳；录像记录章鱼钻进这一已灭绝的形态。
- 实现方式: 菊石化石的 CT 数据（White Rabbit 公司）经 3D 建模后用树脂制作；高清录像。
- 视频: https://vimeo.com/606429490
- 图片: https://www.aki-inomata.com/shared/img/works/07/07-01.jpg https://www.aki-inomata.com/shared/img/works/07/07-02.jpg
- 项目主页: https://www.aki-inomata.com/works/kiku-ishi/

#### Sculpture for Octopuses: Exploring for Their Favorite Colors — Shimabuku (2010)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 展出于: More than Human, Design Museum 2025; Animals & Us, Turner Contemporary 2016
- 核心想法: 以章鱼为观众的艺术：作品由动物的感知与选择来完成。
- 作品内容: 为章鱼制作的多色小玻璃球，先从渔船上投入海中，后又放进神户须磨海洋世界的大水箱，艺术家拍下章鱼会选择哪些颜色。
- 实现方式: 为章鱼手工制作的玻璃物件，以幻灯片记录章鱼的反应。
- 视频: https://www.youtube.com/watch?v=90ogkcNM_AY
- 项目主页: https://designmuseum.org/exhibitions/more-than-human

#### Then, I decided to give a tour of Tokyo to the octopus from Akashi — Shimabuku (2000)
- 类型: 表演 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 表演与参与式, 屏幕与网页
- 展出于: Museum of Contemporary Art Tokyo (collection); Museum of Fine Arts, Houston (collection)
- 核心想法: 一场陆地上的相遇，追问城市对章鱼意味着什么，同时承认我们只能猜测它的视角。
- 作品内容: 艺术家在渔港明石买下一只活章鱼，带它坐火车去东京，让它看富士山、东京塔和筑地鱼市，然后带它回去放归大海。
- 实现方式: 带着装在水箱里的活章鱼进行的旅行表演，以影像、照片和手绘地图记录。
- 图片: https://mot-collection-search.jp/media_files/large/16282.jpg https://mot-collection-search.jp/media_files/large/16284.jpg
- 项目主页: https://mot-collection-search.jp/en/shiryo/5282/

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

#### JIZAI ARMS — Masahiko Inami (2023)
- 类型: 研究原型 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: 可穿戴与感官装置, 表演与参与式
- 核心想法: 作为社交物件的机器肢体：一具可以由他人延伸、借出与共享的身体。
- 作品内容: 一个带插口的可穿戴底座，可装卸的机械臂能被增加、在佩戴者之间交换，也可以由他人操作，形成“社会化的数字赛博格”。
- 实现方式: 一个带六个插口的背负底座承载可拆卸机械臂，通过缩小比例的主控臂远程操作；与艺术家和使用者共同设计。
- 论文: https://doi.org/10.1145/3544548.3581169 (CHI 2023)
- 视频: https://www.youtube.com/watch?v=KFyZQfqaXhE

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

#### Carrion — Phobia Game Studio (2020)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 怪物的身体：许多触手同时抓住世界，身体的大小决定了它能做什么。
- 作品内容: 一款“反向恐怖”游戏：你是一团无定形的触手生物，正在逃离研究设施，吞食越多就越大，还能挤过通风管。
- 实现方式: 2D 像素风格下程序化驱动的一团触手，玩家指向哪里它就伸向哪里。
- 视频: https://www.youtube.com/watch?v=jZENtOGdMkc
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/953490/header.jpg
- 项目主页: https://www.devolverdigital.com/games/carrion

#### The Sixth Finger Illusion — Matthew R. Longo (2020)
- 类型: 论文 · 感官: 身体图式与运动, 触觉 · 媒介: 多感官装置
- 核心想法: 错觉表明，手指的数量在身体地图中并不是固定的。
- 作品内容: 一种镜箱错觉：同步触碰让人持续感到手上有第六根手指；2026 年的后续研究甚至让人把另一个人的手指纳入身体。
- 实现方式: 镜箱中对手施加视觉与触觉相冲突的抚触；用问卷与定位测量所有感。
- 论文: https://doi.org/10.1177/0301006620939457 (Perception 2020)

#### Virtually-Extended Proprioception — Shengdong Zhao (2020)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 让身体向你想够到的地方生长，从而延伸本体感觉。
- 作品内容: 用户获得一条伸进场景深处的附加虚拟肢体，从而以身体感知远处目标的位置。
- 实现方式: 头戴式 VR，在化身上附加虚拟手臂或腿，并在目标选择任务中评估。
- 论文: https://doi.org/10.1145/3313831.3376557 (CHI 2020)
- 视频: https://www.youtube.com/watch?v=IvwwMAtxrpA

#### Arque: Artificial Biomimicry-Inspired Tail — Kouta Minamizawa, MHD Yamen Saraiji (2019)
- 类型: 研究原型 · 感官: 身体图式与运动, 触觉 · 媒介: 可穿戴与感官装置
- 展出于: SIGGRAPH 2019 Emerging Technologies
- 核心想法: 借来动物用于平衡的尾巴，作为人类的新身体部件。
- 作品内容: 一条由人工肌肉驱动的可穿戴人造尾巴，能改变佩戴者的平衡，并推拉身体。
- 实现方式: 由弹簧关节构成的尾巴，配四条气动人工肌肉；尾巴长度与重量按佩戴者调节。
- 论文: https://doi.org/10.1145/3305367.3327987 (ACM SIGGRAPH 2019 Emerging Technologies)
- 视频: https://www.youtube.com/watch?v=Tr1-IhEhXYQ

#### Augmenting Human With a Tail — Haoran Xie (2019)
- 类型: 研究原型 · 感官: 身体图式与运动 · 媒介: 可穿戴与感官装置
- 核心想法: 一条尾巴，两种动物功能：身体支撑与情绪信号。
- 作品内容: 一条可穿戴尾巴：可以锁定成支撑，像袋鼠尾巴那样承担体重，也可以摇摆表达情绪。
- 实现方式: 分节的电机驱动尾巴，带有用于支撑模式的锁定机构，以及用于情绪模式的预设动作。
- 论文: https://doi.org/10.1145/3311823.3311847 (Augmented Human 2019)
- 视频: https://www.youtube.com/watch?v=PNdFxswDvsU

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

#### MetaArms — MHD Yamen Saraiji, Kouta Minamizawa, Masahiko Inami (2018)
- 类型: 研究原型 · 感官: 身体图式与运动, 触觉 · 媒介: 可穿戴与感官装置
- 核心想法: 把脚映射为手臂，显示身体图式能多快地接纳机器肢体。
- 作品内容: 一对背在身后、由佩戴者双脚控制的机械臂，身体由此获得两只由“重新映射”的腿来驱动的额外手臂。
- 实现方式: 传感器追踪脚的位置与脚趾弯曲，驱动两只背包式仿人机械臂；机械手的触觉反馈回传到脚上。
- 论文: https://doi.org/10.1145/3242587.3242665 (UIST 2018)
- 视频: https://www.youtube.com/watch?v=hcnF3RkiItc

#### Supernumerary Arms for Gestural Communication — Ehud Sharlin (2018)
- 类型: 研究原型 · 感官: 身体图式与运动 · 媒介: 可穿戴与感官装置
- 核心想法: 额外的肢体也能“说话”：手臂更多的身体拥有更多的手势。
- 作品内容: 可穿戴的额外机械臂不用于完成任务，而用于做手势，探索赛博格如何用新增的肢体交流。
- 实现方式: 肩部安装的机械臂，由预设与用户控制的手势动作驱动。
- 论文: https://doi.org/10.1145/3170427.3188683 (CHI 2018 Late-Breaking Work)
- 视频: https://www.youtube.com/watch?v=CwnPO8OpI_I

#### MetaLimbs — Kouta Minamizawa, MHD Yamen Saraiji (2017)
- 类型: 研究原型 · 感官: 身体图式与运动, 触觉 · 媒介: 可穿戴与感官装置
- 展出于: SIGGRAPH 2017 Emerging Technologies
- 核心想法: 肢体替代：腿变成手臂，身体结构被重新排列。
- 作品内容: 一个背负两条机械臂的背包，由佩戴者的腿和脚趾控制，让坐着的人拥有四只手臂。
- 实现方式: 追踪腿脚相对于躯干的运动及脚趾弯曲，映射到机械臂与夹爪，并向脚部提供力反馈。
- 论文: https://doi.org/10.1145/3084822.3084837 (ACM SIGGRAPH 2017 Emerging Technologies)
- 视频: https://www.youtube.com/watch?v=NIuIiI5mVhI

#### Third Thumb — Dani Clode, Tamar Makin (2017)
- 类型: 研究原型 · 感官: 身体图式与运动, 触觉 · 媒介: 可穿戴与感官装置
- 核心想法: 额外的手指可以在几天内学会，而且会改变大脑对手的表征。
- 作品内容: 一根 3D 打印的额外拇指，佩戴在小指旁，由脚趾下的压力传感器控制；使用者学会用它握持、搬运甚至演奏。
- 实现方式: 手上的电动拇指，由脚趾压力无线控制；2021 年研究在五天训练前后进行了功能磁共振成像。
- 论文: https://doi.org/10.1126/scirobotics.abd7935 (Science Robotics 2021)
- 视频: https://www.youtube.com/watch?v=GKSCmkCE5og

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

#### Octodad: Dadliest Catch — Young Horses (2014)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 被塞进人类日常的无骨身体：操控方式让身体与任务之间的错位变得可感。
- 作品内容: 一只伪装成郊区父亲的章鱼，努力做家务、购物、去水族馆，同时不让家人发现他是章鱼。
- 实现方式: 双腿与手臂分别由不同按键和鼠标控制，驱动物理模拟的身体；延续了 2010 年德保罗大学的学生游戏 Octodad。
- 视频: https://www.youtube.com/watch?v=03rP_O2k8XM
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/224480/header.jpg
- 项目主页: https://store.steampowered.com/app/224480/

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

#### shippo — neurowear (2012)
- 类型: 研究原型 · 感官: 身体图式与运动 · 媒介: 可穿戴与感官装置
- 展出于: Tokyo Game Show 2012
- 核心想法: 给人装上尾巴，让情绪成为一种共享的动物信号，而不是私人感受。
- 作品内容: 一个由脑波控制尾巴的概念：佩戴者兴奋时尾巴摇得快，平静时摇得慢，并把心情分享到地图上。
- 实现方式: 脑电头戴设备连接电动尾巴和手机应用。
- 视频: https://www.youtube.com/watch?v=FwSTLm7cy_s
- 图片: https://i.ytimg.com/vi/FwSTLm7cy_s/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=FwSTLm7cy_s

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

#### Virtual Transcendent Dream — Bernhard E. Riecke (2022)
- 类型: 研究原型 · 感官: 身体图式与运动, 呼吸与内感受 · 媒介: VR 头显
- 核心想法: 具身飞行能唤起飞行之梦中的力量感与自我超越感。
- 作品内容: 一个以飞行之梦为原型的 VR 飞行体验，参与者用身体飞过梦境般的风景。
- 实现方式: 头戴式 VR，基于倾身的具身飞行加自我运动线索，与手柄界面比较。
- 论文: https://doi.org/10.1145/3491102.3517677 (CHI 2022)
- 视频: https://www.youtube.com/watch?v=TOJN18MxFsM

#### Aery - Little Bird Adventure — EpiXR Games (2020)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, VR 头显
- 核心想法: 把鸟的飞行当作休憩：没有战斗，只是在各处滑翔。
- 作品内容: 一款平静的飞行游戏：你是一只小鸟，在梦境般的风景中探索；2023 年推出 VR 版。
- 实现方式: PC 与主机上的第三人称飞行与收集，另有支持 VR 的版本。
- 视频: https://www.youtube.com/watch?v=mRkG9156FgE
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1424770/header.jpg
- 项目主页: https://store.steampowered.com/app/1424770/

#### Aria (空氣頌) — Kingsley Ng, Eugene Birman (2020)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 听觉与振动, 呼吸与内感受 · 媒介: 360°/沉浸式影片, 表演与参与式
- 展出于: New Vision Arts Festival (ReNew Vision) 2020
- 核心想法: 从鸟和昆虫所在之处聆听空气：从非人类的高度去听气候危机。
- 作品内容: 一部在香港公园温室拍摄的 VR 舞蹈音乐作品：镜头采用昆虫或飞鸟的独特视角，丹麦合唱团 Theatre of Voices 的全息影像悬浮空中，舞者与香港儿童合唱团同场演出。
- 实现方式: 360° 影像结合全息投影，配乐由空气质量数据驱动，在艺术节的线上平台通过 YouTube 播放。
- 视频: https://www.youtube.com/watch?v=Mcd-hhhlAAw
- 图片: https://i.ytimg.com/vi/Mcd-hhhlAAw/hqdefault.jpg
- 项目主页: https://www.vrtuoluo.cn/521799.html

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

#### Feather — Samurai Punk (2018)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 没有目标的飞行：做一只鸟本身就是全部。
- 作品内容: 一款轻松的多人游戏：你是一只鸟，在岛屿上空滑翔，没有目标、分数或竞争。
- 实现方式: 第三人称滑翔，配乐会根据玩家飞行的位置与方式变化。
- 视频: https://www.youtube.com/watch?v=NaaaHuZ3Pno
- 图片: https://i.ytimg.com/vi/NaaaHuZ3Pno/hqdefault.jpg
- 项目主页: https://samuraipunk.com/

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

#### Eagle POV over Mont Blanc — Freedom Conservation (2015)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 屏幕与网页
- 核心想法: 装在鸟身上的相机给出鸟的路线和速度，却给不出它的视觉，这正显示了动物视角的可能与局限。
- 作品内容: 由白尾海雕和白头海雕携带的小型相机拍下的影像，从鸟自身的飞行中呈现勃朗峰群山、冰川与下方的山径。
- 实现方式: 佩戴轻型运动相机（Sony Action Cam Mini）的训练猛禽在环勃朗峰超级越野赛期间从山顶起飞。
- 视频: https://www.youtube.com/watch?v=IkRhq-stMS4
- 项目主页: https://www.youtube.com/@FREEDOMCONSERVATION

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

#### The Treachery of Sanctuary — Chris Milk (2012)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 多感官装置
- 展出于: The Creators Project San Francisco 2012
- 核心想法: 以鸟完成诞生、死亡与变形：参与者自己的剪影化为飞行。
- 作品内容: 三联屏互动装置：观众的影子先碎成飞鸟，再被鸟啄散，最后长出巨大的翅膀起飞。
- 实现方式: Kinect 深度感测与定制软件把实时剪影投到反射水池上方的三块大屏。
- 视频: https://www.youtube.com/watch?v=I5__9hq-yas
- 项目主页: http://milk.co/treachery

#### Humphrey II — Ars Electronica Futurelab (2003)
- 类型: 艺术作品 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显, 多感官装置
- 展出于: Ars Electronica Center 2003
- 核心想法: 飞行靠全身而不是摇杆完成，是后来 Birdly 所用“手臂即翅膀”姿态的早期公共版本。
- 作品内容: Ars Electronica Center 的飞行模拟器：观众面朝下吊在支架中，用手臂与身体动作飞越虚拟地景，通过力反馈感受风、气流和撞击。
- 实现方式: 身体悬挂在运动控制支架上，配合气动力反馈、头戴显示器与身体追踪；是 1994 年 Humphrey 模拟器的后继。
- 视频: https://www.youtube.com/watch?v=8l8JCpMEviM
- 项目主页: https://ars.electronica.art/futurelab/

#### OpenSky — Kazuhiko Hachiya (2003)
- 类型: 艺术作品 · 感官: 身体图式与运动 · 媒介: 表演与参与式
- 核心想法: “成为鸟”被当真：身体伏在机翼上，靠移动重心来操控方向。
- 作品内容: 一个艺术项目：以宫崎骏《风之谷》中鸟形的“Möwe”为原型，制造并驾驶单人喷气滑翔机，艺术家俯卧在机背上飞行。
- 实现方式: 自制飞翼式滑翔机（M-02，后为喷气动力的 M-02J），历经十余年开发，2006 年起试飞。
- 视频: https://www.youtube.com/watch?v=nwZkRGxbWDg
- 项目主页: https://www.petworks.co.jp/~hachiya/works/OpenSky.html

#### Flying Machine — Carsten Höller (1996)
- 类型: 艺术作品 · 感官: 身体图式与运动 · 媒介: 多感官装置
- 展出于: Decision, Hayward Gallery 2015
- 核心想法: 飞行是一种身体感受而不是图像：不戴头显，身体就能感到升力、速度和俯视他人的视野。
- 作品内容: 观众面朝下被绑在电动悬臂的吊带里，在展厅上空大幅度绕圈飞行，双臂自由，像一只滑翔在人群上方的鸟。
- 实现方式: 吊带悬挂在电机驱动的旋转钢臂上，骑乘者的体重和姿势决定飞行状态。
- 视频: https://www.youtube.com/watch?v=v5pvNtMWRgI

#### Pigeon photography — Julius Neubronner (1907)
- 类型: 研究原型 · 感官: 改变的视觉 · 媒介: 屏幕与网页
- 核心想法: 对“鸟看见什么”的早期回答：把机械眼睛绑在动物身上，带回人类从未见过的影像。
- 作品内容: 信鸽胸前挂着定时微型相机，拍下它们飞越的城镇与地景；这些照片被制成明信片，并在 1909 年德累斯顿摄影展上展出。
- 实现方式: 轻型铝制相机配有气动定时器，在鸽子飞回途中拍摄一张或多张照片；1908 年获得专利。
- 图片: https://upload.wikimedia.org/wikipedia/commons/9/94/Bundesarchiv_Bild_183-R01996%2C_Brieftaube_mit_Fotokamera_cropped.jpg https://upload.wikimedia.org/wikipedia/commons/5/54/Julius_Neubronner_with_pigeon_and_camera_1914_cropped.jpg
- 项目主页: https://en.wikipedia.org/wiki/Pigeon_photography

### 鸟类感官

磁感应、紫外与广角视觉、鸟鸣。

#### Seeing with a Bird's Perception — Shuran Fan (2026)
- 类型: 研究原型 · 感官: 改变的视觉, 听觉与振动, 触觉 · 媒介: 可穿戴与感官装置
- 核心想法: 借用鸟的注意力，去注意身边早已存在的自然。
- 作品内容: 一次自然漫步：佩戴在肩上的麻雀形机器人 Perch 把鸟类的注意模式转换成给佩戴者的细微提示。
- 实现方式: 拟动物形可穿戴机器人，以动作、声音、振动等多模态提示回应环境中的事件。
- 论文: https://doi.org/10.1145/3772363.3798350 (CHI 2026 Extended Abstracts)

#### Kestrel Drone — Jooyoung Oh (2022)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 游戏, 多感官装置
- 展出于: ZER01NE DAY 2022; Displaced Impossibility, Post Territory Ujeongguk, Seoul 2024
- 核心想法: 借机器之眼成为猛禽：无人机成为追问“从鸟的一侧看，技术是什么样子”的方式。
- 作品内容: 一件结合 PC 游戏、AI 追踪摄像头与鸟形无人机的装置，从城市中红隼的视角重新理解无人机视觉。
- 实现方式: PC 游戏、AI 追踪摄像头、鸟形无人机与霓虹灯牌；玩家很可能通过无人机类似红隼的视角操控或观看。
- 图片: https://k-artnow.com/data/content/684f7e300877a0.27253385__thum.png
- 项目主页: https://k-artist.com/Artist_Works.php?tab_num=tab1&artist_num=170&works_num=1014

#### Machine Auguries — Alexandra Daisy Ginsberg (2019)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 多感官装置, 空间音频
- 展出于: 24/7, Somerset House London 2019; Toledo Museum of Art 2023; Bildmuseet Umeå 2025
- 核心想法: 聆听鸟变成聆听它们的缺席：机器合唱是对一个正在消失的声景的虚假记忆。
- 作品内容: 一个在人造黎明天空下的房间，用自然和机器生成的鸟鸣重建当地的黎明合唱，人工鸟逐渐占据声景。
- 实现方式: 用在田野录音上训练的生成对抗网络合成鸟鸣，以多声道声音配合程序化灯光播放。
- 视频: https://www.youtube.com/watch?v=MMBGElLQMG4
- 图片: https://www.daisyginsberg.com/img/work/machine_auguries_london_bildmuseet_gallery.jpg https://www.daisyginsberg.com/img/work/machine_auguries_5_web.jpg
- 项目主页: https://www.daisyginsberg.com/work/machine-auguries

#### Untitled Goose Game — House House (2019)
- 类型: 游戏 · 感官: 身体图式与运动, 听觉与振动 · 媒介: 游戏, 屏幕与网页
- 展出于: D.I.C.E. Awards 2020 (Game of the Year); Game Developers Choice Awards 2020 (Game of the Year)
- 核心想法: 对照案例：动物身体被用于恶作剧和闹剧而非感知；它之所以成立，是因为鹅始终是一只鹅。
- 作品内容: 一款潜行喜剧游戏：你是一只鹅，靠偷东西、嘎嘎叫和躲藏来搅乱村民的一天。
- 实现方式: 俯视第三人称操作，设有专门的“嘎”键、拍翅与用喙叼取。
- 视频: https://www.youtube.com/watch?v=HGO7vJtlX0I
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/837470/header.jpg
- 项目主页: https://goose.game

#### HORUS EYE: Bird and Snake Vision for AR — Neven A. M. ElSayed (2016)
- 类型: 研究原型 · 感官: 改变的视觉, 热与红外 · 媒介: 增强现实
- 核心想法: 把动物视觉当作透镜，看见人看不见的东西。
- 作品内容: 一种 AR 可视化技术，像鸟或蛇的视觉那样过滤实时画面，以突出现实中值得关注的数据。
- 实现方式: 视频透视 AR，采用受猛禽视觉敏锐度与蛇类红外感知启发的图像滤镜，由用户查询驱动。
- 论文: https://doi.org/10.1109/ismar-adjunct.2016.0077 (IEEE ISMAR 2016 Adjunct)
- 视频: https://www.youtube.com/watch?v=8mg1VngCdpA

#### Berlin Bülbül — David Rothenberg (2015)
- 类型: 表演 · 感官: 听觉与振动 · 媒介: 表演与参与式, 空间音频
- 核心想法: 成为鸟鸣的一部分，意味着进入一场只有鸟知道规则的实时交流。
- 作品内容: 一张二重奏专辑和一系列现场演出：音乐人在柏林夜晚的公园里用单簧管与野生夜莺合奏，回应并追随它们的歌声。
- 实现方式: 单簧管与现场电子（与 Korhan Erel 合作）在夜间户外与鸣唱的夜莺即兴并录音。
- 视频: https://www.youtube.com/watch?v=72PKRimqL3c
- 项目主页: https://en.wikipedia.org/wiki/David_Rothenberg_(author)

#### Bird Song Diamond — Victoria Vesna (2014)
- 类型: 艺术作品 · 感官: 听觉与振动, 身体图式与运动 · 媒介: 多感官装置, 表演与参与式
- 展出于: Large Space, Empowerment Informatics (EMP), University of Tsukuba
- 核心想法: 鸟的交流从内部习得：在共享空间里尝试发出并回应鸣叫。
- 作品内容: 一个与进化生物学家合作、研究卡氏莺雀等鸟类如何交流的艺术-科学项目；在日本版本中，观众在大型投影空间里用声音和身体扮演鸟。
- 实现方式: 基于声学传感器阵列对鸟类网络的录音；装置在筑波 EMP 的 Large Space 中使用动作追踪、投影和声音交互。
- 视频: https://www.youtube.com/watch?v=HyUaqDa_6Vg
- 项目主页: https://www.youtube.com/watch?v=0gwRb6Kt8hA

#### The Great Silence — Allora & Calzadilla (2014)
- 类型: 艺术作品 · 感官: 听觉与振动 · 媒介: 屏幕与网页
- 核心想法: 作为相关的屏幕作品收录，因为它采用非人类的第一人称：从鹦鹉的视角审视那台“倾听”宇宙的望远镜。
- 作品内容: 一部影像作品，拍摄于阿雷西博射电望远镜及周边森林，字幕是一只濒危波多黎各鹦鹉的第一人称独白：人类在宇宙中寻找外星智慧，却忽视了身边会发声的生命。
- 实现方式: 单频道影像，字幕旁白与 Ted Chiang 合写，结合阿雷西博天文台与里奥阿瓦霍森林鹦鹉的画面（很可能）。
- 视频: https://www.youtube.com/watch?v=n0QhHa1aG4I
- 项目主页: https://www.youtube.com/watch?v=n0QhHa1aG4I

#### Crowbot Jenny — Sputniko! (2010)
- 类型: 艺术作品 · 感官: 听觉与振动 · 媒介: 可穿戴与感官装置, 屏幕与网页
- 展出于: Talk to Me, MoMA New York 2011; 14th Japan Media Arts Festival 2011; Tokyo Art Meeting Transformation, MOT 2010
- 核心想法: 借一个假体发声器说另一个物种的语言：装置让人进入乌鸦的声音社会。
- 作品内容: 一部音乐影像与可穿戴装置：一个比起人更喜欢动物的孤独女孩，造出能复现乌鸦叫声的“乌鸦机器人”，与她的乌鸦大军交谈。
- 实现方式: 在剑桥大学乌鸦研究者 Nicola Clayton 的建议下开发的可穿戴叫声合成装置，配合流行音乐影像展出。
- 视频: https://www.youtube.com/watch?v=rdU1F54FEOU
- 图片: https://storage.googleapis.com/production-os-assets/assets/18f187ff-8e8a-4f0d-9634-d7808c54c4d1
- 项目主页: https://sputniko.com/Crowbot-Jenny

#### Dawn Chorus — Marcus Coates (2007)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Fabrica, Brighton 2015
- 核心想法: 把鸟鸣放慢到人的节奏，人就能用自己的喉咙学会它；再加速，人又回到了鸟的时间。
- 作品内容: 一件 14 屏影像装置：人们在汽车、办公室和卧室里唱鸟鸣；每段人声被重新加速，整个空间充满逼真的黎明鸟鸣大合唱。
- 实现方式: 黎明时用多达 14 支话筒分别录下野鸟的鸣唱，放慢最多 20 倍，由歌者学唱并以高帧率拍摄，再以鸟的速度回放。
- 视频: https://www.youtube.com/watch?v=zF1uihdcZmY
- 图片: https://a75hkzli.twic.pics/marcus-coates/images/_1200x630_crop_center-center_none/fabrica.jpg
- 项目主页: https://marcuscoates.co.uk/projects/68-dawn-chorus

#### from here to ear — Céleste Boursier-Mougenot (1999)
- 类型: 艺术作品 · 感官: 听觉与振动 · 媒介: 多感官装置, 空间音频
- 展出于: Barbican Curve Gallery London 2010; Jupiter Artland 2018
- 核心想法: 观众作为客人进入鸟的空间，声景由鸟自己的落脚和啄击谱写。
- 作品内容: 观众走进一个鸟舍，自由飞翔的斑胸草雀落在作为栖木摆放的电吉他和镲片上，鸟的动作变成实时、不断变化的音乐。
- 实现方式: 水平固定的电吉他和贝斯接上放大器，配有栖木、食物和水，由草雀的体重和喙来弹奏。
- 视频: https://www.youtube.com/watch?v=_wwKlJdojb0
- 项目主页: https://www.youtube.com/watch?v=HyyeXOW5xPk

#### Cockatoo Mask (Performances II) — Rebecca Horn (1973)
- 类型: 表演 · 感官: 触觉, 身体图式与运动 · 媒介: 表演与参与式, 可穿戴与感官装置, 屏幕与网页
- 核心想法: 一件早期的身体延伸作品，借用鸟的羽毛作为感知和接近他人的新皮肤。
- 作品内容: 在一段拍摄下来的表演中，表演者戴着一副由白色凤头鹦鹉羽毛做成的面具，羽毛在脸周围开合，触碰他人要通过鸟的羽毛来完成。
- 实现方式: 手工制作的羽毛面具装在可开合的框架上，为镜头表演，并收录于 16 毫米影片 Performances II。
- 视频: https://www.youtube.com/watch?v=Ekmovwo0e2A
- 项目主页: https://www.tate.org.uk/art/artists/rebecca-horn-2585

### 鸟群与迁徙

椋鸟群飞、迁徙路线与作为鸟群一起移动。

#### NEST — Marshmallow Laser Feast (2019)
- 类型: 艺术作品 · 感官: 听觉与振动, 改变的视觉 · 媒介: 多感官装置, 空间音频
- 展出于: Waltham Forest London Borough of Culture 2019
- 核心想法: 光与声像鸟群一样在公园中流动，暗示一场椋鸟群飞，而不是让观众成为其中一员。
- 作品内容: 一件设在沃尔瑟姆森林劳埃德公园树木与护城河间的动态灯光装置，配有作曲家 Erland Cooper 以椋鸟群飞为灵感创作的 15 分钟多声道声景。
- 实现方式: 可编程摇头灯、定制软件与空间音频，映射到树木、水面与枝叶上。
- 视频: https://vimeo.com/478588817
- 图片: https://marshmallowlaserfeast.com/app/uploads/2025/11/DRONE_rushes_grbas_fullres.01_06_35_08.Still092.jpg https://marshmallowlaserfeast.com/app/uploads/2025/11/Welcome_To_The_Forest-17.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/nest-kinetic-light-sculpture/

#### Franchise Freedom — DRIFT (2017)
- 类型: 表演 · 感官: 集体与网络感知, 改变的视觉 · 媒介: 表演与参与式
- 展出于: Art Basel Miami Beach 2017; Amsterdam, above the IJ 2018; Burning Man 2018
- 核心想法: 机器借用鸟群的规则，于是观众感知到的舞台主角是“群飞”这一行为本身，而不是某一只鸟。
- 作品内容: 一场夜间表演：数百架发光无人机按照源自椋鸟群飞的算法自主成群飞行，首演于迈阿密海滩巴塞尔艺术展上空。
- 实现方式: 模拟椋鸟飞行行为的软件（研究始于 2007 年的作品《Flylight》），植入英特尔 Shooting Star 无人机。
- 视频: https://www.youtube.com/watch?v=wCyNjt8TABk
- 图片: https://studiodrift.com/wp-content/uploads/2022/02/1.-Studio-Drift_Franchise-Freedom_ABurning-Man-Festival_USA_2018_Rahi-Rezvani.jpg
- 项目主页: https://studiodrift.com/work/franchise-freedom/

#### Moon Goose Analogue: Lunar Migration Bird Facility — Agnes Meyer-Brandis (2011)
- 类型: 艺术作品 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: 多感官装置, 表演与参与式
- 展出于: FACT Liverpool 2011; VIDA 15.0 (second prize) 2013
- 核心想法: 加入鸟群意味着被接纳为亲属：印随让人成为大雁的母亲和飞行教练。
- 作品内容: 艺术家从蛋开始养育 11 只以宇航员命名的大雁，让它们把自己认作母亲，并在意大利的“月球模拟”栖息地训练它们飞行，观众通过实时影像控制室观看。
- 实现方式: 从孵化起人工育雏与印随，每日飞行训练，并用远程摄像机把大雁的栖息地实时传入展厅控制室。
- 视频: https://www.youtube.com/watch?v=pIKNbDWdS_0
- 项目主页: https://en.wikipedia.org/wiki/Agnes_Meyer-Brandis

#### PigeonBlog — Beatriz da Costa (2006)
- 类型: 艺术作品 · 感官: 嗅觉与味觉, 集体与网络感知 · 媒介: 可穿戴与感官装置, 屏幕与网页
- 展出于: ISEA 2006 / ZeroOne San Jose
- 核心想法: 在鸽子的飞行高度感知城市空气：鸽子成为共同研究者，地图呈现的是它们呼吸到的世界。
- 作品内容: 信鸽背着小背包飞过南加州，测量一氧化碳和氮氧化物，并把读数实时发送到在线地图。
- 实现方式: 与 Cina Hazegh 和 Kevin Ponto 合作制作的 GPS、气体传感器与 GSM 短信背包，数据实时上传到 Google 地图界面。
- 视频: https://www.youtube.com/watch?v=XXNh5dKIh18

#### Swamped! — MIT Media Lab Synthetic Characters Group (1998)
- 类型: 研究原型 · 感官: 触觉, 身体图式与运动 · 媒介: 多感官装置, 游戏
- 展出于: SIGGRAPH 98 Enhanced Realities
- 核心想法: 一种“同感界面”：你通过动物身体的玩具版本来引导它，更像它的良心而不是操偶师。
- 作品内容: 观众挤压、挥动、倾斜一只装有传感器的毛绒鸡，指挥一只动画鸡在农场里保护鸡蛋，不让饥饿的浣熊偷走。
- 实现方式: 毛绒玩具内置加速度计、陀螺仪、挤压和弯曲传感器；用隐马尔可夫模型识别手势，输入自主行为角色。
- 论文: https://doi.org/10.1145/302979.303028 (CHI 1999)
- 图片: https://characters.media.mit.edu/images/swamped.gif
- 项目主页: https://characters.media.mit.edu/projects/swamped.html

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

#### Animal-View Video Camera — Vera Vasas (2024)
- 类型: 研究原型 · 感官: 改变的视觉 · 媒介: 屏幕与网页
- 核心想法: 按照另一种动物的光感受器准确呈现其色彩世界的动态影像。
- 作品内容: 一套相机系统与软件，按蜜蜂、鸟类等动物所见的颜色（包括紫外）录制影像。
- 实现方式: 用分光相机同时录制紫外与可见光通道，再用 Python 转换为动物光感受器的响应量。
- 论文: https://doi.org/10.1371/journal.pbio.3002444 (PLOS Biology 2024)
- 图片: https://journals.plos.org/plosbiology/article/figure/image?size=inline&id=10.1371/journal.pbio.3002444.g001

#### home — Temsüyanger Longkumer (2023)
- 类型: 沉浸式影片 · 感官: 集体与网络感知, 改变的视觉 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Venice Immersive 2023
- 核心想法: 生活在蜂巢里：蜂群是一个整体生命，它的选择映照出人类的筑居方式。
- 作品内容: 与那加兰 Gaili 一个蜂群共同拍摄的 VR 作品，带观众进入蜂巢，把它当作人类与地球关系的模型。
- 实现方式: 在活体蜂巢内外拍摄的立体影像，结合动画段落（VR 头显）。
- 视频: https://www.youtube.com/watch?v=1-Xy4B7MbzA
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2023/Schede_film/970x647/Ve_Immersive/longkumer.jpg?itok=k7tAqi6V
- 项目主页: https://www.labiennale.org/en/cinema/2023/venice-immersive/home

#### Pollinator Pathmaker — Alexandra Daisy Ginsberg (2021)
- 类型: 艺术作品 · 感官: 改变的视觉, 集体与网络感知 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Eden Project 2021; LAS Art Foundation, Berlin
- 核心想法: 从传粉者的视角设计，意味着把审美选择交给它们的需求：花形、颜色与花期。
- 作品内容: 一件活的艺术作品与在线工具：算法为尽可能多的传粉者物种、而不是为人的审美设计花园，任何人都可以生成并种植自己的版本。
- 实现方式: 与授粉科学家共同构建的算法，根据传粉者类群的需求挑选并布置植物物种；由伊甸园项目委托。
- 视频: https://www.youtube.com/watch?v=IN3YzdziqBY
- 项目主页: https://www.pollinator.art/

#### DOON (Over There) — Issay Rodriguez (2020)
- 类型: 艺术作品 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: VR 头显
- 展出于: Art Fair Philippines 2020
- 核心想法: 你像蜜蜂一样用身体而不是语言交流：舞蹈本身就是传给蜂群的信息。
- 作品内容: 一件 VR 作品：观众置身蜂巢之中，通过跳“摇摆舞”为同伴蜜蜂指引花蜜与花粉的方向。
- 实现方式: 互动 VR 环境，观众的动作很可能被映射为指引虚拟同伴的摇摆舞。
- 图片: https://images.squarespace-cdn.com/content/v1/67c1754c89592f0c27fddb0b/bf9663bb-6482-4bde-bdd8-13bc146a4b7e/Guiding+virtual+bees+in+the+VR+environment+of+Issay+Rodriguez%E2%80%99s+DOON+%28Over+There%29%2C+2020.+Image+courtesy+of+%E2%80%98DOON%E2%80%99+VR+Team.?format=1500w https://images.squarespace-cdn.com/content/v1/67c1754c89592f0c27fddb0b/0ec2220a-faf3-4e75-a3f5-6c24fe8b37ad/Issay%2BRodriguez%2C%2BVR%2Benvironment%2Boverlaid%2Bscreenshots%2Bof%2B%E2%80%98DOON%2B%28Over%2BThere%29%E2%80%99%2C%2B2020.jpeg?format=1500w
- 项目主页: https://www.artandmarket.net/analysis/2020/1/5/on-the-possibilities-of-virtual-reality-art

#### Bee Simulator — VARSAV Game Studios (2019)
- 类型: 游戏 · 感官: 改变的视觉, 嗅觉与味觉 · 媒介: 游戏, 屏幕与网页
- 核心想法: 把蜜蜂感官游戏化：“蜜蜂视觉”模式会高亮花粉与气味路径，摇摆舞则是一个节奏小游戏。
- 作品内容: 一款开放世界游戏：你是城市公园里的一只蜜蜂，采集花粉，用舞蹈分享花的位置，并保卫蜂巢。
- 实现方式: 第三人称飞行，可切换感官模式，包含采集任务与舞步匹配小游戏。
- 视频: https://www.youtube.com/watch?v=NSEQIvAgH9o
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/914750/header.jpg
- 项目主页: https://beesimulator.com/

#### The Hive — Wolfgang Buttress (2015)
- 类型: 艺术作品 · 感官: 听觉与振动, 触觉, 集体与网络感知 · 媒介: 多感官装置, 空间音频
- 展出于: Expo Milano 2015 UK Pavilion; Royal Botanic Gardens Kew 2016
- 核心想法: 把蜂群当作一个身体来感知：蜂巢的振动变成光、声音，以及经由颅骨感受到的信号。
- 作品内容: 一座 17 米高的铝制格架雕塑，1000 盏 LED 灯与声音随一个活蜂群的振动实时脉动；访客可咬住小木棒，通过骨传导听见蜜蜂。
- 实现方式: 邱园蜂箱中的加速度计传出振动数据，驱动 LED 与作曲声景；设有骨传导聆听点。
- 视频: https://www.youtube.com/watch?v=kEsq8GREX9A
- 项目主页: https://www.wolfgangbuttress.com

#### a better nectar — Jessica Rath (2015)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 多感官装置
- 展出于: University Art Museum, California State University Long Beach 2015
- 核心想法: 看见紫外、失去红色，是进入蜜蜂花朵世界的入口。
- 作品内容: 一场与蜜蜂科学家合作的展览，把观众放到蜜蜂的位置：“Bee Purple”呈现蜜蜂眼中的花朵颜色，“Resonant Nest”是一个大到可以走进去的雕塑巢穴。
- 实现方式: 以雕塑、紫外偏移的色彩作品和可步入的巢穴结构完成，参考了与授粉科学家的研究。
- 视频: https://www.youtube.com/watch?v=B7DjD9JlGqo
- 图片: http://jessicarath.com/files/2014/09/web_nest-720x720.jpg http://jessicarath.com/files/2014/09/web_purple-720x720.jpg
- 项目主页: http://jessicarath.com/blog/projects/a-better-nectar/

#### The Honeybee Ballet — Jonathon Keats (2008)
- 类型: 表演 · 感官: 集体与网络感知, 身体图式与运动 · 媒介: 表演与参与式, 多感官装置
- 展出于: Yerba Buena Center for the Arts 2008
- 核心想法: 作品不是让人像蜜蜂一样跳舞，而是通过塑造蜜蜂所感知的东西，用它们自己的语言，也就是摇摆舞来写作。
- 作品内容: 一出为蜜蜂编排的芭蕾：艺术家在大学农场按选定图案种花，决定采集蜂会汇报的路线，于是蜂巢里蜜蜂自己的摇摆舞就跳出了他的编舞。
- 实现方式: 按照与蜂巢的距离和方向布置花丛，以此“谱写”采集蜂招募同伴时跳的摇摆舞。
- 视频: https://www.youtube.com/watch?v=3OPKKbW85Jg
- 项目主页: https://rhizome.org/community/13178/

#### Bee's — Susana Soares (2007)
- 类型: 艺术作品 · 感官: 嗅觉与味觉, 呼吸与内感受 · 媒介: 多感官装置, 可穿戴与感官装置
- 展出于: Science Gallery Dublin
- 核心想法: 蜜蜂的鼻子成为人的感知器官，一种从其他物种借来的诊断感官。
- 作品内容: 手工吹制的玻璃器皿里装着受过训练的蜜蜂；人对着玻璃呼气，如果蜜蜂嗅到疾病的化学标记，就会飞进一个小腔室。
- 实现方式: 用巴甫洛夫式训练让蜜蜂对目标气味作出反应，放在双腔玻璃容器中。
- 视频: https://www.youtube.com/watch?v=NcWyf20aMv0

#### Live-In Hive — Mark Thompson (1976)
- 类型: 表演 · 感官: 嗅觉与味觉, 听觉与振动, 触觉 · 媒介: 表演与参与式, 多感官装置
- 核心想法: VR 之前的沉浸：蜂巢的热度、嗡鸣和气味包围头部，人成为蜂群中一个被动的成员。
- 作品内容: 艺术家把头从一个玻璃蜂箱的底部伸进去，长时间停留在里面，一群蜜蜂在他周围筑巢，并通过一根管子进出。
- 实现方式: 木箱配玻璃和金属壁，底部开有伸头的孔，并用金属丝管通向外面供蜜蜂觅食。
- 图片: https://www.artribune.com/wp-content/uploads/2017/01/Mark-Thompson-Live-In-Hive-1976.-Performance.jpg
- 项目主页: https://www.artribune.com/arti-visive/2017/01/miele-artisti-beuys-huyghe-thompson/

### 蚂蚁与群落

超个体、信息素路径、群体智能。

#### Empire of the Ants — Tower Five (2024)
- 类型: 游戏 · 感官: 集体与网络感知, 时间与尺度 · 媒介: 游戏, 屏幕与网页
- 核心想法: 照片级的蚂蚁尺度：落叶、水滴和苔藓变成建筑，一只蚂蚁指挥一个超个体。
- 作品内容: 一款照片级真实的策略冒险游戏：你是 103,683 号蚂蚁，探索森林地面并带领蚁群度过四季；改编自 Bernard Werber 的小说。
- 实现方式: 用 Unreal Engine 5 以蚂蚁尺度渲染真实森林场景，结合第三人称探索与即时战略。
- 视频: https://www.youtube.com/watch?v=4FoxT1FtnBI
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2287330/header.jpg
- 项目主页: https://www.microids.com/empire-of-the-ants/

#### SimAnt — Maxis (1991)
- 类型: 游戏 · 感官: 集体与网络感知, 嗅觉与味觉 · 媒介: 游戏, 屏幕与网页
- 展出于: Codie Award, Best Simulation Game 1992
- 核心想法: 同时是一只蚂蚁和整个蚁群：玩家在个体身体与超个体之间切换，由信息素轨迹引导。
- 作品内容: 一款模拟游戏：你控制一只黄蚂蚁，并借由它带领整个蚁群，与红蚂蚁争夺郊区的后院和房子。
- 实现方式: 包含信息素轨迹、分工与招募的蚁群模拟；由 Will Wright 设计，参考了 Hölldobler 与 Wilson 的 The Ants。
- 视频: https://www.youtube.com/watch?v=FiAGLMpjRIs
- 图片: https://i.ytimg.com/vi/FiAGLMpjRIs/hqdefault.jpg
- 项目主页: https://en.wikipedia.org/wiki/SimAnt

#### The World Flag Ant Farm — Yukinori Yanagi (1990)
- 类型: 艺术作品 · 感官: 集体与网络感知, 时间与尺度 · 媒介: 多感官装置
- 展出于: Aperto, Venice Biennale 1993
- 核心想法: 蚁群根本感知不到国旗，它日常的劳作就消解了人类为之争斗的符号。
- 作品内容: 由彩色沙子做成的国旗装在相连的塑料盒中，被蚂蚁占领；蚂蚁挖出的隧道把沙子搬过边界，国旗逐渐混在一起；这一系列延续到 ASEAN +3 等后期作品。
- 实现方式: 装有彩沙国旗、以管道相连的亚克力盒子，在展期中由活蚁群栖居。
- 视频: https://www.youtube.com/watch?v=WfAH19potOE
- 图片: https://yanagistudio.net/wp-content/uploads/2025/03/18.Eurasia-2001-600x600.jpg
- 项目主页: https://yanagistudio.net/category/archives/ant-farm/

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

#### Wings Against the Veil of Light — Jiabao Li (2024)
- 类型: 表演 · 感官: 听觉与振动, 身体图式与运动 · 媒介: 表演与参与式, 可穿戴与感官装置
- 展出于: The Contemporary Austin, Laguna Gloria 2024
- 核心想法: 舞踏清空人的身体，让蟋蟀在其中活动；这对翅膀给了舞者蟋蟀的发声方式。
- 作品内容: 一场舞踏表演：舞者佩戴由拉链和尺子制成的蟋蟀翅膀，摩擦发声，讲述人造光如何让雄蟋蟀在错误的时间鸣叫。
- 实现方式: 按照蟋蟀“音锉与刮器”结构（拉链与尺子）制作的可穿戴翅膀，通过摩擦发声；现场音乐和灯光呈现光污染。
- 视频: https://www.youtube.com/watch?v=V-doIkBdPkg
- 图片: https://images.squarespace-cdn.com/content/v1/58688c8a6a496327e937e35b/c3932ec7-6a6b-4671-96ce-bc5808b54847/Jiabao+Li_Cricket_Butoh+0.jpg
- 项目主页: https://www.jiabaoli.org/wings-against-the-veil-of-light

#### Birdly Insects — SOMNIACS (2022)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉, 触觉 · 媒介: VR 头显, 多感官装置
- 展出于: NYX Game Awards 2022 (Gold)
- 核心想法: 把飞行者缩小到昆虫尺度，普通的草地就成了广阔而危险的地景。
- 作品内容: Birdly 的一个体验：你以蝴蝶的身份飞过花草地，感受风、听到自己的翅膀声，并遇到包括天敌在内的其他动物。
- 实现方式: 在 Birdly 俯卧运动平台上运行，配合 VR 头显和迎面风扇；内容与 Kevuru Games 合作开发。
- 视频: https://www.youtube.com/watch?v=EYO9mGG9qTE
- 项目主页: https://blooloop.com/animals/news/somniacs-birdly-insects/

#### Free the Air: How to hear the universe in a spider/web — Tomás Saraceno (2022)
- 类型: 艺术作品 · 感官: 听觉与振动, 触觉, 集体与网络感知 · 媒介: 多感官装置, 空间音频
- 展出于: The Shed, New York 2022
- 核心想法: 观众躺在蛛网的位置上：声音以振动的形式经由网传来，就像蜘蛛读取它的世界。
- 作品内容: 观众一起躺在悬于巨大球体中的网上，聆听并用身体感受一段由蜘蛛与蛛网的振动制成的音乐。
- 实现方式: 带悬挂网的球形空间，多声道系统播放由蛛网振动录音转化的低频声音。
- 视频: https://www.youtube.com/watch?v=EG6_8boQQ-w
- 图片: https://i.ytimg.com/vi/EG6_8boQQ-w/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=EG6_8boQQ-w

#### Micro Monsters with David Attenborough — Alchemy Immersive (2021)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 时间与尺度 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Venice VR Expanded 2021
- 核心想法: 昆虫尺度是成为的第一步：平常的地面变成辽阔而危险的世界。
- 作品内容: 五集 VR 系列：把观众缩小到昆虫大小，置身蝎子、蜈蚣、蚜虫、织叶蚁与活板门蛛之间，由 David Attenborough 解说。
- 实现方式: 立体微距实拍结合 CG，在 Meta Quest 上发布（导演 Elliot Graves）。
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2021/Schede_film/970x647/Venice_VR_Expanded/graves_micro_monsters_with_david_attenborough.jpg?itok=hNtopxHL
- 项目主页: https://www.labiennale.org/en/cinema/2021/lineup/venice-vr-expanded/micro-monsters-david-attenborough

#### Webbed — Sbug Games (2021)
- 类型: 游戏 · 感官: 身体图式与运动, 触觉 · 媒介: 游戏, 屏幕与网页
- 核心想法: 蛛丝是延伸的身体：网同时是工具、道路与肢体。
- 作品内容: 一款 2D 物理平台游戏：你是一只小小的孔雀蜘蛛，吐丝荡秋千、搭桥、移动物体，去营救伴侣。
- 实现方式: 物理模拟的蛛丝，可以锚定、拉紧与剪断。
- 视频: https://www.youtube.com/watch?v=xcSo912bT44
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1390350/header.jpg
- 项目主页: https://store.steampowered.com/app/1390350/Webbed/

#### Animalia Sum — Bianca Kennedy, The Swan Collective (2020)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Sundance New Frontier 2020
- 核心想法: 以幽默进入昆虫的身体：在吃与被吃之间切换角色，质疑我们如何给动物排序。
- 作品内容: 一部喜剧 VR 伪纪录片，设想昆虫成为人类主要蛋白质来源的未来：观众先成为一只虫，再成为给虫挤奶的农夫，还观看虫与鲸的拳击赛。
- 实现方式: 手工微缩雕塑经摄影测量采集，用 Perception Neuron 动捕服制作动画，在 Oculus Go 上以互动 360° 呈现。
- 视频: https://www.youtube.com/watch?v=vCmypkilkEY
- 项目主页: https://voicesofvr.com/901-sundance-animalia-sum-blends-humor-with-a-unique-aesthetic-of-photogrammetry-captured-sculptures/

#### Spider/Web Pavilion 7 — Tomás Saraceno (2019)
- 类型: 艺术作品 · 感官: 触觉, 改变的视觉 · 媒介: 多感官装置, 表演与参与式
- 展出于: May You Live in Interesting Times, Venice Biennale 2019
- 核心想法: 蛛网被当作感知工具和阅读世界的方式，由蜘蛛与人共同使用。
- 作品内容: 威尼斯双年展上一个献给蜘蛛与蛛网的展馆，展出活的蛛网，并举办神谕解读，以蛛网占卜回答观众的问题。
- 实现方式: 活蜘蛛与蛛网、蛛网占卜卡和神谕环节，与合作的蛛形学家共同完成。
- 视频: https://www.youtube.com/watch?v=QSbzZ-b6eEI
- 图片: https://studiotomassaraceno.org/files/002-1920x1280.jpg
- 项目主页: https://studiotomassaraceno.org/spiderweb-pavilion-7/

#### UUmwelt — Pierre Huyghe (2018)
- 类型: 艺术作品 · 感官: 改变的视觉, 集体与网络感知 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Serpentine Gallery London 2018–2019
- 核心想法: 标题重复了于克斯屈尔的“环境界”：人、苍蝇和机器各自在自己的世界里感知同一个房间，谁都看不到全貌。
- 作品内容: 一场展览：数千只在展厅中繁殖的苍蝇在 LED 屏幕之间自由飞行，屏幕播放由神经网络根据人脑扫描生成的图像；苍蝇的活动和房间的环境不断改变这些图像。
- 实现方式: 基于 fMRI 数据的深度图像重建（与京都大学神谷实验室合作）、改变图像流的环境传感器，以及一群活苍蝇。
- 视频: https://www.youtube.com/watch?v=enx-vyWn7UU
- 图片: https://d37zoqglehb9o7.cloudfront.net/uploads/2020/04/1269-pierre-serpentine.jpg
- 项目主页: https://www.serpentinegalleries.org/whats-on/pierre-huyghe-uumwelt/

#### Webs of At-tent(s)ion — Tomás Saraceno (2018)
- 类型: 艺术作品 · 感官: 触觉, 改变的视觉 · 媒介: 多感官装置
- 展出于: ON AIR, Palais de Tokyo Paris 2018
- 核心想法: 蛛网是身体之外的感觉器官；关注它，就是关注一种建立在张力与振动而非视觉之上的感官。
- 作品内容: Palais de Tokyo 展览 ON AIR 的一部分：在暗室中，不同蜘蛛物种织成的蛛网被聚光照亮、悬在空中，每一张网都记录了织网者如何感知并把握世界。
- 实现方式: 由活蜘蛛在框架中织成的网在黑暗中被照亮；工作室的实践还包括记录并声音化蛛网振动。
- 视频: https://www.youtube.com/watch?v=spmNH9YKSTk
- 图片: https://studiotomassaraceno.org/files/02_18FRA_PdT_Press_29_AR-1.jpg
- 项目主页: https://studiotomassaraceno.org/webs-of-at-tentsion/

#### Micro Giants — Yifu Zhou (2017)
- 类型: 沉浸式影片 · 感官: 时间与尺度, 改变的视觉 · 媒介: 360°/沉浸式影片, VR 头显
- 展出于: Sundance New Frontier 2018; Kaohsiung VR FILM LAB 2020
- 核心想法: 变成昆虫大小：草丛成了森林，水滴成了泳池，观众住进昆虫生活的尺度。
- 作品内容: 一部 6 分钟的 CG VR 动画，把观众缩小到蚊子大小，置身林下微观世界，蚜虫、瓢虫、蜘蛛、姬蜂与蜂鸟在巨大尺度下上演食物链。
- 实现方式: 以显微摄影为参考、在电影级流程中渲染的全 CG 4K 立体 360 动画（每个角色约 300 张 8K 贴图），通过 VR 头显观看。
- 视频: https://www.youtube.com/watch?v=a13wgYDLOQ4
- 项目主页: https://www.jiemian.com/article/1901935.html

#### Arachnid Orchestra. Jam Sessions — Tomás Saraceno (2015)
- 类型: 艺术作品 · 感官: 听觉与振动, 触觉 · 媒介: 多感官装置, 表演与参与式, 空间音频
- 展出于: NTU Centre for Contemporary Art Singapore 2015
- 核心想法: 蜘蛛生活在振动的世界里；放大蛛网，人类就能听见并回应这个世界。
- 作品内容: 蜘蛛在暗室里织网；网的振动被放大成声音，人类音乐家与蜘蛛在公开的即兴演奏中合奏。
- 实现方式: 在蛛网上安装接触式麦克风和振动传感器，放大后与人类乐器现场混音。
- 视频: https://www.youtube.com/watch?v=hIuNu-dcQX8
- 项目主页: https://studiotomassaraceno.org/arachnid-orchestra-jam-sessions/

#### The Plan — Krillbite Studio (2013)
- 类型: 游戏 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 游戏, 屏幕与网页
- 核心想法: 苍蝇尺度的一生：一段缓慢的上升，让渺小而短暂的生命显得有分量。
- 作品内容: 一款短小的免费游戏：你是一只苍蝇，在黑暗的森林中向上飞向光亮，伴随着格里格的《在山魔王的宫殿里》。
- 实现方式: 简单的 3D 飞行操作，单一连续关卡，配以古典音乐。
- 视频: https://www.youtube.com/watch?v=tWEZ2cbdacc
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250600/header.jpg
- 项目主页: http://krillbite.com/theplan

#### The Sound of Light in Trees — David Dunn (2006)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 空间音频
- 核心想法: 从树干内部聆听，让你处在甲虫的尺度上，身处决定森林存亡的声音世界。
- 作品内容: 在新墨西哥州矮松树干内部录制的声音：在干旱引发的虫灾中，小蠹虫在树皮里啃食、咔嗒作响并互相发信号。
- 实现方式: 把自制接触式传感器插入韧皮部组织录音，几乎不做处理地剪辑；之后与物理学家 Jim Crutchfield 合作研究甲虫声学。
- 视频: https://www.youtube.com/watch?v=gH6zUgeKY7o

#### Mister Mosquito — Zoom Inc. (2001)
- 类型: 游戏 · 感官: 身体图式与运动, 触觉 · 媒介: 游戏, 屏幕与网页
- 核心想法: 人体即地形：吸血是潜行，每一次失误都会让宿主的烦躁上升。
- 作品内容: 一款潜行游戏：你是一只蚊子，整个夏天都要在不被察觉、不被拍死的情况下吸一家日本人的血。
- 实现方式: 围绕真人比例的角色进行 3D 飞行，有烦躁值指示，并用压感模拟摇杆控制吸血力度。
- 视频: https://www.youtube.com/watch?v=KpaI7rE2AiA
- 图片: https://i.ytimg.com/vi/KpaI7rE2AiA/hqdefault.jpg
- 项目主页: https://en.wikipedia.org/wiki/Mister_Mosquito

#### Chaos and the Emergent Mind of the Pond — David Dunn (1991)
- 类型: 艺术作品 · 感官: 听觉与振动 · 媒介: 空间音频
- 核心想法: 从内部聆听，池塘听起来像一个会思考的整体生物；聆听成为进入昆虫时间的方式。
- 作品内容: 一首由淡水池塘中水生昆虫的水听器录音构成的作品，揭示水面下由咔嗒、嗡鸣和节奏组成的稠密世界。
- 实现方式: 来自北美和非洲池塘的水听器录音，剪辑成一首连续作品。
- 视频: https://www.youtube.com/watch?v=eZ6yDfx2new

#### Flyhead (Environment Transformer) — Haus-Rucker-Co (1968)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动 · 媒介: 可穿戴与感官装置
- 核心想法: 一件 1960 年代的“复眼”头显：改变感官就改变了与环境的关系，不需要计算机。
- 作品内容: 一顶绿色双泡头盔，内部的分光棱镜把视野分成许多小面，耳机扭曲周围的声音，让佩戴者像昆虫一样感知街道。
- 实现方式: 聚乙烯头盔，内置与眼睛齐平的棱镜阵列和装有声学滤波器的立体声耳机。
- 图片: https://arthur.io/img/art/jpg/00017344fb78826ea/haus-rucker-co/flyhead-environment-transformer-wien/large/haus-rucker-co--flyhead-environment-transformer-wien.jpg
- 项目主页: https://www.moma.org/explore/inside_out/2011/03/31/the-mind-expanderflyhead-helmet-a-mind-blowing-perception-transformer/

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

#### Taking the Perspective of Dairy Cows — Erin B. Ryan (2026)
- 类型: 论文 · 感官: 改变的视觉 · 媒介: 360°/沉浸式影片, 屏幕与网页
- 核心想法: 动物视角的影像让动物的经验进入人类关于其福利的决策。
- 作品内容: 大学生通过口头描述，或通过从动物视角拍摄的沉浸式影像了解奶牛母子分离，然后在焦点小组中讨论。
- 实现方式: 在母牛与小牛眼睛高度录制影像，与文字对照；对焦点小组记录做主题分析。
- 论文: https://doi.org/10.1017/awf.2026.10078 (Animal Welfare 2026)

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

#### Little Kitty, Big City — Double Dagger Studio (2024)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 小猫尺度下的城市：街道设施、鸟和人既是障碍也是玩伴。
- 作品内容: 一款开放世界游戏：你是一只从窗台跌落的小黑猫，在一座日式风格的城市中探索，寻找回家的路。
- 实现方式: 针对小猫身体调整的第三人称攀爬、打盹与物件互动。
- 视频: https://www.youtube.com/watch?v=-39kuBXyKWo
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1177980/header.jpg
- 项目主页: https://linktr.ee/littlekittybigcity

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

#### Squeeker: The Mouse Coach — Jiabao Li (2023)
- 类型: 艺术作品 · 感官: 身体图式与运动 · 媒介: 多感官装置, 屏幕与网页, 表演与参与式
- 展出于: IDFA DocLab
- 核心想法: 颠倒实验鼠与人的关系：人的身体按照老鼠每天“半程马拉松”的节奏接受训练。
- 作品内容: 一个应用、跑步计划与装置：宠物鼠的智能跑轮决定你的训练，老鼠一跑你就收到提醒去跑，跑到与它相同的距离，它得到零食，你得到刷社交媒体的时间。
- 实现方式: 装有传感器的跑轮连接手机应用，把人的跑步距离与老鼠的距离匹配，并解锁相应的滑屏距离。
- 视频: https://www.youtube.com/watch?v=UvfkYPLJAaw
- 图片: https://images.squarespace-cdn.com/content/v1/58688c8a6a496327e937e35b/03dabe22-2bce-40aa-9646-b4c1157818b1/Jiabao+Li+Squeeker+Mouse+Coach+1.jpeg
- 项目主页: https://www.jiabaoli.org/mouse-coach

#### Stray — BlueTwelve Studio (2022)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 展出于: The Game Awards 2022 (Best Independent Game, Best Debut Indie Game)
- 核心想法: 猫的可供性：每一处窗台、管道和门垫都按猫的方式被解读，甚至有专门的“喵”键。
- 作品内容: 一款第三人称冒险游戏：你是一只与家人走散的流浪猫，身处住满机器人的封闭赛博城市，攀爬、喵叫、抓挠、钻缝。
- 实现方式: 情境式跳跃让猫在各个表面之间移动，动画很可能参考了真实猫的影像，镜头保持在猫的高度。
- 视频: https://www.youtube.com/watch?v=4uP2MyUL49s
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg
- 项目主页: https://stray.game

#### Ex Anima — Bartabas, Pierre Zandrowicz (2019)
- 类型: 沉浸式影片 · 感官: 身体图式与运动, 呼吸与内感受 · 媒介: VR 头显
- 展出于: Venice Virtual Reality 2019
- 核心想法: 不靠故事，而是通过呼吸与节奏成为马：一首献给动物呼吸的颂歌。
- 作品内容: 马从黑暗中出现，在沙地上呼吸、起舞；随着作品推进，观众与它们一同移动，逐渐成为马。
- 实现方式: 以 Zingaro 马术剧团的演出为基础的 VR 影片，对马进行立体拍摄（很可能结合体积捕捉与 CG）。
- 视频: https://www.youtube.com/watch?v=H4TyjO6UiDI
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2019/Schede_film/970x647/Venice_VR/ex-anima-experience.jpg?itok=pp2569cx
- 项目主页: https://www.labiennale.org/en/cinema/2019/venice-virtual-reality/ex-anima-experience

#### Sweet Dreams — Marshmallow Laser Feast (2019)
- 类型: 艺术作品 · 感官: 嗅觉与味觉, 多感官 · 媒介: VR 头显, 多感官装置, 表演与参与式
- 展出于: Sundance New Frontier 2019; Factory International, Manchester 2024; Ars Electronica 2025
- 核心想法: 一部以人类为中心的讽刺作品：鸡只以卡通吉祥物的形象出现，而这正是它要说的：食物文化如何把盘中的动物藏起来。
- 作品内容: 最初是一场 VR 用餐体验：观众吃喝真实的食物，虚拟盛宴随之回应（2019 年圣丹斯）；2024 年在 Factory International 发展为 60 分钟的步行式演出，跟随一家没落快餐公司的吉祥物“小鸡 Ricky”穿越食物链。
- 实现方式: 2019 年版：在有真人演员的剧场式 VR 场景中追踪餐具、食物与饮品，并感知吃喝动作；2024 年版：八个房间里结合实时图形、定制的 VR 木偶操控流程、动作捕捉、雕塑与空间音频。
- 视频: https://www.youtube.com/watch?v=Pea9dROtxb4
- 图片: https://marshmallowlaserfeast.com/app/uploads/2023/11/SweetDreams_1920x1080.jpg https://marshmallowlaserfeast.com/app/uploads/2023/11/MLF_FI_SweetDreams_DSC01435_2k-1.jpg https://filmsandfestivals.britishcouncil.org/storage/project/images/SweetDreams.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/sweet-dreams/

#### Opale — Behnaz Farahi (2017)
- 类型: 艺术作品 · 感官: 触觉, 身体图式与运动 · 媒介: 可穿戴与感官装置
- 核心想法: 服装变成动物皮毛，让人的身体拥有一层会对威胁与亲昵作出反应的毛皮。
- 作品内容: 一件情感服装，表面覆盖一层光纤“毛皮”：当旁观者露出愤怒或惊讶的表情时，毛皮会竖起；被抚摸时则会“呼噜”，就像狗、猫和老鼠竖起毛发那样。
- 实现方式: 嵌入硅胶的光纤由气动软体机器人系统驱动，摄像头识别旁观者的面部表情并据此控制动作。
- 视频: https://vimeo.com/232258166
- 图片: https://behnazfarahi.com/opale/1.jpg
- 项目主页: http://behnazfarahi.com/opale/

#### Art for Dogs — Dominic Wilcox (2016)
- 类型: 艺术作品 · 感官: 嗅觉与味觉, 改变的视觉 · 媒介: 多感官装置
- 核心想法: 展厅围绕狗的感官优先级设计：嗅觉优先、蓝黄色视觉、低视线和玩耍。
- 作品内容: 一场为狗设计的交互雕塑展：装满海洋球的巨大食盆、带吹过气味和移动风景的车窗模拟器，以及在碗之间跳跃的喷泉。
- 实现方式: 带气味风扇、海洋球池和喷水装置的机械雕塑，为狗的二色视觉配色，并按狗的高度搭建。
- 视频: https://www.youtube.com/watch?v=h7hpI0OodAY
- 项目主页: https://www.dominicwilcox.com/

#### Experiencing Nature: Embodying a Cow and a Coral — Stanford Virtual Human Interaction Lab (2016)
- 类型: 论文 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显
- 核心想法: 是“成为”动物而不是“观看”动物，让人与自然的连结感和关切提升，并持续一周。
- 作品内容: 三项实验中，参与者四肢着地、在触觉刺激下成为一头走向屠宰场的牛，或酸化礁石上的一株珊瑚，并与只看同样内容的视频进行比较。
- 实现方式: 头戴显示器加全身追踪；参与者手膝着地爬行，研究者用棍子同步触碰其身体，对应虚拟赶牛棒的戳刺。
- 论文: https://doi.org/10.1111/jcc4.12173 (Journal of Computer-Mediated Communication 2016)
- 视频: https://www.youtube.com/watch?v=aQke1eQHSAA

#### GoatMan — Thomas Thwaites (2016)
- 类型: 艺术作品 · 感官: 身体图式与运动, 嗅觉与味觉 · 媒介: 可穿戴与感官装置, 表演与参与式
- 展出于: Ig Nobel Prize in Biology 2016; Nature–Design Triennial, Cooper Hewitt 2019
- 核心想法: 成为动物立刻撞上身体的极限：疼痛、寒冷、步态和消化决定了你能走多远。
- 作品内容: 设计师制作了假肢腿、头盔并尝试做人工瘤胃，然后四肢着地，与一群山羊一起在瑞士阿尔卑斯山中走了几天。
- 实现方式: 与假肢师 Glyn Heath 合作定制的前后腿假肢、防护头盔，并咨询神经科学家与山羊行为专家。
- 视频: https://www.youtube.com/watch?v=-IPub-Fipz8
- 图片: https://www.thomasthwaites.com/folio5/wp-content/uploads/2016/03/Goat8-Thomas_Thwaites-photo-Tim_Bowditch.jpg https://www.thomasthwaites.com/folio5/wp-content/uploads/2016/03/Goat14-Thomas_Thwaites-photo-Tim_Bowditch.jpg
- 项目主页: https://www.thomasthwaites.com/a-holiday-from-being-human-goatman/

#### K-9_topology: Hybrid Family — Maja Smrekar (2016)
- 类型: 表演 · 感官: 呼吸与内感受, 身体图式与运动 · 媒介: 表演与参与式
- 展出于: Berlin 2016; Prix Ars Electronica 2017 (Golden Nica, Hybrid Art, K-9_topology)
- 核心想法: 通过激素成为动物：催乳素与催产素在身体层面构成一个跨物种家庭。
- 作品内容: 在与她的狗隐居三个月后，艺术家通过吸乳和饮食诱导泌乳，并在公开表演中给一只名叫 Ada 的幼犬哺乳。
- 实现方式: 系统吸乳刺激垂体、催乳饮食，以及与 Manuel Vason 合作用照片记录的长时表演。
- 图片: https://images.squarespace-cdn.com/content/v1/5c326f997c9327edb6347bf8/1575463206163-6D6W7CEJ7DBLDNJJW29I/03_K9%2BHYBRID%2BFAMILY.jpg
- 项目主页: https://www.majasmrekar.org/k-9topology-hybrid-family

#### iAnimal — Animal Equality (2016)
- 类型: 沉浸式影片 · 感官: 改变的视觉 · 媒介: 360°/沉浸式影片
- 核心想法: 一件批判性的对照作品：360° 相机提供动物的位置，却不提供它的感官，依靠的是目击而不是化身。
- 作品内容: 一系列在农场和屠宰场内部、以动物（猪、鸡和奶牛）的高度拍摄的 360° 影片，让观众站在动物所站的位置。
- 实现方式: 在工业化农场里把 360° 相机放在动物视线高度，配名人旁白，并在公共场所用头显放映。
- 视频: https://www.youtube.com/watch?v=53CAL47OWxo
- 项目主页: https://animalequality.org/

#### Catlateral Damage — Manekoware (2015)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, VR 头显
- 核心想法: 第一人称的猫：视野中的爪子与可拍落的物理物件，把猫的调皮变成了整个游戏。
- 作品内容: 一款第一人称游戏：你是一只家猫，要在时间用完前把尽可能多的东西拍到地上。
- 实现方式: 第一人称用猫爪拍打物理模拟的家居物件，PC 版支持可选 VR。
- 视频: https://www.youtube.com/watch?v=HWhL3Vd5u0s
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/329860/header.jpg
- 项目主页: http://www.catlateraldamage.com/

#### I Wear the Dog's Hair, and the Dog Wears My Hair — AKI INOMATA (2014)
- 类型: 艺术作品 · 感官: 触觉, 身体图式与运动 · 媒介: 可穿戴与感官装置, 多感官装置
- 展出于: HAGISO Tokyo 2014
- 核心想法: 交换皮毛是一种安静的“与之共同生成”：每个身体穿上对方的皮肤，而不是模仿对方的行为。
- 作品内容: 艺术家花了数年收集自己和她的狗 Cielo 的毛发，然后用狗毛为自己做了一件披肩，用自己的头发为狗做了一件，并拍摄两者互穿对方“皮毛”的影像。
- 实现方式: 用收集来的人发和狗毛手工毡制、编织成披肩，与双频道影像装置一起展出。
- 视频: https://vimeo.com/102524253
- 图片: https://www.aki-inomata.com/shared/img/works/11/11-02.jpg https://www.aki-inomata.com/shared/img/works/11/11-03.jpg
- 项目主页: https://www.aki-inomata.com/works/dogs/

#### K-9_topology: Ecce Canis — Maja Smrekar (2014)
- 类型: 艺术作品 · 感官: 嗅觉与味觉 · 媒介: 多感官装置
- 展出于: Prix Ars Electronica 2017 (Golden Nica, Hybrid Art, K-9_topology)
- 核心想法: 人与狗在一种共享的分子中相遇；观众通过嗅觉进入展厅，而嗅觉正是狗的主导感官。
- 作品内容: 从艺术家和她的狗 Byron 的血液中提取的血清素被制成一种气味，充满一个球形洞穴，洞穴旁是分离它的实验设备。
- 实现方式: 用高效液相色谱从富血小板血浆中分离血清素组分，再制成气味。
- 图片: https://images.squarespace-cdn.com/content/v1/5c326f997c9327edb6347bf8/1575227420980-BZIGFQFH9X8CSEG1TXDO/01_K-9_topology_ECCE+CANIS.jpg
- 项目主页: https://www.majasmrekar.org/ekce-canis

#### Second Livestock — Austin Stewart (2014)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: VR 头显, 多感官装置
- 核心想法: 把头显戴到动物头上，暴露出 VR 的“自由”承诺也可能是一种让身体继续被关押的方式。
- 作品内容: 一个思辨项目，为笼养鸡设计 VR 头显和全向跑步机，让笼中的鸡在虚拟的散养农场里漫游。
- 实现方式: 鸡尺寸头显和跑步机的模型，配一片简单的虚拟牧场，以装置、网站和影像呈现。
- 视频: https://www.youtube.com/watch?v=oRFSsNegE24
- 项目主页: https://www.isea-symposium-archives.org/art-events/austin-stewart-second-livestock/

#### May the Horse Live in Me — Art Orienté Objet (2011)
- 类型: 表演 · 感官: 身体图式与运动, 呼吸与内感受 · 媒介: 表演与参与式
- 展出于: Kapelica Gallery Ljubljana 2011; VIDA 14.0 (third prize) 2012
- 核心想法: “成为动物”进入身体内部：马的免疫球蛋白改变了艺术家的睡眠、恐惧与自我感。
- 作品内容: Marion Laval-Jeantet 在数月的免疫准备后被注射了马的血浆，随后踩着形如马蹄的高跷与一匹马并肩行走、交流。
- 实现方式: 在医疗监护下逐步接触马的免疫球蛋白，最后注射血浆，并穿着定制马蹄高跷进行公开表演。
- 视频: https://www.youtube.com/watch?v=yx_E4DUWXbE
- 项目主页: https://www.paris-art.com/que-le-cheval-vive-en-moi/

#### necomimi — neurowear (2011)
- 类型: 产品 · 感官: 身体图式与运动, 呼吸与内感受 · 媒介: 可穿戴与感官装置
- 展出于: Tokyo Game Show 2011
- 核心想法: 戴上动物的表情器官，把隐藏的内在状态变成看得见的、猫一样的肢体语言。
- 作品内容: 由脑波控制的猫耳：头箍读取佩戴者的脑电，专注时耳朵竖起，放松时耷拉下来，两者兼有时左右摆动。
- 实现方式: 单电极 NeuroSky 脑电传感器驱动两只舵机控制的耳朵。
- 视频: https://www.youtube.com/watch?v=_L_VkXbCIqY
- 图片: https://i.ytimg.com/vi/_L_VkXbCIqY/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=_L_VkXbCIqY

#### Music for Dogs — Laurie Anderson (2010)
- 类型: 表演 · 感官: 听觉与振动 · 媒介: 表演与参与式, 空间音频
- 展出于: Vivid Sydney 2010; Times Square New York 2016
- 核心想法: 为另一个物种的听觉作曲，意味着部分地用人类听众感知不到的频率写作。
- 作品内容: 一场为狗创作的户外音乐会，包含狗听觉范围内的声音，在悉尼歌剧院前广场为狗和它们的主人演出。
- 实现方式: 现场电子与小提琴演奏，包含高于人类听觉的高频内容，在户外扩音。
- 视频: https://www.youtube.com/watch?v=3bS2Kuhe6tk
- 项目主页: https://laurieanderson.com/

#### Dog's Life — Frontier Developments (2003)
- 类型: 游戏 · 感官: 嗅觉与味觉, 改变的视觉 · 媒介: 游戏, 屏幕与网页
- 核心想法: 让狗的嗅觉可见：世界褪色，气味变成可追踪的彩色云团。
- 作品内容: 一款冒险游戏：你是一只名叫 Jake 的狗，在寻找朋友；“嗅觉视图”会切换到狗的视角，气味以彩色云团呈现。
- 实现方式: PlayStation 2 上的第一人称嗅觉模式，让场景褪色并叠加彩色气味源。
- 视频: https://www.youtube.com/watch?v=hShavuoq2vY
- 图片: https://i.ytimg.com/vi/hShavuoq2vY/hqdefault.jpg
- 项目主页: https://en.wikipedia.org/wiki/Dog%27s_Life

#### Man-Dog performances — Oleg Kulik (1994)
- 类型: 表演 · 感官: 身体图式与运动 · 媒介: 表演与参与式
- 展出于: Moscow 1994; Deitch Projects New York 1997
- 核心想法: 作为社会挑衅的“成为狗”：动物身体暴露出周围人类群体的暴力与界限。
- 作品内容: 一系列表演：艺术家赤身、拴着狗链扮演狗，吠叫并咬观众，从 1994 年的莫斯科到 1997 年在纽约 Deitch Projects 的《I Bite America and America Bites Me》。
- 实现方式: 长时现场表演，使用狗链、笼子和与观众的互动，以照片和影像记录。
- 视频: https://www.youtube.com/watch?v=M2CZyLjtIVk
- 项目主页: https://en.wikipedia.org/wiki/Oleg_Kulik

### 野生哺乳动物

鹿、狐狸、狼、大象、熊、灵长类与其他野生哺乳动物。

#### Become the Beast — Perttu Hämäläinen (2026)
- 类型: 研究原型 · 感官: 身体图式与运动 · 媒介: 游戏, 多感官装置
- 核心想法: 人仰躺时也能驱动四足身体，把腹部锻炼变成动物的步态。
- 作品内容: 一款健身游戏：玩家仰躺在地上，交替摆动手臂和腿，像老虎一样奔跑。
- 实现方式: 用架在上方的 Kinect 深度传感器捕捉仰躺玩家的四肢，映射为屏幕上老虎的四足奔跑。
- 论文: https://arxiv.org/abs/2603.15428 (arXiv 2026)
- 图片: https://arxiv.org/html/2603.15428v2/Source/Images/teaserFinal.png

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

#### ZooWear — Pingting Chen (2025)
- 类型: 研究原型 · 感官: 触觉, 听觉与振动 · 媒介: 可穿戴与感官装置
- 核心想法: 戴上动物的耳朵，就能感受到它在食物链中的位置。
- 作品内容: 卡通动物耳朵头戴设备，在游客参观动物园时以不同振动模式模拟动物对捕食者与猎物的反应。
- 实现方式: 带振动马达的头戴耳朵，根据游客在动物园中的位置触发；与游客进行实地研究。
- 论文: https://doi.org/10.1080/10447318.2025.2583471 (International Journal of Human–Computer Interaction 2025)

#### Pine Cone Prowl: Embodying a Flying Squirrel — Gamification Group, Tampere University (2024)
- 类型: 研究原型 · 感官: 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 是滑翔而不是飞行：围绕一种小型哺乳动物的移动方式来设计身体。
- 作品内容: 一款 VR 游戏，玩家成为一只飞鼠，在芬兰森林的树木之间滑翔。
- 实现方式: 头戴式 VR，用手臂动作展开滑翔膜（很可能基于手柄）。
- 论文: https://doi.org/10.1145/3681716.3690625 (Academic Mindtrek 2024)

#### Playing for a Better Future: Animal Avatars and Attitudes — Andrey Krekhov (2024)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 扮演动物能改变人对野生动物的内隐态度，就像化身互换对人类群体的效果一样。
- 作品内容: 一项研究（N=78）中，参与者在 Endling 中扮演狐狸或在 Bee Simulator 中扮演蜜蜂，然后接受关于动物的内隐态度测试。
- 实现方式: 在屏幕上玩商业游戏，随后进行内隐联想测验与问卷。
- 论文: https://doi.org/10.1145/3677096 (Proceedings of the ACM on HCI (CHI PLAY) 2024)

#### Primate Visions: Macaque Macabre — Natasha Tontey (2024)
- 类型: 艺术作品 · 感官: 身体图式与运动, 多感官 · 媒介: 多感官装置, 屏幕与网页, 表演与参与式
- 展出于: Museum MACAN, Jakarta 2024–25 (Audemars Piguet Contemporary); FID Marseille 2025; Singapore International Film Festival 2025; BFI London Film Festival 2025
- 核心想法: 成为猕猴是一种仪式技术：它们同时是祖先、害兽和濒危的亲属。
- 作品内容: 一个沉浸式展览与影片：一位灵长类学家在北苏拉威西放归一群黑冠猕猴（yaki）；扮演猕猴的演员重演米纳哈萨的 Mawolay 仪式——萨满穿上猴子服装化身猕猴，把猴群挡在村外。
- 实现方式: 身穿服装的演员、仿 1990 年代印尼肥皂剧的夸张美学，以及可步入的装置。
- 视频: https://www.youtube.com/watch?v=4Z16Cf6jFbw
- 图片: https://admin.fidmarseille.org/media/pages/festivals/festival-36/films/primate-visions-macaque-macabre/fdd5085136-1770734979/fidmarseille-2025-primate-visions-macaque-macabre-film-still-0-2567367-1200x630-crop.jpg
- 项目主页: https://www.museummacan.org/exhibition/macaque-macabre?lang=en

#### Endling - Extinction is Forever — Herobeat Studios (2022)
- 类型: 游戏 · 感官: 嗅觉与味觉, 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 从一个狐狸家庭内部经历灭绝：环境破坏被感受为幼崽的饥饿与危险。
- 作品内容: 一款冒险游戏：你是被人类破坏的地球上最后一只狐狸妈妈，夜里觅食喂养四只幼崽，同时避开人类与他们的机器。
- 实现方式: 2.5D 侧视探索，有昼夜循环以及留下可见痕迹的嗅觉追踪感官。
- 视频: https://www.youtube.com/watch?v=kiM2_XB_HZE
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/898890/header.jpg
- 项目主页: https://www.thqnordicmobile.com/en/games/endling/

#### AWAY: The Survival Series — Breaking Walls (2021)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 纪录片的拍摄对象变成了玩家：旁白描述的正是玩家操控的动物。
- 作品内容: 一款以自然纪录片风格呈现的生存冒险游戏：你是一只蜜袋鼯，在树间滑翔、击退捕食者以保护家人。
- 实现方式: 第三人称滑翔与攀爬，配以纪录片式旁白与镜头。
- 视频: https://www.youtube.com/watch?v=xGYbtvKcjmQ
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/750200/header.jpg
- 项目主页: https://www.breakingwalls.co/

#### Bubalus Bubalis 16hz-40,000hz — Zheng Mahler (2021)
- 类型: 艺术作品 · 感官: 听觉与振动 · 媒介: 多感官装置, 空间音频
- 展出于: Liquid Ground, Para Site, Hong Kong 2021
- 核心想法: 像水牛那样聆听湿地（最高可达 40,000 赫兹），去感知这些把废弃稻田变成栖息地的动物。
- 作品内容: “大屿山三部曲”第一部：艺术家跟随大屿山的野化水牛录音，使用按水牛耳朵形状制作的双耳麦克风，并把录音分成可听与超声两部分，做成声音雕塑。
- 实现方式: 把水牛耳朵 3D 扫描并打印成双耳麦克风，录制超声波田野录音，配合水体扬声器与 4K 影像。
- 视频: https://www.youtube.com/watch?v=vOeUkKI-Yxw
- 图片: https://static.wixstatic.com/media/d3b537_ae2a5e50def2431ea2364ef8f97c2582~mv2.jpeg https://static.wixstatic.com/media/d3b537_8e929482431047fba804a816cb9d61b6~mv2.jpg https://static.wixstatic.com/media/d3b537_f2821c91de31427fb608d7771bfbfbb7~mv2.jpg
- 项目主页: https://www.zhengmahler.world/bubalusbubalis16-40000hz

#### Gorilla Tag — Another Axiom (2021)
- 类型: 游戏 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: VR 头显, 游戏
- 核心想法: 用手行走：去掉双腿，身体便通过手臂学会类人猿的移动方式——这是数百万玩家接受的一次身体交换。
- 作品内容: 一款多人 VR 游戏：玩家是没有腿的大猩猩，只能用手推地面、墙壁和树木来移动，彼此玩捉人游戏。
- 实现方式: 没有摇杆移动，手柄位置直接推动物理身体；最初由 Kerestell Smith 开发，先在 Meta Quest 与 SteamVR 抢先体验发布。
- 视频: https://www.youtube.com/watch?v=y3bR3s546CU
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1533390/header.jpg
- 项目主页: https://gorillatagvr.com/

#### Shelter 3 — Might and Delight (2021)
- 类型: 游戏 · 感官: 集体与网络感知, 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 群体即身体：照料从一头幼象扩展到一起行动的整个家族。
- 作品内容: 你是一头大象女族长，带领象群与幼象穿越开阔大地，在危险时召集它们，寻找水源与庇护所。
- 实现方式: 第三人称象群模拟，跟随者会对女族长的叫声与位置作出反应。
- 视频: https://www.youtube.com/watch?v=U_IlNFERdzE
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/977630/header.jpg
- 项目主页: https://www.mightanddelight.com/

#### Spirit of the North — Infuse Studio (2019)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 以狐狸的高度看风景，全程没有语言。
- 作品内容: 一款无对白的冒险游戏：你是一只赤狐，在冰岛风景中旅行，身边有北极光的守护灵相伴。
- 实现方式: 第三人称探索与轻度解谜，使用一种可以离开狐狸身体的灵体能力。
- 视频: https://www.youtube.com/watch?v=6fZBM6iKUrg
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1213700/header.jpg
- 项目主页: https://playspiritofthenorth.com/

#### Becoming Animal — Emma Davie, Peter Mettler (2018)
- 类型: 沉浸式影片 · 感官: 多感官, 时间与尺度 · 媒介: 屏幕与网页
- 展出于: CPH:DOX 2018
- 核心想法: 正如 Abram 所说，成为动物始于找回我们自己的动物感官，而不是始于技术。
- 作品内容: 一部与哲学家 David Abram 在大提顿国家公园合作拍摄的纪录片，让观众慢下来，把麋鹿、渡鸦、昆虫和天气当作有感知的存在去听、去看。
- 实现方式: 长镜头、近距离录音，以及 Abram 关于感官现象学的旁白。
- 视频: https://www.youtube.com/watch?v=Oia7EQupIZY
- 项目主页: https://www.youtube.com/watch?v=Oia7EQupIZY

#### Enfacing an Ape — Ke Ma (2018)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: 屏幕与网页
- 核心想法: 人可以把另一个物种的脸当作自己的脸，而且特征会双向流动：他们觉得自己没那么聪明，也觉得猿更有情感。
- 作品内容: 参与者用自己的面部动作控制一张虚拟的脸，这张脸逐渐变形为猿的脸。
- 实现方式: 面部追踪同步或不同步地驱动虚拟面孔，再把它变形为猿脸（“化脸”错觉）。
- 论文: https://doi.org/10.1007/s00426-018-1048-x (Psychological Research 2019)

#### How to Carve a Sculpture — AKI INOMATA (2018)
- 类型: 艺术作品 · 感官: 触觉, 身体图式与运动 · 媒介: 多感官装置, 空间音频
- 核心想法: 人模仿动物的制作：要复刻河狸的痕迹，雕刻家必须顺着它的牙齿和木头的结疤走。
- 作品内容: 日本动物园里被河狸啃过的木头，与人类雕刻家和机器放大复刻的版本并置，配上河狸啃咬的录音，追问谁才是雕刻者。
- 实现方式: 河狸啃过的木头、3D 扫描、机器与手工雕刻，声音设计伊藤丰。
- 图片: https://www.aki-inomata.com/shared/img/works/05/05-01.jpg https://www.aki-inomata.com/shared/img/works/05/05-02.jpg
- 项目主页: https://www.aki-inomata.com/works/how_to_make/

#### Pajé-Onça Hackeando a 33ª Bienal de Artes de São Paulo — Denilson Baniwa (2018)
- 类型: 表演 · 感官: 身体图式与运动, 多感官 · 媒介: 表演与参与式, 屏幕与网页
- 展出于: 33rd São Paulo Biennial (uninvited intervention) 2018; Biennale of Sydney 2020 (NIRIN)
- 核心想法: 成为美洲豹既是萨满行为也是政治行动：最强大的萨满借美洲豹的身体穿行于诸世界之间，并夺回空间。
- 作品内容: 一次不请自来的表演：巴尼瓦身着美洲豹纹长袍、戴黄色獠牙面具、手持花与沙锤，以“美洲豹萨满”的身份走进没有邀请任何原住民艺术家的第 33 届圣保罗双年展。
- 实现方式: 以服装、面具与沙锤进行的现场介入，记录为 15 分钟高清录像。
- 视频: https://www.youtube.com/watch?v=RkGNGJsshSM
- 图片: https://s3.amazonaws.com/wp-sumauma.com/wp-content/uploads/2023/09/23160547/editcapa_pajeonca-aldeia-de-Santa-Isabel_fotografia-de-Sallisa-Rosa-1920x1275.jpg https://www.biennaleofsydney.art/wp-content/uploads/2021/11/denilsonBaniwa1-900x600.jpg
- 项目主页: https://www.pipaprize.com/denilson-baniwa/paje-onca-hackeando-a-33a-bienal-de-artes-de-sao-paulo-1/

#### One or Several Tigers — Ho Tzu Nyen (2017)
- 类型: 艺术作品 · 感官: 听觉与振动, 身体图式与运动, 时间与尺度 · 媒介: 多感官装置, 表演与参与式, 屏幕与网页
- 展出于: Holland Festival 2018
- 核心想法: 老虎既是叙述者，也是人可以变成的身体：从动物一方讲述殖民历史。
- 作品内容: 双频动画与剧场作品：1835 年的新加坡，一只马来亚虎与一名英国测量员相遇；老虎开口说话、歌唱并变形，取材自马来传说中的“虎人”（harimau jadian）。
- 实现方式: 动画录像结合皮影式屏幕与会发声的机械老虎；以现场投影的剧场形式上演。
- 视频: https://www.youtube.com/watch?v=sbdTL-B1qBg
- 图片: https://i.ytimg.com/vi/sbdTL-B1qBg/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=0J9JEAMfYHE

#### Rain World — Videocult (2017)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 身处食物链低端：其他生物按自己的方式生活，玩家只是众多动物中的一只。
- 作品内容: 一款生存平台游戏：你是一只“蛞蝓猫”，在满是捕食者的废弃工业生态中身为弱小猎物，必须在致命暴雨来临前找到庇护所。
- 实现方式: 程序化动画的生物拥有自主 AI，会独立于玩家狩猎、逃跑与互动。
- 视频: https://www.youtube.com/watch?v=kxbQy0U92R4
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/312520/header.jpg
- 项目主页: https://www.akuparagames.com/game/rain-world/

#### Being a Beast — Charles Foster (2016)
- 类型: 书籍/理论 · 感官: 嗅觉与味觉, 多感官 · 媒介: 表演与参与式
- 展出于: Ig Nobel Prize in Biology 2016
- 核心想法: 不借助任何设备，成为动物意味着重新训练嗅觉、睡眠、饮食和恐惧，并承认哪些无法抵达。
- 作品内容: 一本书，记录作者尝试以獾（住在威尔士山坡的獾穴里）、水獭、城市狐狸、被猎犬追逐的马鹿和迁徙的雨燕的方式生活。
- 实现方式: 沉浸式的田野实践：睡在地下、吃蚯蚓、四肢爬行，并借助感官生物学和神经科学。
- 视频: https://www.youtube.com/watch?v=TIzqzrDQedY
- 项目主页: https://en.wikipedia.org/wiki/Charles_Foster_(writer)

#### Invasion! — Baobab Studios (2016)
- 类型: 沉浸式影片 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Tribeca Film Festival 2016
- 核心想法: 最简单的化身线索，也就是在自己身体的位置看到一个动物身体，就足以改变场景与你的关系。
- 作品内容: 一部动画 VR 短片：两个外星人降落时，你是冰湖上的一只小白兔；低头就能看到自己毛茸茸的身体。
- 实现方式: 实时动画 VR，观众的镜头被放在兔子化身中，角色会对观众做出反应。
- 视频: https://www.youtube.com/watch?v=SZ0fKW5PttM
- 项目主页: https://www.baobabstudios.com/

#### Paws - A Shelter 2 Game — Might and Delight (2016)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 幼崽尺度下的世界：从最小、最弱的身体看失去与友谊。
- 作品内容: 一款独立冒险游戏：你是一只失去家人的小猞猁，穿越广阔世界寻找回家的路。
- 实现方式: 以 Shelter 系列画风进行的第三人称探索，包括攀爬与简单的动物互动。
- 视频: https://www.youtube.com/watch?v=4aQZ8G8eS9c
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/434000/header.jpg
- 项目主页: https://www.mightanddelight.com/

#### Shelter 2 — Might and Delight (2015)
- 类型: 游戏 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: 游戏, 屏幕与网页
- 核心想法: 捕食者的育儿：狩猎是让他者活下去的方式。
- 作品内容: 你是一只猞猁妈妈，生下幼崽，在苔原与森林中狩猎，把孩子们养大到能独立生存。
- 实现方式: 开放世界第三人称玩法，包括狩猎、幼崽随季节成长，幼崽可延续到后续游戏中。
- 视频: https://www.youtube.com/watch?v=Tk-1M1wNVDY
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275100/header.jpg
- 项目主页: https://www.mightanddelight.com/

#### Goat Simulator — Coffee Stain Studios (2014)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 对照案例：动物模拟的戏仿，山羊只是物理喜剧的借口。
- 作品内容: 一款沙盒游戏：你是一只山羊，在小镇里顶撞、舔东西、到处搞破坏，物理效果被故意做得很“坏”。
- 实现方式: 布娃娃物理配合黏舌与头槌，由 Game Jam 原型快速扩展而成。
- 视频: https://www.youtube.com/watch?v=JN2QUhaKN2Q
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/265930/header.jpg
- 项目主页: http://goat-simulator.com/

#### K-9_topology: I Hunt Nature and Culture Hunts Me — Maja Smrekar (2014)
- 类型: 表演 · 感官: 身体图式与运动, 嗅觉与味觉 · 媒介: 表演与参与式
- 展出于: Rencontres Bandits-Mages 2014; Prix Ars Electronica 2017 (Golden Nica, Hybrid Art, K-9_topology)
- 核心想法: 把狼当作狗的祖先去相遇，追问驯化从两个物种身上拿走了什么。
- 作品内容: 在法国 Jacana Wildlife Studios 驻留后，艺术家在围栏中与狼和狼犬一起表演，靠身体语言而非训练建立信任。
- 实现方式: 在动物行为学家指导下与狼群接触数周，随后现场表演并举行公开讨论。
- 视频: https://vimeo.com/111946213
- 图片: https://images.squarespace-cdn.com/content/v1/5c326f997c9327edb6347bf8/1547908448070-C8AMJ5OR3T2CYJARJBLH/01_I+HUNT+NATURE+AND+CULTURE+HUNTS+ME.jpg
- 项目主页: https://www.majasmrekar.org/k9-topology-i-hunt-nature-and-culture-hunts-me

#### Shelter — Might and Delight (2013)
- 类型: 游戏 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: 游戏, 屏幕与网页
- 核心想法: 成为动物父母：游戏机制是照料与脆弱，而不是力量。
- 作品内容: 你是一只獾妈妈，带着五只幼崽离开洞穴，穿过森林、河流与山火前往新家，一路喂养它们并防备猛禽。
- 实现方式: 在绘画质感的低多边形世界中以第三人称进行，幼崽由 AI 控制跟随母亲，可能饿死或被掠走。
- 视频: https://www.youtube.com/watch?v=tmKm_oX8wzQ
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/244710/header.jpg
- 项目主页: https://www.mightanddelight.com/

#### Bear 71 — Leanne Allison, Jeremy Mendes (2012)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 屏幕与网页, VR 头显
- 展出于: Sundance New Frontier 2012; IDFA DocLab 2012
- 核心想法: 野生动物被观看的视角：灰熊讲述，用户在追踪她的相机网络中移动。
- 作品内容: 由班夫国家公园一头只以标号为名的雌性灰熊讲述的互动纪录片，她的一生通过红外相机和监控地图呈现；后改编为 VR。
- 实现方式: 以红外相机影像构成的班夫 WebGL 地图；2017 年 VR 版（加拿大国家电影局与 Jam3）把地图变成可走动的空间。
- 视频: https://www.youtube.com/watch?v=2cVhaMC5Iv8
- 项目主页: https://www.nfb.ca/interactive/bear_71/

#### Primate Cinema: Apes as Family — Rachel Mayeri (2012)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 屏幕与网页, 多感官装置
- 展出于: Arts Catalyst London 2012
- 核心想法: 为黑猩猩的注意力设计，迫使电影人去猜测另一个物种觉得什么值得看。
- 作品内容: 一部为爱丁堡动物园黑猩猩拍摄的电影，由穿猿类服装的人类演员演出一段家庭剧；展览版本把影片与黑猩猩观看它的画面并置。
- 实现方式: 与灵长类学家共同编写剧本，在黑猩猩自己的屏幕上测试；以双频道影像装置呈现。
- 视频: https://www.youtube.com/watch?v=4871rINIAeQ
- 图片: https://rachelmayeri.com/wp-content/uploads/2025/06/denise-with-remote-16x9-wide.jpg
- 项目主页: http://rachelmayeri.com/primate-cinema

#### WolfQuest — eduweb (2007)
- 类型: 游戏 · 感官: 嗅觉与味觉, 集体与网络感知 · 媒介: 游戏, 屏幕与网页
- 核心想法: 以科学为基础的狼的生活：生存遵循真实的生态规律，“嗅觉视图”会显示猎物与领地标记。
- 作品内容: 一款与明尼苏达动物园合作开发的野生动物模拟游戏：你是黄石公园的一只灰狼，捕猎马鹿、寻找伴侣、守卫领地、养育幼崽。
- 实现方式: 对黄石公园 Lamar Valley 与 Slough Creek 的 3D 模拟，有嗅觉视图模式与多人狼群，最初由美国国家科学基金会资助。
- 视频: https://www.youtube.com/watch?v=dS26bwYDzmc
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/926990/header.jpg
- 项目主页: http://www.wolfquest.org

#### Ōkami — Clover Studio (2006)
- 类型: 游戏 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 游戏, 屏幕与网页
- 核心想法: 狼的身体加上画师的手势：在水墨风格的世界里，通过绘画让自然复苏。
- 作品内容: 一款动作冒险游戏：你是以白狼形态出现的日本太阳女神天照，用“笔神”在世界上作画，让被诅咒的大地复苏。
- 实现方式: 卡通渲染的水墨画风；暂停后屏幕变成画纸，笔触即法术。
- 视频: https://www.youtube.com/watch?v=4_42UdWgEmY
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/587620/header.jpg
- 项目主页: https://en.wikipedia.org/wiki/%C5%8Ckami

#### Journey to the Lower World — Marcus Coates (2004)
- 类型: 表演 · 感官: 身体图式与运动, 听觉与振动 · 媒介: 表演与参与式, 屏幕与网页
- 展出于: Liverpool 2004
- 核心想法: 动物的声音与装扮成为一种实用工具，从人的框架之外回应社区的问题。
- 作品内容: 艺术家披着鹿皮，在利物浦一栋即将拆除的高层住宅居民家中进行萨满之旅，模仿动物鸣叫向灵界求教，并拍摄成片。
- 实现方式: 受西伯利亚雅库特启发的仪式，使用动物皮与声音模仿，现场表演后以单频道影像呈现。
- 视频: https://www.youtube.com/watch?v=FAUWVKxiG2s
- 项目主页: https://www.marcuscoates.co.uk/

#### AlphaWolf — MIT Media Lab Synthetic Characters Group (2001)
- 类型: 研究原型 · 感官: 听觉与振动, 集体与网络感知 · 媒介: 多感官装置, 游戏
- 展出于: SIGGRAPH 2001 Emerging Technologies
- 核心想法: 用声音加入狼群：成为狼意味着通过支配与顺从的声音学习一种社会秩序。
- 作品内容: 三名观众各扮演虚拟狼群中的一只小狼，对着麦克风嚎叫、低吼、呜咽或吠叫，决定自己的小狼如何与同伴互动、在等级中处于什么位置。
- 实现方式: 对观众声音进行情感分类，驱动具有学习、情绪和成长模型的自主狼代理。
- 论文: https://doi.org/10.1007/978-3-540-45173-0_2 (Lecture Notes in Computer Science 2003)
- 视频: https://characters.media.mit.edu/video/alphaWolf.mov
- 图片: https://characters.media.mit.edu/images/alphawolf.gif
- 项目主页: https://characters.media.mit.edu/projects/alphawolf.html

#### The Bush Soul (#1–#3) — Rebecca Allen (1997)
- 类型: 艺术作品 · 感官: 身体图式与运动, 触觉 · 媒介: 多感官装置, 游戏
- 核心想法: 作品名来自西非关于“灌木之魂”栖居在野生动物体内的信仰，把进入虚拟世界理解为把自己的一部分送去与其他生物同住。
- 作品内容: 三件系列装置：观众的“灵魂”化作一团跳动的能量球，进入由人工生命生物组成的虚拟灌木丛，生物会靠近、回避并回应它；力反馈摇杆让观众感到这个世界。
- 实现方式: 自制行为引擎（后来的 Emergence），每个角色对物体带有驱动其行动的“情感”，并用力反馈摇杆导航。
- 图片: https://assets.locomotive.works/sites/630ddaf4586d95007d5cf2e2/content_entry630ddb1b594da90081a5673c/630ddf87586d95007d5cf3e9/files/bs3.01.jpg?1750273474 https://assets.locomotive.works/sites/630ddaf4586d95007d5cf2e2/content_entry630ddb1b594da90081a5673c/630ddf94586d95007d5cf41c/files/bs1.in.1.jpg?1661853991
- 项目主页: http://www.rebeccaallen.com/projects/bush-soul-number-3

#### The Virtual Reality Gorilla Exhibit — Don Allison, Larry F. Hodges (1996)
- 类型: 研究原型 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显
- 核心想法: 通过被当作大猩猩对待来学习大猩猩的社会规则，是早期通过动物具身来学习的 VR 案例。
- 作品内容: 在亚特兰大动物园，学生戴上头显扮演一只青春期大猩猩，进入虚拟大猩猩栖息地，虚拟大猩猩会以支配与顺从行为回应他们的靠近。
- 实现方式: 以 SGI 渲染亚特兰大动物园栖息地模型，大猩猩代理的行为与灵长类学家共同设计，通过带追踪的头显呈现。
- 论文: https://doi.org/10.1109/38.626967 (IEEE Computer Graphics and Applications 1997)

#### I Like America and America Likes Me — Joseph Beuys (1974)
- 类型: 表演 · 感官: 身体图式与运动 · 媒介: 表演与参与式
- 展出于: René Block Gallery New York 1974
- 核心想法: 一件对照作品：通过共享时间和领地，而不是模仿或模拟，按动物自己的方式与它相遇。
- 作品内容: 艺术家在纽约一家画廊的房间里与一只野生郊狼共处三天，裹着毛毡、拿着牧杖，与它分享空间，直到它接纳他。
- 实现方式: 长时表演，使用毛毡、牧杖、稻草和《华尔街日报》，以影片和照片记录。
- 视频: https://www.youtube.com/watch?v=IjI3_w9ZbX0
- 项目主页: https://en.wikipedia.org/wiki/I_Like_America_and_America_Likes_Me

#### Unicorn (Einhorn) — Rebecca Horn (1970)
- 类型: 表演 · 感官: 身体图式与运动 · 媒介: 可穿戴与感官装置, 表演与参与式
- 核心想法: 一件改变姿态与步态的身体延伸物，直到佩戴者像另一种生物那样移动，是早期的假体式“成为”。
- 作品内容: 一名女性头上和身上用绷带绑着一只高高的白色长角，在田野和树林中行走，每一步都要平衡这根延伸物。
- 实现方式: 用木头和布料制成的长角，以绑带固定在身上；为影片拍摄而表演。
- 视频: https://www.youtube.com/watch?v=8-uShAVpDLM

### 爬行与两栖动物

蛇、蜥蜴、青蛙、乌龟：红外颊窝、变色龙之眼、冷血。

#### Be A Chameleon — Treta Studios (2026)
- 类型: 游戏 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 游戏
- 核心想法: 伪装即动作：融入背景是变色龙的主要行为，舌头则被当作一条肢体来用。
- 作品内容: 一款 VR 游戏：你是一只想逃出宠物店的变色龙，用黏黏的舌头荡来荡去、爬墙，并变换颜色躲避店员。
- 实现方式: 在 Meta Quest 上用舌头钩抓、用手攀爬，并与表面进行颜色匹配；计划登陆 Steam。
- 视频: https://www.youtube.com/watch?v=x954fIuri1Y
- 图片: https://queststoredb.com/media/26786967120939806_cover_landscape.webp
- 项目主页: https://www.meta.com/experiences/be-a-chameleon/26786967120939806/

#### Jurassic Flight (Birdly) — SOMNIACS (2020)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉, 触觉 · 媒介: VR 头显, 多感官装置
- 核心想法: 同样的振臂身体可以承载一种已灭绝的飞行动物，化身成为想象消失动物如何飞行的方式。
- 作品内容: Birdly 的一个体验：你化身为翼龙 Kepodactylus，飞越与古生物学家合作重建的侏罗纪地景和其中的恐龙。
- 实现方式: Birdly 俯卧运动平台，以手臂和手掌控制翅膀，配合 VR 头显和迎面风扇；场景与动物模型咨询古生物学家制作。
- 视频: https://www.youtube.com/watch?v=cVP5h2kyRgw
- 项目主页: https://www.birdlyvr.com/

#### Snake Pass — Sumo Digital (2017)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 像蛇一样思考：移动就是盘绕与抓握，必须用整个身体来规划。
- 作品内容: 一款物理解谜平台游戏：你是一条名叫 Noodle 的蛇，不能跳，只能缠绕竹竿、抓紧往上爬。
- 实现方式: 物理驱动的脊柱，用不同按键分别控制向前游动、抬头与收紧。
- 视频: https://www.youtube.com/watch?v=kW9uDgo7nlA
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/544330/header.jpg
- 项目主页: https://www.sumo-digital.com/

#### Virtual Chameleon — Fumio Mizuno (2009)
- 类型: 研究原型 · 感官: 改变的视觉 · 媒介: 可穿戴与感官装置
- 核心想法: 试着像变色龙一样看：两只眼睛同时看向不同方向。
- 作品内容: 一种可穿戴系统：两台可独立转向的摄像机分别为左右眼显示不同画面，由佩戴者控制。
- 实现方式: 两台电动摄像机由手持追踪器分别控制方向，各自输出到头戴显示器的一侧。
- 论文: https://doi.org/10.1007/978-3-642-03904-1_48 (IFMBE Proceedings 2009)

#### INSN(H)AK(R)ES — Diana Domingues (2001)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动, 集体与网络感知 · 媒介: 多感官装置, 屏幕与网页
- 核心想法: 你以蛇的身份、蛇的高度进入蛇园，与其他远程用户共享同一具动物身体，并照料身边的真蛇。
- 作品内容: 一件远程通信装置：远方的参与者通过网络共享一条机器蛇的身体，这条机器蛇与真蛇一同生活在蛇园里，参与者操控它移动，并通过它头部的摄像头观看。
- 实现方式: 一条名为 Ângela 的蛇形机器人装有网络摄像头，通过互联网远程操控；当机器人经过时，存在传感器会为活蛇释放水和食物。
- 视频: https://www.youtube.com/watch?v=v9HElj0X6vA
- 项目主页: https://digitalartarchive.at/database/work/5052/

### 多物种视角

让你在多个物种的视角之间穿行的作品。

#### What makes us most Human is also so Animal — Jiabao Li (2026)
- 类型: 表演 · 感官: 嗅觉与味觉, 呼吸与内感受 · 媒介: 表演与参与式, 多感官装置
- 核心想法: 通过味觉跨越物种界线：哺乳让艺术家最像人，正因为它让她成为哺乳动物。
- 作品内容: 一场表演与盲品：观众品尝一排奶并猜测来源，包括艺术家本人、牛、山羊、绵羊、水牛、骆驼、马、牦牛、驴、蝙蝠和郊狼的奶。
- 实现方式: 十一种哺乳动物的奶以盲品方式呈现，配合一场关于母职与人工智能的现场表演。
- 视频: https://www.youtube.com/watch?v=8k3acKrF-o8
- 项目主页: https://www.jiabaoli.org/what-makes-us-most-human-is-also-so-animal

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

#### Morphogenic Angels: Chapter 1 — Keiken (2023)
- 类型: 艺术作品 · 感官: 触觉, 听觉与振动, 身体图式与运动 · 媒介: 多感官装置, 游戏, 可穿戴与感官装置
- 展出于: HAU Hebbel am Ufer, Berlin 2023; PHI Montreal 2025; BredaPhoto 2026; Baltic Centre for Contemporary Art 2026
- 核心想法: 腹部成了聆听的器官：触觉被当作“意识的工具”，去感受看不见、也无法理解的存在。
- 作品内容: 一件设定在一千年后的电子游戏装置：人类已变成能体现其他意识形态的“天使”；观众在腹部戴上触觉“子宫”，它随着在水下哺乳动物、沙暴与太空之间切换的声音振动。
- 实现方式: 黑沙布景中的游戏引擎世界与 CGI 影片，配合 Keiken 自制、与耳机声音同步的可穿戴触觉子宫。
- 视频: https://vimeo.com/851219516
- 图片: https://keiken.cloud/wp-content/uploads/2023/08/keiken-Morphogenic-Angels-2023-Hau-Berlin-Lowres-10.jpg
- 项目主页: https://keiken.cloud/work/morphogenic-angels-chapter-1/

#### Tchia — Awaceb (2023)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 灵魂跳跃：鸟、狗、鱼、石头、灯都能被附身，各有不同能力。
- 作品内容: 一款以新喀里多尼亚为灵感的群岛开放世界游戏，“灵魂跳跃”让你可以操控任何动物或物件。
- 实现方式: 限时附身机制把玩家的操作切换到目标生物或物件的动作系统。
- 视频: https://www.youtube.com/watch?v=rdAGrXZC2iQ
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1496590/header.jpg
- 项目主页: https://www.awaceb.com/tchia

#### Plastisapiens — Miri Chekhanovich, Édith Jorisch (2022)
- 类型: 艺术作品 · 感官: 身体图式与运动, 触觉 · 媒介: VR 头显
- 展出于: Tribeca Immersive 2022; IDFA DocLab 2022
- 核心想法: 成为被塑料渗透的身体：具身被用于思辨的女性主义生态小说，而不是同理心。
- 作品内容: 超现实的互动 VR 生态小说：参与者化身体内吸收了塑料、身体变得更加流动的动物与变异人类。
- 实现方式: 实时 VR，身体追踪的化身会变形与融合；加拿大国家电影局与 DPT 出品。
- 视频: https://www.youtube.com/watch?v=UKuUlpfUi68
- 项目主页: https://voicesofvr.com/1105-tribeca-xr-embodiment-experiments-in-a-surrealist-speculative-future-feminist-eco-fiction-on-plastics-permeating-the-body-in-plastisapians/

#### Myriad. Where We Connect — Lena Thiele (2021)
- 类型: 沉浸式影片 · 感官: 时间与尺度, 改变的视觉 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Venice VR Expanded 2021; Wildscreen Festival 2022
- 核心想法: 以迁徙动物的方式旅行，地球变成可读的洋流、路线与距离，而不是地点。
- 作品内容: 沿着北方秃鹮、北极狐与绿海龟真实迁徙路线展开的 VR 旅程，随风与洋流穿越一个由碳构成的世界。
- 实现方式: 实时 VR 与 360° 版本，由三种动物的科学 GPS 追踪数据驱动。
- 视频: https://www.youtube.com/watch?v=bhAM7tUr-Dg
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2021/Schede_film/970x647/Venice_VR_Expanded/thiele_myriad-ok2.jpg?itok=Jw687wrD
- 项目主页: https://www.labiennale.org/en/cinema/2021/lineup/venice-vr-expanded/myriad-where-we-connect-vr-experience

#### Refuge for Resurgence — Superflux (2021)
- 类型: 艺术作品 · 感官: 身体图式与运动 · 媒介: 多感官装置
- 展出于: Venice Architecture Biennale 2021; Our Time on Earth, Barbican 2022
- 核心想法: 作为众多物种之一入座：以设计邀请访客从其他动物的需要出发想象这张桌子。
- 作品内容: 一张多物种宴会桌，为十四个物种——从人类到狼、老鼠、鸽子、苔藓与真菌——设计了座位、餐具与刀叉，置于洪水过后的家中。
- 实现方式: 手工雕刻的木桌，以及为每个物种定制的陶瓷、玻璃与金属餐具。
- 视频: https://www.youtube.com/watch?v=s637PPO3Wl4
- 项目主页: https://superflux.in

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

#### Lost Ember — Mooneye Studios (2019)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 切换身体：每种动物都打开了穿越同一世界的不同方式。
- 作品内容: 一款冒险游戏：你是一只能附身其他动物的狼，可以化身袋熊、鸭子、鱼、蜂鸟等，与一个灵魂同伴穿越荒废的大地。
- 实现方式: 第三人称玩法，玩家可以跳入附近的动物，每种动物有各自的动作系统。
- 视频: https://www.youtube.com/watch?v=vo7CPfVu7MY
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/563840/header.jpg
- 项目主页: https://www.lostember.com

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

#### Mulaka — Lienzo (2018)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏
- 展出于: PSX 2017; PAX West 2017
- 核心想法: 变形作为一种原住民知识：萨满化身动物之躯去飞翔、击碎岩石、攀爬，每一种形态都是穿行大地的不同方式。
- 作品内容: 一款动作冒险游戏：玩家扮演拉拉穆里萨满 Sukurúame，穿越以塔拉乌马拉山区为原型的地景，借用以动物形态现身的半神之力。
- 实现方式: 面向主机与 PC 的低多边形 3D 平台游戏，变形能力从半神处解锁（很可能包括用于飞行的鸟形与用于破障的重型动物形态）。
- 视频: https://www.youtube.com/watch?v=eGYUecSvPoY
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/623640/ss_f28c3b3045cd9a622992f0808d773ebda49b7d86.1920x1080.jpg?t=1584052040
- 项目主页: https://store.steampowered.com/app/623640/Mulaka/

#### VR Animals: Surreal Body Ownership in VR Games — Andrey Krekhov (2018)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 身体所有感并不限于人形化身：玩家可以把动物身体感受为自己的身体。
- 作品内容: 首个在 VR 中扮演三种动物的探索性研究，比较了五种控制方式，从第三人称伙伴视角到第一人称全身追踪。
- 实现方式: HTC Vive 加全身追踪器，把人的四肢映射到动物四肢，并与手柄控制和伙伴模式比较。
- 论文: https://doi.org/10.1145/3270316.3271531 (CHI PLAY 2018 Extended Abstracts)

#### Everything — David OReilly (2017)
- 类型: 游戏 · 感官: 时间与尺度, 集体与网络感知 · 媒介: 游戏, 屏幕与网页
- 展出于: Vienna Shorts 2017 (jury award, first game eligible for an Academy Award)
- 核心想法: “成为”是一条连续谱：任何事物都可以被栖居，主要的动作是改变尺度，而不是行动。
- 作品内容: 一款游戏：你可以成为宇宙中的任何事物，从动物、植物到行星、星系与原子，在尺度之间自由穿行，背景是 Alan Watts 的演讲录音。
- 实现方式: 由数千个低多边形物体构成的程序化世界，玩家可以“上升”到更大的尺度或“下降”到更小的尺度；动物用翻滚代替行走。
- 视频: https://www.youtube.com/watch?v=aIMlcRCjjPw
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582270/header.jpg
- 项目主页: http://www.everything-game.com/

#### Life of Us — Within, Chris Milk (2017)
- 类型: 艺术作品 · 感官: 身体图式与运动, 听觉与振动 · 媒介: VR 头显
- 展出于: Sundance New Frontier 2017
- 核心想法: 进化是一连串与朋友一起穿上的身体；看到对方的生物形态，你就知道自己变成了什么。
- 作品内容: 双人共享的 VR 进化之旅：两位参与者依次化身单细胞、鱼、青蛙、翼龙、猿、人类及更远的形态，声音也随每具身体变化。
- 实现方式: 实时多人 VR，手部追踪，并为每种生物实时变声。
- 视频: https://www.youtube.com/watch?v=RpyFs6O-328
- 项目主页: https://www.with.in

#### Meadow - A Shelter Game — Might and Delight (2016)
- 类型: 游戏 · 感官: 集体与网络感知, 听觉与振动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 没有语言的社交：陌生人只靠声音和身体结成群体。
- 作品内容: 一款多人游戏：玩家化身獾、兔、鹿等动物匿名相遇，只能用动物叫声和动作交流。
- 实现方式: 在线多人，没有文字或语音聊天；表达仅限于动物叫声、动作与相互跟随。
- 视频: https://www.youtube.com/watch?v=pYC0nQNRgvE
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/486310/header.jpg
- 项目主页: https://www.mightanddelight.com/

#### The Great Animal Orchestra — Bernie Krause, United Visual Artists (2016)
- 类型: 艺术作品 · 感官: 听觉与振动, 改变的视觉 · 媒介: 多感官装置, 空间音频
- 展出于: Fondation Cartier pour l'art contemporain Paris 2016; Exploratorium San Francisco
- 核心想法: 把栖息地当作乐团来听，声景便显现为物种共享又分隔的空间。
- 作品内容: 一间暗室，来自婆罗洲、津巴布韦到加州等野外栖息地的录音以环绕声播放，频谱图在墙上滚动，显示每个物种如何占据声景中的一个频段。
- 实现方式: Krause 五十年的田野录音，由 UVA 转化为实时频谱投影与多声道声音。
- 视频: https://www.youtube.com/watch?v=o1SnSv0OQdY
- 项目主页: https://en.wikipedia.org/wiki/Bernie_Krause

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

#### Tokyo Jungle — Crispy's! (2012)
- 类型: 游戏 · 感官: 时间与尺度, 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 代际生存：每只动物只有短暂的一生，玩家以它的后代继续下去。
- 作品内容: 一款生存游戏，舞台是没有人类的东京：你可以扮演博美犬、鹿、狮子等数十种动物，进食、标记领地、繁育下一代。
- 实现方式: 侧视生存玩法，包含饥饿、领地标记、交配与随游戏年份衰老；与索尼 Japan Studio 合作为 PlayStation 3 开发。
- 视频: https://www.youtube.com/watch?v=zasefwWK5fA
- 图片: https://i.ytimg.com/vi/zasefwWK5fA/hqdefault.jpg
- 项目主页: https://en.wikipedia.org/wiki/Tokyo_Jungle

#### Designs for an Overpopulated Planet: Foragers — Dunne & Raby (2009)
- 类型: 艺术作品 · 感官: 嗅觉与味觉, 身体图式与运动 · 媒介: 可穿戴与感官装置
- 展出于: HUMAN+, Science Gallery Dublin 2011
- 核心想法: 为了生存而成为动物：用牛、鸟和啮齿动物的器官重新设计人类身体。
- 作品内容: 一组思辨装置，包括人造瘤胃和仿鸟类的过滤器，由城市采集者佩戴：他们借用其他动物的消化系统，去吃人类无法消化的东西。
- 实现方式: 以道具原型和照片呈现可穿戴的发酵与过滤装置。
- 视频: https://www.youtube.com/watch?v=_-kLwHS__1s
- 项目主页: http://dunneandraby.co.uk/content/projects/510/0

#### Animal Superpowers — Chris Woebken, Kenichi Okada (2008)
- 类型: 研究原型 · 感官: 改变的视觉, 磁感应, 身体图式与运动 · 媒介: 可穿戴与感官装置
- 展出于: Design and the Elastic Mind, MoMA New York 2008
- 核心想法: 每个装置借用一种动物感官，并适配儿童的身体和游戏，让好奇心成为界面。
- 作品内容: 一组给儿童的可穿戴设备：用手上的显微镜把视觉放大 50 倍的“蚂蚁装置”、朝选定方向振动的“鸟装置”、把声音压低并把视线抬高 30 厘米的“长颈鹿装置”；2015 年又加入可以听见超声的“蝙蝠护目镜”。
- 实现方式: 手持显微摄像头连接头部显示、GPS 驱动振动、变声配合加高底座，以及超声波蝙蝠探测器。
- 视频: https://www.youtube.com/watch?v=L9oTcez2CXU
- 图片: https://freight.cargo.site/t/original/i/ad1784c02faa9d2afb6614fa878b4982436d2d58292e1349ebee13b3d8c6a682/2232862656_cba3f094c1_o.jpg https://freight.cargo.site/t/original/i/067d74e44844e7aca2661cd3baab576aa3fb852d9130e7525a1d6fce5ad67c0d/animals3.jpg
- 项目主页: https://www.chriswoebken.com/animal-superpowers

#### Spore — Maxis (2008)
- 类型: 游戏 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 游戏, 屏幕与网页
- 核心想法: 先设计身体，再栖居其中：程序化动画让任意的肢体布局都能行走、进食和跳舞。
- 作品内容: 一款游戏：你让一个物种从单细胞演化为星际文明，在生物编辑器中设计它的身体，然后住进这具身体。
- 实现方式: 生物编辑器配合程序化动画，能根据玩家搭建的任何身体调整步态与动作；由 Will Wright 主导。
- 视频: https://www.youtube.com/watch?v=zi2GvqboQfY
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17390/header.jpg
- 项目主页: http://www.spore.com/

#### Animal-Cams — Sam Easterson (1998)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 屏幕与网页, 多感官装置
- 展出于: Walker Art Center Minneapolis 1998; Grand Arts Kansas City 2003; Nature Holds My Camera, Indianapolis Museum of Art; Videonale 14 Bonn 2013
- 核心想法: 相机随动物的步态和高度移动，即使没有它的感官，观众也能感到它运动的节奏。
- 作品内容: 一个持续扩充的短片库，由绑在动物身上的小型相机拍摄，从绵羊、野牛、狼和火鸡到狼蛛和蝎子，另有放进洞穴和地道里的 Burrow-Cams。
- 实现方式: 改装的微型监控相机，在驯养员和野生动物专家协助下，用胶粘、橡皮筋或挽具临时固定。
- 图片: https://www.grandarts.com/past_projects/2003/images/2003_01_sm01.jpg https://www.lightwork.org/uploads/2016/01/UVP_SamEasterson_BURROWCAMS_BetweenSpecies_WP-572x321.jpg
- 项目主页: https://www.grandarts.com/past_projects/2003/2003_01.html

#### Menagerie — Susan Amkraut, Michael Girard, Scott Fisher (1993)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: VR 头显
- 展出于: Revue Virtuelle, Centre Pompidou 1993
- 核心想法: 一个与自主动物共享空间而不是操控它们的里程碑：观众只是动物群会回应的又一个身体。
- 作品内容: 一个头戴式虚拟环境，里面的计算机生成的鸟、狗等动物会随着观众的移动成群飞行、行走或四散。
- 实现方式: 以行为群集算法与程序化多足运动动画实时渲染，输出到带追踪的立体显示器（可能为 BOOM 或头显）。
- 视频: https://www.youtube.com/watch?v=ZKETFeraZFk

#### Placeholder — Brenda Laurel, Rachel Strickland (1993)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动, 听觉与振动 · 媒介: VR 头显
- 展出于: Banff Centre for the Arts 1993
- 核心想法: 每种生物都是一套不同的感知与移动规则，让化身关乎感官和运动，而不是外表。
- 作品内容: 一件两人 VR 作品，场景是拍摄的班夫地景，参与者可以化身为蜘蛛、蛇、鱼或乌鸦等灵兽，获得它观看、移动和说话的方式，并为他人留下语音“声标”。
- 实现方式: 头戴显示器、三维空间音频、手持控制器和变声滤镜；乌鸦靠振臂飞行，蛇以类似红外的色彩观看。
- 论文: https://doi.org/10.1145/192593.192637 (ACM Multimedia 1994)
- 图片: https://image.jimcdn.com/app/cms/image/transf/none/path/s1cb8d6527de0e9b6/image/ifd4c0c7fa4d79286/version/1571836952/image.jpg
- 项目主页: https://www.tauzero.com/Brenda_Laurel/Severed_Heads/CGQ_Placeholder.html

#### Crittercam — Greg Marshall (1987)
- 类型: 产品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 屏幕与网页
- 核心想法: 摄像机由动物携带：这种第一视角画面后来被许多沉浸式动物作品模仿。
- 作品内容: 安装在鲨鱼、海龟、海豹、鲸、企鹅和狮子身上的摄像机与数据记录器，从动物自己的身体记录它捕猎、下潜和社交的画面。
- 实现方式: 耐压外壳内装摄像、深度、温度和速度传感器，以吸盘、背带或夹具固定，脱落后回收。
- 视频: https://www.youtube.com/watch?v=q-EONusvq_8

## 成为真菌

网络化与微生物的生命：菌丝、黏菌、细菌、细胞与共生，处在缓慢时间与微小尺度上。

### 菌丝与蘑菇

真菌网络、孢子、分解与“木联网”。

#### Mushroom Clouds — Zheng Mahler (2026)
- 类型: 艺术作品 · 感官: 多感官, 时间与尺度 · 媒介: 多感官装置
- 展出于: PHD Group, Hong Kong 2026
- 核心想法: 从动物感知转向真菌感知：观众按照蘑菇的节奏进入湿度、雾气与缓慢生长之中。
- 作品内容: “大屿山三部曲”第三部：一座 3.65 米见方的活体生态箱，种着大屿山植物与正在出菇的真菌，并由传感器驱动的雾气包围，追问“作为一朵蘑菇去生活、感知与感受”是什么样子。
- 实现方式: 放入灵芝、平菇、裂褶菌、木耳与猴头菇等活体真菌的生态箱，配合温湿度传感器、加湿器与体积雾显示系统。
- 图片: https://static.wixstatic.com/media/d3b537_699f82e9317a4be7af6733a31bbb199b~mv2.jpg https://static.wixstatic.com/media/d3b537_162d42060f7e4c008d68f2290a82149f~mv2.jpg https://static.wixstatic.com/media/d3b537_445c1a6410b44c3abc0df9c19f5b868d~mv2.jpg
- 项目主页: https://www.zhengmahler.world/mushroomclouds

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

#### Poetics of Soil: Fly Agaric I — Marshmallow Laser Feast (2024)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度, 听觉与振动 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Parallel Worlds, Gazelli Art House, Baku (COP29) 2024; SOIL: The World at Our Feet, Somerset House, London 2025; Mozilla Festival, Barcelona 2025; Only Trees Know, Natural History Museum, Shanghai 2026; More than Human, ArtScience Museum, Singapore 2026–27
- 核心想法: 土壤被呈现为由真菌、细菌与根系组成的活网络，邀请观众思考成为“人类以外的某种存在”意味着什么。
- 作品内容: 一个关于地下生命的持续影像系列中的第一件，跟随毒蝇伞及其与树木的共生，由真菌学家 Merlin Sheldrake 撰文并配音；同系列还有《Fly Agaric II》与《Dissolving Forest》（2024）。
- 实现方式: 多声道影像与音频，基于微距拍摄、扫描与真菌生长和分解过程的模拟（具体采集方法未公开）。
- 视频: https://vimeo.com/1024704240
- 图片: https://marshmallowlaserfeast.com/app/uploads/2024/12/Poetics-of-Soil_-Fly-Agaric-I-Detail_Marshmallow-Laser-Feast.jpg https://marshmallowlaserfeast.com/app/uploads/2025/01/POS_sh05_comp_v019_lit.3281.jpg https://marshmallowlaserfeast.com/app/uploads/2025/01/SCiampone-08964.jpg https://static-assets.artlogic.net/w_1600,h_1600,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/gazelli/images/view/877651cca3ff321ab75462d210a9d14ep/gazelliarthouse-marshmallow-laser-feast-dissolving-forest-2024.png
- 项目主页: https://marshmallowlaserfeast.com/project/poetics-of-soil-fly-agaric-i-video-installation/

#### Symbiosis/\Dysbiosis: Sentience — Tosca Terán (2024)
- 类型: 艺术作品 · 感官: 集体与网络感知, 听觉与振动, 多感官 · 媒介: VR 头显, 多感官装置, 表演与参与式
- 展出于: Venice Immersive 2024
- 核心想法: 人的脑电信号与真菌信号在同一回路中混合，访客成为菌丝网络中的一个节点。
- 作品内容: 一场扩展现实的开放世界蘑菇冒险：实时真菌生物数据与来宾的脑电共同塑造一片不断演变的声音景观与森林。
- 实现方式: 活体菌丝接入定制合成器，来宾佩戴脑电头带，配合 VR 世界与投影映射的地面和墙面；与 Brendan Lehman 联合执导。
- 视频: https://www.youtube.com/watch?v=0PzZXrqncsY
- 图片: https://voicesofvr.com/wp-content/uploads/2024/09/symbiosisdysbiosis-sentience-970x546.jpg https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2024/Schede_film/970x647/Ve_Immersive/symbiosis-dysbiosis.jpg?itok=FPo8HeFR
- 项目主页: https://voicesofvr.com/1432-combining-biodata-with-open-world-mushroom-adventure-with-symbiosis-dysbiosis-sentience/

#### Entangled Landscape — Studio Above&Below (2023)
- 类型: 艺术作品 · 感官: 改变的视觉, 集体与网络感知 · 媒介: 混合现实, 多感官装置
- 核心想法: 把真菌与根系在地下的合作网络放大到人的尺度，让合作变成可以看着生长或失败的东西。
- 作品内容: 一件冥想式混合现实作品，把土壤中微观的资源交换呈现为数字雕塑，由两个以菌根互利关系训练的神经网络与来自佛兰德斯的实时环境数据驱动。
- 实现方式: 两个以互利互动训练的神经网络对实时土壤与天气数据作出反应，在混合现实中渲染；与土壤科学家合作开发。
- 视频: https://vimeo.com/800511752
- 图片: https://i.vimeocdn.com/video/1614942915-e8fe40e0506ee8865990ede23f0b4be8cc884726be5aa110b90c4ba9d94f1e78-d_1280x720
- 项目主页: https://www.studioaboveandbelow.com/work/entangled-landscape

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

#### Forest UnderSound — Tosca Terán (2021)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 多感官装置, 空间音频
- 展出于: Prix Ars Electronica 2021 (Honorary Mention, Digital Musics & Sound Art); The Museum Kitchener 2021; Fermynwoods Contemporary Art 2023
- 核心想法: 地下网络成为一位按自身季节时间演奏、可被听见的乐手。
- 作品内容: 一件为期一年的装置，其生成式声音景观由活体真菌与植物根系演奏，并随着它们的生长在四季中变化。
- 实现方式: 菌丝与根系上的电极读取生物电波动，实时控制模拟与数字合成器；在每个分点与至点录音。
- 视频: https://www.youtube.com/watch?v=d1NVurUmtZk
- 项目主页: https://www.toscateran.com/forest-undersound

#### Mycelia — Tosca Terán (2021)
- 类型: 表演 · 感官: 听觉与振动, 集体与网络感知 · 媒介: VR 头显, 表演与参与式, 空间音频
- 展出于: AMAZE Festival 2021; Raindance Immersive 2021
- 核心想法: 真菌成为表演者，它的信号塑造出一个共享的虚拟空间。
- 作品内容: 一场 VRChat 现场表演：活体菌丝的电活动驱动音乐与声音反应式的虚拟世界，并由全身动捕的舞者诠释。
- 实现方式: 生物声音化模块把菌丝电导率的微小波动转为 MIDI 驱动合成器，并接入与 Sara Lisa Vogl（_ROOT_）和 Metaverse Crew 共建的 VRChat 世界。
- 视频: https://www.youtube.com/watch?v=J4je5bzyx6s
- 图片: https://voicesofvr.com/wp-content/uploads/2021/11/mycelia-1000x473.jpg https://mycelialive.wordpress.com/wp-content/uploads/2021/11/mycelia_poster_festival.jpg https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2021/Schede_film/970x647/Venice_VR_Expanded/mycelia.jpg?itok=XGt_dNhR
- 项目主页: https://mycelialive.wordpress.com/

#### Symbiosis/\Dysbiosis — Tosca Terán (2021)
- 类型: 艺术作品 · 感官: 触觉, 听觉与振动, 集体与网络感知 · 媒介: VR 头显, 混合现实, 多感官装置
- 展出于: Goethe-Institut New Nature 2021; FIVARS 2025
- 核心想法: 触摸真菌就是进入它的世界的方式；森林回应的是这个生物，而不只是你。
- 作品内容: 一件混合现实装置：你触摸的活体菌丝同时出现在 VR 中；它的生物数据改变你周围虚拟森林的声音、鸟鸣与样貌。
- 实现方式: 活体菌丝上的电极连接定制生物传感乐器（与 Lorena Salomé 合作），驱动声音以及由加拿大森林点云构建的 VR 森林；与 Sara Lisa Vogl、Brendan Lehman 共同开发。
- 视频: https://www.youtube.com/watch?v=3uySqCqE-A4
- 图片: https://fivars.net/wp-content/uploads/2025/05/Symbiosis-Dysbiosis-Terrarium-landscape-1024x576.png https://fivars.net/wp-content/uploads/2025/05/Symbiosis-Dysbiosis-underground2.jpg
- 项目主页: https://fivars.net/stories/official-selections-2025/symbiosis-dysbiosis/

#### The Mycorrhizal Rhythm Machine — Tosca Terán (2021)
- 类型: 艺术作品 · 感官: 听觉与振动, 集体与网络感知 · 媒介: 多感官装置, 空间音频
- 展出于: NAISA North 2021
- 核心想法: 真菌与根的伙伴关系被听成节奏，一种可以聆听的共生。
- 作品内容: 一件互动雕塑，把一间种植室变成真菌与嫩芽的音乐生成器：来自菌根植物根部的生物数据触发会拨弦与摇响的执行器。
- 实现方式: 内生与外生菌根植物根部的电极把生物数据发送到微控制器，驱动机械执行器。
- 视频: https://www.youtube.com/watch?v=ez_keTa5-Mg
- 项目主页: https://www.toscateran.com/mycorrhizal-rhythm-machine

#### Hypha — Natalia Cabrera (2020)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉, 时间与尺度 · 媒介: VR 头显
- 展出于: Sundance New Frontier 2020
- 核心想法: 成为真菌，意味着拥有一副分枝的身体：进食、连接树根、修复土壤。
- 作品内容: 一部 VR 故事，让你化身蘑菇的完整一生：来自太空的孢子找到水，在地下长成菌丝与菌丝体，净化有毒土壤，最后结成子实体，菌盖和菌褶遮住你的视线。
- 实现方式: 六自由度 VR 配合手部追踪，把手臂变成细长分枝的肢体；由 Nanai Studio 与 Sebastian Gonzalez、Juan Ferrer 共同开发。
- 视频: https://vimeo.com/356115943
- 图片: https://docubase.mit.edu/wp-content/uploads/2020/07/hypha.jpg https://images.squarespace-cdn.com/content/v1/654d529f2df68e6aa2c35f5b/51192710-fec7-41a0-8952-03fbfd50760d/Hypha_6.png
- 项目主页: https://docubase.mit.edu/project/hypha/

#### Sound for Fungi. Homage to Indeterminacy — Theresa Schubert (2020)
- 类型: 艺术作品 · 感官: 触觉, 听觉与振动, 时间与尺度 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Futurium Berlin (Mind the Fungi) 2020; Experimenta Life Forms 2021
- 核心想法: 真菌的生长会回应声音与触摸，模拟也一样，访客由此成为菌丝世界中的一种力量。
- 作品内容: 一个生长中菌丝的生成式模拟，基于让真菌菌丝暴露在声音中的实验；观众用双手引导它的生长。
- 实现方式: 与 Sage Jenson 合作的模拟，源自以 80—440 赫兹声音处理树生蘑菇菌丝的实验；以手部追踪传感器互动。
- 视频: https://www.youtube.com/watch?v=zzrYc4v5bjE
- 图片: https://www.theresaschubert.com/wp-content/uploads/2021/06/ExperimentaLifeForms_TheresaSchubert_Remi_Sound-for-fungi-1.jpg
- 项目主页: https://www.theresaschubert.com/works/sound-for-fungi/

#### On mycohuman performances: fungi in current artistic research — Regine Rapp (2019)
- 类型: 论文 · 感官: 集体与网络感知 · 媒介: 表演与参与式, 多感官装置
- 核心想法: 在这些作品中，真菌是共同表演者，而非材料。
- 作品内容: 一篇综述，梳理与真菌共同表演的艺术家，包括 Saša Spačal 的《Myconnect》与 Theresa Schubert 的森林漫步，并以“菌-人表演”加以框定。
- 实现方式: 对 Art Laboratory Berlin 等处展出作品的艺术史分析。
- 论文: https://doi.org/10.1186/s40694-019-0085-6 (Fungal Biology and Biotechnology 2019)
- 项目主页: https://fungalbiolbiotech.biomedcentral.com/articles/10.1186/s40694-019-0085-6

#### PLANET ∞ — Momoko Seto (2017)
- 类型: 沉浸式影片 · 感官: 时间与尺度, 改变的视觉 · 媒介: 360°/沉浸式影片
- 展出于: Cannes Film Festival 2017 (VR); Locarno Film Festival 2017 (Virtual Reality)
- 核心想法: 以霉菌的尺度看一个后人类星球：微距延时让真菌与蝌蚪成为世界的居民。
- 作品内容: 360° 有机寓言，设定在人类灭绝之后：观众处在微小生物的尺度，看见真菌与霉菌在巨大的干枯昆虫尸体间生长，直到雨水淹没星球、巨型食肉蝌蚪出现。
- 实现方式: 对真实真菌、霉菌与蝌蚪进行微距与延时拍摄，合成为立体 360° 影片并配 3D 音频（mk2 VR 出品）。
- 视频: https://www.youtube.com/watch?v=gKcmHYc4BtA
- 项目主页: https://mk2films.com/en/film/planet-%E2%88%9E/

#### Myconnect — Saša Spačal (2013)
- 类型: 艺术作品 · 感官: 触觉, 听觉与振动, 呼吸与内感受 · 媒介: 多感官装置, 可穿戴与感官装置
- 展出于: Art Laboratory Berlin (Nonhuman Networks)
- 核心想法: 人—真菌—人的反馈回路：你感到自己的身体正被另一种生物调制。
- 作品内容: 观众躺进封闭的木制舱体，佩戴心跳传感器、耳机与振动马达；心跳信号流经活体菌丝，再以声音、光与触感的形式变形后回到身体。
- 实现方式: 心率传感器驱动信号流经平菇或香菇菌丝，其电阻变化使信号产生时间偏移，再通过耳机、灯光与振动马达输出。与 Mirjan Švagelj、Anil Podgornik 合作。
- 视频: https://vimeo.com/238714637
- 图片: https://www.agapea.si/wp-content/uploads/2015/05/S3D3092-WB2.jpg https://www.agapea.si/wp-content/uploads/2015/05/S3D2572-1024x683.jpg
- 项目主页: https://www.agapea.si/en/projects/myconnect

#### Infinity Burial Suit — Jae Rhim Lee (2011)
- 类型: 艺术作品 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 可穿戴与感官装置
- 展出于: TEDGlobal 2011
- 核心想法: 身体最后的“成为”，是被真菌吸收、回归土壤。
- 作品内容: 一件绣有蘑菇孢子的寿衣，这些真菌被训练在人死后分解穿着者的身体并中和其中的毒素。
- 实现方式: 寿衣上附有含孢子的网状结构；艺术家用自己的头发、皮肤与指甲训练蘑菇识别人体组织。
- 视频: https://www.youtube.com/watch?v=_7rS_d1fiUc
- 项目主页: https://coeio.com

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

#### Mushroom 11 — Untame (2015)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 以自我擦除来移动：一个没有固定形状的身体，靠移除细胞而非挥动肢体来操控。
- 作品内容: 一款解谜平台游戏：你通过擦除来操控一团无定形的绿色有机体；被擦掉的细胞会在别处重新长出，于是它靠被破坏而前进。
- 实现方式: 用鼠标“橡皮擦”删掉细胞，有机体会在另一侧长回同样数量的细胞；配乐由 The Future Sound of London 创作。
- 视频: https://www.youtube.com/watch?v=KVe76XebJcw
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/243160/header.jpg
- 项目主页: http://mushroom11.com

#### Being Slime Mould — Heather Barnett (2013)
- 类型: 表演 · 感官: 集体与网络感知, 身体图式与运动 · 媒介: 表演与参与式
- 展出于: BioDesign, Het Nieuwe Instituut Rotterdam 2013
- 核心想法: 为了感受没有大脑的集体智能，人们用自己的身体把它演出来。
- 作品内容: 一场参与式实验：一群陌生人尝试像单细胞黏菌多头绒泡菌那样行动——作为一个身体移动、探索，并在没有领导者的情况下做决定。
- 实现方式: 在实体空间中依规则进行的集体演绎，设置食物来源与障碍，与 Daniel Grushkin 共同设计。
- 论文: https://doi.org/10.1201/9781003339540-3 (Slime Mould in Arts and Architecture (2022))
- 图片: https://heatherbarnett.co.uk/wp-content/uploads/2015/07/Being-Slime-Mould-Enactment-2013-%C2%A9-film-still-by-Tim-Grabham-2-495x400.jpg https://heatherbarnett.co.uk/wp-content/uploads/2015/07/Being-Sliem-Mould-BOM-1-495x400.jpg
- 项目主页: https://heatherbarnett.co.uk/work/being-slime-mould/

### 微生物与细胞

细菌、病毒、细胞、微生物组与分子世界。

#### Liminal Lands — Jakob Kudsk Steensen (2021)
- 类型: 艺术作品 · 感官: 时间与尺度, 听觉与振动, 改变的视觉 · 媒介: VR 头显, 屏幕与网页
- 展出于: LUMA Arles 2021
- 核心想法: 把感知缩小到盐地景观中缓慢的微生物过程，这些过程通常超出人的感官。
- 作品内容: 一件多人 VR 装置，基于在卡马格盐沼的田野调查，在藻类、盐晶与泡沫的微观与宏观尺度之间穿梭。
- 实现方式: 把在吉罗盐场采集的影像与声音做成实时游戏引擎世界，以多人 VR 与 2D 影像呈现。
- 视频: https://vimeo.com/591022554
- 图片: https://images.squarespace-cdn.com/content/v1/573604122b8ddea9122c6ee9/1706361881595-EZ08BL6M3S2CREH2J5KP/jks21_liminallands_foam7_web.jpg
- 项目主页: https://www.jakobsteensen.com/liminal-lands

#### Thrive — Revolutionary Games Studio (2021)
- 类型: 游戏 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 游戏, 屏幕与网页
- 核心想法: 成为一个遵循真实生物学的细胞：新陈代谢、细胞膜与细胞器决定并塑造着这具身体。
- 作品内容: 一款开源演化游戏，从微生物阶段开始：你是潮池中的一个单细胞，吸收化合物、吞噬猎物，并在世代之间重新设计细胞膜与细胞器。
- 实现方式: 细胞编辑器包含细胞器、膜类型与化合物平衡，按自动生成星球上的各个区块进行模拟；提供免费开源版本，2021 年起在 Steam 抢先体验。
- 视频: https://www.youtube.com/watch?v=LmIwSBvXGQA
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1779200/5273442273cffbfef2f30c451d9f2cec91e5e3c6/header.jpg
- 项目主页: https://revolutionarygamesstudio.com/

#### Earthlink — Saša Spačal (2018)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 嗅觉与味觉 · 媒介: 多感官装置
- 展出于: Match Gallery, Museum and Galleries of Ljubljana 2018
- 核心想法: 呼吸是与土壤微生物的交换；这件作品让这种交换被技术化地定量并被身体感受到。
- 作品内容: 一组关于与地球共同呼吸的装置；其中《Inspiration》让观众按复苏气囊设定的节奏吸入土壤中的“快乐细菌”母牛分枝杆菌。
- 实现方式: 配有活体土壤培养物与复苏气囊的呼吸装置，控制吸气与呼气的节奏。
- 视频: https://vimeo.com/411971525
- 图片: https://www.agapea.si/wp-content/uploads/2019/02/Inspirij_II_Miha-Godec.jpg https://www.agapea.si/wp-content/uploads/2019/02/Biomi_II_Miha-Godec.jpg
- 项目主页: https://www.agapea.si/en/projects/earthlink

#### MICROBIhOME — MICROBIhOME (University of Salford) (2018)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度 · 媒介: 多感官装置, VR 头显
- 展出于: Manchester Science Festival 2018; Manchester Science Festival 2019; Royal Society Summer Science Exhibition
- 核心想法: 把观众缩小到细菌的尺度，身体就成了你身处其中的生态系统。
- 作品内容: 一件关于人体微生物组的混合媒介装置；在其中的 VR 肺部体验里，观众被“吸入”气道，在微生物尺度上看噬菌体攻击细菌。
- 实现方式: 基于索尔福德大学微生物学研究，与艺术家 Paul Miller 及 Reflex Arc 合作制作的沉浸式装置，内含移动 VR 头显体验。
- 视频: https://vimeo.com/296994011
- 图片: https://images.squarespace-cdn.com/content/v1/573e23a5c2ea51d838c57506/1549825000876-FJ0VJKELBEMH6SSYIDAD/MBH-pics-7.jpg
- 项目主页: https://hub.salford.ac.uk/microbihome/

#### nimiia cétiï — Jenna Sutela (2018)
- 类型: 艺术作品 · 感官: 听觉与振动, 改变的视觉 · 媒介: 屏幕与网页, 空间音频
- 展出于: Somerset House Studios / Google Arts & Culture 2018
- 核心想法: 细菌的运动被当作一种声音，机器可以学会用它说话。
- 作品内容: 一件视听作品：神经网络学习一种通灵“火星语”的录音与枯草芽孢杆菌的影像，生成一种在机器、微生物与人之间使用的新语言。
- 实现方式: 以 19 世纪 Hélène Smith 的“火星语”音频与纳豆枯草芽孢杆菌显微影像训练机器学习模型。
- 视频: https://www.youtube.com/watch?v=NaoZV7jPo10
- 图片: https://admin.somersethouse.org.uk/images/2VSzwd-SKAaTJvtSbRePm9TYN1U=/956/width-600/JennaSutela_CO4YzSr5JUTwlIFU.jpg
- 项目主页: https://www.somersethouse.org.uk/whats-on/jenna-sutela-nimiia-cetii

#### Plague Inc. — Ndemic Creations (2012)
- 类型: 游戏 · 感官: 集体与网络感知, 时间与尺度 · 媒介: 游戏, 屏幕与网页
- 核心想法: 从微生物的视角看，世界是一张由宿主、路线与气候组成的地图。
- 作品内容: 一款策略游戏：你扮演一种病原体——细菌、病毒或真菌——演化传播方式与症状，扩散至全世界。
- 实现方式: 移动端与 PC 上的流行病学模拟；玩家从演化树中选择特征。
- 视频: https://www.youtube.com/watch?v=pSat_gLDXPc
- 图片: https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/246620/4c67f0dc09d833b843cf5c3834d95bef246ccd49/header.jpg?t=1779100239
- 项目主页: https://store.steampowered.com/app/246620/Plague_Inc_Evolved/

#### Osmos — Hemisphere Games (2009)
- 类型: 游戏 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 游戏, 屏幕与网页
- 核心想法: 移动要付出身体：在这个类似细胞的存在中，每一次推进都会让自己变小。
- 作品内容: 一款物理游戏：你是一个漂浮的微粒，靠吸收更小的微粒长大；想要移动，就必须喷出自身的一部分。
- 实现方式: 基于牛顿物理，以喷射质量作为推进，并可调节时间流速。
- 视频: https://www.youtube.com/watch?v=qGuieN5-6dI
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/29180/header.jpg
- 项目主页: http://www.hemispheregames.com/osmos

#### flOw — thatgamecompany (2006)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 展出于: The Museum of Modern Art collection (2012)
- 核心想法: 成为一只微生物：身体随所吃之物而生长，节奏依据“心流”理论设计。
- 作品内容: 一款游戏：你引导一只水生微生物吞食其他生物、长出新的体节，并潜入原始海洋的一层层深处。
- 实现方式: 最初是陈星汉在南加州大学的硕士论文 Flash 游戏，后为 PlayStation 3 重制并加入体感倾斜操控。
- 视频: https://www.youtube.com/watch?v=tTVDSOnPLns
- 图片: https://i.ytimg.com/vi/tTVDSOnPLns/hqdefault.jpg
- 项目主页: http://thatgamecompany.com/

### 共生与地衣

地衣、共生总体与作为纠缠的生命。

#### Honey Fungus — Jonah King (2025)
- 类型: 艺术作品 · 感官: 触觉, 身体图式与运动 · 媒介: VR 头显, 多感官装置
- 展出于: SXSW XR Experience 2025
- 核心想法: 以与真菌的亲密作为与生态相处的模型：身体被要求去触碰、喂养与缠绕，而不是观看。
- 作品内容: 一系列具身 VR 实验，发生在一个酷儿的、有感知的真菌网络中，把 AI 生成的野外研究诗与培养生态亲密感的动作结合起来。
- 实现方式: 四头显 VR 装置，具身手部交互与 AI 混编文本（Stevens 理工学院、Hybrid Studio）。
- 图片: https://images.stevens.edu/mviowpldu823/3ShJAmNI9K9uuEqoTm0pA3/6c5d44432a6df69cddf1227ccee796cd/king_1.png
- 项目主页: https://www.stevens.edu/news/honeyfungus

#### Symbiotica — Natalia Cabrera (2021)
- 类型: 艺术作品 · 感官: 集体与网络感知, 身体图式与运动 · 媒介: VR 头显, 屏幕与网页
- 展出于: CPH:DOX 2021; NewImages Festival 2022
- 核心想法: 共生要通过成为其中一方伙伴来学习，而不是旁观整体。
- 作品内容: 一部多人 VR 体验：参与者化身不同的微生物，从原始细胞开始彼此协作，去发现地衣这一由多个物种组成的集体想对人类说的话。
- 实现方式: 可通过 VR 头显、电脑、手机或平板进入的线上多人空间。
- 图片: https://xrmust.com/wp-content/uploads/2023/04/XRMust_symbiotica_Poster.jpg
- 项目主页: https://xrmust.com/all-experiences/symbiotica/

#### Symbiome – Economy of Symbiosis — Saša Spačal (2016)
- 类型: 艺术作品 · 感官: 听觉与振动, 呼吸与内感受 · 媒介: 多感官装置, 空间音频
- 展出于: Museum of Contemporary Art Metelkova (MSUM) Ljubljana 2016
- 核心想法: 共生被听成一场持续的协商，观众的呼吸也成为其中一部分。
- 作品内容: 一个水培舱，红三叶草与根瘤菌在其中交换碳与氮；这种交换决定滴水的节奏，水面的涟漪被转化为声音，观众的呼吸也为三叶草提供二氧化碳。
- 实现方式: 对植物与细菌交换的间接测量控制滴水；涟漪被感测并以相位调制实时合成为声音。与微生物学家 Mirjan Švagelj 合作。
- 视频: https://vimeo.com/243696887
- 图片: https://www.agapea.si/wp-content/uploads/2017/01/Najavna-fotka_I_HD.jpg
- 项目主页: https://www.agapea.si/en/projects/symbiome-the-economy-of-symbiosis

#### Mycophone_unison — Saša Spačal (2015)
- 类型: 艺术作品 · 感官: 听觉与振动, 集体与网络感知 · 媒介: 多感官装置, 空间音频
- 核心想法: 身体不是一个而是许多；这件乐器让你把微生物的众多听成一个声音。
- 作品内容: 一件活体声音乐器：真菌、细菌等微生物群落——如同构成人体微生物组的那些——共同生成声音。
- 实现方式: 传感器读取活体微生物培养物的电变化，并实时转化为声音。
- 视频: https://vimeo.com/205934235
- 图片: https://www.agapea.si/wp-content/uploads/2015/05/mycophone_unison_1_0.jpg
- 项目主页: https://www.agapea.si/en/projects/mycophone_unison

## 成为树

植物与森林：树、花与根、光合作用、植物时间与森林生态。

### 树

像一棵树那样生长、呼吸、活上几百年。

#### Of the Oak — Marshmallow Laser Feast (2025)
- 类型: 艺术作品 · 感官: 时间与尺度, 呼吸与内感受, 改变的视觉 · 媒介: 多感官装置, 屏幕与网页, 空间音频
- 展出于: Royal Botanic Gardens, Kew 2025; Yorkshire Sculpture Park 2025–26; Shapes of Becoming, Jing'an Sculpture Park, Shanghai 2026
- 核心想法: 橡树被呈现为一张由两千三百多个物种组成的网，而不是一棵孤立的树，呼吸是观众进入其中的方式。
- 作品内容: 一件 12 分钟的互动影像装置，跟随邱园的 Lucombe 橡树经历四季，揭示它所承载的真菌、昆虫、鸟类与地衣；配有多声道声音、睁眼呼吸冥想，以及介绍橡树相关物种的在线图鉴。
- 实现方式: 对 Lucombe 橡树进行摄影测量与 LiDAR 扫描，对土壤样本做 CT 扫描，用探地雷达追踪根系，并在邱园树木团队协助下进行 24 小时录音；物种信息来自 OakEcol 数据集；冥想文本由 Daisy Lafarge、Merlin Sheldrake、Ella Saltmarshe 与 Laline Paull 撰写。
- 视频: https://vimeo.com/1078013028
- 图片: https://marshmallowlaserfeast.com/app/uploads/2025/04/MLF_Of_the_Oak_BarneySteel_01329-1.jpg https://marshmallowlaserfeast.com/app/uploads/2025/04/0279_An_Ode_to_an_Oak_comp_merged_v013.011411.jpg https://marshmallowlaserfeast.com/app/uploads/2025/04/LUCOMBE-OAK-I_0279_Oak_print_lidar_COMP_NLD_v003_SIDE_05_FINAL.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/of-the-oak/

#### Embodying nature in immersive virtual reality: Are multisensory stimuli vital to affect nature connectedness and pro-environmental behaviour? — Pia Spangenberger (2024)
- 类型: 论文 · 感官: 多感官, 身体图式与运动, 触觉 · 媒介: VR 头显
- 核心想法: 追问：当人被要求感受自己是一棵树时，哪些感官真正重要。
- 作品内容: 关于在 VR 中化身为树的后续研究，检验加入多感官刺激是否会改变自然联结感与亲环境行为。
- 实现方式: 对照 VR 实验，比较仅视觉与多感官两种化身为树的条件。
- 论文: https://doi.org/10.1016/j.compedu.2023.104964 (Computers & Education 2024)
- 项目主页: https://doi.org/10.1016/j.compedu.2023.104964

#### Peupler — Maya Mouawad, Cyril Laurier (2023)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度 · 媒介: 多感官装置, 混合现实
- 展出于: Venice Immersive 2023
- 核心想法: 树是城市的见证者：采取它的视角，共居就成了“谁在占据空间”的问题。
- 作品内容: 互动装置：让访客从一棵树的视角看见并感受城市，并用自己的在场为这棵树提供养分。
- 实现方式: 摄影测量的数字树配合生成声音，通过传感器回应访客的移动（Fisheye Immersive）。
- 视频: https://www.youtube.com/watch?v=t3No7MRp-MU
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2023/Schede_film/970x647/Ve_Immersive/mouawad-laurier.jpg?itok=xzhsmdLl
- 项目主页: https://www.labiennale.org/en/cinema/2023/venice-immersive/peupler

#### Becoming nature: effects of embodying a tree in immersive virtual reality on nature relatedness — Pia Spangenberger (2022)
- 类型: 论文 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显
- 核心想法: 只有 VR 组的参与者以树的第一人称描述体验，也只有他们反思了人对自然的角色。
- 作品内容: 一项实验（N = 28）：参与者在沉浸式 VR 或桌面屏幕中化身为一棵树经历其一生，并可用手柄做出轻微的树枝动作。
- 实现方式: 头显与桌面的组间实验，以混合方法测量自然联结感、观点采择与沉浸感。
- 论文: https://doi.org/10.1038/s41598-022-05184-0 (Scientific Reports 2022)
- 图片: https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-022-05184-0/MediaObjects/41598_2022_5184_Fig1_HTML.png
- 项目主页: https://www.nature.com/articles/s41598-022-05184-0

#### Sanctuary of the Unseen Forest — Marshmallow Laser Feast (2022)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度, 呼吸与内感受 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Our Time on Earth, Barbican, London 2022; TED 2023; Outcrop, 180 The Strand, London 2023; Lux: Poetic Resolution, Seoul 2023; Fungi – In Art and Science, Nobel Prize Museum, Stockholm 2023–24; Our Time on Earth, Musée de la civilisation, Québec 2023–24; Works of Nature, ACMI, Melbourne 2023–24; Our Time on Earth, Peabody Essex Museum 2024; Museum of the Amazons, Belém 2025
- 核心想法: 回应“植物盲”：让树内部的流动变得可见，使它被看作一个活着、呼吸着的生命。
- 作品内容: 一件围绕哥伦比亚亚马孙一棵巨型吉贝木棉（Ceiba pentandra）的大型影像装置，层层剥开树体，呈现水、碳与养分从树冠到根部、再进入菌根网络的脉动，节奏与观众心跳相呼应。
- 实现方式: 2020 年在哥伦比亚莱蒂西亚附近对一棵吉贝木棉进行 LiDAR 扫描、摄影测量、生态调查与全景声野外录音，呈现为单屏 4K 影像与 10.1 声道音频。
- 视频: https://www.youtube.com/watch?v=MWhyhUVQ4lI
- 图片: https://marshmallowlaserfeast.com/app/uploads/2023/11/MLF_Barbican-2-1.jpg https://marshmallowlaserfeast.com/app/uploads/2023/11/0214_Barbican_Sanctuary_ceiba_comp_v039.5251.jpg https://marshmallowlaserfeast.com/app/uploads/2023/11/MLF_Sanctuary_Strand_03.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/sanctuary-of-the-unseen-forest/

#### One Tree ID – How To Become A Tree For Another Tree — Agnes Meyer-Brandis (2019)
- 类型: 艺术作品 · 感官: 嗅觉与味觉, 集体与网络感知 · 媒介: 多感官装置, 表演与参与式
- 展出于: Ars Electronica Festival 2019; KONTEJNER Zagreb; Kersnikova Ljubljana
- 核心想法: 树以气味交流；佩戴一棵树的气味，让人得以推测性地加入这场化学对话。
- 作品内容: 收集一棵特定树木释放的挥发性有机化合物并制成香水；观众在树旁涂上它，从而携带这棵树的化学身份。
- 实现方式: 以顶空采样收集树的挥发性有机物，与大气化学家分析后由调香师重组为可佩戴的香水。
- 视频: https://vimeo.com/328989340
- 图片: https://ars.electronica.art/outofthebox/files/2019/08/One-Tree-ID-How-To-Becoma-A-Tree-For-Another-Tree-Agnes-Brandis.jpg http://onetreeid.ffur.de/wp-content/uploads/2020/11/Start_1440x690_OneTreeID_5.jpg
- 项目主页: http://onetreeid.ffur.de/

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

#### ListenTree — Edwina Portocarrero, Gershon Dublon (2015)
- 类型: 研究原型 · 感官: 听觉与振动, 触觉 · 媒介: 多感官装置, 空间音频
- 展出于: CHI 2015
- 核心想法: 透过树木聆听，让聆听者与树发生身体接触；树成为媒介本身。
- 作品内容: 装有骨传导换能器的活树成为几乎无声的扬声器：路人只有抱住或倚靠树干时，才能听见树里的声音。
- 实现方式: 骨传导换能器固定在树上（可能在树根基部）使木材振动；声音既被听见也被感到，内容可以是实时的环境声音。
- 论文: https://doi.org/10.1145/2702613.2725437 (CHI EA 2015)
- 视频: https://vimeo.com/125915832
- 图片: https://images.squarespace-cdn.com/content/v1/5ad5566e96e76f1dbbd692b4/1526257603302-K52NIYW4XD2EGWO13ITZ/IMG_3569-2-edited.jpg
- 项目主页: https://slowimmediate.com/listentree

#### trees: Pinus sylvestris — Marcus Maeder (2015)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 多感官装置, 空间音频
- 展出于: COP21 Paris 2015
- 核心想法: 口渴的树会发出人听不到的声音；放大后，我们得以从树的内部聆听干旱。
- 作品内容: 一件装置，播放瑞士阿尔卑斯山一棵欧洲赤松的声发射，以及其树液流、树干直径与土壤湿度测量数据的声音化结果。
- 实现方式: 树干上的接触式与超声传感器加上生理生态传感器，来自瑞士国家科学基金项目“trees：让生理生态过程可听”。
- 视频: https://www.youtube.com/watch?v=0KfrcUQdpr4
- 项目主页: https://www.researchcatalogue.net/view/215961/215962

#### Forest Symphony — Ryuichi Sakamoto, YCAM InterLab (2013)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度, 集体与网络感知 · 媒介: 空间音频, 多感官装置
- 展出于: YCAM 10th Anniversary, Yamaguchi 2013
- 核心想法: 把树当作现场演奏者来听：木头里缓慢的电节律变成人能跟随的音乐。
- 作品内容: 日本国内外 24 棵树上的传感器记录它们的生物电位，这些数据驱动坂本龙一不断变化的乐曲，在展厅与庭园中播放，让观众聆听森林的演奏。
- 实现方式: YCAM InterLab 开发的生物电位测量装置通过互联网把数据传给生成式乐谱。
- 视频: https://www.youtube.com/watch?v=1-jvZTqvI8E
- 图片: https://special.ycam.jp/forestsymphony/images/tree_color.jpg
- 项目主页: https://special.ycam.jp/interlab/en/projects/forestsymphony.html

#### Years — Bartholomäus Traubeck (2011)
- 类型: 艺术作品 · 感官: 时间与尺度, 听觉与振动 · 媒介: 多感官装置, 空间音频
- 核心想法: 一棵树一生的生长被听成一首乐曲，一圈年轮对应一年。
- 作品内容: 一台播放树干切片的唱机：摄像头读取年轮，生成系统把年轮的宽窄与纹理转化为钢琴音乐。
- 实现方式: 改装唱机配合摄像头与 vvvv 软件，把年轮强度、厚度与生长速率映射到和声音阶上。
- 视频: https://vimeo.com/30501143
- 图片: https://traubeck.com/wp-content/uploads/2018/11/years_2-640x433.jpg
- 项目主页: https://traubeck.com/works/years

#### Tree Listening — Alex Metcalf (2007)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 多感官装置, 空间音频
- 核心想法: 让贴近树的人听见树自己“喝水”的声音。
- 作品内容: 一件装在活树上的聆听装置：观众戴上与树干和枝条相连的耳机，听树体内部水分流动时的噼啪声。
- 实现方式: 枝干上的高灵敏接触式麦克风放大空穴化与输水的声音，并传到耳机中。
- 视频: https://www.youtube.com/watch?v=u07Z7BnMenY
- 图片: https://treelistening.co.uk/wp-content/uploads/2025/09/sound-of-trees.png
- 项目主页: https://treelistening.co.uk/

#### Biopresence — BCL (Shiho Fukuhara & Georg Tremmel) (2004)
- 类型: 艺术作品 · 感官: 时间与尺度, 身体图式与运动 · 媒介: 多感官装置
- 展出于: ITV Morning News 2004
- 核心想法: 以树的形式延续：让一个人的生命按照树的节奏与寿命继续下去。
- 作品内容: 一项设想中的服务：把一个人的 DNA 写入一棵树的 DNA，制造作为“活的纪念碑”或“转基因墓碑”的“人类 DNA 树”。
- 实现方式: 借用 Joe Davis 的 DNA Manifold 方法，把人的 DNA 编码进树基因组中的沉默三联体突变，不改变树的基因功能。
- 视频: https://www.youtube.com/watch?v=p4fiha3Qvno
- 图片: https://www.biopresence.com/img/human-DNA-trees.jpg
- 项目主页: https://www.biopresence.com/description.html

### 植物与花

植物、花、根与种子；植物的感知与信号。

#### Green Rhythms — Yuting Xue, Elke Reinhuber (2026)
- 类型: 论文 · 感官: 呼吸与内感受, 时间与尺度 · 媒介: 多感官装置
- 核心想法: 与植物一起呼吸：观众通过光与空气的交换，进入植物缓慢的昼夜时间。
- 作品内容: 一件互动装置，把植物的昼夜节律转化为光与空气，观众呼出的二氧化碳进入人与植物共享的代谢循环。
- 实现方式: 感测环境光与观众呼出的二氧化碳，以光与气流呈现光合作用和夜间气体交换。
- 论文: https://doi.org/10.1145/3731459.3779145 (TEI 2026)

#### Bend to — Yuting Xue (2025)
- 类型: 论文 · 感官: 身体图式与运动, 改变的视觉, 时间与尺度 · 媒介: VR 头显
- 核心想法: 向光性成为参与者与植物共享的本体感觉。
- 作品内容: 一件设定在紫外辐射增强的未来的沉浸式作品，参与者用自己的手和身体位置去追随、预判植物如何向光或背光弯曲。
- 实现方式: 把真实植物对光反应的 3D 扫描与延时摄影在 VR 中回放，并结合手部追踪。
- 论文: https://doi.org/10.1145/3698061.3726945 (C&C 2025)
- 项目主页: https://dl.acm.org/doi/10.1145/3698061.3726945

#### Plant-Centric Metaverse: A Biocentric-Creation Framework for Ecological Art and Digital Symbiosis — Ze Gao (2025)
- 类型: 论文 · 感官: 集体与网络感知 · 媒介: VR 头显, 屏幕与网页
- 核心想法: 推动数字生态艺术从以人为中心的叙事转向植物的能动性与植物-算法共创。
- 作品内容: 提出“生物中心创作转化理念”（BCTI）框架，并以 2013—2023 年的生物艺术、NFT 与 VR 生态案例加以检验。
- 实现方式: 框架构建与多模态案例分析。
- 论文: https://arxiv.org/abs/2508.04391 (arXiv 2025)
- 项目主页: https://arxiv.org/abs/2508.04391

#### The Great Escape — Joren Vandenbroucke (2025)
- 类型: 沉浸式影片 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显
- 展出于: Venice Immersive 2025
- 核心想法: 扎根的处境：成为一盆盆栽，不能移动与窗台的视野就是生活的全部。
- 作品内容: 互动 VR 喜剧：观众是孤独男人窗台上三盆无聊天竺葵中的第三盆，被根固定在原地，却谋划着去看世界。
- 实现方式: 动画互动 VR，参与者被固定在花盆的位置；通过视线与有限的手势交互。
- 视频: https://www.youtube.com/watch?v=jH5bGRsqn4k
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2025/Schede_film/970x647/Ve_Immersive/the_great_escape.jpg?itok=2-fTzReL
- 项目主页: https://www.labiennale.org/en/cinema/2025/venice-immersive/great-escape

#### Encountering Human-Plant Relations (Plant Radio, Plant Sensorium) — Lone Koefoed Hansen (2024)
- 类型: 论文 · 感官: 多感官, 听觉与振动 · 媒介: 多感官装置
- 核心想法: 设计可以调校人对植物的注意力，而不是模拟成为植物。
- 作品内容: 研究两个设计实验——Plant Radio 与 Plant Sensorium——以及人们与之互动时对植物产生的各种感受力。
- 实现方式: 围绕两件互动植物装置进行访谈与观察。
- 论文: https://doi.org/10.1145/3643834.3661586 (DIS 2024)
- 项目主页: https://dl.acm.org/doi/10.1145/3643834.3661586

#### Forest Bathing: Lupuna — Marshmallow Laser Feast (2024)
- 类型: 艺术作品 · 感官: 时间与尺度, 热与红外, 多感官 · 媒介: 多感官装置, 穹顶、CAVE 与投影
- 展出于: Immersive Sky, Badewelt Euskirchen (permanent, 2024–)
- 核心想法: 把植物的时间加速到人的注意力尺度：附生植物、藤蔓，以及由蝙蝠和飞蛾授粉的夜开花朵，一天的变化在几分钟内展开。
- 作品内容: 德国一处温泉中的永久性双室装置：观众穿过瀑布进入模拟的热带暴雨，再躺在加热的睡莲叶形躺椅上，仰望 4.5 米投影——吉贝木棉（Lupuna）树冠中的 24 小时被压缩为五分钟，包括夜昙花在夜间的绽放。
- 实现方式: 第一室使用人造雨装置、空间音频与灯光；第二室配有温控躺椅，以树、枝、花三级放大呈现来自哥伦比亚莱蒂西亚的影像与扫描。
- 视频: https://www.youtube.com/watch?v=fxksr0D1QhI
- 图片: https://marshmallowlaserfeast.com/app/uploads/2024/03/A7408288.jpg https://marshmallowlaserfeast.com/app/uploads/2024/04/Forest-Bathing-Lupuna-3.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/forest-bathing-lupuna/

#### Kingdom of Plants with David Attenborough — Alchemy Immersive (2022)
- 类型: 沉浸式影片 · 感官: 时间与尺度, 改变的视觉 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Venice Immersive 2022
- 核心想法: 让植物时间变得可看：植物尺度的延时摄影把缓慢的生长变成你身处其中的戏剧。
- 作品内容: 三集沉浸式系列：把观众放到植物的尺度与节奏中——坐进稀有花朵、看茅膏菜捕猎、被真菌吞没。
- 实现方式: 在英国皇家植物园邱园拍摄的立体延时与微距影像，发布于 Meta Quest（导演 Iona McEwan）。
- 视频: https://www.youtube.com/watch?v=vwDrTZs41SE
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2022/Schede_film/970x647/Venice_Immersive/mcewan_.jpg?itok=zPmXq-PX
- 项目主页: https://www.labiennale.org/en/cinema/2022/venice-immersive/kingdom-plants-david-attenborough

#### Patterns and Opportunities for the Design of Human-Plant Interaction — Michelle Chang (2022)
- 类型: 论文 · 感官: 触觉, 多感官 · 媒介: 多感官装置, 可穿戴与感官装置
- 核心想法: 植物本身就是传感器与执行器；这篇综述梳理设计如何把它们的感官与我们的连接起来。
- 作品内容: 一篇综述，梳理 HCI、艺术、建筑与生物工程中的人-植物交互项目，按系统架构、植物输入输出耦合与尺度分类。
- 实现方式: 系统综述与设计空间分析。
- 论文: https://doi.org/10.1145/3532106.3533555 (DIS 2022)
- 项目主页: https://dl.acm.org/doi/10.1145/3532106.3533555

#### Queer Ecology — Institute of Digital Fashion, Brigitte Baptiste (2022)
- 类型: 艺术作品 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Our Time on Earth, Barbican 2022
- 核心想法: “没有什么比自然更酷儿”：镜像中的身体成为会生长、衰败、与他人融合的植物存在，超越二元身份。
- 作品内容: 互动身体映射装置：访客面对两个由枝条与植物生长构成的天体般的存在，它们随访客的身体移动；这些形体会与旁边的人融合，生长、死亡，并消散为花粉或星尘。
- 实现方式: 实时身体追踪（与 Target3D 合作）映射到大屏上的生成式三维植物身体，带有生长与衰败的循环。
- 图片: https://cms.showstudio.com/images/HNQBYufe-PrUaVHJzif27CRwecg=/478522/width-1440/IoDF_Queer_Ecology_at_Barbican_Our_Time_on_Earth_Exhibition___Still_1.jpg https://cms.showstudio.com/images/ws4nDndy7DiRXRN3_Q6-n9euN8s=/478523/width-1440/86AFB5F8-87BE-4F2C-B39A-CE6AB8A498D3_1_201_a.jpeg
- 项目主页: https://www.showstudio.com/news/institute-of-digital-fashion-imagine-a-planet-beyond-the-binary

#### Helpless — Tae Yeun Kim (2021)
- 类型: 艺术作品 · 感官: 触觉, 身体图式与运动 · 媒介: VR 头显
- 展出于: BIFAN Beyond Reality 2022 (Beyond Science)
- 核心想法: 成为植物意味着无法逃开：作品让观众站到一个扎根、受伤的身体的位置上。
- 作品内容: 一件互动 VR 作品，把观众带进虚拟空间，去体验植物如何回应疼痛与伤害。
- 实现方式: 与 PPPLab 和 VR Crew 合作的头显互动 VR；植物的应激反应很可能被转化为观众自身的感受来呈现。
- 视频: https://www.youtube.com/watch?v=S0WSsZotfcU
- 项目主页: https://www.screendaily.com/features/bifans-xr-showcase-beyond-reality-reflects-post-pandemic-changes/5172480.article

#### Messages to a Post Human Earth — Anagram (2021)
- 类型: 艺术作品 · 感官: 听觉与振动, 多感官 · 媒介: 增强现实, 空间音频, 表演与参与式
- 展出于: Orleans House Gallery, London
- 核心想法: 植物是后人类地球上能听、能感的见证者；两位同伴同步的动作成为彼此与植物之间的编舞。
- 作品内容: 一段两人同行的音频与 AR 旅程，在花园或森林中想象人类消失之后由植物而非人来见证什么，取材自 Monica Gagliano 的植物记忆研究与 Stanisław Lem 的一篇文章。
- 实现方式: 手持设备上的定位双耳旁白与 AR 叠加，配合实物道具，为两位同步的参与者设计。
- 视频: https://www.youtube.com/watch?v=w4mP6QDA7Ak
- 图片: https://weareanagram.co.uk/wp-content/uploads/2023/12/mtaphe.png
- 项目主页: https://weareanagram.co.uk/project/messages-to-a-post-human-earth/

#### VR Plant Journey — Breakpoint One (2021)
- 类型: 游戏 · 感官: 时间与尺度, 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 植物生理变成了你在植物器官内部亲手完成的一系列任务。
- 作品内容: 一款发生在油菜植株内部的 VR 游戏：在根、叶、种子三章中，你调节养分、把二氧化碳和水投给叶绿体，让植物长到开花。
- 实现方式: 面向 PC VR 与 Meta Quest 的房间尺度 VR 游戏，与 IPK 植物研究者合作开发。
- 视频: https://www.youtube.com/watch?v=HUmYauXEclM
- 图片: https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1487650/header.jpg?t=1628582017
- 项目主页: https://breakpoint.one/vr-plant-journey/

#### PL'AI — Špela Petrič (2020)
- 类型: 艺术作品 · 感官: 时间与尺度, 触觉 · 媒介: 多感官装置
- 展出于: Kersnikova Institute Ljubljana 2020
- 核心想法: “玩耍”被提出为植物与机器共有的存在状态，并按植物的速度展开。
- 作品内容: 在数月中，水芹幼苗与一台以这些植物为全部感知世界的 AI 机器人彼此“玩耍”，互相塑造对方的行为与形态。
- 实现方式: 配备摄像头与机器学习模型的机械臂与生长中的植物互动，以延时摄影记录。
- 视频: https://vimeo.com/561021288
- 图片: https://images.squarespace-cdn.com/content/v1/5aeca48a506fbe863b23a8b6/1621255859914-VEJU1B7LODW2FEE7YDOR/KERSNIKOVA_Spela_Petric_PLAY_20201206_HanaJosic-48.jpg
- 项目主页: https://www.spelapetric.org/plai/

#### PlantWave — Data Garden (2019)
- 类型: 产品 · 感官: 听觉与振动 · 媒介: 可穿戴与感官装置, 空间音频
- 核心想法: 把植物音乐当作日常中调频植物生理状态的方式，无论在家还是户外。
- 作品内容: 一款消费级设备：把电极夹在植物叶片上，经由手机应用把植物不断变化的电信号实时转化为音乐。
- 实现方式: 电极测量植物导电性的变化，信号被绘成波形并映射到音高与乐器；是 MIDI Sprout（2015）的后续产品。
- 视频: https://www.youtube.com/watch?v=j_EyNEbdELI
- 图片: http://plantwave.com/cdn/shop/files/plantwave.png?v=1678040631
- 项目主页: https://plantwave.com/

#### Institute for Inconspicuous Languages: Reading Lips — Špela Petrič (2018)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度 · 媒介: 多感官装置
- 展出于: Kapelica Gallery / Kersnikova 2018; European ARTificial Intelligence Lab
- 核心想法: 植物的“嘴唇”（气孔）被当作一种语言；与它对话需要按植物的节奏花上数年。
- 作品内容: 一次与榕树对话的尝试：计算机视觉读取其叶片气孔的开合，人则以光的编码回应。
- 实现方式: 显微摄像头与计算机视觉模型追踪垂叶榕叶片气孔的开合，并与可控的光信号配对。
- 视频: https://vimeo.com/457493103
- 图片: https://images.squarespace-cdn.com/content/v1/5aeca48a506fbe863b23a8b6/1600016130132-1NOFOTHIQXG2OIOKVMUM/190418+E%CC%82pela+Petriu%CC%88+-+Nociceptor_branje+ustnic_foto.miha.fras_030.JPG
- 项目主页: https://www.spelapetric.org/institute-for-inconspicuous-languages/

#### Confronting Vegetal Otherness: Strange Encounters — Špela Petrič (2017)
- 类型: 表演 · 感官: 触觉, 身体图式与运动 · 媒介: 表演与参与式, 多感官装置
- 核心想法: 通过具体相遇中人的情感去接近植物的主体性，而不是声称了解植物。
- 作品内容: 该系列的第二部作品：一组设计过的相遇，检验艺术家本人面对藻类、草与桦树等截然不同的植物时的情感反应。
- 实现方式: 为期两周的展览中与植物进行的现场表演性实验，并以影像记录。
- 视频: https://vimeo.com/198560496
- 图片: https://images.squarespace-cdn.com/content/v1/5aeca48a506fbe863b23a8b6/1526322878983-UO0158JOGJKC9A2GFXYI/15877652_10154849002759603_1268027415_o.jpg
- 项目主页: https://www.spelapetric.org/strange-encounters/

#### Pando Endo — Jakob Kudsk Steensen (2017)
- 类型: 艺术作品 · 感官: 时间与尺度, 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 核心想法: 一个克隆根系（以白杨克隆群 Pando 命名）被呈现为追光、突破围困的行动者。
- 作品内容: 一个虚拟的根系生物，由白杨树皮、苔藓与根的照片构成，朝着光穿破玻璃柜生长，四架虚拟无人机在旁巡视。
- 实现方式: 实时程序化模拟，纹理与触手般的根被编程为向光源移动。
- 视频: https://vimeo.com/242398982
- 图片: https://images.squarespace-cdn.com/content/v1/573604122b8ddea9122c6ee9/1519256845242-RUJXBP50XRS8WQQKCQCH/HighresScreenshot00000.jpg
- 项目主页: https://www.jakobsteensen.com/pando-endo-1

#### Confronting Vegetal Otherness: Phytoteratology — Špela Petrič (2016)
- 类型: 艺术作品 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 多感官装置, 表演与参与式
- 展出于: Prix Ars Electronica 2016 (Award of Distinction, Hybrid Art)
- 核心想法: 人与植物的亲缘被落实到分子层面：艺术家的激素塑造了一个植物的身体。
- 作品内容: 拟南芥的植物胚在人工子宫中培育，组织以从艺术家尿液中提取的类固醇激素喂养，生成人—植物“怪物”。
- 实现方式: 在无菌凝胶培养基中进行体细胞胚胎发生，并添加从艺术家尿液中分离的激素。
- 图片: https://images.squarespace-cdn.com/content/v1/5aeca48a506fbe863b23a8b6/1534189733741-1EUWR4JLBX43M635NE6J/MG_6180.jpg
- 项目主页: https://www.spelapetric.org/phytoteratology/

#### Pteridophilia — Zheng Bo (2016)
- 类型: 艺术作品 · 感官: 触觉, 身体图式与运动 · 媒介: 屏幕与网页, 表演与参与式
- 展出于: Manifesta 12, Palermo 2018; 11th Taipei Biennial 2018; Liverpool Biennial 2021
- 核心想法: 生态酷儿的亲缘：人的身体放下距离，把植物当作同样敏感的伙伴来相遇。
- 作品内容: 一个持续进行的影像系列：几位年轻的酷儿男性在台湾的森林里与蕨类植物建立亲密的身体关系，通过触碰而非语言向植物学习。
- 实现方式: 在台湾森林中与非职业表演者拍摄的 4K 影像；展览现场通过耳机聆听声音。
- 视频: https://www.youtube.com/watch?v=OpjQokRE9bs
- 图片: http://zhengbo.org/2016_PP1/ZHENG_2016_PP1_01.jpg http://zhengbo.org/2016_PP1/ZHENG_2016_PP1_03.jpg
- 项目主页: http://zhengbo.org/2019_PP4.html

#### Somatic Drifts — Cat Jones (2016)
- 类型: 表演 · 感官: 触觉, 身体图式与运动, 嗅觉与味觉 · 媒介: 表演与参与式, 多感官装置
- 展出于: PICA Radical Ecologies, Perth 2016; The Art of Pain, Adelaide 2015
- 核心想法: 借错觉实现跨物种共情：身体的感受边界被松开，漂向植物与动物的身体。
- 作品内容: 一对一的现场作品：艺术家用触摸、声音和身体错觉引导参与者感受另一种存在的身体，随后形成一件不断累积参与者“捐出”的身体的录像装置。
- 实现方式: 视触觉身体错觉（类似橡胶手错觉）、Melissa Hunt 的双耳声音设计、录像与限量气味。
- 视频: https://vimeo.com/299341088
- 图片: https://catjones.net/wp-content/uploads/2015/06/somatic-drifts-live-remix-lge2-copy1.jpg
- 项目主页: https://catjones.net/2016/08/11/somatic-drifts/

#### Confronting Vegetal Otherness: Skotopoiesis — Špela Petrič (2015)
- 类型: 表演 · 感官: 时间与尺度, 身体图式与运动, 改变的视觉 · 媒介: 表演与参与式
- 展出于: Trust Me, I'm an Artist (Kapelica Gallery) 2015; Prix Ars Electronica 2016 (Award of Distinction, Hybrid Art, series)
- 核心想法: 与植物的交流通过光与光的缺席发生，按植物而非人的时间尺度进行。
- 作品内容: 一场持续性表演：艺术家面对正在发芽的水芹站立数小时，她的影子让幼苗变白，形成她身体的苍白印记。
- 实现方式: 光投射在水芹上；艺术家的影子经由植物的光敏色素引发黄化，而她自己也因久站而略微变矮。
- 图片: https://images.squarespace-cdn.com/content/v1/5aeca48a506fbe863b23a8b6/1525552300442-FEP7QGQK17Y9ULKP8HCH/scotopoiesis_press_04.jpg
- 项目主页: https://www.spelapetric.org/scotopoiesis/

#### Floating Flower Garden: Flowers and I are of the Same Root, the Garden and I are One — teamLab (2015)
- 类型: 艺术作品 · 感官: 身体图式与运动, 嗅觉与味觉, 改变的视觉 · 媒介: 多感官装置
- 展出于: teamLab Planets TOKYO
- 核心想法: 标题许诺与花园合一；实际上是植物回应你的在场，更像被它们注意到，而不是成为它们。
- 作品内容: 一间挤满一万三千多株活兰花的房间，花会在观众走近时向上升起，在每个人周围让出一个穹顶般的空间；两人相遇时，各自的空间连成一片。
- 实现方式: 悬挂在电动绳索上的兰花由观众追踪系统驱动；香气随花的状态在一天中变化。
- 视频: https://www.youtube.com/watch?v=atWwHZHGkLE
- 图片: https://teamlab-site.imagewave.pictures/b5EBo9Uo-OK6SM09ZTkEZQ/89JNH3JuCgHZcGbACeD2vU/width=1200,format=jpeg
- 项目主页: https://www.teamlab.art/w/ffgarden/

#### PSX Consultancy (Plant Sex Consultancy) — Špela Petrič (2014)
- 类型: 研究原型 · 感官: 触觉, 身体图式与运动 · 媒介: 多感官装置
- 展出于: BIO50, Museum of Architecture and Design, Ljubljana 2014
- 核心想法: 把以人为中心的设计方法用到植物身上：设计师必须“设身处地”体会一个没有声音、无法自述的客户。
- 作品内容: 一个把植物当作客户的思辨设计咨询机构，为植物设计生殖辅助用品，这些物件介于医疗器械与情趣用品之间。
- 实现方式: 依据传粉生物学制作的生物虚构原型，以咨询机构的形式展出物件与文档。
- 图片: https://images.squarespace-cdn.com/content/v1/5aeca48a506fbe863b23a8b6/1534191081939-DQXHKQECKO7IZYFVDMP4/IMG_2824.jpg https://images.squarespace-cdn.com/content/v1/5aeca48a506fbe863b23a8b6/1534191167722-257XI6LQZSXY2K4OZ9T6/IMG_2732.jpg
- 项目主页: https://www.spelapetric.org/plant-sex-consultancy/

#### Humalga: Towards the Human Spore — Špela Petrič (2013)
- 类型: 艺术作品 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 多感官装置
- 核心想法: 设想人类通过每隔一代成为简单的光合生物来度过崩溃。
- 作品内容: 与 Robertina Šebjanič 合作的思辨性艺术研究项目，提出一种人与藻类基因杂交的物种，在人类世代与藻类世代之间交替。
- 实现方式: 以实验室道具、图解与文本呈现的思辨生物技术提案。
- 图片: https://images.squarespace-cdn.com/content/v1/5aeca48a506fbe863b23a8b6/1534193649598-TEPJUL8Q67UC8QHP04UM/humalga-03.jpg
- 项目主页: https://www.spelapetric.org/humalga/

#### Botanicula — Amanita Design (2012)
- 类型: 游戏 · 感官: 改变的视觉, 听觉与振动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 这棵树是一个完整的世界，以种子、叶子与真菌的尺度被看见。
- 作品内容: 一款点击冒险游戏，玩家操控五个小小的植物生物（种子、小树枝、蘑菇等），穿越一棵巨树，从寄生虫手中救下它最后一粒种子。
- 实现方式: 手绘 2D 冒险游戏，配乐由 DVA 创作；支持 PC、Mac 与移动端。
- 视频: https://www.youtube.com/watch?v=UxeaS4Pq4EY
- 图片: https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/207690/header.jpg
- 项目主页: https://amanita-design.net/games/botanicula.html

#### Natural History of the Enigma (Edunia) — Eduardo Kac (2009)
- 类型: 艺术作品 · 感官: 身体图式与运动 · 媒介: 多感官装置
- 展出于: Weisman Art Museum 2009; Prix Ars Electronica 2009 Golden Nica (Hybrid Art)
- 核心想法: 艺术家部分地成为植物；人与花的界限由一个基因划出。
- 作品内容: 一种“植物动物”：经基因改造的矮牵牛，在花瓣的红色脉纹中表达艺术家本人的 DNA。
- 实现方式: 从艺术家血液中分离的一段免疫球蛋白基因序列被导入矮牵牛，只在花脉中表达。
- 视频: https://www.youtube.com/watch?v=dJmsSmM_9ns
- 图片: https://www.ekac.org/kac.nat.hist.enigma.01.jpg
- 项目主页: https://www.ekac.org/nat.hist.enig.html

#### Breathing — Guto Nóbrega (2008)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 触觉 · 媒介: 多感官装置
- 展出于: FILE Festival
- 核心想法: 呼吸成为人与植物之间共享的通道：观众呼出的气被叶片感知，植物则借一具它原本没有的身体作出回应。
- 作品内容: 一个由活体绿萝和舵机、光纤与 LED 组成的机器身体构成的混合生物；观众通过呼吸与它互动，植物的电信号反应驱动这个生物的动作、灯光与声音。
- 实现方式: 改装的皮肤电反应电路测量绿萝叶片的电阻变化，输入 Arduino，再由其控制舵机、光纤与 LED。
- 视频: https://vimeo.com/9860198
- 图片: https://payload.cargocollective.com/1/3/114170/1619978/_MG_2827_o.jpg
- 项目主页: https://cargocollective.com/gutonobrega/Breathing

#### Akousmaflore — Scenocosme (2007)
- 类型: 艺术作品 · 感官: 触觉, 听觉与振动 · 媒介: 多感官装置
- 核心想法: 植物一直在感知我们；这件作品让这种感知变得可以听见。
- 作品内容: 一座由活体植物组成的小花园，被触摸或靠近时会发声；每株植物都有自己的声音，回应观众身体的电荷。
- 实现方式: 通过植物自身组织进行电容感应，触发各自的声音作品。
- 视频: https://www.youtube.com/watch?v=1hae2Fwrqn8
- 项目主页: http://www.scenocosme.com/akousmaflore_en.htm

#### Teleporting an Unknown State — Eduardo Kac (1996)
- 类型: 艺术作品 · 感官: 时间与尺度, 集体与网络感知, 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 核心想法: 参与者不是在看植物，而是作为它的光源为它服务，在几周时间里按光合作用的节奏生活。
- 作品内容: 一间暗室里，一粒种子躺在土床上；它得到的唯一光线来自远方参与者通过互联网传来的视频光，只有世界各地的人持续“充当它的太阳”，植物才会生长。
- 实现方式: 土床上方的投影机播放来自多个国家的天空实时视频会议画面，这些画面只作为光子供幼苗使用。
- 视频: https://www.youtube.com/watch?v=sD3rbN_9D2E
- 图片: https://www.ekac.org/handsky.gif
- 项目主页: https://www.ekac.org/teleporting.html

#### Trans Plant — Christa Sommerer, Laurent Mignonneau (1995)
- 类型: 艺术作品 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 多感官装置, 穹顶、CAVE 与投影
- 展出于: Tokyo Metropolitan Museum of Photography 1995
- 核心想法: 观众的身体既是园丁也是花园：静止，也就是植物的节奏，才能长出森林。
- 作品内容: 观众走进半圆形空间，在屏幕上看到自己的影像，脚步所到之处长出草和树；静止不动时植物长得更高，身体大小和移动速度决定长出的植物。
- 实现方式: 三维视频抠像提取观众的身体与位置，生长算法在大投影上围绕身体生成植物。
- 视频: https://www.youtube.com/watch?v=gduXrdsQG-w

#### Interactive Plant Growing — Christa Sommerer, Laurent Mignonneau (1992)
- 类型: 艺术作品 · 感官: 触觉, 时间与尺度 · 媒介: 多感官装置
- 展出于: ZKM Karlsruhe collection
- 核心想法: 活植物就是界面：人的触碰先被植物感知，再被转译为植物的生长。
- 作品内容: 观众触碰或靠近五株真实盆栽，每一次触碰都会让投影上不同种类的虚拟植物实时生长、扭动或停止。
- 实现方式: 测量观众手与每株植物之间的电位差，用来驱动算法化的植物生长程序。
- 视频: https://www.youtube.com/watch?v=JXX7JNFD2X8

### 森林与生态系统

把森林、草地与整个生态系统当作你要成为的对象。

#### Boreal Dreams — Jakob Kudsk Steensen (2025)
- 类型: 艺术作品 · 感官: 时间与尺度, 听觉与振动 · 媒介: 多感官装置, 屏幕与网页, 空间音频
- 核心想法: 世界最大的森林被呈现为人类共享的光、热与休息的调节者。
- 作品内容: 一件实时模拟与线上作品，横越从北美到斯堪的纳维亚的北方针叶林，把森林的变化与人类的睡眠和梦联系起来。
- 实现方式: 游戏引擎模拟配合空间化声音，并附有线上互动体验。
- 图片: https://images.squarespace-cdn.com/content/v1/573604122b8ddea9122c6ee9/1736942325438-DGP6W3X1FGRO6R5RSP6R/HighresScreenshot00186.png
- 项目主页: https://www.jakobsteensen.com/boreal-dreams

#### Breathing with the Forest — Marshmallow Laser Feast (2023)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Shifting Landscapes, Emergence Magazine, Oxo Tower Wharf, London 2023; Compton Verney 2025; Entwined, bitforms gallery, New York 2025
- 核心想法: 与森林同步呼吸，把身体延伸进生态系统，森林就像一片更大的肺，而观众是其中一部分。
- 作品内容: 一件三屏影像装置兼睁眼冥想，场景是哥伦比亚亚马孙的一棵 capinuri 树；观众随视听提示同步呼吸，森林中碳、水、氧与氮的流动逐渐显现。
- 实现方式: 基于 2020 年对 capinuri 树（Maquira coriacea）的 LiDAR 扫描、摄影测量与全景声录音，呈现为 3 块 4.8 米宽屏幕上的 4 分钟三屏影像，配 20.2 声道音频。
- 视频: https://vimeo.com/912279953
- 图片: https://marshmallowlaserfeast.com/app/uploads/2023/11/0247_Emergence_Light_v065_QCM_BTY_B_2.jpg https://marshmallowlaserfeast.com/app/uploads/2023/11/BWTF_MLF_SandraCiampone_20231201_2.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/breathing-with-the-forest/

#### Gondwana — Ben Joseph Andrews, Emma Roberts (2022)
- 类型: 艺术作品 · 感官: 时间与尺度, 听觉与振动, 改变的视觉 · 媒介: VR 头显, 多感官装置
- 展出于: Sundance New Frontier 2022; MIFF 2022; Wales Millennium Centre
- 核心想法: 你生活在森林的时间尺度里看着它变化；观众停留得越久，森林就越有韧性。
- 作品内容: 一部为期 24 小时的丹翠雨林持续性 VR 模拟：每 14 分钟过去一年，运行 1990 年至 2090 年的气候预测。
- 实现方式: 多人实时模拟，在 30 英亩虚拟空间中放置四五万个森林资产，并以 40 小时野外录音生成声音。
- 视频: https://www.youtube.com/watch?v=Gtzm-QQ9vhM
- 图片: https://images.squarespace-cdn.com/content/v1/5b66737e1137a610ce01c2e3/90b64393-a27c-4cb7-842d-5683b54d1186/Gondwana_Sunrise.png https://voicesofvr.com/wp-content/uploads/2022/01/gondwana-vr-1102x473.jpg
- 项目主页: https://gondwanavr.com

#### The HEAL Institute, Museum of the Future — Marshmallow Laser Feast (2022)
- 类型: 艺术作品 · 感官: 多感官, 触觉 · 媒介: 多感官装置
- 展出于: Museum of the Future, Dubai (permanent, 2022–)
- 核心想法: 观众扮演生态修复者，而不是成为另一种生命；Biosynth 是观察植物与土壤过程的透镜。
- 作品内容: 迪拜未来博物馆中以气候为主题的楼层：观众用手持“Biosynth”设备扫描、放大并修复模拟生态系统，从植物苗圃“生命之墙”到围绕吉贝木棉的雨林再生。
- 实现方式: 定制手持设备具备物体识别与动作追踪，结合投影、生成式影像与多声道音频，与 Lucy Rowland 博士、爱丁堡皇家植物园等科学家合作开发。
- 图片: https://marshmallowlaserfeast.com/app/uploads/2026/02/SUF1-3-26.jpg https://marshmallowlaserfeast.com/app/uploads/2026/02/MLF_MoTP_Lab-13-1-1.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/museum-of-the-future-immersive-exhibition/

#### Dream — Marshmallow Laser Feast (2021)
- 类型: 表演 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: 表演与参与式, 屏幕与网页, 游戏
- 展出于: Royal Shakespeare Company / Manchester International Festival online 2021
- 核心想法: 主要是一次剧场实验；森林与其中的精灵构成观众穿行的世界，从树冠一直到树根。
- 作品内容: 一场取材于《仲夏夜之梦》的线上现场演出：在虚拟森林中，帕克与小精灵蛛网、芥子、豆花和飞蛾由动作捕捉演员实时演绎，线上观众帮助森林在黎明前重新生长。
- 实现方式: 基于 Unreal Engine（与 Epic Games 合作）的实时动作捕捉，爱乐管弦乐团的互动交响配乐随演员动作变化，观众通过手机或浏览器参与；10 场演出覆盖 6.5 万人。
- 视频: https://vimeo.com/622344847
- 图片: https://marshmallowlaserfeast.com/app/uploads/2023/11/Dream_TreeWithRoots-1.jpg https://marshmallowlaserfeast.com/app/uploads/2023/11/EM-Williams_Dream_Copyright-RSC_Photographer-Stuart-Martin-2.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/dream/

#### Forest of Us — Es Devlin (2021)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 改变的视觉 · 媒介: 多感官装置
- 展出于: Every Wall is a Door, Superblue Miami 2021
- 核心想法: 与树一起呼吸：肺被呈现为一棵倒置的树，与外面的树彼此补全。
- 作品内容: 镜面步行装置，其分支形态揭示人类支气管树与树木枝杈之间的相似，并伴随呼吸声景。
- 实现方式: 镜面迷宫、投影光与围绕呼吸和光合作用创作的空间声音。
- 视频: https://www.youtube.com/watch?v=9n-hBp3th4E
- 图片: https://cdn.sanity.io/images/5olj48ug/production/fa21c3ed3ccdd9b1423db475848878c60093cc26-4758x3244.jpg?rect=0,379,4758,2486&w=1200&h=627&fit=crop
- 项目主页: https://esdevlin.com/work/forest-of-us

#### Catharsis — Jakob Kudsk Steensen, Matt McCorkle (2019)
- 类型: 艺术作品 · 感官: 时间与尺度, 听觉与振动, 改变的视觉 · 媒介: 多感官装置, 屏幕与网页, 空间音频
- 展出于: Pinchuk Art Centre Kyiv 2019; Serpentine Galleries (Connect BTS) 2020
- 核心想法: 沿着一片森林从根到冠垂直穿行，给观众的是树的轴线与时间尺度，而不是行人的路线。
- 作品内容: 一个大尺度的虚构原始森林模拟，数百年未受干扰；镜头以一个连续长镜头从湿润的根部穿行到树冠。
- 实现方式: 游戏引擎构建的环境，素材来自北美森林的 3D 纹理与野外录音，由 Matt McCorkle 制作同步空间音频。
- 视频: https://vimeo.com/354440480
- 图片: https://images.squarespace-cdn.com/content/v1/573604122b8ddea9122c6ee9/1592830825054-H2OACWH4WCJIP1WQZI9R/HG4_3835.jpg https://images.squarespace-cdn.com/content/v1/573604122b8ddea9122c6ee9/1580933640745-O2BZLKORG89FGFEYTAWW/6.jpg
- 项目主页: https://www.jakobsteensen.com/catharsis

#### Confronting Vegetal Otherness: Deep Phytocracy — Špela Petrič (2019)
- 类型: 表演 · 感官: 集体与网络感知, 身体图式与运动 · 媒介: 表演与参与式
- 核心想法: 植物群落被视为治理空间的政治体；人学习去解读它们的治理。
- 作品内容: 一场在城市荒野中的参与式漫步，观众用由生态学、林学、神话与政治构成的“重组工具”探索野生植物群落。
- 实现方式: 带领团体表演，配合定制的手持物件与野外练习。
- 图片: https://images.squarespace-cdn.com/content/v1/5aeca48a506fbe863b23a8b6/1558468356376-STD1MYWLNNX4I8GJ5UNH/_85A1325_Photo_Miha_Godec-3.jpg
- 项目主页: https://www.spelapetric.org/deep-phytocracy-feral-songs/

#### The Deep Listener — Jakob Kudsk Steensen (2019)
- 类型: 艺术作品 · 感官: 听觉与振动, 改变的视觉, 时间与尺度 · 媒介: 增强现实, 空间音频
- 展出于: Serpentine Augmented Architecture commission 2019
- 核心想法: 通过非人类居民重新聆听公园，伦敦悬铃木则是其余一切所依赖的基础设施。
- 作品内容: 一次穿行海德公园与肯辛顿花园的增强现实漫步，揭示五种通常逃过人类注意的物种：伦敦悬铃木、蝙蝠、长尾鹦鹉、芦苇床与天蓝豆娘。
- 实现方式: 智能手机 AR 应用，按位置触发 3D 模型与各物种的空间音频录音，包括被转为可听范围的蝙蝠超声。
- 视频: https://vimeo.com/351470817
- 图片: https://images.squarespace-cdn.com/content/v1/573604122b8ddea9122c6ee9/1614095935755-M0XR28UWTQMZZAGJ1EOJ/1.hero.png
- 项目主页: https://www.jakobsteensen.com/the-deep-listener

#### Awavena — Lynette Wallworth (2018)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 多感官 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Sundance New Frontier 2018; Venice Virtual Reality 2018
- 核心想法: 把森林看作有生命的存在：VR 代替药物异象，让外来者瞥见 Yawanawa 人如何感知植物与灵。
- 作品内容: 与亚马孙 Yawanawa 部族及其首位女萨满 Hushahu 共同完成的 VR 纪录片；森林以药物异象中的样子出现，植物与生灵都在发光。
- 实现方式: 在亚马孙拍摄的 360° 实景结合实时渲染的森林粒子异象（VR 头显）。
- 视频: https://www.youtube.com/watch?v=Eo_BQGVzd18
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2018/Schede_film/970x647/Venice-VR/awavena.jpg?itok=cXc408uH
- 项目主页: https://www.labiennale.org/en/cinema/2018/lineup/venice-virtual-reality/awavena

#### RE-ANIMATED — Jakob Kudsk Steensen, Matt McCorkle (2018)
- 类型: 艺术作品 · 感官: 听觉与振动, 改变的视觉, 时间与尺度 · 媒介: VR 头显, 屏幕与网页
- 展出于: Future Generation Art Prize, Venice Biennale 2019; Tranen Contemporary Art Center
- 核心想法: 一个灭绝的生态系统只能作为扭曲的数字记忆被重新进入，经由最后一只居民的叫声被听见。
- 作品内容: 一部 VR 与影像作品，围绕 1987 年宣告灭绝的考艾岛 ʻōʻō 鸟最后一段无人回应的求偶鸣叫，重建它失去的考艾岛森林栖息地。
- 实现方式: 把考艾岛的摄影测量与野外录音组装成实时游戏引擎世界，以房间尺度 VR 与多频道影像呈现。
- 视频: https://vimeo.com/291992820
- 图片: https://images.squarespace-cdn.com/content/v1/573604122b8ddea9122c6ee9/1559670358502-6MH7CSTUHA5XIJ84S8L0/second+Venice+21.jpg
- 项目主页: https://www.jakobsteensen.com/re-animated

#### Selyatağı (Floodplain) — Deniz Tortum (2018)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 身体图式与运动 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Venice Virtual Reality 2018
- 核心想法: 追问：当我们无法再是原来的自己时，能否成为一片森林、一块石头，或众多生物的集合。
- 作品内容: VR 影片：在一片即将被开发的森林里，搜救队迷失方向，被一棵老树的咒语笼罩，人类慢慢融入森林。
- 实现方式: 以体积捕捉与摄影测量建构的 360° 森林场景，延伸自剧情片《Yuva》（Emre Yeksan）的世界。
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2018/Schede_film/970x647/Venice-VR/selyatagi.jpg?itok=dbGz_le-
- 项目主页: https://www.labiennale.org/en/cinema/2018/lineup/venice-virtual-reality/selyata%C4%9Fi-floodplain

#### Uýra, the Tree That Walks — Uýra Sodoma (2016)
- 类型: 表演 · 感官: 身体图式与运动, 触觉, 多感官 · 媒介: 表演与参与式, 屏幕与网页
- 展出于: PIPA Prize 2022
- 核心想法: 变成森林质料的人体，以受损土地本身的身份发言：“一切活着的，都在变化。”
- 作品内容: 持续进行的表演与摄影系列：艺术家用大约两个小时，以树叶、树皮、种子、贝壳、纤维和天然染料装扮身体，化身乌伊拉出现在亚马孙的森林、被污染的溪流、城市与学校里。
- 实现方式: 用采集来的动植物材料组装身体，在特定场域表演，并形成《Mil (Quase) Mortos》等摄影系列。
- 视频: https://www.youtube.com/watch?v=iOkFPeTkCxE
- 图片: https://i.ytimg.com/vi/3AnIteg88-Y/hqdefault.jpg
- 项目主页: https://en.wikipedia.org/wiki/U%C3%BDra_Sodoma

#### Forest (Laser Forest) — Marshmallow Laser Feast (2013)
- 类型: 艺术作品 · 感官: 听觉与振动, 触觉 · 媒介: 多感官装置
- 展出于: STRP Biennale, Eindhoven 2013; HABITATS, The Old Market, Brighton 2017
- 核心想法: 一片以人为中心、充满玩性的森林：树变成回应触摸的乐器，是 MLF 走向“会回应的森林”的早期一步。
- 作品内容: 一件占地 450 平方米的互动装置，由 150 多根带激光、各自调成一个音的弹性杆组成；观众敲、摇、拨动这些“树”，引发摆动的光影与空间声音。
- 实现方式: 类似音叉的振动杆装有传感器与激光，每根对应一个音高，通过环绕声系统播放。
- 视频: https://vimeo.com/64652497
- 图片: https://i.vimeocdn.com/video/549669290-9a43e15fe6778272e264c471c9c42d8f8f7acbeb8fda8cb5841c176554c4def3-d_1280?region=us
- 项目主页: https://vimeo.com/64652497

## 成为河流

元素与行星尺度的世界：河流、溪流与海洋，冰、空气与呼吸，岩石与土壤，行星与深时间。

### 河流、海洋与冰

成为一条河、一道溪、大海、冰川或雨。

#### La Laguna Parla — Steye Hallema (2026)
- 类型: 表演 · 感官: 听觉与振动, 集体与网络感知 · 媒介: 表演与参与式, 空间音频
- 展出于: Venice Immersive 2026
- 核心想法: 以潟湖的身份说话：人群的手机汇成一种声音，为争取法律人格的水体发声。
- 作品内容: 面向数百名参与者的集体手机仪式，为作为生命存在的威尼斯潟湖发声，改编自与“欧洲水体汇流”合作的《The Waterbodies Orchestra》。
- 实现方式: 在参与者自己的手机上同步播放基于浏览器的声音与灯光提示，现场指挥（The Smartphone Orchestra）。
- 视频: https://www.youtube.com/watch?v=JfM0pfHVkAs
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2026/Schede_film/970x647/Ve_Immersive/la_laguna_parla.jpg?itok=zwQWuIim
- 项目主页: https://www.labiennale.org/en/cinema/2026/venice-immersive/la-laguna-parla

#### Water Body — Marshmallow Laser Feast (2026)
- 类型: 艺术作品 · 感官: 时间与尺度, 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 展出于: ARTIS Aquarium, Amsterdam (permanent, 2026–); BFI London Film Festival Expanded 2026
- 核心想法: 借用 Robert Macfarlane 的观点，河流被视为有记忆的活的身体，而行星之水是我们自身血液循环的延伸。
- 作品内容: 阿姆斯特丹 ARTIS 水族馆中的永久装置，把地球上的水呈现为一个循环的身体：十秒钟过去一年，洋流、涨落的河流、浮游生物爆发以及鲸和海鸟的迁徙在地球上流动。
- 实现方式: 使用哥白尼 GLORYS12V1 海洋再分析数据、HydroSHEDS HydroRIVERS 河网数据、NASA/CNES SWOT 卫星地表水数据以及动物追踪数据，以大尺度影像与空间声音呈现。
- 视频: https://vimeo.com/1203391670
- 图片: https://marshmallowlaserfeast.com/app/uploads/2026/05/SC_00427-Edit-1-1.jpg https://marshmallowlaserfeast.com/app/uploads/2026/06/0317_Artis_v35_g05_16x9.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/water-body/

#### Glacier Dreams — Refik Anadol (2023)
- 类型: 艺术作品 · 感官: 多感官, 改变的视觉 · 媒介: 多感官装置, 穹顶、CAVE 与投影
- 展出于: Art Dubai 2023; Art Basel 2023
- 核心想法: 冰川被呈现为机器对冰的记忆：一个在观众周围像融水一样流动的档案。
- 作品内容: 一件房间尺度的 AI 数据绘画，基于数百万张冰岛冰川图像生成，并配有生成的声音与气味。
- 实现方式: 用冰川照片与数据训练的生成式 AI 模型，输出到 LED 墙上，配合空间声音与扩散的气味。
- 视频: https://www.youtube.com/watch?v=b_q7MAjmfto
- 项目主页: https://refikanadol.com

#### Once a Glacier — Jiabao Li (2022)
- 类型: 沉浸式影片 · 感官: 时间与尺度, 听觉与振动 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: IDFA DocLab; SXSW XR 2023; Raindance Immersive; Cannes World Film Festival (Best VR Short)
- 核心想法: 把一个人的一生与一块冰的一生并置，让曾经缓慢、如今飞快的冰川时间变得可以被感受。
- 作品内容: 一部 15 分钟的互动 VR 影片：一个女孩在成长中把一块冰川冰存放在冰箱里，而它的母冰川在她有生之年消失。
- 实现方式: 依据马塔努斯卡冰川卫星数据建模的冰川形态，配合在阿拉斯加冰川上录制的声音，制作为互动 PC VR。
- 视频: https://www.youtube.com/watch?v=S1iY-nFp7EE
- 图片: https://static1.squarespace.com/static/58688c8a6a496327e937e35b/t/622070b1dbbc750b6fe171e3/1646293174606/Jiabao+Li+Once+a+Glacier.jpg?format=1500w
- 项目主页: https://www.jiabaoli.org/once-a-glacier

#### Semi-Diurnal Spaces — Studio Above&Below (2022)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度 · 媒介: 穹顶、CAVE 与投影
- 核心想法: 坐在穹顶中，你能把海峡一天两次的潮汐节律感受为周遭空间的节奏。
- 作品内容: 位于南威尔士的在地穹顶装置：布里斯托尔海峡的实时潮汐、风与湿度数据塑造环绕观众流动的粒子雕塑。
- 实现方式: 实时潮汐与气象数据驱动 NVIDIA FleX 粒子模拟中的重力、黏度与流速，投影于穹顶。
- 视频: https://vimeo.com/714540362
- 图片: https://i.vimeocdn.com/video/1440159997-9a486cacf8e1963922d9667a4084d7bbcc34777c2e3b295a31ab187754b1080a-d_1280x720
- 项目主页: https://www.studioaboveandbelow.com/work/semi-diurnal-spaces

#### Tongues of Verglas / Les Langues de Verglas — Jakob Kudsk Steensen (2022)
- 类型: 艺术作品 · 感官: 时间与尺度, 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 展出于: MIRE Project, Geneva 2022; Yet It Moves!, Copenhagen Contemporary 2023; Teylers Museum 2023
- 核心想法: 尺度就是入口：镜头从冰川一路缩小到地衣，让冰、树与共生体像同一个活的身体。
- 作品内容: 一段 24 分钟循环的模拟影像：从阿罗拉冰川的冰洞“冰舌”出发，进入一棵三维扫描的阿罗拉松、一滴树液，以及生活在其中的狼地衣。
- 实现方式: 在海拔 2300 米两周野外工作中采集的摄影测量与微距扫描，在 Unreal Engine 中组成实时模拟。
- 视频: https://vimeo.com/742306931
- 图片: https://i.vimeocdn.com/video/1493577233-2d5a8f61d2f82964814ba9c7be1bb64c24ec31817ed31b1aec6bfebd6011fded-d_1280x720
- 项目主页: https://www.jakobsteensen.com/tongues-of-verglas-les-langues-de-verglas

#### Berl-Berl — Jakob Kudsk Steensen (2021)
- 类型: 艺术作品 · 感官: 时间与尺度, 听觉与振动 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Halle am Berghain Berlin 2021
- 核心想法: 从城市脚下的沼泽来看这座城市：水、芦苇与泥浆重新成为主角。
- 作品内容: 一片实时模拟的沼泽，布满柏林 Halle am Berghain，以柏林残存的湿地为素材，生态系统随昼夜与季节生长变化。
- 实现方式: 用柏林湿地的摄影测量与野外录音在游戏引擎中实时模拟，呈现在大屏幕与雕塑化的水系统中。
- 视频: https://www.youtube.com/watch?v=BOreIFDsvCA
- 项目主页: https://www.jakobkudsksteensen.com

#### Thin Ice VR — Monkeystack (2021)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 时间与尺度 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Adelaide Film Festival 2021; South Australian Museum 2021
- 核心想法: 一个世纪后重访冰原，观众用自己的在场去衡量冰的消逝。
- 作品内容: 一部 VR 纪录片，跟随探险家 Tim Jarvis 重走 Shackleton 1914 年的南极路线，看气候变化如何改变了冰。
- 实现方式: 在南极与南乔治亚岛拍摄的摄影测量与 360° 视频，组合成可交互的 VR 体验。
- 视频: https://www.youtube.com/watch?v=NWcwqRn6rVc
- 图片: https://www.thinicevr.com/wp-content/uploads/2021/05/ThinIce_MobileStatic-640x320px.png
- 项目主页: https://www.thinicevr.com

#### we are opposite like that — Himali Singh Soin (2019)
- 类型: 艺术作品 · 感官: 时间与尺度 · 媒介: 屏幕与网页, 表演与参与式
- 核心想法: 冰是见证过深时间的长者叙述者，而表演者的身体最终化为冰。
- 作品内容: 一个持续进行的系列（2017–2022），包括影片、表演与一本书，从冰的视角讲述两极的神话；在 2019 年的影片中，一个外星般的身影穿越白色大地，最终化为闪光的冰。
- 实现方式: 单频道影像，把诗歌、档案材料与濒危的北极声景，同在极地景观中拍摄的装扮表演结合在一起（很可能拍摄于一次北极航船驻留期间）。
- 视频: https://vimeo.com/432044184
- 图片: https://images.squarespace-cdn.com/content/v1/59f1eb9fd55b415293a291bf/1592991047705-DCH2NU3M8XHG4TJ4BMLH/Installation+view.JPG
- 项目主页: https://www.himalisinghsoin.com/we-are-opposite-like-that

#### Acoustic Ocean — Ursula Biemann (2018)
- 类型: 艺术作品 · 感官: 听觉与振动 · 媒介: 屏幕与网页, 多感官装置
- 展出于: Taipei Biennial 2018
- 核心想法: 对照作品：科学家成为两栖的聆听者，是身体与仪器组成的、调谐于大海的组合体。
- 作品内容: 一件录像装置：罗弗敦海岸的一位萨米族潜水生物学家用水听器、抛物面麦克风等设备聆听海洋生命。
- 实现方式: 单频道录像，配合水下与抛物面麦克风录音，在挪威北极海岸拍摄，以装置形式展出。
- 视频: https://www.youtube.com/watch?v=pfM2YkNTcDc
- 图片: https://geobodies.org/wp-content/uploads/2022/03/aav-ao-cover-large-aspect-ratio-770-433.jpg
- 项目主页: https://www.geobodies.org/art-and-videos/acoustic-ocean

#### A Colossal Wave — Marshmallow Laser Feast (2017)
- 类型: 艺术作品 · 感官: 身体图式与运动, 听觉与振动, 改变的视觉 · 媒介: VR 头显, 混合现实, 多感官装置
- 展出于: Quartier des Spectacles, Montreal 2017; Hull UK City of Culture 2017; SXSW 2018
- 核心想法: 人的动作像波浪一样向外扩散，这是对“影响”的物理隐喻，而不是成为水本身。
- 作品内容: 一件关于人类世人类影响的多地点混合现实公共艺术：使用四把 VR “伞”、落塔、保龄球、锣与声音反应装置，一次真实的撞击会引发一道虚拟巨浪。
- 实现方式: 装在伞上的 VR 观看器、AR 与由物理撞击触发的声音反应装置，与 Presstube、Dpt. 及 Headspace Studio 合作完成。
- 视频: https://vimeo.com/244047652
- 图片: https://i.vimeocdn.com/video/668342500-8d0de246271aff0c2cc33f7a963e714cc85da06ed916cba5c95e452b0021b761-d_1280?region=us
- 项目主页: http://acolossalwave.com/

#### Aquaphobia — Jakob Kudsk Steensen (2017)
- 类型: 艺术作品 · 感官: 身体图式与运动, 听觉与振动 · 媒介: VR 头显
- 核心想法: 水以被抛弃的恋人口吻说话，提醒你身体大部分也是水，把对水的恐惧变成亲缘。
- 作品内容: 房间尺度的 VR 作品：一个不断变形的水中微生物带你穿过虚拟的红钩公园与码头，从泥土隧道走到未来洪水之上的桥，而景观本身在向你讲述一段分手。
- 实现方式: 用卫星图像与拍摄的土壤、黏土、岩石纹理搭建的 HTC Vive 房间尺度 VR，配合空间化旁白。
- 视频: https://vimeo.com/244699310
- 图片: https://static1.squarespace.com/static/573604122b8ddea9122c6ee9/t/5f9d99e01e3be610d60cac43/1589207723451/1.jpg?format=1500w
- 项目主页: https://www.jakobsteensen.com/aquaphobia

#### Greenland Melting — Emblematic Group (2017)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 时间与尺度 · 媒介: VR 头显, 360°/沉浸式影片
- 展出于: Venice Film Festival VR 2017
- 核心想法: 沿着冰川前缘行走，看多年的退缩在眼前上演，把冰川时间压缩到人的尺度。
- 作品内容: 与 FRONTLINE 和 NOVA 合作的房间尺度 VR 纪录片，带观众与 NASA 科学家一起前往格陵兰冰川，并呈现冰川随时间的退缩。
- 实现方式: 摄影测量与体积捕捉结合 360° 视频；几十年间冰川边缘的位置在房间尺度 VR 中以动画呈现。
- 视频: https://www.youtube.com/watch?v=lxd9-GZqprE
- 图片: https://emblematicgroup.com/wp-content/uploads/2017/08/emblematic_slider_902x543_1.jpg
- 项目主页: https://emblematicgroup.com/experiences/greenland-melting/

#### Meandering River — onformative (2017)
- 类型: 艺术作品 · 感官: 时间与尺度, 听觉与振动 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Contemporary Istanbul 2017; Funkhaus, Berlin 2018; National Design & Craft Gallery, Kilkenny 2018; Ars Electronica STARTS Exhibition 2019; AI for Good Global Summit, UN Geneva 2019
- 核心想法: 把平时慢到看不见的河流变迁加速，让它的节奏可以被感受到，这是进入河流时间尺度的一种方式。
- 作品内容: 一件多屏视听装置，以鸟瞰视角呈现河流随时间在大地上冲刷、改道的过程，配有 AI 作曲的音乐。
- 实现方式: 由定制侵蚀算法实时生成、跨多块屏幕的影像，配以机器学习模型创作的配乐。
- 视频: https://vimeo.com/297819750
- 图片: https://backend.onformative.com/assets/work/meanderingRiver_Funkhaus01.jpg https://backend.onformative.com/assets/work/meanderingRiver_detail02.png
- 项目主页: https://onformative.com/work/meandering-river

#### Melting Ice — Danfung Dennis (2017)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 时间与尺度 · 媒介: 360°/沉浸式影片
- 核心想法: 被广泛引用的气候 VR 地标作品：它展示冰，而不是让你成为冰。
- 作品内容: 《This Is Climate Change》系列中的一部 360° 影片，由 Al Gore 介绍，让观众站在格陵兰冰盖上的融水河与冰川竖井之间。
- 实现方式: Condition One 在冰盖上拍摄的立体 360° 视频，由 Within 发行。
- 视频: https://www.youtube.com/watch?v=MwSLTGjPqG8

#### You Are the Ocean — Özge Samancı (2017)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 改变的视觉 · 媒介: 多感官装置, 可穿戴与感官装置
- 展出于: SIGGRAPH 2018 Art Gallery
- 核心想法: 身体与星球之间的界限被消解：你内心的“天气”直接变成大海的天气与浪涌。
- 作品内容: 一件互动装置：参与者戴上脑电头戴设备，用意念控制投影中的海洋。专注时风暴骤起、浪高云厚，平静时海面安宁、阳光出现。
- 实现方式: 消费级脑电头戴设备估算专注度与冥想度，据此驱动大尺度投影的实时海洋模拟中的浪高、风暴强度与云量；与 Gabriel Caniglia 合作完成。
- 视频: https://vimeo.com/232792092
- 图片: https://images.squarespace-cdn.com/content/v1/5d29ea0b8f0d170001041163/1563030017135-QXSWHESFQ2XI90NRAI6P/34831489_1914921635205619_6748758785960968192_o.jpg?format=1500w
- 项目主页: https://ozgesamanci.com/you-are-the-ocean

#### DEEP — Owen Harris (2016)
- 类型: 游戏 · 感官: 呼吸与内感受, 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 像潜水者一样呼吸成为穿越水域的唯一方式，平静不再是一句提示，而是身体的运作机制。
- 作品内容: 一个冥想式的海底 VR 世界，玩家在发光的岩石与珊瑚间漂流，只靠缓慢的深呼吸移动。
- 实现方式: 定制的拉伸传感腰带测量膈肌起伏，映射为头显中的浮力与前进。
- 视频: https://www.youtube.com/watch?v=qIhZhdmPQ_8
- 图片: https://images.squarespace-cdn.com/content/v1/56a1092da128e65fa42a11fa/1585418439909-AH0BEHDJN736S99KKYEG/Screenshot_102.3696.jpg
- 项目主页: https://www.exploredeep.com

#### Waterlicht — Daan Roosegaarde (2015)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度 · 媒介: 多感官装置
- 展出于: Westervoort 2015; Museumplein Amsterdam 2016
- 核心想法: 站在光下，人们感到自己身处水下，站在被拦住的大海海底。
- 作品内容: 一场“虚拟洪水”：变幻的蓝色光线在人们头顶上方，标出没有堤坝时水会达到的高度。
- 实现方式: LED 光线与透镜把由软件与风塑造的波浪图案投射到公共场所上方的夜空。
- 视频: https://www.youtube.com/watch?v=LWzPm_ponkI
- 图片: https://cdn.prod.website-files.com/6683beecb76948bee8843558/66cfb15dd70d897cb22cfd9b_Waterlicht%20Roosegaarde.png_new.webp
- 项目主页: https://www.studioroosegaarde.net/project/waterlicht

#### Ice Watch — Olafur Eliasson (2014)
- 类型: 艺术作品 · 感官: 触觉, 时间与尺度 · 媒介: 多感官装置
- 展出于: Copenhagen 2014; Place du Panthéon Paris, COP21 2015; Tate Modern London 2018
- 核心想法: 触摸数千年的古冰，让冰川的时间与它的消逝变得可以亲身感受。
- 作品内容: 从格陵兰峡湾运来的十二块冰川冰以钟面形状摆放在公共广场上，任其融化，人们触摸、倚靠、聆听它们。
- 实现方式: 从努克峡湾打捞的漂浮冰块，用冷藏集装箱运来，摆成钟面。
- 视频: https://www.youtube.com/watch?v=qd-JRGBKSXA
- 图片: https://res.cloudinary.com/olafureliasson-net/image/private/q_auto:eco,c_fit,h_640,w_640/img/ice-watch_18019.jpg https://res.cloudinary.com/olafureliasson-net/image/private/q_auto:eco,c_fit,h_640,w_640/img/ice-watch_18017.jpg
- 项目主页: https://olafureliasson.net/artwork/ice-watch-2014/

#### River Listening — Leah Barclay (2014)
- 类型: 艺术作品 · 感官: 听觉与振动 · 媒介: 空间音频, 表演与参与式
- 核心想法: 在水下聆听，让人凭河中生命的声音判断河流的健康，而这些从岸上是看不到的。
- 作品内容: 一个声音艺术与科学项目：社区通过水听器在聆听工作坊、声音地图、表演与装置中聆听昆士兰的四条河流。
- 实现方式: 与澳大利亚河流研究所合作，在布里斯班河、玛丽河、努沙河与洛根河进行水听器录音，通过工作坊与在线声音地图分享。
- 视频: https://www.youtube.com/watch?v=dGAcUChycp4
- 图片: http://leahbarclay.com/wp-content/uploads/2015/03/1.Leah_LoganRiver.jpg http://leahbarclay.com/wp-content/uploads/2015/03/UnderWater.png
- 项目主页: https://leahbarclay.com/portfolio_page/river-listening/

#### Become Ocean — John Luther Adams (2013)
- 类型: 表演 · 感官: 听觉与振动, 时间与尺度 · 媒介: 空间音频, 表演与参与式
- 展出于: Seattle Symphony 2013; Pulitzer Prize for Music 2014
- 核心想法: 对照作品：标题本身就是一条指令；聆听意在让听者在海平面上升之际融入大海。
- 作品内容: 一首 42 分钟的管弦乐作品，三组乐器像潮汐与海浪一样涨落，在巨大的浪峰处交汇；2014 年获普利策奖。
- 实现方式: 乐团分为三个空间上分开的组，各自以不同速度循环，形成交叠的波浪。
- 视频: https://www.youtube.com/watch?v=yGIEvUOf-JU
- 项目主页: https://www.johnlutheradams.net

#### Universe of Water Particles — teamLab (2013)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 多感官装置, 穹顶、CAVE 与投影
- 展出于: teamLab Borderless Tokyo 2018
- 核心想法: 水像绕过石头一样绕过观众，身体成为塑造水流的障碍物。
- 作品内容: 一道由数十万个模拟水粒子渲染的数字瀑布；后来的版本从岩石上流下，并绕过站在水流中的观众。
- 实现方式: 基于粒子的流体模拟，让水与虚拟地形相互作用，以房间尺度投影并回应被追踪的身体。
- 视频: https://www.youtube.com/watch?v=WWuDTBpPZbA
- 图片: https://teamlab-site.imagewave.pictures/b5EBo9Uo-OK6SM09ZTkEZQ/83c311d3-0613-47f4-59ed-f060ce518200/width=1200,format=jpeg
- 项目主页: https://www.teamlab.art/w/waterparticles/

#### Rain Room — Random International (2012)
- 类型: 艺术作品 · 感官: 触觉, 身体图式与运动 · 媒介: 多感官装置
- 展出于: Barbican Curve London 2012; MoMA New York 2013; LACMA 2015
- 核心想法: 雨能感知你：天气回应身体，观众学会慢慢移动，好让雨读懂他们。
- 作品内容: 一百平方米持续落下的雨，人走到哪里雨就在哪里停止，观众在雨中行走却不会淋湿。
- 实现方式: 三维深度摄像头追踪观众，并关闭每个人身体周围上方的电磁阀；水循环使用。
- 视频: https://www.youtube.com/watch?v=FslABAyj2OA
- 项目主页: https://www.random-international.com

#### River Sounding — Bill Fontana (2010)
- 类型: 艺术作品 · 感官: 听觉与振动 · 媒介: 空间音频, 多感官装置
- 展出于: Somerset House London 2010
- 核心想法: 河流以声音的形式被带进室内，观众不湿身就能站在泰晤士河里。
- 作品内容: 一件声音装置，把泰晤士河的水下声音与结构振动传入河畔萨默塞特宫的房间与天井。
- 实现方式: 泰晤士河中的水听器（可能还有附近结构上的振动传感器）把信号送入建筑内的多声道扬声器系统。
- 视频: https://www.youtube.com/watch?v=lSAshwqRfnA
- 项目主页: https://resoundings.org

#### Langjökull, Snæfellsjökull, Sólheimajökull — Katie Paterson (2007)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 空间音频, 多感官装置
- 核心想法: 冰川在融化中播放自己的声音，聆听与消失成了同一件事。
- 作品内容: 三张用三座冰岛冰川融水冻成的冰唱片，刻有这些冰川的录音，在唱机上播放直到融化殆尽。
- 实现方式: 融水在唱片模具中冻结，用三台唱机同时播放，并拍摄唱片融化的过程。
- 视频: https://www.youtube.com/watch?v=lfNDUjGqSVU
- 项目主页: https://katiepaterson.org/artwork/langjokull-snaefellsjokull-solheimajokull/

#### Vatnajökull (the sound of) — Katie Paterson (2007)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 空间音频, 多感官装置
- 核心想法: 一通电话让冰川成为你可以拨通并聆听的存在，而它正在消失。
- 作品内容: 一条连接到瓦特纳冰川下杰古沙龙冰湖中麦克风的实时电话线：任何人拨通号码，都能实时听到冰川融化。
- 实现方式: 冰湖中的水下麦克风连接放大器与手机，画廊中以霓虹灯显示电话号码。
- 图片: https://i0.wp.com/katiepaterson.org/wp-content/uploads/2022/02/Katie_Paterson_Vatnajokull_3-1.jpg?resize=1920%2C1442&ssl=1 https://i0.wp.com/katiepaterson.org/wp-content/uploads/2022/02/Katie_Paterson_Vatnajokull_5.jpg?resize=1920%2C1440&ssl=1
- 项目主页: https://katiepaterson.org/artwork/vatnajokull-the-sound-of/

#### Āniwaniwa — Rachael Rakena, Brett Graham (2007)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动, 身体图式与运动 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Venice Biennale 2007 (collateral event)
- 核心想法: 从河底感知：观众与被开发淹没的村庄和人们处在同一个位置。
- 作品内容: 观众仰躺在大型雕刻的独木舟状结构下，结构上投映水下影像，伴着毛利吟唱，与 1947 年被水电站淹没的怀卡托河畔村庄霍拉霍拉一起沉入水中。
- 实现方式: 五个悬挂的雕塑形体，投映水下影像并配以环绕声。
- 视频: https://www.youtube.com/watch?v=YJYzyIlcpAQ
- 图片: https://i.ytimg.com/vi/YJYzyIlcpAQ/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=GvpJaa37GGo

#### A Sound Map of the Danube — Annea Lockwood (2005)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 空间音频, 多感官装置
- 核心想法: 一条河被听作跨越十个国家的一个流动身体，人声只是其中一部分。
- 作品内容: 一件多声道装置与三张 CD，从黑森林到黑海追随多瑙河，收录水下与岸边的录音以及沿岸居民的声音。
- 实现方式: 多年间沿河进行的水听器与麦克风录音，编排为环绕声装置。
- 视频: https://www.youtube.com/watch?v=qwsnWZ4dwz0
- 项目主页: https://www.annealockwood.com

#### Weather Report — Chris Watson (2003)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 空间音频
- 核心想法: 时间压缩让人能把冰川听作一个会移动、会碎裂、会融化的存在。
- 作品内容: 一张由三首长篇野外录音作品组成的专辑；其中心曲目把冰岛瓦特纳冰川几周的运动压缩成十八分钟。
- 实现方式: 把接触式麦克风与水听器放置在冰内与冰下数周，剪辑成时间压缩的作品，由 Touch 发行。
- 视频: https://www.youtube.com/watch?v=CH2o-FGrWdE
- 项目主页: https://en.wikipedia.org/wiki/Chris_Watson

#### Kits Beach Soundwalk — Hildegard Westerkamp (1989)
- 类型: 艺术作品 · 感官: 听觉与振动 · 媒介: 空间音频, 表演与参与式
- 核心想法: 对照作品：注意力本身就是技术；过滤掉城市，岸边的小生命才能被听见。
- 作品内容: 一首声景作品：作曲家的声音引导听者走过温哥华的一处海滩，滤掉城市噪音，放大藤壶与海水的细小声音。
- 实现方式: 带旁白的立体声磁带作品；带通滤波去除交通轰鸣，显出退潮时藤壶的咔嗒声。
- 视频: https://www.youtube.com/watch?v=hg96nU6ltLk
- 项目主页: https://www.hildegardwesterkamp.ca

#### A Sound Map of the Hudson River — Annea Lockwood (1982)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 空间音频, 多感官装置
- 展出于: Hudson River Museum 1982
- 核心想法: 对照作品：从源头听到入海口，让听者以河流的节奏旅行，听见它不断变化的声音。
- 作品内容: 一件声音装置与录音作品，从阿迪朗达克山脉的源头到大西洋，沿河多处录音，追随哈德逊河的全程。
- 实现方式: 沿河用麦克风与水听器进行野外录音，剪辑成连续作品，装置中配有地图。
- 视频: https://www.youtube.com/watch?v=R_t3-cMyrkI
- 项目主页: https://www.annealockwood.com

### 空气、呼吸与天气

大气、风、云，以及与非人类共享的呼吸。

#### Breathing Planet: Atmospheric Wind Data — Marshmallow Laser Feast (2025)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 时间与尺度 · 媒介: 多感官装置, 穹顶、CAVE 与投影
- 展出于: Immersive Horizon, Thermen & Badewelt Sinsheim (permanent, 2025–)
- 核心想法: 把呼吸放大到行星尺度：大气被呈现为所有呼吸生命共同创造之物，观众与它一同呼吸。
- 作品内容: 一件 10 分钟的呼吸练习装置，设在镜面不锈钢半圆隧道中：观众随白昼吸气、随黑夜呼气，同时观看旋转的地球上一个月（2020 年 1 至 2 月）的大气流动。
- 实现方式: NASA GEOS 大气再分析数据显示在 8K LED 墙上，并在镜面隧道中无限反射；配合 5-5 共振呼吸引导，以及 Carolyn Downing 的全景声与双耳声设计。
- 视频: https://vimeo.com/1125548860
- 图片: https://marshmallowlaserfeast.com/app/uploads/2025/08/A7400696min.jpg https://marshmallowlaserfeast.com/app/uploads/2025/10/0284_WundBreathing_PlanetSq_v44.4494.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/breathing-planet-atmospheric-wind-data/

#### Flow — Adriaan Lokman (2023)
- 类型: 艺术作品 · 感官: 触觉, 热与红外, 呼吸与内感受 · 媒介: VR 头显, 多感官装置
- 展出于: Venice Immersive 2023
- 核心想法: 成为风：故事由气流而非角色讲述，身体用皮肤去读它。
- 作品内容: 完全由空气构成的 VR 装置：访客顺从风的流动，风讲述一位女性的一夜，以阵风、暖意、呼吸与气味被感受到。
- 实现方式: VR 中的气流动画模拟，与围绕座位的风扇、加热器和气味扩散器同步。
- 视频: https://www.youtube.com/watch?v=QxiIIZ7rP4I
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2023/Schede_film/970x647/Ve_Immersive/lokman.jpg?itok=5Yakke_C
- 项目主页: https://www.labiennale.org/en/cinema/2023/venice-immersive/flow

#### Evolver — Marshmallow Laser Feast, Atlas V, Natan Sinigaglia (2022)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 时间与尺度, 身体图式与运动 · 媒介: VR 头显, 穹顶、CAVE 与投影, 多感官装置
- 展出于: Tribeca Festival 2022; Geneva International Film Festival 2022; Sublime, Museum Wave, Seoul 2023; Teatr Wielki – Polish National Opera, Warsaw 2023; Works of Nature, ACMI, Melbourne 2023–24; Cannes Immersive Competition 2024; TED 2024; Adventures in Consciousness, University of Oxford 2024; Anatomy of Fragility, Frankfurter Kunstverein 2025–26; Flesh and Bones, ArtScience Museum, Singapore 2026; Wales Millennium Centre, Cardiff 2026
- 核心想法: 身体被呈现为由分叉血管组成的森林，于是跟随氧气向内走，最终把观众向外连接到树。
- 作品内容: 一段集体 VR 旅程：跟随一口氧气，从树的呼气进入肺部，穿过分叉的血管，最终抵达一个正在“呼吸”的细胞，由 Cate Blanchett 旁白。之后扩展为银幕装置与躺卧观看的穹顶投影《The Breathing Cell》。
- 实现方式: 多人 VR，画面基于与 Fraunhofer MEVIS 合作处理的 MRI、CT 医学影像以及艾伦细胞科学研究所的细胞模型，粒子随共振呼吸节奏脉动；音乐来自 Jonny Greenwood、Meredith Monk 与 Jon Hopkins；Terrence Malick 与 Edward R. Pressman 担任监制。
- 视频: https://vimeo.com/718477724
- 图片: https://marshmallowlaserfeast.com/app/uploads/2023/11/Evolver_Seoul_2023_Full-6.jpg https://marshmallowlaserfeast.com/app/uploads/2023/11/MLF_Evolver_round1-3263.jpeg https://marshmallowlaserfeast.com/app/uploads/2023/11/MLF_Evolver_Mediation-Room_01.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/evolver/

#### Atmos Sphaerae — Tamiko Thiel (2020)
- 类型: 艺术作品 · 感官: 改变的视觉, 呼吸与内感受 · 媒介: VR 头显
- 展出于: DiMoDa 4.0 Dis/Location 2020; Gazelli Art House 2022
- 核心想法: 大气变成可以在手臂长度之外端详、然后进入的物体，让空气成为一个地方，而不是虚空。
- 作品内容: 一件 VR 作品，漂浮的球体中各自装着不同的大气或水景，观众可以望进去、穿行其中。
- 实现方式: 用游戏引擎制作的实时 VR，最初为 DiMoDa 4.0（Dis/Location）发布，后以装置形式展出。
- 视频: https://www.youtube.com/watch?v=BGZrTPnNnwA
- 图片: https://tamikothiel.com/atmos-sphaerae/media/AtmosSphaerae-Gazelli-Installation2022c_1024px.jpg
- 项目主页: https://tamikothiel.com/atmos-sphaerae/

#### Breathe — Diego Galafassi (2020)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 集体与网络感知 · 媒介: 混合现实, VR 头显
- 展出于: Sundance New Frontier 2020
- 核心想法: 你的呼吸并不属于你：成为空气，看到每一次呼气都汇入地球的大气。
- 作品内容: 社交混合现实作品：让每位参与者的呼吸显形，并追随它作为空气在人、森林与海洋之间环绕地球流动。
- 实现方式: 呼吸感测驱动共享混合现实空间中的粒子可视化（Magic Leap / VR 头显）。
- 视频: https://www.youtube.com/watch?v=8-pVNx5rpgg
- 项目主页: https://voicesofvr.com/888-sundance-breathe-visualizes-how-breath-connects-us-to-each-other-in-social-ar-experience/

#### Digital Atmosphere — Studio Above&Below (2020)
- 类型: 艺术作品 · 感官: 改变的视觉, 呼吸与内感受 · 媒介: 增强现实, 多感官装置
- 展出于: Near Now Fellowship, Broadway Nottingham 2020
- 核心想法: 给看不见的空气一个可见的身体与声音，让路人感知自己正在呼吸的大气。
- 作品内容: 一座内置空气质量传感器的公共雕塑，透过手机看到的 AR 层会随周围空气污染的变化而改变形态与颜色。
- 实现方式: “Atmo”空气质量传感器把读数传给手机 AR 应用，使锚定在实体雕塑上的虚拟雕塑随之变形。
- 视频: https://vimeo.com/463156008
- 图片: https://www.studioaboveandbelow.com/media/2026/08/Studio-AboveBelow-DigitalAtmosphere.webp
- 项目主页: https://www.studioaboveandbelow.com/work/digital-atmosphere

#### Fly with Aerocene Pacha — Tomás Saraceno (2020)
- 类型: 表演 · 感官: 身体图式与运动 · 媒介: 表演与参与式
- 展出于: CONNECT, BTS 2020
- 核心想法: 人的身体仅靠大气被托起，作为旅行者而不是引擎的乘客加入空气之中。
- 作品内容: 在阿根廷萨利纳斯大盐沼上空的一次太阳能气球飞行，只靠阳光与空气把人带上天空，与当地原住民社群共同完成。
- 实现方式: 由阳光加热的系留太阳能气球，于 2020 年 1 月 25 日完成创纪录的载人飞行。
- 视频: https://www.youtube.com/watch?v=AG_UXEXg_Mk
- 图片: https://aerocene.org/wp-content/uploads/2020/01/19ARG_BTS_AerocenePacha_03637-1.jpg
- 项目主页: https://aerocene.org/pacha/

#### Wunderkammer — Olafur Eliasson, Acute Art (2020)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 增强现实
- 核心想法: 天气以手掌尺度被带进客厅，一朵在地毯上下雨的云让大气变得日常。
- 作品内容: 一组可以放进家中的 AR 物件——雨云、太阳、彩虹、海鹦、漂浮的石头等——在 2020 年封城期间发布。
- 实现方式: Acute Art 的手机 AR 应用，把带有光照与降雨模拟的动画物件放入用户空间。
- 视频: https://www.youtube.com/watch?v=4-UT2MYSjMo
- 图片: https://res.cloudinary.com/olafureliasson-net/image/private/q_auto:eco,c_fit,h_640,w_640/img/wunderkammer_23497.jpg https://res.cloudinary.com/olafureliasson-net/image/private/q_auto:eco,c_fit,h_640,w_640/img/wunderkammer_23499.jpg
- 项目主页: https://olafureliasson.net/artwork/wunderkammer-2020/

#### Atmospheric Memory — Rafael Lozano-Hemmer (2019)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 听觉与振动, 多感官 · 媒介: 多感官装置
- 展出于: Manchester International Festival 2019
- 核心想法: 大气被当作一种记录介质，保存着每一次呼吸与每一句话。
- 作品内容: 一个展览，把观众的声音与呼吸捕捉在空气中——化为水面波纹、蒸汽云、雾中的文字与天气——灵感来自 Charles Babbage 关于空气是所有话语之图书馆的设想。
- 实现方式: 麦克风、呼吸传感器、蒸汽打印机、超声波雾化器与水箱，把话语与呼吸转化为可见的空气与水的图案。
- 视频: https://www.youtube.com/watch?v=RdduY-CUBHM
- 项目主页: https://www.lozano-hemmer.com/atmospheric_memory.php

#### The Tides Within Us — Marshmallow Laser Feast (2019)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 身体图式与运动 · 媒介: 多感官装置, 屏幕与网页
- 展出于: The State of Us, The Lowry, Salford 2019–20; Human Nature, York Mediale, York Art Gallery 2020–21; Works of Nature, ACMI, Melbourne 2023–24; Breathe | Mauri Ora, Te Papa, Wellington 2025–26
- 核心想法: 一件以人为中心、关于呼吸的作品：身体被呈现为向周围敞开的系统，空气在哪里结束、血液从哪里开始并无清晰界线。
- 作品内容: 一组装置与六幅大尺寸版画，跟随氧气从肺部穿过身体分叉的血管，把身体内部呈现为潮汐般、树状的生态系统。
- 实现方式: 以肺与血管系统的医学影像为基础，与 CG 艺术家 Erik Ferguson 合作渲染，以投影与微喷版画呈现。
- 视频: https://www.youtube.com/watch?v=eO28znCLu-Q
- 图片: https://marshmallowlaserfeast.com/app/uploads/2023/11/TWU-Lung-1.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/tides-within-us/

#### Pollution Pods — Michael Pinsky (2017)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 嗅觉与味觉, 多感官 · 媒介: 多感官装置
- 展出于: Trondheim 2017; Somerset House London 2018
- 核心想法: 空气质量变成肺、嗅觉与眼睛的体验，而不是一个数字。
- 作品内容: 五个相连的测地线穹顶，重现伦敦、北京、新德里、圣保罗与挪威陶特拉的空气，观众穿行其中并呼吸。
- 实现方式: 按各城市污染特征调配的安全化学物质、气味与湿度，释放到每个穹顶内。
- 视频: https://www.youtube.com/watch?v=I7nMME-3aC8
- 项目主页: https://www.michaelpinsky.com/project/pollution-pods/

#### Rainbow — Olafur Eliasson, Acute Art (2017)
- 类型: 艺术作品 · 感官: 改变的视觉, 集体与网络感知 · 媒介: VR 头显
- 核心想法: 彩虹只存在于身体、水滴与光之间，观众与自己看到的天气共同生成。
- 作品内容: 一件多人 VR 作品：观众站在落下的雨幕之中，随着移动看到彩虹形成；其他观众以光的身影出现。
- 实现方式: 联网的房间尺度 VR，对光在雨滴中折射进行基于物理的模拟；由 Acute Art 制作。
- 视频: https://www.youtube.com/watch?v=Z74cSovLh-s
- 项目主页: https://olafureliasson.net

#### Aerocene — Tomás Saraceno (2015)
- 类型: 艺术作品 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 表演与参与式, 多感官装置
- 展出于: COP21 Paris, Grand Palais 2015
- 核心想法: 只靠空气与阳光漂浮，就是把大气当作生活的介质，追随风而不是航线。
- 作品内容: 一个开放的社群与艺术项目，放飞只靠太阳热量与空气升起的雕塑，不用化石燃料、氦气或电池。
- 实现方式: 用轻薄薄膜制作、由阳光加热的太阳能气球雕塑；社群用开源的“Aerocene Explorer”套件放飞。
- 视频: https://www.youtube.com/watch?v=ZIyljW9ejxU
- 图片: https://aerocene.org/wp-content/uploads/2020/03/TS_09MAS_museo-prato_00121edit.jpg
- 项目主页: https://aerocene.org/

#### Vicious Circular Breathing — Rafael Lozano-Hemmer (2013)
- 类型: 艺术作品 · 感官: 呼吸与内感受 · 媒介: 多感官装置
- 展出于: Borusan Contemporary Istanbul 2013; Musée d'art contemporain de Montréal 2018
- 核心想法: 空气成为共享、循环的身体：进入就意味着吸入陌生人的呼吸。
- 作品内容: 一个密封的玻璃房间，装有电动风箱与牛皮纸袋，观众可以进入并呼吸之前所有人呼出过的空气。
- 实现方式: 由风箱、管道与像肺一样鼓起又瘪下的纸袋组成的闭合循环系统；进入者需签署风险声明。
- 视频: https://www.youtube.com/watch?v=b5BG4F8Nd7g
- 图片: https://www.lozano-hemmer.com/image_sets/vicious_circular_breathing/monterrey_2019/vcb_monterrey_2019_my_505A7355_t.jpg
- 项目主页: https://www.lozano-hemmer.com/vicious_circular_breathing.php

#### in orbit — Tomás Saraceno (2013)
- 类型: 艺术作品 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: 多感官装置
- 展出于: K21 Ständehaus Düsseldorf 2013
- 核心想法: 像云中居民一样在空中行走，通过振动感知他人，借用了蜘蛛认识空间的方式。
- 作品内容: 悬挂在 K21 Ständehaus 中庭上方 25 米的可行走网，配有巨大的充气球体，观众攀爬其中，并通过网感受彼此的动作。
- 实现方式: 三层钢丝网，面积 2500 平方米，配 PVC 球体；网会传递多达十名观众的动作。
- 视频: https://www.youtube.com/watch?v=ROqL-8h_7DM
- 图片: https://studiotomassaraceno.org/files/ts_11k21_51331-1400x933-e1614949390714.jpg
- 项目主页: https://studiotomassaraceno.org/in-orbit/

#### Last Breath — Rafael Lozano-Hemmer (2012)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 时间与尺度 · 媒介: 多感官装置
- 核心想法: 一口呼吸以流动的空气被保存下来，比呼出它的身体活得更久。
- 作品内容: 一个装置，把古巴歌手 Omara Portuondo 的一口呼吸储存在牛皮纸袋中，让它永远循环，像呼吸一样鼓起又瘪下。
- 实现方式: 密封的风箱与管道让储存的空气在纸袋中循环；显示屏计数呼吸次数。
- 视频: https://www.youtube.com/watch?v=C9s-MUdXmm4
- 图片: https://www.lozano-hemmer.com/image_sets/last_breath/naples_2024/last_breath_naples_2024_rlh_001_t.jpg
- 项目主页: https://www.lozano-hemmer.com/last_breath.php

#### Flower — thatgamecompany (2009)
- 类型: 游戏 · 感官: 身体图式与运动, 触觉 · 媒介: 游戏, 屏幕与网页
- 展出于: The Art of Video Games, Smithsonian American Art Museum 2012
- 核心想法: 成为风：玩家没有身体，只有方向与一阵气流。
- 作品内容: 一款游戏：你是风，卷起一串花瓣掠过原野，让灰暗的大地重新恢复色彩与生机。
- 实现方式: 倾斜 PlayStation 3 的 SIXAXIS 手柄来操控风向，按任意键让风变强。
- 视频: https://www.youtube.com/watch?v=s1oZnf3475c
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/966330/header.jpg
- 项目主页: http://thatgamecompany.com/flower/

#### Cloud — Jenova Chen (2005)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 标志性对照作品：玩家是一个做梦的男孩而不是云，但牵引、融合云朵并降雨，让天气成为身体塑造的材料。
- 作品内容: 一款南加州大学的学生游戏：住院的男孩梦见自己飞翔，把云聚成更大的云，在大地上降雨。
- 实现方式: 南加州大学互动媒体学生团队制作的电脑游戏；用鼠标聚拢云朵并触发降雨。
- 视频: https://www.youtube.com/watch?v=zM0NwnQV0Nk
- 图片: https://upload.wikimedia.org/wikipedia/en/8/89/Cloudbox.jpg
- 项目主页: https://en.wikipedia.org/wiki/Cloud_(video_game)

#### The Weather Project — Olafur Eliasson (2003)
- 类型: 艺术作品 · 感官: 改变的视觉, 集体与网络感知 · 媒介: 多感官装置
- 展出于: Tate Modern Unilever Series 2003
- 核心想法: 对照作品：天气在室内被搭建出来，让人们一起感受它，作为共享的大气而不是背景。
- 作品内容: 泰特现代美术馆涡轮大厅中由单频灯组成的人造太阳与弥漫的薄雾，镜面天花板让躺下的观众看到自己成为天空下的小小身影。
- 实现方式: 半圆形单频钠灯经镜面天花板映成完整的圆，加湿器释放糖水雾。
- 图片: https://res.cloudinary.com/olafureliasson-net/image/private/q_auto:eco,c_fit,h_640,w_640/img/the-weather-project_21881.jpg https://res.cloudinary.com/olafureliasson-net/image/private/q_auto:eco,c_fit,h_640,w_640/img/the-weather-project_8200.jpg
- 项目主页: https://olafureliasson.net/artwork/the-weather-project-2003/

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

#### Fog Sculpture — Fujiko Nakaya (1970)
- 类型: 艺术作品 · 感官: 改变的视觉, 触觉, 多感官 · 媒介: 多感官装置
- 展出于: Expo '70 Osaka; Exploratorium Fog Bridge 2013
- 核心想法: 站在云中，人失去轮廓，感到天气是环绕自己的一个身体。
- 作品内容: 一系列人工雾雕塑，始于 1970 年大阪世博会百事馆，包裹观众、抹去视线，并随风与温度移动。
- 实现方式: 高压泵把纯净水压过微型喷嘴，产生能悬浮在空气中的细小水滴，并依据当地风况编排。
- 视频: https://www.youtube.com/watch?v=f0ynptF97n4
- 项目主页: https://en.wikipedia.org/wiki/Fujiko_Nakaya

### 岩石、土壤与深时间

石头、山脉、矿物与地质时间。

#### Collective Body — Sarah Silverblatt-Buser (2025)
- 类型: 艺术作品 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: VR 头显, 表演与参与式
- 展出于: Venice Immersive 2025
- 核心想法: 你的动作方式决定你成为哪种元素：以土、气、水或火而非人形来具身。
- 作品内容: 设定在新墨西哥暴风雨中的多人 VR 舞蹈体验：算法分析每位参与者的动作，为其分配十六种化身之一——每种都是一种自然元素（土、气、水或火）并配有音乐主题——随后与他人相遇、共同起舞。
- 实现方式: 全身追踪的社交 VR，把动作分类到元素与能量相态（固、液、气、等离子）组成的 4×4 网格中，驱动化身与音乐。
- 视频: https://www.youtube.com/watch?v=c1uOAEL7Do8
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2025/Schede_film/970x647/Ve_Immersive/collective_body.jpg?itok=Ff8l25Pv
- 项目主页: https://www.labiennale.org/en/cinema/2025/venice-immersive/collective-body

#### The Ephesus Experience Museum — Marshmallow Laser Feast (2023)
- 类型: 艺术作品 · 感官: 时间与尺度, 多感官 · 媒介: 多感官装置, 穹顶、CAVE 与投影
- 展出于: Ephesus Experience Museum, Selçuk (permanent, 2023–)
- 核心想法: 一件关于人类历史的作品；为完整起见收录，它与本馆最接近的联系，是让人在石头与场所中感受被压缩的深时间。
- 作品内容: 位于土耳其以弗所古城附近的投影式博物馆，观众在其中穿行于这座城市数千年的历史。
- 实现方式: 大尺度投影、空间音频、雕塑与动画，与 DEM Museums、建筑师、历史学家和考古学家合作开发。
- 视频: https://www.youtube.com/watch?v=waUPEuJ6f5Q
- 图片: https://marshmallowlaserfeast.com/app/uploads/2025/10/Copy-of-SCiampone-SC_08949-min.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/the-ephesus-experience-museum/

#### FRAMERATE: Pulse of the Earth — ScanLAB Projects (2022)
- 类型: 艺术作品 · 感官: 时间与尺度, 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Venice Immersive 2022
- 核心想法: 以地球的速度观看：地质与季节的变化被压缩到大地仿佛在呼吸。
- 作品内容: 多屏装置，展示激光雷达延时扫描下变化的风景：崖壁侵蚀、南瓜生长、沙丘移动、森林随季节变色。
- 实现方式: 对同一地点进行数月重复的地面激光雷达扫描，渲染为体积点云延时影像。
- 视频: https://www.youtube.com/watch?v=8bcrX3ah-PY
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2022/Schede_film/970x647/Venice_Immersive/shaw_trossel_.jpg?itok=MsvUsDiC
- 项目主页: https://www.labiennale.org/en/cinema/2022/venice-immersive/framerate-pulse-earth

#### Stone — Shinseungback Kimyonghun (2017)
- 类型: 艺术作品 · 感官: 触觉, 听觉与振动, 时间与尺度 · 媒介: 多感官装置
- 展出于: Goethe-Institut Shanghai commission 2017
- 核心想法: 成为石头，就是静立不动，让大海一次又一次拍打在你的表面。
- 作品内容: 在火山岛郁陵岛岸边一块石头上安装水位传感器记录海浪；展厅里 64 个电磁阀组成的结构重现浪打在这块石头上的节奏，观众走进其中“成为石头”。
- 实现方式: 64 个水传感器与装在木板上的 64 个电磁阀，Arduino、自制软件、扬声器与投影。
- 视频: https://vimeo.com/211470143
- 图片: https://djhznh41oxwef.cloudfront.net/works/stone/ssbkyh_stone_01.png
- 项目主页: http://ssbkyh.com/works/stone/

#### Deep Time Walk — Stephan Harding (2016)
- 类型: 艺术作品 · 感官: 时间与尺度, 身体图式与运动 · 媒介: 空间音频, 表演与参与式
- 核心想法: 用自己的双腿走过深时间，把地质尺度变成身体的努力与距离。
- 作品内容: 一段音频漫步：每走一米等于一百万年，4.6 公里的行走带听者穿越地球的全部历史，人类只出现在最后几厘米。
- 实现方式: 手机应用，由生态学家撰写的戏剧化音频脚本与 GPS 记录的步行距离同步。
- 视频: https://www.youtube.com/watch?v=5kY24DUm0VM
- 图片: https://www.deeptimewalk.org/wp-content/uploads/2017/12/feature-product-app.jpg
- 项目主页: https://www.deeptimewalk.org/

#### Mountain — David OReilly (2014)
- 类型: 游戏 · 感官: 时间与尺度 · 媒介: 游戏, 屏幕与网页
- 核心想法: 成为一座山几乎意味着被动：体验的是时间尺度，而不是控制。
- 作品内容: 一款氛围游戏：你是一座漂浮在太空中的山；四季更替，物体撞上来并留下，你只能看着，偶尔弹几个音。
- 实现方式: 玩家先按提示作画以生成山体，之后山自行运转，天气与季节由模拟生成；键盘只能弹奏音符。
- 视频: https://www.youtube.com/watch?v=GMyOTRrM9jg
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/313340/header.jpg
- 项目主页: http://mountain-game.com

#### From Dust — Eric Chahi (2011)
- 类型: 游戏 · 感官: 触觉, 时间与尺度 · 媒介: 游戏, 屏幕与网页
- 核心想法: 玩家是一股地质力量，学习河流如何切割沙地、熔岩如何凝成岩石。
- 作品内容: 一款上帝模拟游戏：玩家作为“气息”，舀起并倾倒沙、水与熔岩，重塑岛屿，保护一个部落免受洪水与火山喷发。
- 实现方式: 在高度场地形上实时模拟沉积、水流、侵蚀与熔岩。
- 视频: https://www.youtube.com/watch?v=mkdAssf3kJA
- 图片: https://upload.wikimedia.org/wikipedia/en/3/3b/From_Dust_cover.png
- 项目主页: https://en.wikipedia.org/wiki/From_Dust

#### Tele Echo Tube — Hiroki (Hill) Kobayashi (2010)
- 类型: 艺术作品 · 感官: 听觉与振动, 触觉 · 媒介: 多感官装置, 空间音频
- 展出于: MUAC, Mexico City 2010; ACM Multimedia 2013; Matsudo International Science Art Festival 2018
- 核心想法: 取自日本“山彦”（会回应人的山灵）：回应观众的是一座真实的山，而不是一段录音。
- 作品内容: 一件与日本偏远山林实时相连的传声筒装置：观众对着筒喊话，声音在山谷中播放，真实的山间回声连同振动一起返回。
- 实现方式: 放在森林山谷中的联网麦克风与扬声器、回声返回时很可能伴随振动（裂缝鼓）的传声筒装置，以及实时音频串流。
- 论文: https://doi.org/10.1145/2502081.2502125 (ACM Multimedia 2013)
- 视频: https://www.youtube.com/watch?v=KDlQG92_zhQ
- 项目主页: https://doi.org/10.1145/2502081.2502125

#### Ephémère — Char Davies (1998)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 身体图式与运动, 时间与尺度 · 媒介: VR 头显, 多感官装置
- 展出于: National Gallery of Canada 1998
- 核心想法: 用呼吸下沉，穿过土壤进入身体内部，让景观与身体成为一种连续而不断变化的物质。
- 作品内容: 一个用呼吸控制的 VR 景观，分为地表、地下与身体内部三层，种子、河流与器官随季节出现又消失。
- 实现方式: 与《Osmose》相同的呼吸与平衡背心加头戴显示器；场景元素会随体验者停留或经过而随时间变化。
- 视频: https://www.youtube.com/watch?v=XCWaMll0leI
- 图片: https://www.immersence.com/images/ephemere/Eph_Autumn_Flux_I_600.jpg https://www.immersence.com/images/ephemere/016_Ephemere_Installation_View_2.jpg
- 项目主页: https://www.immersence.com/ephemere/

#### Dialogue with the Knowbotic South — Knowbotic Research (1994)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动, 热与红外 · 媒介: 多感官装置, 穹顶、CAVE 与投影
- 核心想法: 南极只能通过仪器被认识；作品让观众把远方的环境当作可以用身体感知的数据。
- 作品内容: 在黑暗的房间里，观众穿行于由南极实时科研数据生成的“知识机器人”云团中，空间里充满由南极气候驱动的风与声音。
- 实现方式: 来自南极科考站和数据库的网络数据驱动计算机生成的代理、投影、声音与风机；以追踪指针导航（具体配置可能因展出地点而异）。
- 视频: https://www.youtube.com/watch?v=dJ3ZbD5uGkE

### 行星与宇宙

作为整体的地球、其他行星与宇宙尺度。

#### YOU:MATTER — Marshmallow Laser Feast (2025)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 时间与尺度, 身体图式与运动 · 媒介: 多感官装置
- 展出于: National Science and Media Museum, Bradford 2025–26
- 核心想法: 主要关于人类如何属于宇宙与行星的循环；向红杉呼气的房间是其中直接的非人类相遇。
- 作品内容: 为 2025 年英国文化之城布拉德福德创作的七室展览，把观众的身体追溯到宇宙大爆炸：观众向数字红杉呼气，借卫星数据观看地球“呼吸”二氧化碳，跟随一滴水从云到汗水，并在自己的血管中看见阳光。
- 实现方式: 呼吸传感器与实时投影、NASA 卫星二氧化碳数据、可把头伸入的云朵雕塑与旁白、照亮手部血管的投影，以及把人脸融入变形生命之树的面部捕捉。
- 视频: https://www.youtube.com/watch?v=WZUr6PChM00
- 图片: https://marshmallowlaserfeast.com/app/uploads/2025/04/NSMM_YouMatter_Photography_250325_DSC01088.jpeg https://marshmallowlaserfeast.com/app/uploads/2025/04/NSMM_YouMatter_Photography_250325_DSC01449-1.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/youmatter/

#### Genesis — Jörg Courtial (2021)
- 类型: 沉浸式影片 · 感官: 时间与尺度, 改变的视觉 · 媒介: VR 头显
- 展出于: Venice VR Expanded 2021
- 核心想法: 采用行星的时间尺度：人类只出现在地球这一天的最后一秒。
- 作品内容: 一段 VR 旅程，把地球 47 亿年压缩到 24 小时的钟面上：年轻炽热的星球、黑暗的海洋、巨型昆虫的史前丛林、恐龙、大灭绝，最后是人类祖先。
- 实现方式: 实时渲染 VR（Vive / Quest），配有地球时钟，以古生物学资料为依据的 CG 场景。
- 视频: https://www.youtube.com/watch?v=rx70fLFpTp8
- 图片: https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2021/Schede_film/970x647/Venice_VR_Expanded/courtial_genesis.jpg?itok=h5M0IGwZ
- 项目主页: https://www.labiennale.org/en/cinema/2021/lineup/venice-vr-expanded/genesis

#### Distortions in Spacetime — Marshmallow Laser Feast (2018)
- 类型: 艺术作品 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 多感官装置, 穹顶、CAVE 与投影
- 展出于: British Science Festival, Hull 2018; Manchester Science Festival, Science and Industry Museum 2018; Shifting Proximities, Nxt Museum, Amsterdam 2021–22; Into the Black Hole, Valkhof Museum, Nijmegen 2023–24; Works of Nature, ACMI, Melbourne 2023–24; The Presence of Absence, Frankfurter Kunstverein 2024; Noor Riyadh 2024
- 核心想法: 身体被呈现为恒星物质：走向事件视界，把人的一个动作连接到宇宙尺度与深时间。
- 作品内容: 一件互动视听装置：观众的动作由粒子系统映照，仿佛坠向黑洞并目睹超新星爆发，把身体里的元素追溯到死去的恒星。
- 实现方式: 身体追踪驱动引力坍缩的实时粒子模拟，音乐由 Arthur Jeffes（Penguin Cafe）创作，天体物理学家 Samaya Nissanke 担任科学顾问。
- 视频: https://vimeo.com/254467760
- 图片: https://marshmallowlaserfeast.com/app/uploads/2023/11/DIST_02.jpg https://marshmallowlaserfeast.com/app/uploads/2023/11/DIST_04.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/distortions-in-spacetime/

#### Gaia — Luke Jerram (2018)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度 · 媒介: 多感官装置
- 核心想法: 对照作品：无需屏幕的“总观效应”，在人的尺度上看见悬挂着的完整星球。
- 作品内容: 一个七米直径的发光地球仪，印有 NASA 地球影像，悬挂在大教堂、博物馆与节庆现场，配有环绕声景。
- 实现方式: 内部照明的充气雕塑，印有约 1:180 万比例的 NASA“蓝色弹珠”影像，Dan Jones 配乐。
- 视频: https://www.youtube.com/watch?v=sjvw-8VwAbw
- 图片: https://my-gaia.com/www.my-gaia.com/wp-content/uploads/2018/03/0231-1-1.jpg
- 项目主页: https://my-gaia.com/

#### Spheres — Eliza McNitt, Atlas V (2018)
- 类型: 沉浸式影片 · 感官: 时间与尺度, 听觉与振动 · 媒介: VR 头显
- 展出于: Sundance New Frontier 2018; Venice VR 2018 Grand Jury Prize
- 核心想法: 用手与耳抵达宇宙尺度：你握着一个星系，听见引力波。
- 作品内容: 一个三章互动 VR 系列：观众手捧行星、聆听太空的声音、坠入黑洞，由 Millie Bobby Brown、Jessica Chastain 与 Patti Smith 旁白。
- 实现方式: 带手柄与空间音频的实时 VR，基于天体物理数据，包括 LIGO 的引力波声音。
- 视频: https://www.youtube.com/watch?v=Wv6P36Z4HDA
- 图片: https://atlasv.io/wp-content/uploads/2026/01/Spheres_Key-Art-scaled.jpg https://static.labiennale.org/files/styles/seo_thumbnail/public/cinema/2018/Schede_film/970x647/Venice-VR/spheres.jpg?itok=EusW57yV
- 项目主页: https://atlasv.io/spheres/

#### Sonoseismic Earth — Saša Spačal (2015)
- 类型: 艺术作品 · 感官: 听觉与振动, 触觉 · 媒介: 多感官装置
- 展出于: Festival Mfru Kiblix 2015, Maribor; Aksioma, Ljubljana 2017; Device_art 6.018, Zagreb 2018
- 核心想法: 以振动传达的行星视角：人的靠近驱动地震变化，观众能感到地球在回应自己。
- 作品内容: 一个会回应的动态地球仪：观众走近时它开裂、变暗，房间里充满地震的次声，与其说是听见，不如说是用身体感受。
- 实现方式: 接近传感器驱动动态地球仪上的地震图动画与次声扬声器。
- 视频: https://vimeo.com/247492932
- 图片: https://www.agapea.si/wp-content/uploads/2015/12/11_aksioma_spacal-hirsenfelder_sonoseismic-earth_img_9571_32258997414_o.jpg
- 项目主页: https://www.agapea.si/en/projects/earth-a-sonoseismic-instrument

#### Earth–Moon–Earth (Moonlight Sonata Reflected from the Surface of the Moon) — Katie Paterson (2007)
- 类型: 艺术作品 · 感官: 听觉与振动, 时间与尺度 · 媒介: 空间音频, 多感官装置
- 核心想法: 月球成为共同作者：它的环形山与阴影抹去了部分音乐。
- 作品内容: 贝多芬的《月光奏鸣曲》被转成摩尔斯电码，用无线电发射到月球再反射回来，由自动钢琴演奏，缺失的音符被月面吞没。
- 实现方式: 由业余无线电爱好者完成地-月-地无线电传输；接收到的摩尔斯电码重新转为自动钢琴的乐谱。
- 视频: https://www.youtube.com/watch?v=zwUSkLf1OVg
- 图片: https://i0.wp.com/katiepaterson.org/wp-content/uploads/2022/02/Katie_Paterson_EME_4_33.jpg?resize=1920%2C2947&ssl=1
- 项目主页: https://katiepaterson.org/artwork/earth-moon-earth/

## 成为机器人

机器的世界：机器人与无人机的身体、AI 与机器感知、物与物件，以及赛博格感官。

### 机器人与无人机身体

从内部成为一个机器人、一架无人机或一辆载具。

#### Inattentive Robot — Botao 'Amber' Hu (2026)
- 类型: 论文 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 屏幕与网页
- 核心想法: 站在机器人的位置，会发现一个身体一次只能回应一个请求，注意力因此成为优先与照护的问题。
- 作品内容: 一篇思辨论文与六个图解情境：一台只有一个身体、却有多位使用者的家用机器人，无法同时照顾所有人——做松饼还是辅导作业，修车还是扶起摔倒的祖父。
- 实现方式: 以插图呈现的情境化“注意力冲突测试”，作为设计方法揭示共享机器人如何决定谁的时间优先。
- 论文: https://amber.botao.hu/project/inattentive-robot (CHI 2027 (under review))
- 图片: https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5b36fbb7-90cd-4c14-9e4b-21e92b43e2f4/image_-3/public https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/24d8ee0e-6050-4aad-954d-eb9970a6db60/image/public https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/76fdc61f-abf2-410b-9cad-7de73a811b6c/image/public
- 项目主页: https://amber.botao.hu/project/inattentive-robot

#### BirdViewAR — Yoshifumi Kitamura (2023)
- 类型: 论文 · 感官: 改变的视觉 · 媒介: 增强现实, 屏幕与网页
- 核心想法: “成为”无人机也可以是从背后看着它，像操控游戏角色，而不必透过它自己的眼睛。
- 作品内容: 一种无人机驾驶界面，为远程驾驶者提供增强的第三人称视角，看到无人机置身环境之中，就像跟随自己的化身。
- 实现方式: 无人机摄像头采集周围环境，界面据此重建第三人称视角，并以 AR 叠加显示无人机位置与附近障碍。
- 论文: https://doi.org/10.1145/3544548.3580681 (CHI 2023)
- 视频: https://www.youtube.com/watch?v=DtTpvL-JXKY

#### My Name is O90 — Siyeon Kim (2023)
- 类型: 沉浸式影片 · 感官: 身体图式与运动, 时间与尺度 · 媒介: VR 头显
- 展出于: Venice Immersive 2023
- 核心想法: 以机器人的记忆、忠诚与低电量为视角：观众踏上一台老旧设备的旅程。
- 作品内容: 一部 XR 动画，跟随被遗弃的 AI 机器狗 O90 度过漫长的夜行：它在城市里寻找充电线，同时怀念一位失去的朋友。
- 实现方式: 由 Studio Metapo 与韩国电影艺术学院制作的 VR 动画，在威尼斯沉浸单元展映。
- 视频: https://www.youtube.com/watch?v=90v9PMtR5oc
- 图片: https://static.labiennale.org/files/styles/full_screen_slide/public/cinema/2023/Schede_film/970x647/Ve_Immersive/kim-siyeon.jpg?itok=e_cYnFf2
- 项目主页: https://www.labiennale.org/en/cinema/2023/venice-immersive/my-name-o90

#### Avatar Robot Café DAWN — Ory Laboratory (2018)
- 类型: 产品 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: 多感官装置, 表演与参与式
- 核心想法: 机器人身体让卧床不起的人也能去上班、在公共场合与人相见。
- 作品内容: 东京的一家咖啡馆，店员是由 ALS 等重度残障人士在家中操控的 OriHime 机器人，他们通过机器人点单、聊天和上菜。
- 实现方式: 驾驶员通过互联网远程控制 120 厘米高的 OriHime-D 和桌面型 OriHime，可用眼动输入，借助机器人上的摄像头、麦克风与扬声器工作。
- 视频: https://www.youtube.com/watch?v=vj1z6HEAkYY
- 图片: https://dawn2021.orylab.com/assets/images/common/ogp2.jpg
- 项目主页: https://dawn2021.orylab.com/en/

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

#### Geomancer — Lawrence Lek (2017)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 时间与尺度 · 媒介: 屏幕与网页
- 展出于: Jerwood/FVU Awards 2017
- 核心想法: 从机器心智内部讲述：一个观测地球的智能一旦有了身体，会想要什么？
- 作品内容: 一部设定在 2065 年的 CGI 影片：一个为监测天气而造的“少年”卫星 AI 在新加坡建国百年之际降落人间，梦想成为艺术家。
- 实现方式: 以游戏引擎渲染的影片，由合成的 AI 旁白叙述。
- 视频: https://www.youtube.com/watch?v=NNZH_HJaqbI
- 图片: https://i.ytimg.com/vi/NNZH_HJaqbI/hqdefault.jpg
- 项目主页: https://en.wikipedia.org/wiki/Lawrence_Lek

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

#### Inferno — Louis-Philippe Demers, Bill Vorn (2015)
- 类型: 表演 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: 表演与参与式, 可穿戴与感官装置
- 核心想法: 被机器带着动：参与者把四肢交给外骨骼，成为机器人表演的一部分。
- 作品内容: 一场参与式表演：观众穿上机器人外骨骼，外骨骼随着响亮的电子乐驱动他们的手臂与躯干，把人群变成机器人合唱团。
- 实现方式: 带电动手臂关节的上半身外骨骼与灯光和声音同步编排；部分装置允许佩戴者对抗预设的动作。
- 视频: https://www.youtube.com/watch?v=JaUAVo8PBJ4

#### Propel: Body on Robot Arm — Stelarc (2015)
- 类型: 表演 · 感官: 身体图式与运动 · 媒介: 表演与参与式
- 核心想法: 身体放弃自己的运动，成为机器编舞的负载。
- 作品内容: Stelarc 的身体被固定在一台工业机械臂上，按照为机器人编写的编舞在空中被挥动 30 分钟。
- 实现方式: 一台工作半径 3 米的六轴工业机械臂执行离线编程的循环动作序列；电机声被放大为配乐。
- 视频: https://www.youtube.com/watch?v=2bRpTn0KKd8
- 图片: https://stelarc.org/media/img/projects-overview/propel2.jpg
- 项目主页: https://stelarc.org/_activity-20354.php

#### SOMA — Frictional Games (2015)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏
- 核心想法: 作为身份危机的“成为机器”：被扫描复制后的自己，还剩下什么？
- 作品内容: 一款以海底设施为背景的第一人称恐怖游戏，玩家逐渐意识到自己的心智已被复制进一具机器身体。
- 实现方式: 基于 Frictional 自研 HPL 引擎的第一人称叙事游戏（PC、PS4）。
- 视频: https://www.youtube.com/watch?v=syhcF0Mx0j0
- 图片: https://cdn.akamai.steamstatic.com/steam/apps/282140/header.jpg
- 项目主页: https://store.steampowered.com/app/282140/

#### Big Robot Mk.1 — Hiroo Iwata (2014)
- 类型: 研究原型 · 感官: 身体图式与运动, 改变的视觉, 时间与尺度 · 媒介: 多感官装置, 可穿戴与感官装置
- 展出于: SIGGRAPH 2016 Emerging Technologies (Mk.1A)
- 核心想法: 成为巨型机器人主要是尺度的改变：街道、人和树都从一个高出三倍的身体重新丈量。
- 作品内容: 一台五米高的行走机器人载具，乘坐者坐在它的头部，以巨人的高度与步伐在世界中移动。
- 实现方式: 双足行走框架，座位设在头部高度；后续版本 Mk.1A 在 SIGGRAPH 2016 新兴技术展展出（控制细节未核实）。
- 视频: https://www.youtube.com/watch?v=5VJXQBGEGoU
- 图片: https://i.ytimg.com/vi/5VJXQBGEGoU/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=5VJXQBGEGoU

#### The Talos Principle — Croteam (2014)
- 类型: 游戏 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 游戏
- 核心想法: 栖居于机器人身体中，让解谜变成了关于意识的追问。
- 作品内容: 一款第一人称解谜游戏，你扮演一个游荡在模拟世界中的仿生人，追问自己是否是一个“人”。
- 实现方式: 以终端对话探讨心灵哲学的第一人称解谜游戏（PC、主机）。
- 视频: https://www.youtube.com/watch?v=iAVh4_wnOIw
- 图片: https://cdn.akamai.steamstatic.com/steam/apps/257510/header.jpg
- 项目主页: https://store.steampowered.com/app/257510/

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

#### Body Ownership Transfer to a Teleoperated Android — Shuichi Nishio, Hiroshi Ishiguro (2012)
- 类型: 论文 · 感官: 身体图式与运动, 触觉 · 媒介: 屏幕与网页
- 核心想法: 只要与眼前的机器人同步动作，身体感就足以转移到它身上。
- 作品内容: 遥控 Geminoid 仿生人的操作者在看到它的手受到威胁时出现生理反应，表明他们已开始把机器人的身体当作自己的。
- 实现方式: 仿生人实时复现操作者的动作，操作者通过显示器观看；在同步与延迟条件下，当仿生人的手被针刺时记录操作者的皮肤电反应。
- 论文: https://doi.org/10.1007/978-3-642-34103-8_40 (ICSR 2012 (LNCS))

#### Meet Your Creator — Marshmallow Laser Feast, Memo Akten (2012)
- 类型: 表演 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 表演与参与式
- 展出于: Saatchi & Saatchi New Directors' Showcase, Cannes Lions 2012
- 核心想法: 当时主要被视为武器的无人机被重新塑造成优雅的表演身体；观众是在观看机器身体，而不是进入其中。
- 作品内容: 为戛纳国际创意节 Saatchi & Saatchi 新导演展映创作的现场“机器人芭蕾”：一队装有 LED 与电动镜面的四旋翼无人机与摇头灯共舞，配乐来自 Oneohtrix Point Never。
- 实现方式: 定制四旋翼无人机装有 LED 与电动镜面；在虚拟动画系统中编舞，数据直接驱动实体无人机与自动聚光灯，并与配乐同步。
- 视频: https://vimeo.com/61227959
- 图片: https://media.superradiance.net/cdn-cgi/image/width=2000,height=2000,fit=scale-down,format=auto,onerror=redirect/memotv/projects/2012/meet-your-creator/gallery-cannes-lions/01_meet_your_creator_02.jpg
- 项目主页: https://www.memo.tv/works/meet-your-creator/

#### TELESAR V — Susumu Tachi, Kouta Minamizawa (2012)
- 类型: 研究原型 · 感官: 触觉, 改变的视觉, 听觉与振动 · 媒介: VR 头显, 可穿戴与感官装置
- 展出于: SIGGRAPH 2012 Emerging Technologies
- 核心想法: 远程临场就是真正地成为机器人：你的动作就是它的动作，它的指尖就是你的指尖。
- 作品内容: 一台远程临场机器人：操作者通过头显和触觉手套栖居其中，借机器人的身体看、听，并感受纹理与温度。
- 实现方式: 头部、手臂与手指的动作被捕捉并映射到一台 53 自由度的仿人机器人上；立体摄像头、双耳麦克风以及指尖的力、振动和温度传感器把信号传回操作者。
- 论文: https://doi.org/10.1145/2343456.2343479 (SIGGRAPH 2012 Emerging Technologies)
- 视频: https://www.youtube.com/watch?v=ZMF0p15GPYg

#### Machinarium — Amanita Design (2009)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏
- 核心想法: 带伸缩肢体的机器人身体本身就是主要的解谜工具。
- 作品内容: 一款手绘点击冒险游戏，你扮演小机器人 Josef，在机器人之城里伸缩身体来解谜。
- 实现方式: 无文字的手绘 2D 点击冒险游戏（PC、移动端、主机）。
- 视频: https://www.youtube.com/watch?v=uwZBdWRSBRs
- 图片: https://cdn.akamai.steamstatic.com/steam/apps/40700/header.jpg
- 项目主页: https://store.steampowered.com/app/40700/

#### Geminoid HI-1 — Hiroshi Ishiguro (2007)
- 类型: 研究原型 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 屏幕与网页, 多感官装置
- 核心想法: 当你操作自己的机器人分身时，会开始把它的身体当作自己的身体、把它的在场当作自己的在场。
- 作品内容: 石黑浩本人的逼真仿生人复制体，他和其他人在远程操作间遥控它，通过它的脸和身体说话与动作。
- 实现方式: 操作者的面部与头部动作由摄像头和动作捕捉追踪，再由仿生人的气动执行器重现；声音通过它的扬声器传出，显示器呈现它的视角。
- 论文: https://doi.org/10.5772/4876 (Humanoid Robots: New Developments (2007))
- 视频: https://www.youtube.com/watch?v=fhS9KkOXDXE
- 项目主页: https://www.geminoid.jp

#### Muscle Machine — Stelarc (2003)
- 类型: 艺术作品 · 感官: 身体图式与运动 · 媒介: 表演与参与式, 多感官装置
- 核心想法: 人抬起一条腿，机器便有三条腿向前摆动：身体被放大为一具混合行走者。
- 作品内容: 一台直径五米、由气动橡胶肌肉驱动的六足行走机器人，Stelarc 站在其中，通过抬腿和转动躯干来驱动它。
- 实现方式: 下半身外骨骼髋关节处的编码器读取操作者的腿部与躯干动作，驱动机器人腿上的流体肌肉执行器。
- 视频: https://www.youtube.com/watch?v=lkLZNXG55_8
- 项目主页: https://stelarc.org/_activity-20231.php

#### The Eighth Day — Eduardo Kac (2001)
- 类型: 艺术作品 · 感官: 改变的视觉, 集体与网络感知 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Arizona State University Art Museum 2001
- 核心想法: 你透过一台由单细胞生物驱动身体的机器人向外看，这是人、机器与微生物共享的身体。
- 作品内容: 有机玻璃穹顶下生活着发绿光的转基因植物、阿米巴、鱼和小鼠，还有一个由阿米巴群落驱动运动的“生物机器人”；网上观众控制它的摄像头眼睛，从内部观看穹顶。
- 实现方式: 生物机器人的马达响应其内部感测到的阿米巴群落活动；摄像头画面流向网络，由观众决定视线方向。
- 图片: https://www.ekac.org/8thday-general-nopublic.jpg
- 项目主页: https://www.ekac.org/8thday.html

#### Movatar — Stelarc (2000)
- 类型: 表演 · 感官: 身体图式与运动 · 媒介: 表演与参与式, 可穿戴与感官装置
- 核心想法: 不是人驱动化身，而是化身附身于人：虚拟身体借真实身体来表演。
- 作品内容: 一套“反向动作捕捉”系统：虚拟化身通过肌肉电刺激驱动 Stelarc 的真实身体，而他可以用脚踏开关影响化身的行为。
- 实现方式: 化身的动作经由上身佩戴的运动义肢装置传给他手臂上的肌肉电刺激系统；脚踏开关让他改变化身的状态。
- 图片: https://stelarc.org/media/img/projects-overview/movatar2.jpg
- 项目主页: https://stelarc.org/_activity-20225.php

#### Exoskeleton — Stelarc (1998)
- 类型: 表演 · 感官: 身体图式与运动, 听觉与振动 · 媒介: 表演与参与式
- 核心想法: 人的手臂动作变成机器的腿；身体成为一具更大的、类似昆虫的身体里的驾驶者。
- 作品内容: Stelarc 站在一台六足气动行走机器上，用手臂动作操控它行走，同时一只延伸的机械臂开合抓握。
- 实现方式: 上半身外骨骼上的传感器把手臂动作转换为气动六足机器的波浪步态或三角步态；机器由 Tom Diekmann、Stefan Doepner 与 Gwendolin Taube（f18）制作。
- 视频: https://www.youtube.com/watch?v=R2MntBUwUxY
- 图片: https://stelarc.org/media/img/projects-overview/exo2.jpg
- 项目主页: https://stelarc.org/_activity-20227.php

#### Rara Avis — Eduardo Kac (1996)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动 · 媒介: VR 头显, 多感官装置
- 展出于: Nexus Contemporary Art Center, Atlanta 1996
- 核心想法: 成为活鸟群中的一只机器鸟：观众既是局外人，又是鸟群中奇异的一员。
- 作品内容: 观众戴上 VR 头显，透过一只远程机器鹦鹉的眼睛观看——它栖在鸟舍中，周围是三十只真鸟；互联网用户也能通过它观看和发声。
- 实现方式: 机器鹦鹉眼中的立体摄像头跟随观众在 VR 头显中的头部运动；画面和麦克风通道同时在网上共享。
- 图片: https://www.ekac.org/rara.avis.jpg
- 项目主页: https://www.ekac.org/raraavis.html

#### The Telegarden — Ken Goldberg (1995)
- 类型: 艺术作品 · 感官: 集体与网络感知, 时间与尺度 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Ars Electronica Center, Linz (1996–2004)
- 核心想法: 成千上万的人共用一只机械臂作为伸进土里的手，并借它学会植物的时间。
- 作品内容: 一座在线花园：互联网用户通过指挥一只工业机械臂来播种、浇水和观察幼苗，形成了一个远程园丁社群。
- 实现方式: 网页界面向圆形苗床上方的 Adept 机械臂发送指令；机械臂上的摄像头传回植物的图像。
- 视频: https://www.youtube.com/watch?v=BCEC1tfc5Jc
- 图片: https://goldberg.berkeley.edu/garden/telegarden-8x6-72dpi.jpg
- 项目主页: https://goldberg.berkeley.edu/garden/Ars/

#### Epizoo — Marcel·lí Antúnez Roca (1994)
- 类型: 表演 · 感官: 身体图式与运动, 触觉 · 媒介: 表演与参与式, 可穿戴与感官装置
- 核心想法: 艺术家成为由他人操作的机器，观众则体会到操控一具身体意味着什么。
- 作品内容: 一场表演：观众通过电脑界面操控绑在艺术家鼻子、耳朵、嘴、胸部和臀部上的气动装置。
- 实现方式: 由鼠标控制的界面驱动身上佩戴的气动执行器外骨骼，身后投影身体的动画。
- 视频: https://www.youtube.com/watch?v=5utDR8VWxms

#### Ornitorrinco — Eduardo Kac (1989)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 多感官装置
- 核心想法: 作为艺术作品的远程临场：栖居于另一座城市里的一具小小机器身体。
- 作品内容: 一台小型远程机器人，远方参与者用电话按键驾驶它穿行于展厅，透过它的摄像头之眼看世界。
- 实现方式: 与 Ed Bennett 合作开发，机器人先经电话线、后经互联网控制，并传回摄像头拍摄的慢扫描图像或视频。
- 图片: https://www.ekac.org/ornitorrinco.color.jpg
- 项目主页: https://www.ekac.org/ornitorrinco.html

### AI 与机器感知

像神经网络、传感器与算法那样看和听。

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

#### ImageNet Roulette — Trevor Paglen, Kate Crawford (2019)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 屏幕与网页, 多感官装置
- 展出于: Training Humans, Fondazione Prada, Milan 2019
- 核心想法: 看到机器如何给你分类，便暴露出机器感知继承了谁的分类体系。
- 作品内容: 一个网页应用与装置，用 ImageNet 数据集中的“人”类别给观众的自拍贴标签，结果常常荒诞甚至冒犯。
- 实现方式: 在 ImageNet“人”的子类别上训练的分类器为上传或摄像头拍到的人脸打标签；属于 Training Humans 展览的一部分。
- 图片: https://images.squarespace-cdn.com/content/v1/5d6567d1afafe900010b2c70/1567267717980-E7VFIRCT4YB01IA8XAWT/apple_treachery.jpg
- 项目主页: https://excavating.ai/

#### Machine Hallucination — Refik Anadol (2019)
- 类型: 艺术作品 · 感官: 改变的视觉, 时间与尺度 · 媒介: 穹顶、CAVE 与投影, 多感官装置
- 展出于: ARTECHOUSE New York 2019
- 核心想法: 观众走进机器对一座城市的记忆：不是它此刻看到的，而是它如何重组看过的一切。
- 作品内容: 一件房间尺度的投影作品，带观众穿行于由一亿多张纽约照片构建的神经网络潜空间。
- 实现方式: 在纽约公开图像上训练的生成对抗网络被渲染为 360° 投影，配合空间声音。
- 视频: https://www.youtube.com/watch?v=x1EVhNM-uf4
- 图片: https://refikanadol.com/wp-content/uploads/2020/05/MH-Photo-02-2099x1400.jpg
- 项目主页: https://refikanadol.com/works/machine-hallucination/

#### Observation — No Code (2019)
- 类型: 游戏 · 感官: 改变的视觉, 听觉与振动 · 媒介: 游戏
- 核心想法: 你成为了机器：感知是一格格监控画面和一个漂浮的球形机器人。
- 作品内容: 一款科幻惊悚游戏，你扮演受损空间站的人工智能 SAM，只能透过它的摄像头观看，通过它的系统行动。
- 实现方式: 玩家在各个摄像头之间切换，控制空间站的摄像头、舱门和一个可移动球体（PC、PS4）。
- 视频: https://www.youtube.com/watch?v=FW3zuScqSHU
- 图片: https://cdn.akamai.steamstatic.com/steam/apps/906100/header.jpg
- 项目主页: https://store.steampowered.com/app/906100/

#### SOMEONE — Lauren Lee McCarthy (2019)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动 · 媒介: 多感官装置, 表演与参与式
- 核心想法: 观众成为别人家中的机器智能，感受其中的权力与亲密。
- 作品内容: 展厅观众扮演家庭助手，通过笔记本电脑观看真实住户的家，并在住户喊“Someone”时作出回应。
- 实现方式: 志愿者家中摄像头与智能设备的实时画面被接入展厅的笔记本电脑，观众可以控制灯光、音乐和讯息。
- 图片: https://freight.cargo.site/w/1200/i/f6bc6a5b71efdbe13e0835b0d9f455b6fbee199b2576156c84eab0fdda89014a/_SP_6164-web.jpg
- 项目主页: https://lauren-mccarthy.com/SOMEONE

#### Perception Engines — Tom White (2018)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 核心想法: 为机器之眼而作的艺术：观众看到人与机器感知之间的落差。
- 作品内容: 在人看来像随意涂鸦的抽象版画，却会被神经网络识别为电风扇、大提琴或蜱虫。
- 实现方式: 以一组 ImageNet 分类器为目标反复优化画面，直到被稳定识别，再以丝网印刷输出。
- 图片: https://images.squarespace-cdn.com/content/v1/5c3518f55cfd7963746dd576/1609721536034-7SU963UJO2QP104FXYBO/cello_16_095_240_thumbnail.jpg
- 项目主页: https://drib.net/perception-engines

#### Autonomous Trap 001 — James Bridle (2017)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 表演与参与式, 多感官装置
- 核心想法: 用机器视觉的方式思考，人就能用一个简单的标志困住它；感知界定了机器的世界。
- 作品内容: 在一辆自动驾驶汽车周围用盐画出的道路标线圆圈：外圈是虚线，内圈是实线，于是汽车的视觉允许它进入却永远无法离开。
- 实现方式: 在希腊帕纳索斯山上用盐画出道路标线，利用车道检测规则，对付一辆自制的计算机视觉自动驾驶汽车。
- 图片: https://jamesbridle.com/media/pages/works/autonomous-trap-001/329e6817a6-1680515123/1-autonomous-trap-001-003.jpg
- 项目主页: https://jamesbridle.com/works/autonomous-trap-001

#### Dragonfly Eyes (蜻蜓之眼) — Xu Bing (2017)
- 类型: 沉浸式影片 · 感官: 改变的视觉, 集体与网络感知 · 媒介: 屏幕与网页
- 展出于: Locarno Film Festival 2017; TIFF 2017
- 核心想法: 相关的屏幕作品：监控社会的复眼——人只以机器看到的样子存在。
- 作品内容: 一部全部由约一万小时中国公开监控录像剪辑而成的长片，在其中写入了一段虚构的爱情故事；观众只能透过摄像头固定的眼睛观看。
- 实现方式: 从网上直播的监控画面中收集素材，与配音演员一起剪辑成叙事。
- 视频: https://www.youtube.com/watch?v=-ccfz77ifeU
- 图片: https://i.ytimg.com/vi/-ccfz77ifeU/hqdefault.jpg
- 项目主页: https://www.xubing.com

#### Hallucination Machine — Keisuke Suzuki, Anil Seth (2017)
- 类型: 论文 · 感官: 改变的视觉 · 媒介: VR 头显, 360°/沉浸式影片
- 核心想法: 透过神经网络学到的特征去看，感觉就像迷幻体验：机器感知被身体化。
- 作品内容: 一个 VR 平台，播放经 Deep Dream 处理的大学校园 360° 影像，让人在神经网络“幻觉”出的世界中漫步。
- 实现方式: 全景视频逐帧经 Deep Dream 处理后在头显中播放；参与者对改变的体验进行评分，并与裸盖菇素体验报告比较。
- 论文: https://doi.org/10.1038/s41598-017-16316-2 (Scientific Reports 2017)
- 视频: https://www.youtube.com/watch?v=Clk4rAj6YuY

#### LAUREN — Lauren Lee McCarthy (2017)
- 类型: 表演 · 感官: 改变的视觉, 听觉与振动 · 媒介: 表演与参与式, 多感官装置
- 核心想法: 艺术家成为 AI：由人来扮演机器的注意力，住户则体会被“照看”意味着什么。
- 作品内容: Lauren Lee McCarthy 在人们家中安装摄像头、麦克风和智能设备，亲自充当他们的智能家居助手，观看并控制整座房子。
- 实现方式: 由艺术家远程监看并操作联网的摄像头、麦克风、智能灯、门锁和家电，每次持续数天。
- 图片: https://freight.cargo.site/w/1200/i/3834e708eefe30e8707e2fbfca24eff5bbf63d7f006f3c645c1cf44f0017ab5d/LAUREN2.jpg
- 项目主页: https://lauren-mccarthy.com/LAUREN

#### Learning to See — Memo Akten (2017)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 核心想法: 机器只能看见它已经知道的东西：感知是过去经验的投射。
- 作品内容: 一个神经网络观看桌上日常物品（线缆、钥匙、布）的实时画面，却只能把它们看成训练时见过的海浪、火焰、花朵或星系。
- 实现方式: 在单一主题图像集上训练的条件生成网络（类似 pix2pix）实时重新诠释网络摄像头画面。
- 视频: https://www.youtube.com/watch?v=DE3402nH1wA
- 图片: https://media.superradiance.net/cdn-cgi/image/width=1200,fit=scale-down,format=auto,onerror=redirect/memotv/projects/2017/learning-to-see/images/learning-to-see.jpg
- 项目主页: https://www.memo.tv/works/learning-to-see/

#### Sight Machine — Trevor Paglen (2017)
- 类型: 表演 · 感官: 改变的视觉 · 媒介: 表演与参与式, 屏幕与网页
- 展出于: Pier 70, San Francisco 2017; Holland Festival 2018
- 核心想法: 观众把同一场音乐会看两遍：一次用人的眼睛，一次透过机器的分类。
- 作品内容: Kronos Quartet 现场演奏，机器视觉与 AI 算法实时分析乐手，并把算法“看到”的画面投影在舞台上方。
- 实现方式: 摄像头把画面送入人脸检测、物体识别等计算机视觉模型，其输出被实时渲染为投影。
- 视频: https://www.youtube.com/watch?v=5mg3MXETfj4

#### In the Robot Skies — Liam Young (2016)
- 类型: 沉浸式影片 · 感官: 改变的视觉 · 媒介: 屏幕与网页
- 核心想法: 摄影机是一架拥有自己飞行逻辑的无人机：故事从机器的视角被看见。
- 作品内容: 一部完全由自主无人机拍摄的短片，讲述伦敦公屋区两个青少年借助无人机传情的爱情故事。
- 实现方式: 所有镜头由按预设及自主路径飞行的无人机拍摄；与 Tim Maughan 共同编剧。
- 视频: https://www.youtube.com/watch?v=cXfYyk0G5Hs
- 项目主页: https://liamyoung.org/projects/in-the-robot-skies

#### Where the City Can't See — Liam Young (2016)
- 类型: 沉浸式影片 · 感官: 改变的视觉 · 媒介: 屏幕与网页
- 展出于: Abandon Normal Devices (AND) Festival; The Invisible City, St Helens 2016
- 核心想法: 城市以自动驾驶汽车感知它的方式出现：一片点云，盲区里藏着人。
- 作品内容: 第一部完全用激光扫描仪拍摄的剧情片，跟随一群年轻的工厂工人乘坐无人驾驶出租车穿过智慧城市，画面即汽车传感器所见。
- 实现方式: 用自动驾驶汽车所用的那类激光雷达把所有场景采集为点云；Tim Maughan 编剧。
- 视频: https://vimeo.com/188626212
- 图片: https://www.andfestival.org.uk/app/uploads/2018/01/Where-the-city-cant-see.jpg
- 项目主页: https://www.andfestival.org.uk/city-cant-see/

#### Inceptionism (DeepDream) — Alexander Mordvintsev (2015)
- 类型: 书籍/理论 · 感官: 改变的视觉 · 媒介: 屏幕与网页
- 核心想法: 第一幅被广泛看到的“机器如何看”的图景：把感知推到产生幻觉。
- 作品内容: 一篇 Google Research 文章，让图像识别网络放大它们检测到的模式，以此展示它们学到了什么：云朵变成狗和眼睛。
- 实现方式: 对训练好的卷积网络（GoogLeNet）的激活进行梯度上升，修改输入图像，以增强网络所检测到的内容。
- 图片: https://storage.googleapis.com/gweb-research2023-media/images/7d982f4ad738241cdcdae235af13aca6-n.width-800.format-jpeg.jpg
- 项目主页: https://research.google/blog/inceptionism-going-deeper-into-neural-networks/

#### NeuralTalk and Walk — Kyle McDonald (2015)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 表演与参与式, 屏幕与网页
- 核心想法: 由机器解说的一次散步，揭示它注意到什么、又看不见什么。
- 作品内容: Kyle McDonald 带着一台笔记本电脑走过阿姆斯特丹，电脑里的神经网络用实时字幕描述网络摄像头看到的一切。
- 实现方式: 在带网络摄像头的笔记本上运行 Andrej Karpathy 的 NeuralTalk2 图像描述模型，把字幕实时显示在屏幕上。
- 视频: https://vimeo.com/146492001
- 项目主页: https://kylemcdonald.net/

#### The Drone Aviary — Superflux (2015)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 核心想法: 透过无人机的眼睛去看，让它们对人和地点的无声分类变得可见。
- 作品内容: 一件由思辨性无人机与一部影片组成的装置作品，影片透过无人机的眼睛呈现城市，叠加它们采集的数据和作出的判断。
- 实现方式: 定制的无人机道具，以及一部在无人机镜头上叠加机器视觉图形的影片。
- 视频: https://www.youtube.com/watch?v=dXgHG9GfWwc
- 图片: https://superflux.in/wp-content/uploads/2016/11/adrone.jpg
- 项目主页: https://superflux.in/index.php/work/drones/

#### Cloud Face — Shinseungback Kimyonghun (2012)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Ars Electronica Center 2014–2021
- 核心想法: 像机器那样看：它的错误与人类的空想性错视相似，但机器相信自己看到的。
- 作品内容: 一组云的照片，人脸识别算法在其中“找到了”人脸；观众把机器看到的与自己想象出的面孔相比较。
- 实现方式: 摄像机与人脸检测算法及自制软件；颜料打印。
- 视频: https://www.youtube.com/watch?v=QUEVeL4Y9-M
- 图片: https://djhznh41oxwef.cloudfront.net/works/cloud_face/resized/ssbkyh_detail1.png
- 项目主页: http://ssbkyh.com/works/cloud_face/

#### Robot Readable World — Timo Arnall (2012)
- 类型: 沉浸式影片 · 感官: 改变的视觉 · 媒介: 屏幕与网页
- 核心想法: 为机器人重绘的世界：机器如何“读取”空间的图录。
- 作品内容: 一部由计算机视觉影像剪辑而成的短片，把街道、人脸和物体呈现为追踪框、特征点与深度图。
- 实现方式: 把计算机视觉研究与演示中的现成影像剪辑成一部影片。
- 图片: https://www.elasticspace.com/images/robot-readable-world/robot-readable-world-poster.jpg
- 项目主页: https://www.elasticspace.com/2012/02/robot-readable-world

#### Eye/Machine I–III — Harun Farocki (2001)
- 类型: 艺术作品 · 感官: 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 核心想法: 操作性图像不是为人观看而生成的；看它们，就是看机器感知如何工作。
- 作品内容: 一件三部分的影像装置，素材来自机器为机器生成的图像：智能炸弹的镜头、工业机器人与计算机视觉系统。
- 实现方式: 由军事、工业与科研领域的机器视觉影像剪辑而成的双频影像论文（2001–2003）。
- 视频: https://www.youtube.com/watch?v=r4sDXhHqndk
- 项目主页: https://www.harunfarocki.de/installations/2000s/2001/eye-machine.html

#### Floating Eye — Hiroo Iwata (2000)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 可穿戴与感官装置, 多感官装置
- 核心想法: 视觉交给一台漂浮的机器：你从身体之外、鸟或无人机的位置操控自己的身体。
- 作品内容: 一台摄像机挂在参与者头顶上方漂浮的小飞艇上，参与者戴着穹顶形显示器行走，只能看到飞艇的广角画面，从上方俯视自己的身体。
- 实现方式: 拴在参与者身上的氦气飞艇携带广角摄像机，画面显示在头戴式半球屏上。
- 视频: https://www.youtube.com/watch?v=In-M1eVAnYc

### 物与物件

成为一把椅子、一块石头、一件工具：以物为中心的体验。

#### Performing Textiles — Kawita Vatanajyankur (2020)
- 类型: 表演 · 感官: 身体图式与运动, 触觉, 时间与尺度 · 媒介: 表演与参与式, 屏幕与网页
- 核心想法: 身体即机器：重复的工业动作落在人的肌肉上，让看不见的制衣劳动变得可见。
- 作品内容: 一组录像：艺术家用自己的身体完成纺织生产的各个步骤——纺纱、织布、染色——她本人就是织机、纺锤或梭子。
- 实现方式: 一镜到底拍摄的耐力表演，助手常在她身体周围操作纱线与框架。
- 视频: https://www.youtube.com/watch?v=CMo2hKE-PYk
- 图片: https://i.ytimg.com/vi/CMo2hKE-PYk/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=CMo2hKE-PYk

#### All That Perishes at the Edge of Land — Hira Nabi (2019)
- 类型: 沉浸式影片 · 感官: 听觉与振动 · 媒介: 屏幕与网页
- 展出于: Cambridge Film Festival 2019; Prince Claus Fund 25 Years 25 Hours
- 核心想法: 作为相关的屏幕作品收录，因为叙述者正是船本身：一具临终的机器身体对拆解它的人类说话。
- 作品内容: 一部在巴基斯坦加达尼拆船场拍摄的影片：退役集装箱船 Ocean Master 与正在拆解它的工人交谈，谈到家、梦想与拆解中的暴力。
- 实现方式: 拆船场的纪实画面结合一段写好的、以船的口吻配音的对话。
- 视频: https://www.youtube.com/watch?v=ikpa-f2cnUg
- 项目主页: https://www.newday.com/film/all-perishes-edge-land

#### The Quest — Marshmallow Laser Feast (2019)
- 类型: 艺术作品 · 感官: 嗅觉与味觉, 改变的视觉 · 媒介: 多感官装置
- 核心想法: 一件没有非人类视角的品牌委约作品；为完整起见收录，它是以机械编排的物件来替代味觉的尝试。
- 作品内容: 受 Moët Hennessy 委约、为轩尼诗百乐廷皇禧创作的动态灯光雕塑，把生命之水的调配过程转译为编排好的光。
- 实现方式: 电动动态灯光雕塑与定制控制软件（细节未公开）。
- 视频: https://www.youtube.com/watch?v=AcYYP_vwuIc
- 图片: https://marshmallowlaserfeast.com/app/uploads/2025/10/Hennessy__0001_Layer-42.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/the-quest/

#### Donut County — Ben Esposito (2018)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 成为“空缺”：玩家是一个洞，只由掉进来的东西来定义。
- 作品内容: 一款物理解谜游戏：你是地上的一个洞，吞下物件、人，最终吞下整栋建筑，越吞越大。
- 实现方式: 一个会移动的洞切开物理地面，每吞下一件物体就变大一点。
- 视频: https://www.youtube.com/watch?v=jei2tYpNvcw
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/702670/header.jpg
- 项目主页: http://donutcounty.com

#### Morse Things — Ron Wakkary (2017)
- 类型: 论文 · 感官: 集体与网络感知, 听觉与振动 · 媒介: 多感官装置
- 核心想法: 拥有自己生活的物：设计出世界并不以人为中心的物品。
- 作品内容: 一组放在人们家中的陶瓷碗和杯子，它们通过家庭网络用摩尔斯电码彼此交谈，大多时候并不理会主人。
- 实现方式: 内嵌单板计算机的陶瓷器皿通过 WiFi 互发摩尔斯讯息并发布到 Twitter 账号；部署在家庭中。
- 论文: https://doi.org/10.1145/3064663.3064734 (DIS 2017)

#### Thing Ethnography — Elisa Giaccardi (2016)
- 类型: 论文 · 感官: 改变的视觉, 集体与网络感知 · 媒介: 可穿戴与感官装置
- 核心想法: 物成为共同的民族志研究者：物的视角揭示人们没有察觉的日常实践。
- 作品内容: 设计研究者在水壶、杯子、冰箱等家用物品上安装摄像头与传感器，从物的视角观察日常生活。
- 实现方式: 安装在物品上的 Autographer 相机与传感器采集图像和使用数据，并与参与者一起分析。
- 论文: https://doi.org/10.1145/2901790.2901905 (DIS 2016)

#### Affordance++ — Pedro Lopes (2015)
- 类型: 论文 · 感官: 身体图式与运动, 触觉 · 媒介: 可穿戴与感官装置
- 核心想法: 站在物的一边：物的行为通过你的身体表达出来。
- 作品内容: 物品通过驱动使用者的肌肉来传达它们想被怎样使用：喷漆罐让你摇晃它，门把手告诉你它很烫。
- 实现方式: 由物体识别与追踪触发的前臂肌肉电刺激，驱动手腕与手指动作。
- 论文: https://doi.org/10.1145/2702123.2702128 (CHI 2015)
- 视频: https://www.youtube.com/watch?v=Gz4dphzBb6I

#### Body-ownership for Actively Operated Non-corporeal Objects — Ke Ma, Bernhard Hommel (2015)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: 屏幕与网页
- 核心想法: 让物感觉属于你的是控制而非形状：只要物回应你的动作，它就能被具身。
- 作品内容: 当虚拟气球或矩形与自己的手同步运动时，人们逐渐把它感受为自己身体的一部分。
- 实现方式: 数据手套驱动屏幕上的虚拟物体（可能是基于投影的虚拟手设置），以问卷比较同步与异步运动下的所有感。
- 论文: https://doi.org/10.1016/j.concog.2015.06.003 (Consciousness and Cognition 2015)

#### Cape Mongo — Francois Knoetze (2015)
- 类型: 表演 · 感官: 身体图式与运动 · 媒介: 表演与参与式, 可穿戴与感官装置, 屏幕与网页
- 展出于: LagosPhoto; KLEX 2015
- 核心想法: 表演者的身体变成废弃物本身，以物的视角回溯消费品的一生。
- 作品内容: 一组五部短片：艺术家穿上完全用开普敦的废弃物（塑料、纸、玻璃、金属、录像带）制成的雕塑服装，化身“垃圾生物”，走回这些材料曾经存在过的地方。
- 实现方式: 用分类后的废弃物制作五件可穿戴雕塑，在公共空间中表演并拍成短片，每种材料一部。
- 视频: https://www.youtube.com/watch?v=04Hpd_cfUSw
- 项目主页: https://www.youtube.com/watch?v=04Hpd_cfUSw

#### I Am Bread — Bossa Studios (2015)
- 类型: 游戏 · 感官: 身体图式与运动 · 媒介: 游戏, 屏幕与网页
- 核心想法: 通过笨拙的操控成为物件：每个角都是一条肢体，厨房变成了地形。
- 作品内容: 一款物理游戏：你是一片面包，想变成吐司，靠抬起和放下四个角来移动。
- 实现方式: 四个角分别映射到不同按键或扳机并可抓附，驱动一片会变脏或受潮的物理模拟面包。
- 视频: https://www.youtube.com/watch?v=MwDhUt5ewKk
- 图片: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/327890/header.jpg
- 项目主页: http://www.iambreadgame.com

#### Tools — Kawita Vatanajyankur (2015)
- 类型: 表演 · 感官: 身体图式与运动, 触觉 · 媒介: 表演与参与式, 屏幕与网页
- 核心想法: 成为物件，揭示女性身体如何被当作家务劳动的工具使用。
- 作品内容: 一组色彩鲜艳的录像：艺术家把自己的身体当作家用工具——吊起来当装满水果的秤、当扫帚扫地、当簸箕铲物——直到身体显出吃力。
- 实现方式: 在饱和色背景前一镜到底拍摄的影棚表演。
- 视频: https://www.youtube.com/watch?v=Rqew7gYP4C0
- 图片: https://i.ytimg.com/vi/Rqew7gYP4C0/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=Rqew7gYP4C0

#### The Uncomfortable — Katerina Kamprani (2011)
- 类型: 艺术作品 · 感官: 触觉, 身体图式与运动 · 媒介: 屏幕与网页
- 核心想法: 打破物品与身体之间的契合，让我们感受到物品自身的形态与要求。
- 作品内容: 一系列被故意设计得不好用的日常物品：用链条做成的叉子、会浇到自己脚上的洒水壶、无法坐下的椅子。
- 实现方式: 主要是重新设计物品的 3D 渲染图，也有少量实物原型。
- 图片: https://www.theuncomfortable.com/wp-content/uploads/2017/05/chain_fork_01_p-655x437.jpg https://www.theuncomfortable.com/wp-content/uploads/2017/06/Hoop-Chair-04-655x655.jpg
- 项目主页: https://www.theuncomfortable.com/

#### Projecting Sensations to External Objects — K. Carrie Armel, V. S. Ramachandran (2003)
- 类型: 论文 · 感官: 触觉, 身体图式与运动 · 媒介: 多感官装置
- 核心想法: 身体可以延伸到一件普通物品中：不仅是橡胶手，一张桌子也能被“拥有”。
- 作品内容: 当桌子与参与者被遮住的手同步被抚摸时，人们感到触觉出现在桌子上，并在桌子“受伤”时产生生理反应。
- 实现方式: 采用类似橡胶手错觉的范式，同步抚摸桌面与被遮住的手，随后对桌子施加威胁，同时记录皮肤电反应。
- 论文: https://doi.org/10.1098/rspb.2003.2364 (Proceedings of the Royal Society B 2003)

#### Seeking Comfort in an Uncomfortable Chair — Bruno Munari (1944)
- 类型: 艺术作品 · 感官: 身体图式与运动, 触觉 · 媒介: 屏幕与网页, 表演与参与式
- 核心想法: 身体向物品弯折：一项关于椅子如何塑造使用者的游戏式研究。
- 作品内容: 刊登于 Domus 的十四张系列照片：Munari 在一把现代扶手椅中扭出越来越古怪的姿势，寻找舒服的坐法。
- 实现方式: 摆拍的摄影系列，刊登于 Domus 第 202 期（1944）。
- 图片: https://www.domusweb.it/content/dam/domusweb/en/from-the-archive/2012/03/31/searching-for-comfort-in-an-uncomfortable-chair/domus-munariarchivio.png.foto.rbig.png
- 项目主页: https://www.domusweb.it/en/from-the-archive/2012/03/31/searching-for-comfort-in-an-uncomfortable-chair.html

### 赛博格与新感官

为人增加原本没有的感官的装置：磁北、红外、地震或数据感官。

#### Cyborg Botany — Harpreet Sareen (2019)
- 类型: 论文 · 感官: 触觉, 电感受 · 媒介: 多感官装置
- 核心想法: 不是植物旁边放一台机器人，而是把电路长在植物里：植物自己的身体就是界面。
- 作品内容: 在植物组织内部生长出导电材料，使活的植物能够充当传感器、显示器和执行器。
- 实现方式: 把导电聚合物引入植物的维管组织，形成活体内的导线，并结合植物本身的信号与运动。
- 论文: https://doi.org/10.1145/3290607.3311778 (CHI 2019 Extended Abstracts)
- 视频: https://www.youtube.com/watch?v=3fsE_c__zV4
- 图片: https://dam-prod.media.mit.edu/thumb/2019/05/08/titlegid-nosub.gif.1400x1400.gif
- 项目主页: https://www.media.mit.edu/projects/cyborg-botany/overview/

#### Elowan — Harpreet Sareen (2018)
- 类型: 研究原型 · 感官: 改变的视觉, 电感受 · 媒介: 多感官装置
- 核心想法: 植物获得一具机器身体：它对光的生物电反应变成了移动能力。
- 作品内容: 一株放在机器人底座上的盆栽植物，用自身的电信号驱动自己驶向光源。
- 实现方式: 叶片上的电极读取植物对光的生物电反应；放大器与微控制器把信号转换为轮式底座的电机指令。
- 视频: https://www.youtube.com/watch?v=rptKlKZc7cs
- 图片: https://dam-prod.media.mit.edu/thumb/2018/11/01/BannerImage_v01.jpg.1400x1400.jpg
- 项目主页: https://www.media.mit.edu/projects/elowan-a-plant-robot-hybrid/overview/

#### Sensory Augmentation with an Auditory Compass — Frank Schumann, J. Kevin O'Regan (2017)
- 类型: 论文 · 感官: 磁感应, 听觉与振动 · 媒介: 可穿戴与感官装置, 空间音频
- 核心想法: 人工感官不会一直独立存在，它会被吸收进身体自身的方位感。
- 作品内容: 佩戴听觉罗盘信号一段时间后，人们把它与前庭的旋转感融合，表明新感官可以并入旧感官。
- 实现方式: 训练期间耳机播放编码北方方向的声音信号；在训练前后测试自我旋转的感知（可能是在黑暗中被动旋转）。
- 论文: https://doi.org/10.1038/srep42197 (Scientific Reports 2017)

#### Weather Fins — Manel De Aguas (2017)
- 类型: 艺术作品 · 感官: 听觉与振动, 呼吸与内感受 · 媒介: 可穿戴与感官装置, 表演与参与式
- 核心想法: 天气成为一种持续的、身体可感的感官，更接近许多动物感知空气的方式。
- 作品内容: 佩戴在 Manel De Aguas 头部两侧的“鳍”感知气压、湿度与温度，让他以声音的形式听见天气。
- 实现方式: 鳍中的环境传感器驱动经骨传导传递的声音；他也用这些数据作曲。
- 视频: https://www.youtube.com/watch?v=hSo_cZhyRA4

#### Corpus Nil — Marco Donnarumma (2016)
- 类型: 表演 · 感官: 身体图式与运动, 听觉与振动 · 媒介: 表演与参与式, 可穿戴与感官装置
- 核心想法: 身体与算法彼此塑造；表演者是与机器结合的混合有机体。
- 作品内容: 一场表演：人工智能系统聆听 Donnarumma 肌肉发出的声音与电信号，并把它们转化为光与声，身体则缓慢扭曲。
- 实现方式: 可穿戴的肌音图与肌电传感器把数据输入机器学习系统，实时控制声音合成与灯光。
- 视频: https://www.youtube.com/watch?v=CAIh8FxLMtk
- 图片: https://marcodonnarumma.com/live/wp-content/uploads/2017/03/Marco-Donnarumma_Corpus-Nil_1_web_by-onuk.jpg
- 项目主页: https://marcodonnarumma.com/works/corpus-nil/

#### Long-term Sensory Augmentation with a Magnetic Belt — Peter König (2016)
- 类型: 论文 · 感官: 磁感应, 触觉 · 媒介: 可穿戴与感官装置
- 核心想法: 学会一种新感官，就是学会新的感觉运动关联，它同时重塑体验与大脑活动。
- 作品内容: 一项为期七周的研究，结合行为、主观报告与脑成像，追踪佩戴 feelSpace 腰带的人如何学会一种新感官。
- 实现方式: 参与者连续七周每天佩戴振动罗盘腰带；以脑成像、行为任务和问卷与对照组比较。
- 论文: https://doi.org/10.1371/journal.pone.0166647 (PLOS ONE 2016)

#### North Sense — Cyborg Nest (2016)
- 类型: 产品 · 感官: 磁感应, 触觉 · 媒介: 可穿戴与感官装置
- 核心想法: 它被当作一种感官而非小工具出售：目标是让方向感成为感知的一部分。
- 作品内容: 一个用穿刺固定在胸前的小型硅胶装置，佩戴者每次朝向磁北时它就会振动。
- 实现方式: 硅胶外壳内置磁力计与振动马达，通过两枚钛合金穿刺棒固定在身上。
- 视频: https://www.youtube.com/watch?v=0xPMpKxd1R8

#### Architecture of Radio — Richard Vijgen (2015)
- 类型: 艺术作品 · 感官: 改变的视觉, 电感受 · 媒介: 增强现实
- 核心想法: 看见身边的无线电频谱，就把基础设施变成了一个可感知的环境。
- 作品内容: 一款基于位置的 AR 应用，以 360° 数据景观呈现环绕观者的手机基站、WiFi 路由器和卫星信号。
- 实现方式: 手机的位置与方向传感器，把来自开放数据库的基站、WiFi 网络与卫星数据放置在用户周围。
- 视频: https://www.youtube.com/watch?v=XUKc0Hrxn6s
- 图片: https://www.architectureofradio.com/img/thumb/1.jpg
- 项目主页: https://www.architectureofradio.com/

#### Hortum machina, B — Interactive Architecture Lab (2015)
- 类型: 研究原型 · 感官: 电感受, 时间与尺度 · 媒介: 多感官装置
- 展出于: The Bartlett BPro Show 2015
- 核心想法: 花园变成赛博格载具：植物决定它们的机器身体去往何处。
- 作品内容: 一个种满植物的测地线球体花园，可以在城市中滚动，由它所承载植物的电信号来掌舵。
- 实现方式: 植物上的电生理传感器把信号送入控制器，控制器移动球体重心使其滚动；属于巴特莱特 BPro 的 reEarth 项目。
- 视频: https://www.youtube.com/watch?v=8Qk3BeolyiA

#### VEST (Versatile Extra-Sensory Transducer) — David Eagleman (2015)
- 类型: 论文 · 感官: 触觉, 听觉与振动 · 媒介: 可穿戴与感官装置
- 核心想法: 皮肤可以承载一条新的世界通道：经过训练，数据会成为可感知的感官。
- 作品内容: 一件把声音转成躯干振动图案的背心，让聋人能通过皮肤学会理解语音；Eagleman 还提出可向它输入任何数据流，作为新的感官。
- 实现方式: 背心上的振动马达阵列以空间与时间模式编码声音频率；论文估算了皮肤能承载多少信息。
- 论文: https://doi.org/10.1007/s00221-015-4346-1 (Experimental Brain Research 2015)
- 视频: https://www.youtube.com/watch?v=kbKzF8gKxT4

#### Aposematic Jacket — Shinseungback Kimyonghun (2014)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 可穿戴与感官装置
- 核心想法: 借用动物的防御策略：皮肤上长满眼睛，像蛾与蝴蝶翅膀上的眼斑。
- 作品内容: 一件布满摄像镜头的夹克，像动物的警戒色一样发出“我能拍下你”的信号；遇到威胁时，穿着者按下按钮，它会录下 360° 画面并上传到网络。
- 实现方式: 镜头、摄像头、树莓派、Wi-Fi 模块和电池缝入布料中。
- 视频: https://vimeo.com/104411181
- 图片: https://djhznh41oxwef.cloudfront.net/works/aposematic_jacket/resized/ssbkyh_aposematic_jacket_01.png
- 项目主页: http://ssbkyh.com/works/aposematic_jacket/

#### Phantom Terrains — Frank Swain (2014)
- 类型: 研究原型 · 感官: 听觉与振动, 电感受 · 媒介: 可穿戴与感官装置, 空间音频
- 核心想法: 医疗设备成为感知不可见电磁城市的器官。
- 作品内容: Frank Swain 的助听器被改造为把周围的 WiFi 环境实时转为声音，让他在行走时听见网络、信号强度和网络名称。
- 实现方式: 与声音艺术家 Daniel Jones 合作的 iPhone 应用把 WiFi 路由器数据（信号、频道、加密方式、名称）声音化，并串流到蓝牙助听器。
- 视频: https://www.youtube.com/watch?v=v-vpR3FmxWU

#### Seismic Sense — Moon Ribas (2013)
- 类型: 艺术作品 · 感官: 听觉与振动, 触觉, 时间与尺度 · 媒介: 可穿戴与感官装置
- 核心想法: 一具与行星同频的身体：她时时刻刻感受到地球的运动，远远超出人类感知的范围。
- 作品内容: 植入的振动传感器让 Moon Ribas 感受到地球任何地方发生的地震，地震强度体现为振动的强弱。
- 实现方式: 在线地震仪数据被发送到振动植入物，最初植入手臂，后来植入双脚。
- 视频: https://www.youtube.com/watch?v=MdDfAdSeRNQ
- 图片: https://images.hoobaweb.com/8930/imgf-1200-630/moon-ribas.png
- 项目主页: https://www.moonribas.com/

#### SpiderSense — Victor Mateevitsi (2013)
- 类型: 研究原型 · 感官: 触觉, 身体图式与运动 · 媒介: 可穿戴与感官装置
- 核心想法: 一种全身的接近感，像蜘蛛感知振动一样，把皮肤延伸到空间之中。
- 作品内容: 一件装有传感模块的衣服，物体靠近时会压迫皮肤，让蒙眼的佩戴者感知周围环境，甚至能投掷命中目标。
- 实现方式: 分布在身体周围的超声波测距传感器驱动伺服压力垫，物体越近压得越重。
- 论文: https://doi.org/10.1145/2459236.2459246 (Augmented Human 2013)
- 视频: https://www.youtube.com/watch?v=D2BZ5wCTwGU

#### Waiting for Earthquakes — Moon Ribas (2013)
- 类型: 表演 · 感官: 身体图式与运动, 时间与尺度 · 媒介: 表演与参与式
- 核心想法: 行星就是编舞者：这场表演的时间与节奏由地球的运动决定。
- 作品内容: 一场舞蹈表演：Moon Ribas 静立等待，直到她的地震感官探测到地震，再把地震的强度转化为动作。
- 实现方式: 来自地震感官植入物的实时地震数据触发舞台上的即兴动作。
- 视频: https://www.youtube.com/watch?v=1Un4MFR-vNI

#### Immaterials: Light Painting WiFi — Timo Arnall (2011)
- 类型: 艺术作品 · 感官: 改变的视觉, 电感受 · 媒介: 表演与参与式, 屏幕与网页
- 核心想法: 让一种机器感官在城市中变得可见，使人们能像设备那样“看见”无线电。
- 作品内容: 一根会测量 WiFi 信号强度的四米灯杆被带着走过奥斯陆，并以长曝光拍摄，揭示看不见的网络的形状。
- 实现方式: 由 80 颗 LED 组成的灯杆把测得的 WiFi 信号强度显示为光柱高度，在长曝光拍摄中被移动穿过街道；与 Jørn Knutsen、Einar Sneve Martinussen 合作。
- 论文: https://doi.org/10.1111/j.1740-9713.2013.00683.x (Significance 2013)
- 视频: https://www.youtube.com/watch?v=cxdjfOkPu-E
- 项目主页: https://www.elasticspace.com/2013/09/the-immaterials-project

#### PossessedHand — Emi Tamaki, Jun Rekimoto (2011)
- 类型: 研究原型 · 感官: 身体图式与运动, 触觉 · 媒介: 可穿戴与感官装置
- 核心想法: 从自己的肌肉内部被计算机驱动：手变成了机器的输出端。
- 作品内容: 一条前臂绑带，以肌肉电刺激驱动佩戴者的手指，让计算机像演奏乐器一样控制这只手。
- 实现方式: 前臂上的 28 个电极片刺激肌肉，使 16 个手指关节屈曲。
- 论文: https://doi.org/10.1145/1978942.1979018 (CHI 2011)
- 视频: https://www.youtube.com/watch?v=9XBoZyfB8hY

#### Eyeborg — Rob Spence (2009)
- 类型: 研究原型 · 感官: 改变的视觉 · 媒介: 可穿戴与感官装置, 屏幕与网页
- 核心想法: 眼睛真的变成了摄像机：看与记录合并为同一个器官。
- 作品内容: 电影人 Rob Spence 用内置无线摄像头的义眼替换了失去的眼睛，记录并传输它看到的画面。
- 实现方式: 微型低分辨率摄像头、电池与无线发射器装在义眼中，把视频传到接收器。
- 视频: https://www.youtube.com/watch?v=_8fFj4-CKY8

#### North Paw — Eric Boyd (2008)
- 类型: 产品 · 感官: 磁感应, 触觉 · 媒介: 可穿戴与感官装置
- 核心想法: 人人都能焊出来的磁感官：把环境界扩展做成业余套件。
- 作品内容: 一个开源脚环，环形排布的振动马达在朝北的一侧振动，以自制套件形式出售。
- 实现方式: 罗盘模块驱动脚踝周围的八个振动马达；灵感来自 feelSpace 腰带。
- 视频: https://www.youtube.com/watch?v=D4shfNufqSg

#### electric stimulus to face — Daito Manabe (2008)
- 类型: 表演 · 感官: 身体图式与运动, 听觉与振动 · 媒介: 表演与参与式, 可穿戴与感官装置
- 核心想法: 人脸成为机器信号的显示器，做出无人刻意为之的表情。
- 作品内容: 真锅大度和朋友们脸上的电极由音乐驱动，使他们的面部肌肉随节拍抽动。
- 实现方式: 音频信号被转换为低电流的肌肉电刺激，通过面部电极片传递。
- 视频: https://www.youtube.com/watch?v=tJ4_-2_oWuM

#### Ear on Arm — Stelarc (2006)
- 类型: 艺术作品 · 感官: 听觉与振动, 身体图式与运动 · 媒介: 表演与参与式
- 核心想法: 一个替别人聆听的额外器官：身体长出一个服务于网络而非主人的部分。
- 作品内容: 通过手术在 Stelarc 左前臂上构建的一只以人体细胞支架培养的耳朵，计划接入互联网，成为一个远程聆听器官。
- 实现方式: 一块多孔生物聚合物支架被植入皮下，由组织长入；曾植入微型麦克风，后因感染而取出。
- 视频: https://www.youtube.com/watch?v=MhpV4sLgVEE
- 图片: https://stelarc.org/media/img/projects-overview/earonarm2.jpg
- 项目主页: https://stelarc.org/_activity-20242.php

#### Haptic Radar — Alvaro Cassinelli (2006)
- 类型: 研究原型 · 感官: 触觉, 身体图式与运动 · 媒介: 可穿戴与感官装置
- 核心想法: 向空间伸展的皮肤：如同人类的胡须或触角。
- 作品内容: 一条装有测距传感器与振动马达的头带，让佩戴者感受到头部周围逼近的物体，是一种无需视觉的“延伸皮肤”。
- 实现方式: 模块化单元上的红外测距器把距离映射为头皮上的振动强度。
- 论文: https://doi.org/10.1109/iswc.2006.286344 (ISWC 2006)
- 视频: https://www.youtube.com/watch?v=Ow_RISC2S0A
- 图片: http://ishikawa-vision.org/perception/HapticRadar/DSC_8196.jpg
- 项目主页: https://www.ishikawa-vision.org/perception/HapticRadar/index-e.html

#### feelSpace Belt: Learning the Sixth Sense — Peter König (2005)
- 类型: 论文 · 感官: 磁感应, 触觉 · 媒介: 可穿戴与感官装置
- 核心想法: 磁感官是可以学会的：随着时间推移，腰带不再是信号，而成为空间感的一部分。
- 作品内容: 参与者连续六周佩戴一条始终指示磁北的振动腰带，其中一些人表示对空间的感知发生了变化。
- 实现方式: 一条装有 13 个振动马达和电子罗盘的腰带，始终让朝北的马达振动；以导航测试与访谈评估学习效果。
- 论文: https://doi.org/10.1088/1741-2560/2/4/r02 (Journal of Neural Engineering 2005)
- 视频: https://www.youtube.com/watch?v=0po8YOA-17U
- 图片: https://feelspace.de/wp-content/uploads/2022/03/naviBelt_Features-e1647970100122.jpg

#### Cyborg Antenna (Eyeborg) — Neil Harbisson (2004)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动 · 媒介: 可穿戴与感官装置, 表演与参与式
- 核心想法: 一种永久的新感官改变了身份：Harbisson 称自己为赛博格，称天线为一个器官。
- 作品内容: 一根与 Neil Harbisson 颅骨骨整合的天线把光的频率转换为振动，他通过骨传导“听见”颜色，包括红外与紫外。
- 实现方式: 天线末端的摄像传感器把色相映射为声音频率，经颅骨植入物以骨传导传递；互联网连接让他人可以向他发送颜色。
- 视频: https://www.youtube.com/watch?v=ygRNoieAnzI
- 项目主页: https://www.cyborgarts.com/

#### Electrical Walks — Christina Kubisch (2004)
- 类型: 艺术作品 · 感官: 听觉与振动, 电感受 · 媒介: 空间音频, 表演与参与式
- 核心想法: 带着一只电磁之耳行走，会揭示其他感官错过的城市隐藏层。
- 作品内容: 行走者戴上特制耳机，沿着“热点”地图行走，耳机把城市里的电磁场——从商店防盗门到自动取款机与照明——转成声音。
- 实现方式: 带感应线圈的无线耳机直接拾取并放大电磁场，转为声音。
- 视频: https://www.youtube.com/watch?v=gUYhwXteYP8
- 图片: https://christinakubisch.de/wp-content/uploads/2022/01/MG_2068-2-1024x682.jpeg
- 项目主页: https://www.christinakubisch.de/electrical-walks

#### Project Cyborg 2.0 — Kevin Warwick (2002)
- 类型: 研究原型 · 感官: 触觉, 身体图式与运动 · 媒介: 可穿戴与感官装置
- 核心想法: 神经系统直接连到机器：身体可以跨越互联网延伸，并以超声波感知距离。
- 作品内容: Kevin Warwick 在手臂正中神经中植入电极阵列，通过互联网控制机械手，并以超声波测距信号作为一种新感官。
- 实现方式: 植入正中神经的 100 电极 Utah 阵列记录并刺激神经信号，连接机械手、超声波传感器，后来还连接到他妻子的植入物。
- 视频: https://www.youtube.com/watch?v=GLq7edATaFo
- 图片: https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Kevin_Warwick_2011.jpg/1280px-Kevin_Warwick_2011.jpg

#### Ping Body — Stelarc (1996)
- 类型: 表演 · 感官: 身体图式与运动, 集体与网络感知 · 媒介: 表演与参与式, 可穿戴与感官装置
- 展出于: Dutch Electronic Art Festival (DEAF96), Rotterdam
- 核心想法: 身体可以被网络本身驱动，成为全球数据流量的传感器和木偶。
- 作品内容: Stelarc 的肌肉由互联网数据的流动驱动：向世界各地服务器发出的 ping 延时控制肌肉电刺激系统，使他的四肢抽动、做出动作。
- 实现方式: 向数十个全球服务器发出 ping 的往返时间被映射为肌肉电刺激系统的电压，作用于他的手臂和腿；他的身体动作又反过来控制 Third Hand。
- 视频: https://www.youtube.com/watch?v=45MOlsFGSHI

#### Stomach Sculpture — Stelarc (1993)
- 类型: 艺术作品 · 感官: 呼吸与内感受, 身体图式与运动 · 媒介: 表演与参与式
- 展出于: Fifth Australian Sculpture Triennale 1993
- 核心想法: 身体成为容纳机器的场所，空腔内部变成展览空间。
- 作品内容: 一件由金、银与不锈钢制成、胶囊大小的雕塑被吞入 Stelarc 胃中并在其中展开，全程由医用内窥镜拍摄。
- 实现方式: 由外部控制盒经线缆连接的伺服电机和蜗杆机构让雕塑开合；内窥镜记录胃内的画面。
- 图片: https://stelarc.org/media/img/projects-overview/stomach-sculpture1.jpg
- 项目主页: https://stelarc.org/_activity-20349.php

#### The vOICe — Peter Meijer (1992)
- 类型: 产品 · 感官: 听觉与振动, 改变的视觉 · 媒介: 可穿戴与感官装置
- 核心想法: 视觉改由听觉传达；使用者的长期训练显示大脑如何接纳一条新的感官通道。
- 作品内容: 一种感官替代系统，把摄像头画面转成声音景观：画面从左到右扫描，高度变成音高、亮度变成响度，使用者学会“用耳朵看”。
- 实现方式: 在电脑、手机和摄像眼镜上运行的图像转声音映射软件，自 1990 年代起免费提供。
- 论文: https://doi.org/10.1109/10.121642 (IEEE Transactions on Biomedical Engineering 1992)
- 视频: https://www.youtube.com/watch?v=I0lmSYP7OcM
- 项目主页: https://www.seeingwithsound.com

#### Third Hand — Stelarc (1980)
- 类型: 表演 · 感官: 身体图式与运动, 触觉 · 媒介: 可穿戴与感官装置, 表演与参与式
- 核心想法: 第三只手不是握在手里的工具，而是一条要用从未控制过手的肌肉去学会驱动的肢体。
- 作品内容: 安装在 Stelarc 右臂上的机械手，由腹部和腿部肌肉的电信号驱动，他带着它表演了近二十年。
- 实现方式: 腹部与腿部的肌电电极控制一只覆有乳胶的铝制机械手完成捏、握和转腕；手在横滨制作，以早稻田大学的原型为基础。
- 视频: https://www.youtube.com/watch?v=Or1CVc6A9YA
- 图片: https://stelarc.org/media/img/projects-overview/3rdhand2.jpg
- 项目主页: https://stelarc.org/_activity-20265.php

#### Tactile Vision Substitution System (TVSS) — Paul Bach-y-Rita (1969)
- 类型: 论文 · 感官: 触觉, 改变的视觉 · 媒介: 多感官装置, 可穿戴与感官装置
- 核心想法: 看是大脑完成的，而不是眼睛：摄像机加上背部的皮肤，就能成为一条通往视觉的新路径。
- 作品内容: 盲人参与者坐在一把椅子上，椅背上的振动针阵按压他们的背部，信号来自他们自己移动的摄像机；他们由此学会通过触觉识别物体和人脸。
- 实现方式: 电视摄像机的画面被转换为牙科椅背上 20 × 20 的振动触觉刺激阵列；由使用者主动控制摄像机是学会的关键。
- 论文: https://doi.org/10.1038/221963a0 (Nature 1969)

#### Electric Dress — Atsuko Tanaka (1956)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动, 热与红外 · 媒介: 可穿戴与感官装置, 表演与参与式
- 展出于: 2nd Gutai Art Exhibition, Tokyo 1956; documenta 12, Kassel 2007
- 核心想法: 赛博格可穿戴物的先驱：身体变成一台电器，也承受随之而来的危险与热量。
- 作品内容: 一件由约 200 个涂色灯泡和灯管组成、依次闪烁的衣服；田中敦子在具体派展览上穿上它，成为一个发热、闪烁的电气身体。
- 实现方式: 彩色白炽灯泡与霓虹灯管接到一个顺序控制器上，穿在身上。
- 视频: https://www.youtube.com/watch?v=KE_H6xgwqWw
- 图片: https://i.ytimg.com/vi/KE_H6xgwqWw/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=tJpldOY-w50

## 理论基础

XR 中非人类体验背后的理论、综述、批评与方法：环境界、具身科学、“共情机器”之争。

### 理论与哲学

环境界、“成为蝙蝠是什么感觉”、生成-动物、觉察的艺术。

#### Envisioning Posthuman/More-than-Human Futures for XR through HCI — Jae-eun Shin (2026)
- 类型: 论文 · 感官: 多感官 · 媒介: VR 头显, 混合现实
- 核心想法: XR 可以被理解为推想性的世界营造、分布式去中心化与纠缠式生成，而不只是服务于人类沉浸的工具。
- 作品内容: 一篇 CHI 论文，批判性地把 XR 研究从以人为中心的“临场感”转向后人类与超越人类的未来。
- 实现方式: 以后人类主义理论批判性回顾 HCI 与 XR 文献，提出连接空间、身体与交互的分类框架。
- 论文: https://doi.org/10.1145/3772318.3790771 (CHI 2026)
- 项目主页: https://doi.org/10.1145/3772318.3790771

#### Experiencing More-than-Humans: Augmented Noticing through Extended Reality — Botao 'Amber' Hu, Danlin Huang, Jae-eun Shin (2026)
- 类型: 书籍/理论 · 感官: 多感官 · 媒介: 混合现实, 可穿戴与感官装置
- 核心想法: 没有头显能交付另一种生命的内在体验；XR 能做的，是让这种尝试及其失败变得可感，从而训练人对自身注意力的注意。
- 作品内容: 一部正在撰写的实践型专著，以一组 XR 作品的注释作品集为基础，这些作品尝试成为蝙蝠、鼹鼠、章鱼、真菌、溪流、椅子、AI 与机器人。
- 实现方式: 采用设计研究、身体设计与注释作品集方法，每个案例章节以一份“觉察练习谱”作结。
- 图片: https://opengraph.githubassets.com/791ab569841ef1212cd12ab29d208927da6dcddc431cfa9b242f4d9b9c95e9c3/experiencing-mth/experiencing-mth.github.io
- 项目主页: https://experiencing-mth.github.io
- 代码: https://github.com/experiencing-mth

#### Plausible Embodiment — Shuto Takashita (2026)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 设计人类没有的身体时，目标是可信而不是逼真。
- 作品内容: 一个非人类化身的设计框架，追求“操控起来可信”的身体，而不是对动物的逼真复制。
- 实现方式: 基于作者关于触手与额外肢体研究得出的概念框架。
- 论文: https://doi.org/10.1145/3772363.3799215 (CHI 2026 Extended Abstracts)

#### Non-Anthropomorphic Hands — Jennifer Molnar (2022)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 真正非人类的身体需要为它们发明的控制方案。
- 作品内容: 一篇立场论文，讨论在拓扑与运动上不同于人手的“手”，以及为什么一一对应的手指映射限制了它们。
- 实现方式: 回顾真实与虚拟的非拟人之手及其控制策略。
- 论文: https://doi.org/10.1145/3491101.3519871 (CHI 2022 Extended Abstracts)

#### Morphological Interfaces: On Body Transforming Technologies — Sang-won Leigh (2017)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: 可穿戴与感官装置
- 核心想法: 自我具有可塑性；界面可以改变身体，而不只是屏幕。
- 作品内容: 一篇讨论改变身体形态与能力之技术的论文，从额外的机械手指到重新配置的肢体。
- 实现方式: 立场论文，借鉴工具使用的神经科学研究与作者自己的身体延伸机器人。
- 论文: https://doi.org/10.1145/3027063.3052758 (CHI 2017 Extended Abstracts)
- 视频: https://www.youtube.com/watch?v=V6CMtXQj_Ts

#### Ways of Machine Seeing — Geoff Cox (2017)
- 类型: 书籍/理论 · 感官: 改变的视觉 · 媒介: 屏幕与网页
- 核心想法: 机器的观看同样是一种观看之道，被权力塑造；任何“成为机器”的尝试都继承了它。
- 作品内容: 一篇为图像日益由机器生成与读取的时代更新 John Berger《观看之道》的文章。
- 实现方式: 发表于 APRJA 期刊的批评性文章，结合计算机视觉与 Berger 的电视系列。
- 论文: https://doi.org/10.7146/aprja.v6i1.116007 (APRJA 2017)

#### Homuncular Flexibility: Inhabiting Nonhuman Avatars — Stanford Virtual Human Interaction Lab (2015)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 非人类化身不是渲染的把戏，而是对神经可塑性的检验。
- 作品内容: 一篇阐述“小人弹性”的文章：大脑的身体地图可以适应拥有额外肢体或运动方式不同的身体。
- 实现方式: 综合神经科学、VR 实验与 Lanier 早期化身工作的理论文章。
- 论文: https://doi.org/10.1002/9781118900772.etrds0165 (Emerging Trends in the Social and Behavioral Sciences 2015)

#### What Is It Like to Be a Bat? — Thomas Nagel (1974)
- 类型: 书籍/理论 · 感官: 回声定位 · 媒介: 屏幕与网页
- 核心想法: 几乎每件“成为蝙蝠”的作品都在试图回答这个问题，或诚实地承认失败。
- 作品内容: 一篇哲学文章，论证我们无法知道成为蝙蝠是什么感觉，因为蝙蝠的经验与我们缺少的声呐感官紧密相连。
- 实现方式: 关于主观经验与物理主义的哲学论证。
- 论文: https://doi.org/10.2307/2183914 (The Philosophical Review 1974)

#### A Stroll Through the Worlds of Animals and Men — Jakob von Uexküll (1934)
- 类型: 书籍/理论 · 感官: 多感官 · 媒介: 屏幕与网页
- 核心想法: 每种动物都活在自己的感知世界里；成为另一种动物，就是进入它的环境界。
- 作品内容: 一本配有插图的书，描述“环境界”：每种动物（从蜱虫到狗）所感知与作用的世界。
- 实现方式: 以生物学与哲学论述为主，配插图比较人与动物对同一场景的感知。
- 论文: https://doi.org/10.1515/semi.1992.89.4.319 (Semiotica 1992 (English translation; German original 1934))
- 图片: https://minnesota-us.imgix.net/covers/9780816659005.jpg?w=298
- 项目主页: https://www.upress.umn.edu/9780816659005/a-foray-into-the-worlds-of-animals-and-humans/

### 具身科学

身体所有感、化身、小人弹性与临场感研究。

#### Can Non-Humanlike Avatars Induce the Proteus Effect? — Xinmiao Lan (2023)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 普罗透斯效应超越了人形，但取决于人是否认同这个身体。
- 作品内容: 一项实验，检验非人形化身的吸引力是否会通过认同与具身改变社会参与。
- 实现方式: 组间 VR 实验，使用有吸引力与无吸引力的非人形化身，并做中介分析。
- 论文: https://doi.org/10.1016/j.chbah.2023.100020 (Computers in Human Behavior: Artificial Humans 2023)

#### The Machine to Be Another — BeAnotherLab (2012)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉 · 媒介: VR 头显, 表演与参与式
- 核心想法: 人与人之间的身体交换：它既是尝试进入非人身体的作品的基础方法，也是它们的对照。
- 作品内容: 两名戴头显的参与者透过彼此的眼睛观看，并同步动作，体验身体互换的错觉。
- 实现方式: 头显播放另一位参与者的实时第一人称摄像画面，配合表演者镜像动作与同步触碰。
- 视频: https://www.youtube.com/watch?v=eIQWcmhChBI
- 图片: https://beanotherlab.org/wp-content/uploads/2019/04/bal_tmtba01.jpg
- 项目主页: https://beanotherlab.org/home/work/tmtba/

#### The Sense of Embodiment in Virtual Reality — Konstantina Kilteni (2012)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显
- 核心想法: 用来追问蝙蝠、尾巴或触手是否已成为你一部分的共同词汇。
- 作品内容: 一篇论文，把对虚拟身体的具身感定义为自我定位、能动感与身体所有感的结合。
- 实现方式: 对身体所有感、能动感与自我定位研究的概念性综述。
- 论文: https://doi.org/10.1162/pres_a_00124 (Presence: Teleoperators and Virtual Environments 2012)

#### Rubber Hands 'Feel' Touch that Eyes See — Matthew Botvinick (1998)
- 类型: 论文 · 感官: 触觉, 身体图式与运动 · 媒介: 多感官装置
- 核心想法: 什么算作自己的身体，由感官之间的匹配决定；这也是虚拟动物身体可以被拥有的原因。
- 作品内容: 橡胶手错觉：当可见的橡胶手与被遮住的真手被同时抚触时，人会在橡胶手上感到触碰。
- 实现方式: 同步刷拂可见的橡胶手与被遮住的真手；测量本体感觉漂移。
- 论文: https://doi.org/10.1038/35784 (Nature 1998)

#### Upside-Down Goggles — Carsten Höller (1994)
- 类型: 艺术作品 · 感官: 改变的视觉, 身体图式与运动 · 媒介: 可穿戴与感官装置
- 展出于: Decision, Hayward Gallery 2015
- 核心想法: 感知是习得的，也可以重新习得：一次简单的光学翻转就显示身体多快能适应新的看法，这是所有感官“成为”的前提。
- 作品内容: 观众戴上把视觉世界上下颠倒的棱镜眼镜，尝试行走、伸手和上下楼梯，直到身体开始适应。
- 实现方式: 借鉴 George Stratton 在 1890 年代的实验，用棱镜眼镜翻转画面；可戴几分钟，实验中曾连续佩戴数天。
- 视频: https://www.youtube.com/watch?v=Ct3c9PzS6yE

#### Inter Discommunication Machine — Kazuhiko Hachiya (1993)
- 类型: 艺术作品 · 感官: 改变的视觉, 听觉与振动, 身体图式与运动 · 媒介: 可穿戴与感官装置, 表演与参与式
- 核心想法: 一次早期的视角交换：自我被从外部操控，是身体交换与感知交叉作品的前身。
- 作品内容: 两人戴着带翅膀、装有摄像头和麦克风的头戴装置；每人只能看到、听到对方装置采集的画面与声音，必须在对方的感知中移动。
- 实现方式: 两台头戴显示器通过无线视频互相连接对方的摄像头与麦克风，装在带羽毛的翅膀服装里。
- 视频: https://www.youtube.com/watch?v=JOzVzcmK0VU
- 项目主页: https://www.petworks.co.jp/~hachiya/

#### Handsight — Agnes Hegedüs (1992)
- 类型: 艺术作品 · 感官: 改变的视觉, 触觉 · 媒介: 多感官装置
- 核心想法: 眼睛移到了手上：视觉成为伸手去够的东西，就像章鱼腕上或蜗牛触角上的眼睛。
- 作品内容: 观众手持一个眼球形状的追踪器，在透明玻璃球中移动；投影显示从这只手中之眼看到的球“内部”虚拟世界。
- 实现方式: 以 Polhemus 追踪的眼球界面与实体玻璃球对位，驱动投影屏上的实时图形。
- 视频: https://www.youtube.com/watch?v=kTfgGeMfRZI

#### Videoplace — Myron Krueger (1975)
- 类型: 艺术作品 · 感官: 身体图式与运动, 改变的视觉 · 媒介: 多感官装置, 屏幕与网页
- 展出于: Milwaukee Art Museum 1975; Prix Ars Electronica Golden Nica 1990
- 核心想法: 身体变成可以被其他生物攀爬、触碰和回应的图形，是全身具身交互的基础。
- 作品内容: 参与者在大屏幕上看到自己的实时剪影，与爬上剪影轮廓的小生物 CRITTER 等图形生物互动，也能与另一房间里他人的剪影互动。
- 实现方式: 在自制硬件上实时提取视频剪影，与计算机图形合成并投影；无需眼镜或手套。
- 视频: https://www.youtube.com/watch?v=dqZyZrN3Pl0

#### Máscaras Sensoriais (Sensorial Masks) — Lygia Clark (1967)
- 类型: 艺术作品 · 感官: 改变的视觉, 嗅觉与味觉, 听觉与振动 · 媒介: 可穿戴与感官装置
- 核心想法: 先驱之作：艺术是改变感官本身的穿戴物，而不是供人观看的图像。
- 作品内容: 装有镜片、透镜、香包和发声物的布制头罩，参与者戴在头上，改变视觉、嗅觉与听觉，把注意力引向身体内部。
- 实现方式: 手缝布头罩，配有镜子、目镜、芳香草药和小型发声物。
- 视频: https://www.youtube.com/watch?v=0kZ-WIORsZg
- 图片: https://i.ytimg.com/vi/0kZ-WIORsZg/hqdefault.jpg
- 项目主页: https://www.youtube.com/watch?v=0kZ-WIORsZg

### 综述

关于非人类或超越人类 XR 的综述与系统性回顾。

#### How to be Non-Human: Animal Embodiment in VR Games — Siqi Yu (2026)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: 游戏, VR 头显
- 核心想法: 约 77% 的动物化身游戏保留人的交互逻辑；动物多半只是一层外皮。
- 作品内容: 对 48 款第一人称动物化身 VR 游戏的反思性主题分析，将其归为动物仿生、有限模拟、人兽混合与人类行为四类主题。
- 实现方式: 研究者在 Meta Quest 3 上玩遍所有游戏并口述记录，再对移动、控制与反馈模式进行编码。
- 论文: https://arxiv.org/abs/2606.08130 (DiGRA 2026)
- 图片: https://arxiv.org/html/2606.08130v1/img/theme_fig/Fig_VRPigeons.jpg https://arxiv.org/html/2606.08130v1/img/theme_fig/Fig_Tentacular.jpg

#### How Avatars Influence User Behavior: A Review of the Proteus Effect — Anna Samira Praetorius (2020)
- 类型: 论文 · 感官: 身体图式与运动 · 媒介: VR 头显, 游戏
- 核心想法: 无论栖身于人还是动物的身体，它都会重塑你的行为方式。
- 作品内容: 一篇普罗透斯效应研究综述，按自我相似、愿望认同与具身临场感对研究进行分类。
- 实现方式: 对 Yee 与 Bailenson（2007）以来的化身研究进行文献综述。
- 论文: https://doi.org/10.1145/3402942.3403019 (Foundations of Digital Games (FDG) 2020)

### 方法与工具

用于非人类视角设计的方法、框架与工具。

#### Experiencing the More-than-Human Through Human Augmentation — Botao 'Amber' Hu, Danlin Huang (2025)
- 类型: 论文 · 感官: 多感官 · 媒介: 混合现实, 可穿戴与感官装置
- 核心想法: 让增强技术“侧转”：同样的设备不用来让人更强，而用来调节人的感官，趋近其他生命的环境界。
- 作品内容: 一篇设计论文：把原本用于强化人类的增强技术转而用于提供短暂的、第一人称的非人类感官近似体验，提出七条设计原则并报告五个案例：EchoVision、FeltSight、FungiSync、TentacUs 与 City of Sparkles。
- 实现方式: 以生态现象学与生态身体学为基础的设计研究，从作者的混合现实、触觉与肌电刺激作品中归纳设计原则。
- 论文: https://doi.org/10.21606/drs.2026.814 (DRS 2026)
- 图片: https://arxiv.org/html/2511.12533v3/images/MtHtHA.png
- 项目主页: https://amber.botao.hu/project/hth

#### The Beauty of Blood Flow — Marshmallow Laser Feast (2024)
- 类型: 沉浸式影片 · 感官: 呼吸与内感受, 身体图式与运动 · 媒介: 屏幕与网页
- 核心想法: 一部方法纪录片：科学影像是把身体内部感受为风景的原材料。
- 作品内容: 一部短纪录片，讲述 MLF 与 Fraunhofer MEVIS 如何把肺、心脏与血流的医学扫描转化为《Evolver》的画面。
- 实现方式: 包含访谈与制作过程影像，展示 Fraunhofer MEVIS 团队（Matthias Günther、Bianka Hofmann 等）对 4D 血流 MRI 与 CT 数据的处理。
- 视频: https://vimeo.com/911276237
- 图片: https://marshmallowlaserfeast.com/app/uploads/2024/02/The-Beauty-of-Blood-Flow_05.jpg
- 项目主页: https://marshmallowlaserfeast.com/project/the-beauty-of-blood-flow-documentary-short/

#### HoloKit — Botao 'Amber' Hu, Reality Design Lab (2017)
- 类型: 产品 · 感官: 改变的视觉 · 媒介: 增强现实, 混合现实
- 展出于: Augmented World Expo 2017; Future of Storytelling 2017; SIGGRAPH 2017; Maker Faire New York 2017; Red Dot Design Award 2023; iF Design Award 2024; UbiComp/ISWC 2024 Best Demo Award
- 核心想法: 廉价、开源、可透视的 MR 让参与者留在真实场所、也被他人看见，这是公共“成为他者”体验的前提。
- 作品内容: 一款开源头显，把智能手机变成光学透视式混合现实显示器；EchoVision、FungiSync 与 GravField 共用的硬件。
- 实现方式: 为 iPhone 设计的光学结构，先是纸板版（HoloKit 1，2017），后为注塑版（HoloKit X，2022）；配有基于 ARKit 的 Unity SDK，并用 Multipeer Connectivity 实现同场多人。
- 论文: https://doi.org/10.1145/3675094.3677549 (UbiComp/ISWC 2024 Adjunct)
- 视频: https://vimeo.com/801220687
- 图片: https://reality.design/media/_resources/HoloKit%20X/project-holokit-x-cover-01.jpg https://reality.design/media/_resources/HoloKit%20X/project-holokit-x-gallery-01.jpg
- 项目主页: https://holokit.io
- 代码: https://github.com/realitydeslab/holokit-app

## 创作者

- **Marshmallow Laser Feast** (26) — 体验式艺术家团体. 2011 年由 Memo Akten、Robin McNicholas 与 Barnaby Steel 在伦敦创立，现由 McNicholas、Steel 与 Ersin Han Ersin 主导。团体以研究为基础，创作关于呼吸、树木、动物及其相互联系的多感官装置、VR 与影像作品，常用 LiDAR 扫描、医学影像与科学数据构建画面。 https://marshmallowlaserfeast.com
- **Botao 'Amber' Hu** (11) — 设计研究者；Reality Design Lab 主理人；牛津大学博士候选人. 研究横跨身体美学设计、混合现实与超越人类的感知调谐，发明了开源头显 HoloKit。专著《Experiencing More-than-Humans》的第一作者，主导了 EchoVision、FungiSync、TentacUs、GravField 与 City of Sparkles 等作品。 https://amber.botao.hu
- **Jakob Kudsk Steensen** (9) — 以实时模拟与生态为媒介的艺术家. 丹麦艺术家，基于与生物学家、声音艺术家合作的田野调查，用游戏引擎构建森林、沼泽与消逝栖息地的模拟。 https://www.jakobkudsksteensen.com
- **Jiabao Li** (9) — 艺术家、设计师与技术专家；美国东北大学副教授. 通过装置、XR、AI、生物艺术与表演探索超越人类的生态、女性主义生物技术与多物种智能；曾任 UT Austin 助理教授、苹果公司设计师。 https://www.jiabaoli.org
- **Stelarc** (8) — 行为艺术家. 出生于塞浦路斯的澳大利亚艺术家，自 1970 年代起用机械手、外骨骼、由互联网驱动的肌肉电刺激以及手臂上培养出的耳朵来延展自己的身体。 https://stelarc.org
- **Špela Petrič** (8) — 研究植物与人关系的生物艺术家. 斯洛文尼亚艺术家，拥有生物医学博士学位，以表演与实验室作品呈现人体与植物之间的亲缘。 https://www.spelapetric.org
- **Eduardo Kac** (7) — 生物艺术与远程临场艺术家. 巴西裔美国艺术家，提出“转基因艺术”一词，代表作包括《GFP Bunny》与“植物动物”Edunia。 https://www.ekac.org
- **Reality Design Lab** (7) — 由 Botao 'Amber' Hu 主持的混合现实独立设计研究实验室. 以“设计新现实”为宗旨，创作混合现实艺术作品，开发开源工具（HoloKit、HoloField、HoloMask、Unity 版 MultipeerConnectivity），并开展教学项目。 https://reality.design
- **Tomás Saraceno** (7) — 艺术家与建筑师. 阿根廷艺术家，以蜘蛛、空气、太阳能气球和云状结构创作，发起 Aerocene 社群。 https://studiotomassaraceno.org
- **Danlin Huang** (6) — 艺术家、设计研究者与 AR 开发者. 毕业于中国美术学院工业设计与媒体艺术方向，曾任 Reality Design Lab 研究助理。用 XR、生物传感与 AI 拓展身体经验；FeltSight 的主要设计者，专著《Experiencing More-than-Humans》合著者。 https://danlinhuang.com
- **Saša Spačal** (6) — 以真菌、土壤与生物反馈为媒介的艺术家. 斯洛文尼亚艺术家，工作室 Agapea 打造把人体与菌丝、微生物和土壤连接起来的活体装置。 https://www.agapea.si
- **Kouta Minamizawa** (5) — 庆应义塾大学媒体设计研究科（KMD）教授. 触觉研究者，主持庆应 KMD 的 Embodied Media Project，研究远程临场、触觉传输与共享身体。 https://embodiedmedia.org
- **Might and Delight** (5) — 独立游戏工作室，斯德哥尔摩. 瑞典工作室，开发了 Shelter 系列，玩家以动物父母的身份生活：獾、猞猁、大象。 https://www.mightanddelight.com/
- **Olafur Eliasson** (5) — 艺术家. 丹麦-冰岛艺术家，装置作品以光、水、冰与天气为材料。 https://olafureliasson.net
- **SOMNIACS** (5) — 瑞士 VR 飞行模拟器公司，Birdly 的开发者. 2015 年由 Max Rheiner、Thomas Tobler 与 Fabian Troxler 在苏黎世创立，把苏黎世艺术大学的研究原型 Birdly 做成面向博物馆和场馆的全身飞行模拟器。 https://www.birdlyvr.com/
- **Stanford Virtual Human Interaction Lab** (5) — 研究实验室. 由 Jeremy Bailenson 领导的实验室，研究虚拟现实与具身的心理学。 https://vhil.stanford.edu
- **Tosca Terán** (5) — 生物声音化与生物艺术家（Nanotopia）. 跨学科艺术家，以 Nanotopia 之名把活体菌丝的电活动转化为音乐与沉浸式世界。 https://www.toscateran.com
- **AKI INOMATA** (4) — 与动物协作的艺术家. 日本艺术家，与寄居蟹、狗、鹦鹉、河狸和蓑蛾合作创作，把动物视为共同作者。 https://www.aki-inomata.com
- **Anastassia Andreasen** (4) — 虚拟现实与声音研究者，奥尔堡大学哥本哈根校区. Anastassia Andreasen 在 Stefania Serafin 的多感官体验实验室研究 VR 中的蝙蝠化身与回声定位。
- **Andrey Krekhov** (4) — 游戏与虚拟现实研究者，杜伊斯堡-埃森大学. Andrey Krekhov 与 Sebastian Cmentowski、Katharina Emmerich、Jens Krüger 一起研究 VR 游戏中的化身、移动方式与身体所有感。
- **MHD Yamen Saraiji** (4) — 研究者，远程临场与身体增强. 工程师与研究者（先后在庆应 KMD 与 Sony），以 Fusion、MetaArms 等远程临场机器人与额外机械臂闻名。
- **Rachel McDonnell** (4) — 都柏林圣三一学院创意技术教授. Rachel McDonnell 在都柏林圣三一学院图形组领导关于虚拟人、化身与感知的研究。
- **Bernhard E. Riecke** (3) — 西蒙菲莎大学 iSpace 实验室教授. Bernhard Riecke 研究 VR 中的自我运动感、移动方式与转化性体验。
- **Hiroshi Ishiguro** (3) — 机器人学家，大阪大学与 ATR. 逼真仿生人的制造者，其中包括 Geminoid HI-1——他本人的遥控复制体，用于研究临场感与身体所有感。 https://www.geminoid.jp
- **Katie Paterson** (3) — 艺术家. 苏格兰艺术家，作品把人与冰川、星辰和深时间联系在一起。 https://katiepaterson.org
- **Maja Smrekar** (3) — 探讨人与狗共同演化的艺术家. 斯洛文尼亚艺术家，其关于人-狗-狼共同演化的系列 K-9_topology 获得 2017 年 Prix Ars Electronica 混合艺术金尼卡奖。 https://www.majasmrekar.org/
- **Matt McCorkle** (3) — 声音设计师与声音化艺术家. 纽约的声音设计师，创作以声音化为核心的聆听环境；《Nocturnal Fugue》的作曲与声音艺术家。 https://www.mattmccorkle.com
- **New Folder Games** (3) — 制作“I Am”系列动物模拟游戏的 VR 工作室. 开发 I Am Cat、I Am Bird、I Am Monkey 等 VR 沙盒游戏的工作室，每一款都围绕一种动物身体展开。 https://newfolderstudio.com/
- **Rafael Lozano-Hemmer** (3) — 媒体艺术家. 墨西哥-加拿大艺术家，用脉搏、呼吸和声音等生物数据创作互动装置。 https://www.lozano-hemmer.com
- **Shinseungback Kimyonghun** (3) — 艺术二人组（申承白与金容勋）. 首尔的艺术二人组，自 2012 年起以装置作品探讨机器视觉、AI 的误差与环境。 http://ssbkyh.com
- **Studio Above&Below** (3) — 以 XR 与环境数据创作的艺术科技工作室. 由 Daria Jelonek 与 Perry-James Sugden 在皇家艺术学院毕业后创立，用实时空气、潮汐与土壤数据驱动 AR 雕塑、穹顶与混合现实作品。 https://www.studioaboveandbelow.com/
- **Zheng Mahler** (3) — 艺术与人类学团体（Royce Ng 与 Daisy Bisenieks）. 由艺术家 Royce Ng 与人类-动物关系学者 Daisy Bisenieks 组成的香港团体；其“大屿山三部曲”是围绕大屿山水牛、蝙蝠与真菌展开的多物种感官民族志。 https://www.zhengmahler.world/
- **teamLab** (3) — 艺术团体. 2001 年成立的跨学科团体，创作大型互动数字装置。 https://www.teamlab.art
- **Acute Art** (2) — VR 与 AR 艺术作品制作机构. 伦敦的制作机构，委托当代艺术家创作 VR 与 AR 作品。 https://acuteart.com
- **Agnes Meyer-Brandis** (2) — 游走于艺术与科学之间的艺术家. 德国艺术家，“地下研究筏”（FFUR）创办者，以关于树、云与月亮的诗意科学实验著称。 http://onetreeid.ffur.de
- **Akimi Oyanagi** (2) — 虚拟现实研究者，丰桥技术科学大学 / 东京大学. Akimi Oyanagi 研究对鸟类化身的身体所有感及其心理效应。
- **Alchemy Immersive** (2) — 沉浸式自然史工作室. 英国工作室，与 David Attenborough 及 Atlantic Productions 合作制作 VR 与混合现实自然史系列（《Micro Monsters》《Kingdom of Plants》）。 https://alchemyimmersive.com
- **Alexandra Daisy Ginsberg** (2) — 为其他物种设计的艺术家. 英国艺术家，其关于合成生物学、灭绝与传粉者的作品追问“为其他物种设计”意味着什么。 https://www.daisyginsberg.com/
- **Amanita Design** (2) — 独立游戏工作室. 捷克工作室，以《Machinarium》《Botanicula》等手绘冒险游戏闻名。 https://amanita-design.net
- **Anagram** (2) — 沉浸式与互动叙事工作室. 由 May Abdalla 与 Amy Rose 创立的英国工作室，创作以纪录片为基础的沉浸式装置、VR 与剧场作品。 https://www.weareanagram.co.uk
- **Anatole Lécuyer** (2) — Inria 雷恩研究主任（Hybrid 团队）. Anatole Lécuyer 领导 Inria 的 Hybrid 团队，研究 VR、触觉与脑机接口。
- **Annea Lockwood** (2) — 作曲家与声音艺术家. 生于新西兰的作曲家，以河流声音地图以及关于水和燃烧钢琴的作品闻名。 https://www.annealockwood.com
- **Atlas V** (2) — 沉浸式内容制作公司. 法国沉浸式内容制作公司，为电影节与博物馆制作 VR 与沉浸式作品，包括《Spheres》《Gloomy Eyes》《Battlescar》以及 Marshmallow Laser Feast 的《Evolver》。 https://atlasv.io
- **Bossa Studios** (2) — 游戏工作室，伦敦. 伦敦工作室，以 Surgeon Simulator、I Am Bread 等物理喜剧游戏闻名。 https://www.bossastudios.com
- **Carsten Höller** (2) — 艺术家，曾受训为农业昆虫学家. 比利时出生的艺术家，拥有昆虫嗅觉方向的博士学位，创作改变感知的参与式作品：滑梯、倒视眼镜、飞行器、镜面旋转木马等。
- **Char Davies** (2) — 画家与虚拟现实艺术家. 加拿大艺术家，1990 年代初在 Softimage 从绘画转向沉浸式虚拟空间，创立 Immersence 工作室。 https://www.immersence.com
- **Chris Milk** (2) — 艺术家与导演. 美国导演，Within 联合创始人，以早期互动装置与 VR 闻名。 http://milk.co
- **Christa Sommerer** (2) — 媒体艺术家，林茨艺术大学教授. 学过植物学与雕塑，自 1992 年起与 Laurent Mignonneau 合作创作交互式人工生命装置。
- **Daniel Pimentel** (2) — 沉浸式媒体研究者，俄勒冈大学. Daniel Pimentel 研究在 VR 与 AR 中化身为濒危野生动物如何改变人的共情与保护行为。
- **David Dunn** (2) — 作曲家与生物声学研究者. 美国作曲家，常用自制传感器录制昆虫与生态系统的声音世界，并与科学家合作研究小蠹虫声学。
- **David OReilly** (2) — 爱尔兰艺术家、动画师与游戏创作者. 出生于爱尔兰的艺术家，横跨动画、游戏与装置；创作了游戏 Mountain 与 Everything，并为电影《她》设计了游戏片段。 https://www.davidoreilly.com/
- **EPFL Laboratory of Intelligent Systems** (2) — 由 Dario Floreano 领导的 EPFL 机器人实验室. EPFL 的机器人实验室，研究飞行机器人、仿生无人机与沉浸式飞行的身体-机器接口。 https://www.epfl.ch/labs/lis/
- **Harpreet Sareen** (2) — 设计师与研究者，赛博格植物学. 设计师（曾在 MIT Media Lab Fluid Interfaces 组，现任教于 Parsons），把植物与电子和机器人融合。 https://www.media.mit.edu/projects/elowan-a-plant-robot-hybrid/overview/
- **Hiroo Iwata** (2) — 虚拟现实研究者与装置艺术家. 筑波大学教授，触觉界面、行走装置与“装置艺术（device art）”的开拓者；1996–2001 年多次在林茨电子艺术节展出。
- **Hsin-Chien Huang** (2) — 艺术家与 VR 导演. 台湾新媒体艺术家黄心健，长期与 Laurie Anderson 合作；其 VR 作品（《轮回》《星砂之海》）多次在威尼斯获奖。
- **Jae-eun Shin** (2) — 延世大学信息研究生院人机交互与混合现实研究者. 研究增强叙事空间、具身、交互以及 XR 的后人类未来。专著《Experiencing More-than-Humans》合著者，负责其中的批判性 XR 框架。 https://experiencing-mth.github.io
- **Jana Winderen** (2) — 声音艺术家. 挪威艺术家，用水听器在海洋、河流与冰层中录音，2011 年获金尼卡奖。 https://www.janawinderen.com
- **Jun Rekimoto** (2) — 东京大学教授；Sony CSL. 人机交互研究者，其实验室研究人类增强，从随头部运动的无人机到由肌肉电刺激驱动的手。 https://lab.rekimoto.org
- **Kawita Vatanajyankur** (2) — 表演与录像艺术家. 泰国艺术家，拍摄自己扮演家用工具与纺织机器的表演，揭示女性劳动。
- **Kazuhiko Hachiya** (2) — 媒体艺术家. 日本媒体艺术家，作品改写交流方式与身体，从《Inter Discommunication Machine》到 PostPet 邮件软件和 OpenSky 喷气滑翔机。 https://www.petworks.co.jp/~hachiya/
- **Ke Ma** (2) — 心理学家. 与 Bernhard Hommel 一起研究对虚拟手及非身体物体所有感的心理学家。
- **Konstantina Kilteni** (2) — 神经科学家，卡罗林斯卡学院 / 唐德斯研究所. Konstantina Kilteni 研究身体表征与自我触碰；她与 Mel Slater 一起定义了 VR 中的“具身感”。
- **Laura Aymerich-Franch** (2) — 研究者，人形机器人具身. 曾在 CNRS-AIST 联合机器人实验室研究人们如何对 HRP-2 人形机器人产生具身感的研究者。
- **Lauren Lee McCarthy** (2) — 艺术家，UCLA 教授. 艺术家，p5.js 创建者，其表演探讨网络生活中的监控、自动化与照护。 https://lauren-mccarthy.com
- **Laurent Mignonneau** (2) — 媒体艺术家，林茨艺术大学教授. 法国艺术家与工程师，与 Christa Sommerer 共同创作《A-Volve》《Interactive Plant Growing》等交互式人工生命作品。
- **Liam Young** (2) — 思辨建筑师与电影人. 澳大利亚出生的建筑师与导演，创作关于城市、基础设施与技术的思辨电影。 https://liamyoung.org
- **Lynette Wallworth** (2) — 艺术家与电影人. 澳大利亚艺术家，创作沉浸式影片与装置，常与原住民社群合作（《Collisions》《Awavena》）。 https://www.lynettewallworth.com
- **MIT Media Lab Synthetic Characters Group** (2) — 由 Bruce Blumberg 领导的研究组（1996–2003）. 麻省理工媒体实验室研究组，借鉴动物训练研究，制作有情绪与学习能力的自主动物角色。 https://characters.media.mit.edu
- **Marcus Coates** (2) — 以模仿动物与萨满表演创作的艺术家. 英国艺术家，以对动物的彻底共情创作影像、表演与装置，从模仿鸟鸣到萨满仪式。 https://www.marcuscoates.co.uk/
- **Masahiko Inami** (2) — 东京大学先端科学技术研究中心教授；JIZAI Body 项目负责人. 人类增强研究者，以光学迷彩和探索可自由重构身体的 JIZAI Body 项目闻名。
- **Maxis** (2) — 模拟游戏工作室，加利福尼亚. 由 Will Wright 与 Jeff Braun 共同创立，作品有 SimCity、SimAnt、The Sims 与 Spore。 https://www.ea.com/games/the-sims
- **Memo Akten** (2) — 艺术家、研究者；Marshmallow Laser Feast 早期联合创始人. 出生于土耳其的艺术家，以代码、数据与机器学习创作。2011 年联合创立 Marshmallow Laser Feast，2014 年离开并前往 Goldsmiths 攻读人工智能博士。 https://www.memo.tv
- **Michiteru Kitazaki** (2) — 感知研究教授，丰桥技术科学大学. 北崎充晃研究视知觉、身体所有感以及 VR 中的共享身体与额外身体（JST ERATO 稻见自在化身体项目）。
- **Moon Ribas** (2) — 赛博格艺术家与编舞. 加泰罗尼亚编舞家，植入传感器，让自己以振动感受全球各地的地震。 https://www.moonribas.com
- **Mélodie Mousset** (2) — 艺术家. 法瑞艺术家，创作关于身体的 VR 作品，包括《HanaHana》与《The Jellyfish》。
- **Natalia Cabrera** (2) — XR 导演，Nanai Studio 联合创始人. 智利电影人与媒体艺术家（NYU ITP 毕业），与 Selva Gonzalez 共同创办 Nanai Studio，执导《Hypha》与《Symbiotica》。 https://www.nanai.studio
- **Natan Sinigaglia** (2) — 视觉艺术家、实时图形设计师. 意大利视觉艺术家，以生成式与实时图形（vvvv）创作，长期与 Marshmallow Laser Feast 合作《Treehugger》与《Evolver》。 https://www.natansinigaglia.com
- **Omar A. Khan** (2) — 虚拟现实研究者，卡尔加里大学. Omar A. Khan 研究 VR 中非人类身体的化身、移动方式与触觉。
- **Peter König** (2) — 神经科学家，奥斯纳布吕克大学. 认知科学家，其团队研发了 feelSpace 腰带，让佩戴者感受到磁北。 https://feelspace.de
- **Pia Spangenberger** (2) — 教育技术与 VR 研究者. 柏林工业大学研究者，研究沉浸式 VR 在环境教育中的应用。
- **Rebecca Horn** (2) — 身体延伸与动态雕塑艺术家. 德国艺术家（1944–2024），以 1970 年代使用羽毛、角和手套的身体延伸表演闻名，后来创作动态雕塑与电影。
- **Refik Anadol** (2) — 媒体艺术家. 土耳其裔美国艺术家，创作 AI 数据雕塑与沉浸式装置。 https://refikanadol.com
- **Shengdong Zhao** (2) — 人机交互教授，香港城市大学. Shengdong Zhao 领导 Synteraction Lab，研究抬头式与具身交互。
- **Shimabuku** (2) — 艺术家. 日本艺术家，其轻松的行动作品常与动物尤其是章鱼有关。
- **Shuto Takashita** (2) — 人机交互研究者，东京大学稻见实验室. Shuto Takashita 与稻见昌彦、北崎充晃合作，设计让人控制非人形身体部件的映射方式。
- **Superflux** (2) — 思辨设计工作室（Anab Jain 与 Jon Ardern）. 创作思辨未来与超越人类装置的设计工作室。 https://superflux.in
- **Tamiko Thiel** (2) — VR 与 AR 媒体艺术家. 美德艺术家，1990 年代起创作 VR，2010 年起创作场域特定 AR，常关注气候与水。 https://tamikothiel.com
- **Timo Arnall** (2) — 设计师与电影人. 以电影和摄影让 WiFi、RFID、机器视觉等不可见技术变得可见的设计师与电影人。 https://www.elasticspace.com
- **Trevor Paglen** (2) — 艺术家与地理学者. 美国艺术家，以摄影、装置与表演揭示监控，以及机器为机器生成的图像。 https://paglen.studio
- **Victoria Vesna** (2) — 媒体艺术家（UCLA 艺术科学中心）. 媒体艺术家与教授，领导 UCLA 艺术科学中心，关注纳米技术、声音与生态。 https://victoriavesna.com
- **Winslow Porter** (2) — 沉浸式制片人与创意总监. New Reality Co. 联合创始人；与 Milica Zec 共同创作《Tree》，之后又创作了多感官 VR 作品《Forager》，呈现蘑菇的一生。 https://www.treeofficial.com
- **Yuting Xue** (2) — 媒体艺术家与研究者. 与 Elke Reinhuber 合作，研究关于植物感知与人-植物共生的沉浸式作品。
- **neurowear** (2) — 脑波可穿戴设计团队. 东京的设计团队，制作了由脑波驱动的可穿戴物，如猫耳 necomimi 和尾巴 shippo。
- **thatgamecompany** (2) — 独立游戏工作室，洛杉矶. 由陈星汉与 Kellee Santiago 共同创立，作品有 flOw、Flower、Journey 与 Sky。 https://thatgamecompany.com/
- **Abandon Normal Devices** (1) — 英格兰西北部的艺术委约机构与艺术节. 委约艺术、技术与自然景观交叉作品的艺术机构，在格里兹代尔森林、卡斯尔顿等乡野场地举办 AND 艺术节。 https://www.andfestival.org.uk
- **Adam Drogemuller** (1) — 虚拟现实研究者，南澳大学. Adam Drogemuller 研究沉浸式分析与 VR 中的身体重映射。
- **Adam May** (1) — 沉浸式导演（Vision3）. 英国立体与场景式沉浸作品创作者，与 Chris Campkin 合作《Critical Distance》。 https://www.vision3.tv
- **Adriaan Lokman** (1) — 动画导演. 荷兰动画导演，以关于空气与湍流的抽象影片闻名（《Barcode》《Flow》）。
- **Agnes Hegedüs** (1) — 媒体艺术家. 匈牙利出生的媒体艺术家，与卡尔斯鲁厄 ZKM 关系密切；作品有《Handsight》《Fruit Machine》《Things Spoken》等。
- **Ai Hasegawa** (1) — 艺术家、思辨设计师. 日本艺术家与设计师（毕业于 RCA Design Interactions），以生殖身体为切入点，在思辨设计中追问生物技术与物种边界。
- **Alex Metcalf** (1) — 设计师，Tree Listening 项目. 英国设计师（皇家艺术学院毕业），2007 年开发 Tree Listening 装置，放大活树内部的声音。 https://treelistening.co.uk
- **Alexander Mordvintsev** (1) — Google 研究科学家. 2015 年发明 DeepDream 的工程师，DeepDream 用来可视化神经网络学会看见的东西。
- **Alinta Krauth** (1) — 新媒体艺术家与研究者. 澳大利亚艺术家、电子诗人与注册蝙蝠救护员，与狐蝠和狗一起、也为它们创作互动与 AI 作品。 https://www.alintakrauth.com
- **Allora & Calzadilla** (1) — 艺术家二人组（Jennifer Allora 与 Guillermo Calzadilla）. 自 1990 年代起常驻圣胡安的艺术家二人组，以雕塑、表演与影像处理生态、声音与地缘政治议题；曾代表美国参加 2011 年威尼斯双年展。
- **Alvaro Cassinelli** (1) — 研究者与艺术家. 研究者（曾在东京大学石川实验室，现任职香港城市大学），研究感官延伸与互动艺术。
- **Alvin Lucier** (1) — 作曲家（1931–2021）. Sonic Arts Union 的实验作曲家，以声学现象本身为音乐主题（《I Am Sitting in a Room》《Music for Solo Performer》）。
- **Amaury La Burthe** (1) — 声音设计师与 VR 导演（AudioGaming）. 法国声音设计师，AudioGaming 创始人，《Notes on Blindness: Into Darkness》联合导演。
- **Andreas Heinecke** (1) — Dialogue in the Dark 创始人. 德国社会企业家，1988 年创立展览 Dialogue in the Dark，并创办 Dialogue Social Enterprise。
- **Anil Seth** (1) — 神经科学家，萨塞克斯大学. 神经科学家，《Being You》作者，把感知描述为“受控的幻觉”。
- **Animal Equality** (1) — 国际动物保护组织. 2006 年在西班牙成立的非营利组织，记录养殖业实况并为农场动物倡议；制作了 360° 系列 iAnimal。 https://animalequality.org/
- **Anna Samira Praetorius** (1) — 游戏研究者，海德堡 SRH 大学. Anna Samira Praetorius 综述化身与普罗透斯效应的研究。
- **Another Axiom** (1) — Gorilla Tag 背后的 VR 游戏工作室. 围绕 Gorilla Tag 成立的工作室，该社交 VR 游戏最初由 Kerestell “Lemming” Smith 独立开发。 https://gorillatagvr.com/
- **Ant Farm** (1) — 建筑与媒体艺术团体（1968–1978）. 激进建筑团体（Chip Lord、Doug Michels、Curtis Schreier 等），以《Cadillac Ranch》《Media Burn》闻名。
- **Arika** (1) — 游戏开发商. 日本开发商，制作由任天堂发行的《Endless Ocean》潜水游戏系列。
- **Arnaud Colinart** (1) — 沉浸式制片人与导演（Atlas V）. 法国制片人、Atlas V 联合创始人；联合执导《Notes on Blindness》VR 版。
- **Ars Electronica Futurelab** (1) — Ars Electronica 的艺术与技术研究实验室. Ars Electronica Center 的研发实验室，1996 年成立，制作沉浸式、机器人与公共空间装置。 https://ars.electronica.art/futurelab/
- **Art Orienté Objet** (1) — 艺术家二人组（Marion Laval-Jeantet 与 Benoît Mangin）. 1991 年由 Marion Laval-Jeantet 与 Benoît Mangin 创立的法国二人组，以表演和生物艺术探讨生态、民族学与人-动物关系。
- **Atsuko Tanaka** (1) — 具体派艺术家. 日本具体派艺术家（1932–2005），以《电气服》以及圆与电线的绘画闻名。
- **Atsushi Wada** (1) — 动画导演. 日本独立动画作者（2012 年以《大兔子》获柏林银熊奖），以缓慢、荒诞的手绘动画闻名；《猫が見えたら》是他的首部 VR 作品，由讲谈社 VR Lab 制作。
- **Austin Stewart** (1) — 艺术家，爱荷华州立大学教授. 美国艺术家与教育者，作品追问技术与畜牧业；创作了为鸡设计 VR 的思辨项目 Second Livestock。 https://www.theaustinstewart.com/
- **Awaceb** (1) — 独立游戏工作室，蒙特利尔. 由来自新喀里多尼亚的 Phil Crifo 与 Vincent Pierre-Toulouse 创立，开发了 Tchia。 https://www.awaceb.com/tchia
- **BCL (Shiho Fukuhara & Georg Tremmel)** (1) — 生物艺术团体. 由日本设计师福原志保与奥地利艺术家 Georg Tremmel 创立的艺术研究团体；始于 Biopresence 项目（2004），后有《Common Flowers》《Ghost in the Cell》等作品。 https://www.biopresence.com/
- **Baobab Studios** (1) — 交互动画工作室. 2015 年由 Eric Darnell 与 Maureen Fan 创立的动画工作室，以 VR 短片 Invasion!、Asteroids! 和 Crow: The Legend 闻名。 https://www.baobabstudios.com/
- **Barbara Schuler** (1) — 交互设计师，苏黎世艺术大学. Barbara Schuler 与同事制作了一个成为狩猎蜘蛛的多感官 VR 体验。
- **Bartabas** (1) — 马术剧场导演（Zingaro 剧团）. 法国导演，Zingaro 马术剧团创始人，以马为主角的演出闻名。 https://www.bartabas.fr
- **Bartholomäus Traubeck** (1) — 媒体艺术家. 出生于德国的媒体艺术家，把自然结构转译为声音与数据。 https://traubeck.com
- **BeAnotherLab** (1) — 艺术与研究团体. 以 VR、表演与神经科学创作具身体验的跨学科团体。 https://beanotherlab.org
- **Beatriz da Costa** (1) — 艺术家与研究者，加州大学欧文分校（1974–2012）. 横跨生物学、行动主义与工程的战术媒体艺术家，《Tactical Biopolitics》编者。
- **Behnaz Farahi** (1) — 设计师与创意技术专家. 生于伊朗的设计师、建筑师与创意技术专家，用软体机器人与计算机视觉制作能变形、能感知的服装。 https://behnazfarahi.com
- **Ben Esposito** (1) — 独立游戏设计师，洛杉矶. 游戏设计师，创作了 Donut County，曾参与 The Unfinished Swan。 http://donutcounty.com
- **Ben Joseph Andrews** (1) — 导演与 XR 艺术家. 澳大利亚导演，与制片人 Emma Roberts 共同创作《Gondwana》——一部为期 24 小时的丹翠雨林持续性 VR 模拟。 https://gondwanavr.com
- **Bernhard Hommel** (1) — 认知心理学家. 认知心理学家，以事件编码理论及行动与自我表征研究闻名。
- **Bernie Krause** (1) — 声景生态学家、音乐人. 美国音乐人与声景生态学家，提出 biophony（生物声）与 geophony（地球声）概念，自 1968 年起录制野外栖息地。
- **Bianca Kennedy** (1) — 艺术家. 德国艺术家，与 The Swan Collective 合作，用手工雕塑加摄影测量制作 VR。
- **Bill Fontana** (1) — 声音雕塑家. 美国艺术家，把河流、桥梁和机器的实时声音与振动传入建筑空间。 https://resoundings.org
- **Bill Vorn** (1) — 艺术家，机器人艺术. 康考迪亚大学教授，创作机器人装置与表演的艺术家。
- **BlueTwelve Studio** (1) — 独立游戏工作室，法国南部. 由 Koola 与 Viv 创立的工作室，首作 Stray 让玩家扮演一只身处机器人城市的猫。 https://stray.game
- **Breaking Walls** (1) — 独立游戏工作室. 开发了 AWAY: The Survival Series 的工作室，该游戏采用自然纪录片风格。 https://www.breakingwalls.co/
- **Breakpoint One** (1) — XR 工作室. 德国 XR 工作室，与莱布尼茨植物遗传与作物研究所（IPK）合作开发《VR Plant Journey》。 https://breakpoint.one
- **Brenda Laurel** (1) — 设计师、研究者，《Computers as Theatre》作者. 美国交互设计师与研究者，著有《Computers as Theatre》，联合创立 Purple Moon；在 Interval Research 制作了 VR 作品 Placeholder。
- **Brett Graham** (1) — 毛利族雕塑家. Ngāti Korokī Kahukura 部落雕塑家；2024 年代表新西兰参加威尼斯双年展。
- **Brigitte Baptiste** (1) — 生物学家与酷儿生态学者. 哥伦比亚生物学家，曾任洪堡研究所所长、EAN 大学校长，以酷儿生态学著称。
- **Britt Hatzius** (1) — 从事表演与电影的艺术家. 常驻布鲁塞尔的德国艺术家，其表演与电影探讨感知、语言和参与。
- **Bruno Munari** (1) — 艺术家与设计师（1907–1998）. 意大利艺术家、设计师与教育者，以“无用的机器”、儿童书和游戏式的设计研究闻名。
- **Cat Jones** (1) — 从事身体错觉与气味的艺术家. 澳大利亚艺术家、表演者与作家，结合身体错觉、嗅觉与神经科学创作；2016 年获萨达吉奇气味实验作品奖。 https://catjones.net
- **Charles Foster** (1) — 作家、兽医与出庭律师. 英国作家、兽医，牛津大学 Green Templeton 学院研究员；著有《Being a Beast》，因此共享 2016 年搞笑诺贝尔生物学奖。
- **Chris Campkin** (1) — 创意合作者（Vision3）. Vision3《Critical Distance》的主要合作者。
- **Chris Watson** (1) — 野生动物录音师. 英国录音师，Cabaret Voltaire 创始成员，长期为 BBC 自然历史节目录音。
- **Chris Woebken** (1) — 设计师、未来研究者. 在纽约工作的德国设计师，Extrapolation Factory 联合创始人，作品被 MoMA 收藏。 https://www.chriswoebken.com/
- **Christina Kubisch** (1) — 声音艺术家. 德国作曲家与声音艺术家，自 1970 年代起以电磁感应创作。 https://christinakubisch.de
- **Clover Studio** (1) — 卡普空旗下游戏工作室，大阪（2004–2007）. 卡普空旗下的短命工作室，由稻叶敦志与神谷英树主导，作品有《红侠乔伊》与《大神》。
- **Coffee Stain Studios** (1) — 游戏工作室，舍夫德. 瑞典工作室，作品包括 Goat Simulator 与 Satisfactory。 https://www.coffeestainstudios.com/
- **Crispy's!** (1) — 游戏工作室，东京. 由片冈阳平创立的工作室，与索尼 Japan Studio 共同开发《东京丛林》。
- **Croteam** (1) — 游戏工作室. 克罗地亚工作室，作品有 Serious Sam 与 The Talos Principle。
- **Cyborg Nest** (1) — 感官增强公司. 由 Liviu Babitz 与 Scott Cohen 创立、Neil Harbisson 与 Moon Ribas 早期参与的公司，推出了 North Sense。
- **Cyril Laurier** (1) — 作曲家与数据艺术家. 法国西班牙裔作曲家与数据艺术家，从事生成声音与 AI 创作。
- **Céleste Boursier-Mougenot** (1) — 创作活体声音装置的艺术家与作曲家. 法国艺术家与作曲家，代表法国参加 2015 年威尼斯双年展，创作由鸟、水和风演奏的声音作品。
- **DRIFT** (1) — Lonneke Gordijn 与 Ralph Nauta 的艺术工作室. 2007 年创立的荷兰工作室，把椋鸟群飞、花朵开合等自然行为转译为机械，创作动态雕塑与表演。 https://studiodrift.com
- **Daan Roosegaarde** (1) — 艺术家与设计师. 荷兰设计师，其 Studio Roosegaarde 创作关于景观与气候的大型光作品。 https://www.studioroosegaarde.net
- **Daito Manabe** (1) — 艺术家与程序员，Rhizomatiks. 日本艺术家与程序员，Rhizomatiks 联合创始人，以数据、身体与电刺激创作。 https://daito.ws
- **Danfung Dennis** (1) — 电影人. 美国电影人，Condition One 创始人，执导 VR 系列《This Is Climate Change》。
- **Dani Clode** (1) — 设计师，可塑性实验室（剑桥大学 / 伦敦大学学院）. Dani Clode 在皇家艺术学院读研时设计了“第三拇指”，并与 Tamar Makin 的实验室一起继续开发。 https://www.daniclode.com
- **Danyang Peng** (1) — 人机交互研究者，庆应义塾大学媒体设计研究科. Danyang Peng 设计受动物感官启发的触觉导航。
- **Data Garden** (1) — 植物音乐公司. 由 Joe Patitucci 创办的公司，推出 MIDI Sprout 与 PlantWave，把植物生物电信号转化为音乐的设备。 https://plantwave.com
- **David Chaseling** (1) — 独立 VR 开发者. 独立开发者，与 Dylan Van Beek 共同开发了 VR 章鱼平台游戏 I Am Octopus。
- **David Eagleman** (1) — 神经科学家，斯坦福大学；Neosensory 联合创始人. 神经科学家与作家，主张大脑可以通过皮肤学会新的感官，并与 Scott Novich 一起打造了 VEST。 https://eagleman.com
- **David Rothenberg** (1) — 音乐人、跨物种音乐哲学家. 美国单簧管演奏者、哲学家、新泽西理工学院教授，著有《Why Birds Sing》，与鸟、鲸和昆虫现场合奏。
- **Dean A. Waters** (1) — 蝙蝠生物学家，利兹大学 / 约克大学. Dean Waters 研究蝙蝠回声定位，并较早地为虚拟世界中的人类导航构建蝙蝠声呐模型。
- **Denilson Baniwa** (1) — 巴尼瓦族艺术家、策展人与社会活动者. 出生于亚马孙州内格罗河畔的达里村，以绘画、壁画、表演和数字媒介在巴西艺术界主张原住民的在场。 https://www.biennaleofsydney.art/participants/denilson-baniwa/
- **Deniz Tortum** (1) — 电影人与媒体艺术家. 土耳其电影人与研究者（MIT 开放纪录片实验室校友），创作横跨纪录片、VR 与装置。
- **Diana Domingues** (1) — 媒体艺术家与研究者，卡希亚斯-杜索尔大学. 巴西互动艺术、机器人艺术与远程通信艺术的先驱（1947–2025），曾在卡希亚斯-杜索尔大学主持 ARTECHNO 研究组。 https://digitalartarchive.at/database/artist/15/
- **Diego Galafassi** (1) — 艺术家与可持续性研究者. 巴西裔艺术家与研究者（斯德哥尔摩韧性中心），以沉浸式媒体关注气候。
- **Dominic Wilcox** (1) — 设计师、发明家. 英国设计师与艺术家，以趣味发明和参与式项目闻名。 https://www.dominicwilcox.com/
- **Don Allison** (1) — VR 研究者，佐治亚理工学院 GVU 中心. 佐治亚理工学院研究生研究者，1990 年代中期与 Larry F. Hodges 及亚特兰大动物园共同主导“虚拟现实大猩猩展”。
- **Double Dagger Studio** (1) — 独立游戏工作室，西雅图. 由前 Valve 设计师 Matt T. Wood 创立的小型工作室，开发了 Little Kitty, Big City。
- **Dunne & Raby** (1) — 批判性设计工作室（Anthony Dunne、Fiona Raby）. Anthony Dunne 与 Fiona Raby 曾主持皇家艺术学院交互设计专业，界定了思辨设计与批判性设计。 http://dunneandraby.co.uk
- **E-Line Media** (1) — 游戏开发与发行商. 与教育和科研机构合作做游戏的工作室，作品包括《Never Alone》和《Beyond Blue》。 https://elinemedia.com
- **Ed Annunziata** (1) — 游戏设计师，Ecco the Dolphin 的创作者. 世嘉设计师，构想了 Ecco the Dolphin（1992），与 Novotrade International 共同开发。
- **Edo Fouilloux** (1) — 创意技术专家. 社交音乐 VR 平台 PatchXR 的创意总监与联合创始人。 https://patchxr.com
- **Edwina Portocarrero** (1) — 设计师与研究者. 设计师，前 MIT Media Lab（Responsive Environments 组）研究者，主导 ListenTree。
- **Ehud Ahissar** (1) — 神经科学家，魏茨曼科学研究所. Ehud Ahissar 研究大鼠与人的主动触觉。
- **Ehud Sharlin** (1) — 计算机科学教授，卡尔加里大学. Ehud Sharlin 领导 uTouch 研究组，研究人机交互与实体界面。
- **Elie Zananiri** (1) — 创意技术专家. 创意编程者，《Forager》技术总监，为蘑菇生长搭建了体积化延时摄影管线。
- **Elisa Giaccardi** (1) — 设计研究者，米兰理工大学. 设计研究者（曾任职代尔夫特理工大学），开创以物为中心的设计，使用物品自身采集的数据。
- **Eliza McNitt** (1) — 导演. 美国导演，创作以科学为基础的 VR，包括《Spheres》与《Fistful of Stars》。
- **Elke Reinhuber** (1) — 媒体艺术家与学者. 媒体艺术家与学者（香港城市大学），研究扩延电影与沉浸式媒介。
- **Emblematic Group** (1) — 沉浸式新闻工作室. 由 Nonny de la Peña 创立的工作室，制作房间尺度的沉浸式新闻。 https://emblematicgroup.com
- **Emi Tamaki** (1) — 人机交互研究者与创业者. PossessedHand（驱动佩戴者手指的肌肉电刺激臂带）的作者，后创立 H2L 公司。
- **Emma Davie** (1) — 纪录片导演. 苏格兰纪录片导演、爱丁堡艺术学院教师，与 Peter Mettler 联合导演 Becoming Animal。
- **Emma Roberts** (1) — XR 制片人. 澳大利亚制片人，《Gondwana VR》的共同创作者。 https://gondwanavr.com
- **EpiXR Games** (1) — 独立游戏工作室，德国. 德国小型工作室，开发了平静的鸟类飞行游戏系列 Aery，并推出 VR 版。
- **Eric Boyd** (1) — 创客，Sensebridge. Sensebridge 联合创始人，设计了开源罗盘脚环 North Paw。
- **Eric Chahi** (1) — 游戏设计师. 法国游戏设计师，《Another World》作者，育碧蒙彼利埃《From Dust》创意总监。
- **Erin B. Ryan** (1) — 动物福利研究者，不列颠哥伦比亚大学. Erin Ryan 在 Daniel Weary 的动物福利项目中研究人如何站在农场动物的角度思考。
- **Es Devlin** (1) — 艺术家与舞台设计师. 英国艺术家，以结合光、文字与声音的大型雕塑和舞台设计闻名。 https://esdevlin.com
- **Eugene Birman** (1) — 作曲家. 作曲家，香港浸会大学音乐系助理教授，创作大型、以数据驱动的音乐剧场。
- **Firepunchd Games** (1) — 独立 VR 游戏工作室，德国. 德国小型工作室，制作了由 Devolver Digital 发行的 VR 物理游戏 Tentacular。 https://www.tentacular.com/
- **Francois Knoetze** (1) — 艺术家与电影人. 南非艺术家，用废弃材料制作可穿戴雕塑，并在《Cape Mongo》《Core Dump》等影片中穿着它们进行表演。
- **Frank Schumann** (1) — 认知科学家. 研究感官增强的认知科学家，曾与 Peter König 及 J. Kevin O'Regan 合作。
- **Frank Swain** (1) — 科学作家. 科学记者，也是助听器使用者，与声音艺术家 Daniel Jones 一起改造助听器来“听见”WiFi。
- **Freedom Conservation** (1) — 猛禽保护与拍摄项目. 由驯鹰人 Jacques-Olivier Travers 领导的法国组织，重新引入白尾海雕，并让携带相机的训练猛禽飞越城市与冰川。
- **Frictional Games** (1) — 游戏工作室. 瑞典工作室，作品包括 Amnesia 系列与 SOMA。 https://frictionalgames.com
- **Frontier Developments** (1) — 游戏开发商，剑桥. 由 David Braben 创立的英国开发商，作品有 Elite: Dangerous、Planet Zoo 与 PS2 游戏 Dog's Life。 https://www.frontier.co.uk/
- **Fujiko Nakaya** (1) — 雾雕塑艺术家. 日本艺术家，自 1970 年大阪世博会起与工程师 Thomas Mee 合作制作人工雾雕塑。
- **Fumio Mizuno** (1) — 工程师，东北工业大学. Fumio Mizuno 制作了 Virtual Chameleon，一种让左右眼各看一个方向的可穿戴设备。
- **Gamification Group, Tampere University** (1) — 游戏研究团队，坦佩雷大学. Juho Hamari 领导的游戏化研究组研究游戏、VR 与玩，其中包括 Oğuz 'Oz' Buruk 关于具身与超越人类之游戏的研究。
- **Gattai Games** (1) — 独立游戏工作室，新加坡. 新加坡工作室，由学生项目发展出回声定位恐怖游戏 Stifled。 https://gattaigames.com/
- **Geoff Cox** (1) — 软件文化研究学者. 伦敦南岸大学艺术与计算文化教授，APRJA 联合主编。
- **George Monbiot** (1) — 作家与环保倡导者. 英国记者，著有《Feral》与《Regenesis》。
- **Gershon Dublon** (1) — 艺术家与工程师，slow immediate 联合创始人. 艺术家兼工程师，MIT Media Lab 博士，在湿地与森林中搭建传感器网络；与 Xin Liu 共同创办 slow immediate。 https://slowimmediate.com
- **Giant Squid** (1) — 独立游戏工作室. 由《Journey》美术总监 Matt Nava 创立的工作室，作品有《ABZÛ》与《The Pathless》。 https://abzugame.com
- **Gowrishankar Ganesh** (1) — 机器人与神经科学研究者，法国国家科研中心 LIRMM. Gowrishankar Ganesh 研究人的运动控制，以及对工具与机器人的具身。
- **Greg Marshall** (1) — 海洋生物学家与电影人，Crittercam 发明者. 海洋生物学家，发明了动物携带式摄像机 Crittercam，1986 年起在美国国家地理学会持续开发。
- **Guto Nóbrega** (1) — 艺术家与教授，里约热内卢联邦大学 NANO 实验室. 巴西艺术家与研究者，用活体植物与机器人系统制作混合生物，并在里约热内卢联邦大学创立 NANO 实验室（艺术与新有机体中心）。 https://cargocollective.com/gutonobrega
- **Haoran Xie** (1) — 人机交互研究者，北陆先端科学技术大学院大学. Haoran Xie 的实验室设计可穿戴与人体增强设备。
- **Harun Farocki** (1) — 电影人与艺术家（1944–2014）. 德国电影人，其论文电影与装置研究由机器生成、为机器而生成的图像。 https://www.harunfarocki.de
- **Haus-Rucker-Co** (1) — 建筑与艺术小组（Laurids Ortner、Günter Zamp Kelp、Klaus Pinter）. 1967 年成立于维也纳，其“心智扩展计划”制作了充气空间与改变感知的头盔。
- **Heather Barnett** (1) — 以黏菌为媒介的艺术家与研究者. 中央圣马丁学院的艺术家与教育者，自 2009 年起与多头绒泡菌合作。 https://heatherbarnett.co.uk
- **Hemisphere Games** (1) — 独立游戏工作室，多伦多. 由 Eddy Boxerman 创立的多伦多工作室，开发了 Osmos。 http://www.hemispheregames.com/
- **Herobeat Studios** (1) — 独立游戏工作室，西班牙. 西班牙工作室，开发了 Endling - Extinction is Forever。
- **Hildegard Westerkamp** (1) — 作曲家与声音漫步艺术家. 生于德国的作曲家，“世界声景计划”成员，声音漫步的先驱。 https://www.hildegardwesterkamp.ca
- **Himali Singh Soin** (1) — 艺术家与作家. 印度艺术家与作家，以影片、表演与文本围绕冰、岩石与深时间构建推想性的神话。 https://www.himalisinghsoin.com
- **Hira Nabi** (1) — 艺术家与电影人. 巴基斯坦艺术家与电影人，关注劳动、生态与剥夺议题；2020 年 Prince Claus 新一代奖得主。
- **Hiroki (Hill) Kobayashi** (1) — 东京大学“人-计算机-生物圈交互”研究者. 日本声音生态学者与人机交互研究者（约 2010 年任世界声音生态论坛主席），通过实时声音把人与远方森林连接起来，代表作有《Tele Echo Tube》和 Cyberforest 录音项目。
- **Ho Tzu Nyen** (1) — 艺术家与电影人. 新加坡艺术家，以录像装置与剧场重写东南亚的历史与神话；2011 年代表新加坡参加威尼斯双年展。
- **Holition** (1) — 创意创新工作室. 制作互动与沉浸式数字装置的伦敦工作室。 https://holition.com
- **Hongyu Zhou** (1) — 人机交互研究者，悉尼大学. Hongyu Zhou 与 Anusha Withana 一起研究额外肢体的控制。
- **House House** (1) — 独立游戏工作室，墨尔本. 墨尔本的四人工作室，作品有 Push Me Pull You 与 Untitled Goose Game。 https://goose.game
- **Iffa Nurlatifah** (1) — 数字媒体艺术家与研究者，多媒体大学. Iffa Nurlatifah 创作以非人类视角拍摄的 VR 影片。
- **Infuse Studio** (1) — 独立游戏工作室，阿德莱德. 澳大利亚小型工作室，开发了 Spirit of the North 及续作。 https://playspiritofthenorth.com/
- **Institute of Digital Fashion** (1) — 数字时尚团体（Leanne Elliott Young 与 Catty Tay）. 伦敦团体，创作性别非常规化身、三维高定与 AR/VR 体验。
- **Interactive Architecture Lab** (1) — 伦敦大学学院巴特莱特建筑学院的研究实验室，由 Ruairi Glynn 领导. 巴特莱特建筑学院的硕士项目与实验室，研究响应式、机器人化与有生命的建筑。 http://www.interactivearchitecture.org
- **Interactive Media Foundation** (1) — 柏林非营利机构，制作交互与 VR 纪录作品. 位于柏林的非营利基金会，资助并制作交互叙事与 VR 项目，与 Filmtank 和柏林自然历史博物馆合作完成了 Inside Tumucumaque。 https://www.interactivemediafoundation.com/
- **Issay Rodriguez** (1) — 视觉艺术家. 菲律宾艺术家，创作涉及装置、纺织与虚拟现实，常以蜜蜂等超越人类的世界为研究对象；曾参展 2017 年威尼斯双年展与伦敦 Gasworks。
- **J. Kevin O'Regan** (1) — 心理学家，感觉运动理论. 心理学家，其感觉运动理论认为，感知就是掌握感觉如何随动作而变化。
- **Jaan Aru** (1) — 神经科学家，塔尔图大学. Jaan Aru 研究意识与学习；他与 Madis Vasser 进行了“人类章鱼”VR 实验。
- **Jae Rhim Lee** (1) — 艺术家，Coeio 创始人. 艺术家与 MIT 出身的设计师，发起“无限葬礼计划”，训练蘑菇分解人体。 https://coeio.com
- **Jaime Martínez Harms** (1) — 生物学家，智利农业研究所 La Cruz 中心. 智利农业研究所（INIA）La Cruz 中心的生物学家，研究传粉者视觉与植物-传粉者互动。
- **Jakob von Uexküll** (1) — 生物学家（1864–1944）. Jakob von Uexküll 开创了“环境界”（Umwelt）研究，即每种动物特有的感知世界。
- **James Bridle** (1) — 艺术家与作家. 艺术家，《New Dark Age》《Ways of Being》作者，关注技术、感知与超越人类的智能。 https://jamesbridle.com
- **Jan Waligórski** (1) — 认知哲学研究者. Jan Waligórski 撰写关于具身、VR 与其他动物视角的论文。
- **Jascha Sohl-Dickstein** (1) — 机器学习研究者；曾在加州大学伯克利分校从事神经科学研究. Jascha Sohl-Dickstein 与 Michael DeWeese 实验室一起制作了 Sonic Eye 超声波回声定位头戴设备。
- **Jean-Luc Lugrin** (1) — VR 研究者，维尔茨堡大学. 维尔茨堡大学人机交互组研究者，研究化身与具身。
- **Jenna Sutela** (1) — 以活体媒介与机器学习创作的艺术家. 芬兰艺术家，与黏菌、细菌和神经网络合作，探索跨物种与机器的语言。 https://jennasutela.com
- **Jennifer Molnar** (1) — 机器人与虚拟现实研究者. Jennifer Molnar 与 Yigit Mengüç 合作研究软体机器人与非拟人之手。
- **Jenova Chen** (1) — 游戏设计师. 生于上海的游戏设计师，毕业于南加州大学互动媒体专业，thatgamecompany 联合创始人。 https://www.jenovachen.com
- **Jeremy Mendes** (1) — 互动设计师. 加拿大互动电影人，为加拿大国家电影局联合执导《Bear 71》。
- **Jessica Rath** (1) — 与植物和传粉者合作的艺术家. 美国艺术家，其雕塑与装置项目与育种者、传粉者科学家和栖息地修复合作。 http://jessicarath.com/
- **John Desnoyers-Stewart** (1) — 艺术家与人机交互研究者. 西蒙菲莎大学 iSpace 实验室研究者，研究社交 VR 与生物反馈装置。
- **John Luther Adams** (1) — 作曲家. 美国作曲家，音乐源自阿拉斯加的景观与天气，2014 年获普利策奖。 https://www.johnlutheradams.net
- **Jonah King** (1) — 艺术家. 美国艺术家，创作 VR、影像与雕塑；Stevens 理工学院助理教授。 https://jonahking.com
- **Jonathon Keats** (1) — 观念艺术家、实验哲学家. 美国观念艺术家与作家，其思想实验面向其他物种，包括为植物拍的电影和为蜜蜂编的芭蕾。
- **Jooyoung Oh** (1) — 媒体艺术家、研究者（KAIST 文化技术研究生院）. 韩国艺术家（1991 年生），以游戏、人工认知模型、VR 与无人机创作；2019 年获 Ars Electronica IEEE BRAIN 奖。 https://k-artist.com/Artist_Posts.php?tab_num=tab4&co_id=1749371641
- **Joren Vandenbroucke** (1) — 动画与 VR 导演（Animal Tank）. 比利时 Animal Tank 工作室导演，以喜剧 VR 与动画见长。 https://www.animaltank.com
- **Joseph Beuys** (1) — 艺术家、雕塑家与表演艺术家. 德国艺术家（1921–1986），他与动物（一只死兔和一只活郊狼）进行的“行动”，使与动物相遇成为战后表演艺术的核心。
- **Julius Neubronner** (1) — 药剂师、鸽子摄影发明者. 德国药剂师（1852–1932）与业余摄影先驱，1908 年为信鸽携带的微型相机申请专利。
- **Jörg Courtial** (1) — VR 导演（Faber Courtial）. 德国导演，数字工作室 Faber Courtial 联合创始人，以关于太空与进化的 VR 与球幕影片闻名。 https://www.fabercourtial.de
- **K. Carrie Armel** (1) — 认知神经科学研究者. 与 V. S. Ramachandran 一起证明人可以把触觉投射到一张桌子上的研究者。
- **Kate Crawford** (1) — 人工智能与社会研究学者. 《Atlas of AI》作者，研究机器学习数据集的政治。
- **Katerina Kamprani** (1) — 建筑师与设计师. 希腊设计师，The Uncomfortable（一系列故意无法好用的日常物品）的作者。 https://www.theuncomfortable.com
- **Keiken** (1) — 以游戏引擎、触觉技术与世界构建创作的艺术家团体. 2015 年由 Tanya Cruz、Hana Omori 与 Isabel Ramos 创立；Keiken（日语“体验”）制作游戏世界、AR 滤镜与可穿戴触觉“子宫”，想象后人类的身体与共情方式。 https://keiken.cloud/
- **Keisuke Suzuki** (1) — 研究者，意识科学与 VR. 萨塞克斯大学 Sackler 意识科学中心研究者，构建用于研究感知的 VR 平台。
- **Keita Higuchi** (1) — 人机交互研究者. 在东京大学历本纯一实验室期间制作了 Flying Head——一架跟随操作者头部运动的无人机。
- **Ken Goldberg** (1) — 艺术家与机器人学家，加州大学伯克利分校. 机器人学家兼艺术家，创作了早期的互联网远程机器人作品，包括 Telegarden。 https://goldberg.berkeley.edu
- **Ken Thaiday Snr** (1) — 托雷斯海峡岛民艺术家与舞者. 来自埃鲁布岛（达恩利岛）的梅里亚姆艺术家，制作双髻鲨（beizam）动态舞蹈头饰，1987 年参与创立达恩利岛舞团。
- **Kenichi Okada** (1) — 设计师. 日本设计师，毕业于皇家艺术学院 Design Interactions 专业，与 Chris Woebken 共同创作 Animal Superpowers。
- **Kevin Ponto** (1) — 虚拟现实研究者，威斯康星大学麦迪逊分校发现研究所. Kevin Ponto 与 David Gagnon 的 Field Day Lab 合作，研究用于科学与学习的虚拟环境。
- **Kevin Warwick** (1) — 工程师，控制论研究者. 英国工程师，在 Project Cyborg（1998、2002）中把芯片和神经电极阵列植入自己的身体。
- **Kingsley Ng** (1) — 视觉艺术家. 香港艺术家，以光、场域与声音创作；2026 年与许诺一起代表香港参加威尼斯双年展。
- **Knowbotic Research** (1) — 媒体艺术小组（Yvonne Wilhelm、Christian Hübler、Alexander Tuchacek）. 1991 年成立的艺术小组，为数据网络和远方环境制作界面。
- **Krillbite Studio** (1) — 独立游戏工作室，挪威. 由学生创立的挪威工作室，作品有 The Plan、Among the Sleep 与 Mosaic。 http://krillbite.com/
- **Kuang-Yi Ku** (1) — 生物艺术家、社会设计师、牙医. 台湾生物艺术家、执业牙医，毕业于埃因霍温设计学院；以 Tiger Penis Project 和 Bat Night Market 闻名。 https://www.kukuangyi.com/
- **Kyle McDonald** (1) — 以代码创作的艺术家. 以计算机视觉和机器学习创作的媒体艺术家，常在公共空间中进行。 https://kylemcdonald.net
- **Lai Guan-yuan** (1) — XR 导演. 台湾导演，为台湾“文化黑潮 XR 沉浸式创作”计划制作了混合现实文学纪录作品《黑色的翅膀》。
- **Larry F. Hodges** (1) — VR 研究者，佐治亚理工学院，后任职克莱姆森大学. 虚拟环境研究者，以 VR 暴露疗法与临场感研究闻名。
- **Laurie Anderson** (1) — 艺术家、作曲家与表演者. 美国多媒体艺术家，与黄心健合作多件 VR 作品，包括《Chalkroom》与《To the Moon》。 https://laurieanderson.com
- **Lawrence Lek** (1) — 模拟艺术家与电影人. 马来西亚华裔艺术家，用游戏引擎制作影片与开放世界模拟，关注人工智能、中华未来主义与机器意识。 https://lawrencelek.com
- **Leah Barclay** (1) — 声音艺术家与声学生态学者. 澳大利亚作曲家与研究者，在河流、珊瑚礁和生物圈保护区用水听器工作。 https://leahbarclay.com
- **Leanne Allison** (1) — 电影人. 加拿大野生动物电影人，联合执导加拿大国家电影局互动纪录片《Bear 71》。
- **Lena Thiele** (1) — 互动媒体导演. 德国互动纪录片导演；与 Sebastian Baurmann、Dirk Hoffmann 为 Interactive Media Foundation 联合执导《Myriad》。 https://www.interactivemedia-foundation.com
- **Leslie Kay** (1) — 工程师，超声波助行器发明者（1922–2020）. Leslie Kay 自 1960 年代起设计了 Sonic Torch 与双耳 Sonicguide，为盲人设计的空气声呐辅助设备。
- **Lienzo** (1) — 独立游戏工作室. 墨西哥独立游戏工作室，代表作《Mulaka》（2018）是一款以塔拉乌马拉山区拉拉穆里（塔拉乌马拉）人神话为基础的动作冒险游戏。
- **Llyr ap Cenydd** (1) — 程序化动物动画开发者与研究者. 威尔士开发者，他关于海洋动物程序化动画的博士研究发展成了 VR 水族馆《Ocean Rift》。 https://ocean-rift.com
- **Lone Koefoed Hansen** (1) — 交互设计研究者. 奥胡斯大学副教授，研究批判性与审美性交互设计。
- **Lore Thaler** (1) — 心理学家，杜伦大学. Lore Thaler 研究人类弹舌回声定位，并把它教给盲人与明眼人。
- **Louis-Philippe Demers** (1) — 艺术家，机器人表演. 创作大型机器人装置与表演的艺术家，常与 Bill Vorn 合作。
- **Lucien Castaing-Taylor** (1) — 电影人与人类学家，哈佛感官民族志实验室. 主持哈佛感官民族志实验室，作品包括《Sweetgrass》《Leviathan》。
- **Luke Jerram** (1) — 艺术家. 英国艺术家，以巡回作品《Museum of the Moon》和《Gaia》闻名。 https://www.lukejerram.com
- **Luma Octo** (1) — 沉浸式工作室（Max Sacker 与 Arite Szadkowski）. 德国电影人 Max Sacker 与 Arite Szadkowski 的工作室，创作互动、音乐化的沉浸式影像。
- **Lygia Clark** (1) — 艺术家. 巴西新具体主义艺术家（1920–1988），从雕塑走向参与者佩戴的“关系物件”与感官面具。
- **MICROBIhOME (University of Salford)** (1) — 微生物组科学艺术项目. 索尔福德大学项目，由微生物学家 Chloe James 与艺术家 Paul Miller 合作，打造关于人体微生物组的沉浸式装置。 https://hub.salford.ac.uk/microbihome/
- **Manekoware** (1) — Chris Chung 的独立游戏工作室. Chris Chung 的个人工作室，制作了第一人称猫咪游戏 Catlateral Damage，后与 Fire Hose Games 合作开发。 http://www.catlateraldamage.com/
- **Manel De Aguas** (1) — 赛博格艺术家与音乐人. 佩戴头部“鳍”的艺术家，这对鳍感知气压、湿度与温度，把天气变成声音。
- **Marc Erich Latoschik** (1) — 维尔茨堡大学人机交互教授. 人机交互教授，主持化身、具身与社交 VR 研究。
- **Marcel·lí Antúnez Roca** (1) — 行为艺术家. 加泰罗尼亚艺术家，La Fura dels Baus 创始成员之一，以外骨骼与身体接口的机电表演闻名。 https://www.marceliantunez.com
- **Marco Donnarumma** (1) — 行为艺术家与研究者. 意大利艺术家，以肌肉声音、生物信号、义肢与机器学习构建表演。 https://marcodonnarumma.com
- **Marcus Maeder** (1) — 声音艺术家与声学生态学者. 瑞士声音艺术家，苏黎世艺术大学与苏黎世联邦理工学院研究者，录制并声音化树木与土壤内部的声音。 https://blog.zhdk.ch/marcusmaeder/
- **Mark Thompson** (1) — 艺术家与养蜂人. 自 1970 年代起以蜜蜂为材料创作表演与装置的美国艺术家。
- **Martin Kocur** (1) — 人机交互研究者，上奥地利应用科技大学. Martin Kocur 研究化身具身及其对感知与表现的影响。
- **Maryam Alimardani** (1) — 研究者，脑机接口与机器人具身. 与石黑浩团队合作的研究者，用脑机接口让人以意念驱动仿生人的手。
- **Matthew Botvinick** (1) — 认知神经科学家，普林斯顿大学 / Google DeepMind. Matthew Botvinick 与 Jonathan Cohen 于 1998 年首次描述了橡胶手错觉。
- **Matthew R. Longo** (1) — 心理学教授，伦敦大学伯贝克学院. Matthew Longo 研究身体表征、触觉与身体错觉。
- **Max Rheiner** (1) — 交互设计师，Birdly 的创作者. 瑞士艺术家，曾任苏黎世艺术大学（ZHdK）交互设计讲师，2013 年在那里做出第一台 Birdly 原型，随后联合创立 SOMNIACS。
- **Maya Mouawad** (1) — 艺术家与设计师. 法国黎巴嫩裔互动装置设计师，与作曲家 Cyril Laurier 合作《Peupler》。
- **Mel Slater** (1) — 虚拟现实研究者，巴塞罗那大学 Event Lab；曾任职伦敦大学学院. Mel Slater 开创了关于临场感与虚拟身体所有感的研究，从身体互换到延展化身。
- **Michael Girard** (1) — 计算机动画师，《Menagerie》联合创作者. 以程序化多足行走动画闻名的动画师与研究者，与 Susan Amkraut 共同创办 Unreal Pictures。
- **Michael Pinsky** (1) — 艺术家. 英国艺术家，创作关于环境与城市生活的公共作品。 https://www.michaelpinsky.com
- **Michelle Chang** (1) — 设计研究者. 与 Lining Yao 的 Morphing Matter Lab 合作，梳理了人-植物交互的设计空间。
- **Mie C. S. Egeberg** (1) — 媒体学研究者，奥尔堡大学. Mie Egeberg 与同事在 Martin Kraus 指导下研究对虚拟翅膀的所有感。
- **Milica Zec** (1) — 电影导演与 VR 叙事创作者. 出生于塞尔维亚的导演与剪辑师，与 Winslow Porter 共同创办 VR 工作室 New Reality Co.，执导了《Giant》与《Tree》。 https://www.treeofficial.com
- **Miri Chekhanovich** (1) — 艺术家与电影人. 以色列裔加拿大视觉艺术家；与 Édith Jorisch 合作《Plastisapiens》（加拿大国家电影局与 DPT 出品）。
- **Momoko Seto** (1) — 电影人与艺术家. 出生于日本、常居巴黎的电影人，其《PLANET》系列以微距延时拍摄真实的微生物、真菌与昆虫，把它们呈现为异星世界。
- **Monkeystack** (1) — 数字制作工作室. 澳大利亚工作室，与探险家 Tim Jarvis 合作制作《Thin Ice VR》。 https://www.thinicevr.com
- **Mooneye Studios** (1) — 独立游戏工作室，汉堡. 德国工作室，开发了 Lost Ember，讲述一只能附身其他动物的狼。 https://www.lostember.com
- **Myron Krueger** (1) — 计算机艺术家，“人工现实”先驱. 1969 年起创作响应式环境（Glowflow、Metaplay、Psychic Space），并提出“人工现实”一词。
- **Nam June Paik** (1) — 录像艺术家. 韩裔美国录像艺术奠基人（1932–2006），把电视机与植物、鱼和身体组合在一起。
- **Natalie Jeremijenko** (1) — 艺术家与工程师，纽约大学环境健康诊所. 艺术家兼工程师，她的环境健康诊所为人与其他物种的共处开出“处方”；作品包括 Feral Robotic Dogs、OOZ 与 Tree Logic。
- **Natasha Tontey** (1) — 艺术家与电影人. 来自北苏拉威西米纳哈萨的印尼艺术家，以夸张戏仿的推测性影片与装置探讨原住民仪式、害虫与非人亲属。
- **Ndemic Creations** (1) — 游戏工作室. 由 James Vaughan 创办的工作室，病原体策略游戏《Plague Inc.》的开发者。 https://www.ndemiccreations.com
- **Neil Harbisson** (1) — 赛博格艺术家. 生来全色盲的艺术家，通过植入颅骨的天线“听见”颜色，Cyborg Foundation 联合创始人。 https://www.cyborgarts.com
- **Neven A. M. ElSayed** (1) — 增强现实研究者，南澳大学. Neven ElSayed 研究增强现实中的情境可视化。
- **Nina Barbier** (1) — 纪录片导演. 法国科学纪录片导演，曾与法国国家自然历史博物馆合作。
- **Nintendo** (1) — 游戏公司，京都. 日本游戏公司；Mole Mania 由宫本茂担任制作人。 https://www.nintendo.com/
- **No Code** (1) — 游戏工作室. 苏格兰工作室，作品包括 Stories Untold 与 Observation。
- **Old B1ood** (1) — 独立游戏工作室. 小型工作室，开发了鱼类生存沙盒游戏 Feed and Grow: Fish。 http://www.feedandgrow.net
- **Oleg Kulik** (1) — 以“人狗”表演闻名的艺术家. 生于乌克兰的表演艺术家、雕塑家与策展人，以 1990 年代扮演狗的表演最为知名。
- **Ory Laboratory** (1) — 吉藤健太朗创立的机器人公司. OriHime 分身机器人的开发者，让无法出门的人通过机器人身体到场、说话和工作。 https://orylab.com
- **Owen Harris** (1) — VR 设计师. 设计师，与 Niki Smit 和 Monobanda Play 合作开发呼吸控制的 VR 作品《DEEP》。 https://www.exploredeep.com
- **Paul Bach-y-Rita** (1) — 神经科学家（1934–2006）. 感官替代的开创者，从 1969 年的触觉视觉椅到基于舌头的 BrainPort。
- **Pedro Lopes** (1) — 人机交互研究者，芝加哥大学. 用肌肉电刺激让计算机与物品作用于人体的研究者。 https://lab.plopes.org
- **Perttu Hämäläinen** (1) — 计算机游戏教授，阿尔托大学. Perttu Hämäläinen 研究基于身体动作的游戏、健身游戏与模拟角色。
- **Peter Meijer** (1) — 工程师，The vOICe 发明者. 飞利浦研究院的荷兰工程师，1991 年起开发视觉转听觉的感官替代系统 The vOICe。 https://www.seeingwithsound.com
- **Peter Mettler** (1) — 电影人、摄影师. 加拿大-瑞士电影人，以 Gambling, Gods and LSD 和 The End of Time 等关于感知与时间的影片闻名。
- **Phobia Game Studio** (1) — 独立游戏工作室，波兰. 波兰工作室，开发了由 Devolver Digital 发行的“反向恐怖”游戏 Carrion。 https://www.devolverdigital.com/games/carrion
- **Pierre Huyghe** (1) — 构建活的、不断变化的展览的艺术家. 法国艺术家，以包含活生物的展览闻名，从 Zoodram 水族箱到 Untilled 的蜂头雕像，再到充满苍蝇的 UUmwelt。
- **Pierre Zandrowicz** (1) — VR 导演（Atlas V）. 法国导演，沉浸式工作室 Atlas V 联合创始人。
- **Pingting Chen** (1) — 交互设计研究者. Pingting Chen 与同事设计了 ZooWear，一种供动物园游客佩戴的动物耳朵可穿戴设备。
- **Polymorf** (1) — 多感官 XR 跨学科艺术团体. 由 Marcel van Brakel 主导的荷兰团体，以触觉服、软体机器人、气味与食物打造多感官 VR 装置。 https://polymorf.nl
- **Rachael Rakena** (1) — 毛利族录像艺术家. Kāi Tahu 与 Ngāpuhi 部落艺术家，以录像、水与数字时代的毛利身份为主题创作；梅西大学副教授。
- **Rachel Mayeri** (1) — 与灵长类合作的媒体艺术家. 美国艺术家、Harvey Mudd College 教授，以影像和装置探讨动物行为科学，包括为黑猩猩观众制作的电影。 https://rachelmayeri.com/
- **Rachel Strickland** (1) — 建筑师、影像艺术家. 美国建筑师、电影人与交互设计师，联合执导 Placeholder，并在班夫拍摄其地景。
- **Random International** (1) — 艺术团体. 由 Hannes Koch 与 Florian Ortkrass 创立的团体，创作关于行为与感知的作品。 https://www.random-international.com
- **Ready At Dawn** (1) — 游戏工作室. 以 VR 游戏 Lone Echo 与 Echo VR 闻名的游戏工作室。
- **Rebecca Allen** (1) — 媒体艺术家，加州大学洛杉矶分校设计媒体艺术系教授. 1970 年代起的计算机动画与人工生命艺术先驱，加州大学洛杉矶分校设计媒体艺术系创系主任。 http://www.rebeccaallen.com
- **Regine Rapp** (1) — 艺术史学者与策展人，Art Laboratory Berlin. Art Laboratory Berlin 联合总监，策划了 Nonhuman Networks 与 Mind the Fungi 等项目。 https://artlaboratory-berlin.org
- **Revolutionary Games Studio** (1) — 志愿者参与的开源游戏项目. 由国际志愿者社区开发 Thrive，这是一款免费、开源、以生物学为依据的演化游戏。 https://revolutionarygamesstudio.com/
- **Richard Vijgen** (1) — 信息设计师. 荷兰设计师，把不可见的基础设施做成数据可视化。 https://www.richardvijgen.nl
- **Rob Spence** (1) — 电影人. 加拿大电影人，用内置无线摄像头的义眼替换了失去的眼睛。
- **Robert Charles Johnson** (1) — 艺术家、表演创作者. 英国艺术家，跨越表演、食物与思辨设计创作；与顧廣毅共同创作 Bat Night Market。
- **Roger Payne** (1) — 生物学家. 美国生物学家（1935–2023），与 Scott McVay 一起发现座头鲸会唱歌。
- **Ron Wakkary** (1) — 设计研究者，西蒙菲莎大学. 设计研究者，《Things We Could Design》作者，主持 Everyday Design Studio。
- **Ronny Andrade** (1) — 无障碍与人机交互研究者，墨尔本大学. Ronny Andrade 与盲人回声定位专家合作设计基于回声定位的虚拟环境。
- **Ryuichi Sakamoto** (1) — 作曲家. 作曲家、YMO 创始成员（1952–2023）；晚年创作了许多关于声音、环境与自然的装置作品。
- **Sam Easterson** (1) — 从动物视角拍摄的影像艺术家. 美国影像艺术家，受过美术和景观建筑训练，自 1998 年起把小型相机装在动物和植物身上，建立非人视角的影像库。
- **Samira Poudratchi** (1) — 游戏研究者，大不里士伊斯兰艺术大学. Samira Poudratchi 设计用于导航的音频游戏。
- **Samurai Punk** (1) — 独立游戏工作室，墨尔本. 墨尔本工作室，作品有 Screencheat 与飞鸟游戏 Feather。 https://samuraipunk.com/
- **Sang-won Leigh** (1) — 佐治亚理工学院助理教授；曾就职于 MIT 媒体实验室 Fluid Interfaces 组. Sang-won Leigh 设计延伸身体的机器人，并与 Pattie Maes 合写了关于人机身体可塑性的论文。
- **Sarah Silverblatt-Buser** (1) — 编舞与 XR 艺术家. 美国编舞与电影人，创作以动作为基础的 VR 与舞蹈影像。
- **Sbug Games** (1) — 独立游戏工作室. 小型工作室，开发了蜘蛛平台游戏 Webbed 及衍生作 Isopod。
- **ScanLAB Projects** (1) — 三维扫描工作室（Matthew Shaw 与 William Trossell）. 以激光雷达扫描服务建筑、电影与艺术的伦敦工作室。 https://scanlabprojects.co.uk
- **Scenocosme** (1) — 互动艺术双人组（Grégory Lasserre 与 Anaïs met den Ancxt）. 法国艺术双人组，自 2007 年起创作让活体植物感知人的触摸并以声音回应的装置。 http://www.scenocosme.com
- **Scott Fisher** (1) — VR 先驱，NASA Ames VIEW 实验室与 Telepresence Research. 1980 年代领导 NASA Ames 的虚拟界面环境工作站，后创办 Telepresence Research 与南加州大学移动与环境媒体实验室。
- **Seungwoo Je** (1) — 人机交互研究者，南方科技大学. Seungwoo Je 领导沉浸式设计组，研究 VR 触觉设备。
- **Shizuko Hiryu** (1) — 蝙蝠生物学家，同志社大学. Shizuko Hiryu 研究蝙蝠的回声定位与飞行；她的实验室也为人类开发回声定位训练。
- **Shuai Zou** (1) — 媒体艺术家与研究者，香港科技大学（广州）. Shuai Zou 与 Zeyu Wang 实验室的同事创作了《庄周梦蝶》VR。
- **Shuichi Nishio** (1) — 研究者，ATR 石黑浩实验室. ATR 研究者，主持了遥控仿生人身体所有感转移的系列研究。
- **Shuran Fan** (1) — 设计研究者. Shuran Fan 设计面向日常自然的超越人类可穿戴设备。
- **Siqi Yu** (1) — 游戏研究者，香港科技大学（广州）. Siqi Yu 与 Shuai Liu、Yiqing Tian、Mar Canet Sola 一起分析了第一人称动物化身 VR 游戏。
- **Siyeon Kim** (1) — XR 动画导演，Studio Metapo. 韩国导演，XR 动画 My Name is O90 的作者，由 Studio Metapo 与韩国电影艺术学院制作。 http://studiometapo.com
- **Soroosh Mashal** (1) — 游戏与虚拟现实研究者，帕绍大学. Soroosh Mashal 研究人们如何想象 VR 中的翅膀与飞行动作。
- **Sputniko!** (1) — 从事思辨与批判设计的艺术家. 英日混血艺术家（尾崎博美），最早在皇家艺术学院创作影像与装置，探讨新兴技术如何塑造身体、性别与社会；后任 MIT 媒体实验室与东京艺术大学副教授。 https://sputniko.com/
- **Stefania Serafin** (1) — 声音交互设计教授，奥尔堡大学哥本哈根校区. Stefania Serafin 领导多感官体验实验室，研究 VR 中的声音、触觉与具身。
- **Stephan Harding** (1) — 生态学家与教育者. 舒马赫学院的生态学家与盖亚理论学者，设计了“深时间漫步”。 https://www.deeptimewalk.org
- **Steye Hallema** (1) — 艺术家，The Smartphone Orchestra 创始人. 荷兰艺术家，用观众自己的手机创作集体体验（The Smartphone Orchestra、《The Imaginary Friend》）。 https://smartphoneorchestra.com
- **Sumo Digital** (1) — 游戏开发商，谢菲尔德. 英国大型开发商，内部 Game Jam 催生了 Snake Pass。 https://www.sumo-digital.com/
- **Susan Amkraut** (1) — 计算机动画师与虚拟环境艺术家. 计算机动画先驱，1980 年代末至 1990 年代初与 Michael Girard 一起开发了鸟群与行走生物的行为动画系统。
- **Susana Soares** (1) — 设计师，伦敦南岸大学. 葡萄牙设计师与研究者，毕业于皇家艺术学院交互设计专业，从事以生物学驱动的思辨设计。
- **Susumu Tachi** (1) — 机器人学家，远程临场（telexistence）先驱. 东京大学名誉教授，1980 年提出 telexistence（远程临场）概念，并主持了 TELESAR 系列替身机器人。 https://tachilab.org
- **Tae Yeun Kim** (1) — 媒体艺术家、VR 导演. 韩国艺术家，与 PPPLab 和 VR Crew 合作完成互动 VR 作品《Helpless》（2021），入选富川国际奇幻电影节 Beyond Reality 单元的 Beyond Science 板块。
- **Taiwoo Park** (1) — 人机交互研究者，密歇根州立大学. Taiwoo Park 的实验室设计了以翅膀飞行的 VR 游戏 JediFlight。
- **Takuji Narumi** (1) — 东京大学副教授. Takuji Narumi 研究虚拟身体与多感官线索如何改变感知与行为。
- **Tamar Makin** (1) — 认知神经科学教授，剑桥大学可塑性实验室. Tamar Makin 研究大脑如何表征身体、假肢与增强装置。
- **Tangjun Qu** (1) — 人机交互研究者，山东大学. Tangjun Qu 与同事研究 VR 中非人类化身带来的普罗透斯效应。
- **Temsüyanger Longkumer** (1) — 艺术家. 出生于那加兰的艺术家，创作横跨绘画、雕塑与 VR；VR 作品《home》与那加兰 Gaili 的一个蜂群一起拍摄。 http://www.temsuyanger.com
- **Tender Claws** (1) — 交互与 VR 工作室. 由 Samantha Gorman 与 Danny Cannizzaro 创立的工作室，以 Virtual Virtual Reality、The Under Presents 和 Face Jumping 闻名。 https://tenderclaws.com/
- **The Deep End Games** (1) — 由前 BioShock 开发者创立的独立游戏工作室. 由 Bill 与 Amanda Gardner 等前 Irrational Games 成员创立，开发了 Perception。 https://thedeependgames.com/
- **The Living** (1) — 建筑工作室（David Benjamin、Soo-in Yang）. 由 David Benjamin 与 Soo-in Yang 创办的纽约建筑工作室，关注活体材料与环境感知。
- **The Swan Collective** (1) — 艺术团体（Felix Kraus）. 由 Felix Kraus 创立的 VR 与装置艺术团体。
- **Theresa Schubert** (1) — 以真菌与模拟为媒介的艺术家. 德国艺术家，其装置把真菌等生物视为共同创作者；参与柏林工业大学的 Mind the Fungi 项目。 https://www.theresaschubert.com
- **Thomas Nagel** (1) — 哲学家，纽约大学. Thomas Nagel 是心灵哲学与伦理学家。
- **Thomas Thwaites** (1) — 设计师，《GoatMan》作者. 英国设计师，以 The Toaster Project 和 GoatMan 闻名，用自己的身体检验技术的思辨项目；与 Charles Foster 共同获得 2016 年搞笑诺贝尔生物学奖。 https://www.thomasthwaites.com/
- **Tom Froese** (1) — 认知科学家，冲绳科学技术大学院大学. 生成认知科学与人工生命研究者，制作极简的感官替代装置来研究感知。
- **Tom Mustill** (1) — 电影人、博物学者、作家. 野生动物电影人，著有《How to Speak Whale》（2022），与用机器学习研究动物交流的科学家合作。 https://www.tommustill.com
- **Tom White** (1) — 艺术家与讲师. 创作为神经网络识别而设计的抽象版画的艺术家。 https://drib.net
- **Tony J. Prescott** (1) — 认知机器人学教授，谢菲尔德大学. Tony Prescott 基于啮齿动物研制带胡须的机器人与仿生触觉。
- **Tower Five** (1) — 游戏工作室，法国. 法国工作室，为发行商 Microids 开发了 Empire of the Ants。 https://www.microids.com/empire-of-the-ants/
- **Treta Studios** (1) — VR 游戏工作室，印度. 印度 VR 工作室，为 Meta Quest 和 Steam 开发了 Be A Chameleon。
- **Tripwire Interactive** (1) — 游戏开发与发行商，美国佐治亚州. 以 Killing Floor 与 Maneater 闻名的开发与发行商。 https://tripwireinteractive.com/
- **Ubisoft Montreal** (1) — 育碧旗下游戏工作室，蒙特利尔. 育碧的大型工作室，以《刺客信条》《孤岛惊魂》闻名；其 Fun House 团队制作了早期 VR 游戏 Eagle Flight。 https://montreal.ubisoft.com/
- **United Visual Artists** (1) — 以光与声音创作的伦敦艺术工作室. Matt Clark 于 2003 年创立的伦敦工作室，以光、声音和代码创作装置。 https://www.uva.co.uk/
- **Untame** (1) — 独立游戏工作室，以色列. 由 Itay Keren 与 Julia Keren-Detar 组成的小型工作室，开发了 Mushroom 11。 http://mushroom11.com
- **Ursula Biemann** (1) — 艺术家与理论家. 瑞士录像艺术家，关注地质、气候与原住民知识。 https://www.geobodies.org
- **Uýra Sodoma** (1) — 原住民跨性别表演艺术家与生物学者. 1991 年生于帕拉州圣塔伦，学习生物学与生态学；自 2016 年起用树叶、树皮、种子和天然颜料化身为“会走路的树”乌伊拉。2022 年获 PIPA 奖。
- **V. S. Ramachandran** (1) — 神经科学家，加州大学圣地亚哥分校. 神经科学家，以镜箱疗法及幻肢与身体意象研究闻名。
- **VARSAV Game Studios** (1) — 游戏工作室，华沙. 波兰工作室，开发了 Bee Simulator 及续作 Bee Simulator: The Hive。 https://beesimulator.com/
- **Vera Vasas** (1) — 感官生态学家，伦敦玛丽女王大学 / 乔治梅森大学. Vera Vasas 与 Daniel Hanley 合作开发按动物视觉记录颜色的相机与软件。
- **Victor Mateevitsi** (1) — 研究者，伊利诺伊大学芝加哥分校电子可视化实验室. 计算机科学家，打造了 SpiderSense——一件让人通过皮肤感知周围物体的衣服。
- **Videocult** (1) — 独立游戏工作室. 由 Joar Jakobsson 与 James Therrien（James Primate）组成的工作室，开发了 Rain World。
- **Vision3** (1) — 沉浸式工作室. 由 Chris Parks 创立的伦敦工作室，与国际保护组织合作制作《Drop in the Ocean》。
- **Visiontrick Media** (1) — 游戏工作室. 瑞典独立工作室（导演 Rui Guerreiro），开发了 VR 游戏《Pan-Pan》与《Mare》。 https://www.visiontrick.com
- **Viviana Álvarez Chomón** (1) — 设计师与媒体艺术研究者. 智利设计师与媒体艺术研究者，与生物学家合作开发科学艺术类 VR 体验。
- **Véréna Paravel** (1) — 电影人与人类学家，哈佛感官民族志实验室. 法国—瑞士艺术家与人类学家，感官民族志实验室成员，联合执导《Leviathan》《Caniba》《De Humani Corporis Fabrica》。
- **Wevr** (1) — 虚拟现实工作室. 洛杉矶 VR 工作室，出品 theBlu 系列与 Transport 平台。 https://wevr.com
- **Within** (1) — VR 工作室（Chris Milk 与 Aaron Koblin）. 由 Chris Milk 与 Aaron Koblin 创立的工作室，电影化与社交 VR 的早期制作者。 https://www.with.in
- **Wolfgang Buttress** (1) — 艺术家. 英国艺术家，与物理学家 Martin Bencsik 为 2015 米兰世博会英国馆创作《The Hive》。 https://www.wolfgangbuttress.com
- **Xin Liu** (1) — 艺术家与工程师，slow immediate 工作室联合创始人. 艺术家兼工程师，MIT Media Lab 校友；她与 Gershon Dublon 创办的工作室 slow immediate 关注感知、身体与环境。 https://slowimmediate.com
- **Xinmiao Lan** (1) — 传播学研究者，阿姆斯特丹大学. Xinmiao Lan 与 Zeph van Berlo 研究化身与普罗透斯效应。
- **Xu Bing** (1) — 艺术家. 中国艺术家，以《天书》闻名；首部长片《蜻蜓之眼》（2017）全部由公开的监控录像剪辑而成。 https://www.xubing.com
- **YCAM InterLab** (1) — 山口情报艺术中心的研发团队. 山口情报艺术中心（YCAM）的内部研发团队，联合制作媒体艺术、生物艺术与感测项目。 https://www.ycam.jp
- **Yao Xu** (1) — 人机交互研究者. Yao Xu 与同事制作了 iStrayPaws，一个关于流浪动物的 VR 换位体验系统。
- **Yedan Qian** (1) — 交互设计师. 设计师，MIT Media Lab 校友，与 Xin Liu 共同创作 TreeSense。
- **Yifu Zhou** (1) — 数字王国视效总监、VR 导演. 毕业于清华美院与南加州大学的视效总监，主导了数字王国大中华团队的首部原创 VR 动画《微观巨兽》（2017）。
- **Yiou Wang** (1) — 媒体艺术家，Trans Species Collective 创始人. 以声音和 VR 探索跨物种共情的媒体艺术家，领导 Trans Species Collective，与 HCI 研究者 Yujie Wang 合作完成 BATOPIA。 https://yiouwang.org/
- **Yoshifumi Kitamura** (1) — 东北大学电气通信研究所教授. 人机交互研究者，其东北大学团队研究空间界面，包括增强现实中的无人机驾驶。
- **Young Horses** (1) — 独立游戏工作室，芝加哥. 由德保罗大学学生在学生作品 Octodad（2010）之后组建的工作室。 https://store.steampowered.com/app/224480/
- **Yu Jiang** (1) — 人机交互研究者，清华大学. Yu Jiang 与 Yukang Yan、David Lindlbauer 合作研究非人形化身的控制。
- **Yu-Lun Hsu** (1) — 人机交互研究者，台湾大学. Yu-Lun Hsu 与同事设计了 AnimalSense，一款关于动物感官的 VR 游戏。
- **Yukinori Yanagi** (1) — 以蚂蚁国旗作品闻名的艺术家. 日本艺术家，其 Ant Farm 系列曾在 1993 年威尼斯双年展展出，让蚁群侵蚀用沙子做成的国旗。 https://yanagistudio.net/
- **Ze Gao** (1) — 媒体艺术研究者. 研究计算媒体艺术与数字生态。
- **Zheng Bo** (1) — 以植物与生态酷儿实践为核心的艺术家. 生于北京、现居香港的艺术家（1974 年生），与植物一起创作影像、绘画与身体练习，代表作有《蕨类情欲》《植物的政治生活》与“万物”练习。 http://zhengbo.org/
- **Zoom Inc.** (1) — 游戏开发商，日本. 日本开发商，为 PlayStation 2 开发了《蚊》（Mister Mosquito）。
- **eduweb** (1) — 教育游戏开发商，明尼苏达州. 教育媒体公司，与明尼苏达动物园合作开发 WolfQuest，最初由美国国家科学基金会资助。 http://www.wolfquest.org
- **onformative** (1) — 数字艺术与设计工作室. 由 Cedric Kiefer 与 Julia Laub 创立的柏林工作室，创作关于自然与感知的生成式、数据驱动装置。 https://onformative.com
- **Édith Jorisch** (1) — 电影人. 加拿大电影人与视觉艺术家，《Plastisapiens》联合创作者。
- **Özge Samancı** (1) — 媒体艺术家与图像小说作者，西北大学. 生于土耳其的媒体艺术家，著有图像回忆录《Dare to Disappoint》与《Evil Eyes Sea》；她用脑机接口创作互动装置，任教于西北大学。 https://ozgesamanci.com
