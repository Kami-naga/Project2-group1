import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { FormControl,Col,Form} from 'react-bootstrap';
import './App.css';

class List1 extends React.Component{
    constructor(){
            super();
            this.state = {
                name:[],
                search: ''
            }
            this.state.name.push("从零开始的异世界生活");
            this.state.name.push("斩服少女");
            this.state.name.push("四月是你的谎言");
            this.state.name.push("我们仍未知道那天所看见花的名字");
            this.state.name.push("甲铁城的卡巴内瑞");
            this.state.name.push("命运石之门");
            this.state.name.push("魔法少女小圆");
            this.state.name.push("灵能百分百");

        }
       
        updateSearch(event){
            this.setState({search: event.target.value.substr(0, 20)});
        }
        
        render(){
            var filter = this.state.search;
            var filtered1 = this.state.name[0].indexOf(filter);
            var filtered2 = this.state.name[1].indexOf(filter);
            var filtered3 = this.state.name[2].indexOf(filter);
            var filtered4 = this.state.name[3].indexOf(filter);
            var filtered5 = this.state.name[4].indexOf(filter);
            var filtered6 = this.state.name[5].indexOf(filter);
            var filtered7 = this.state.name[6].indexOf(filter);
            var filtered8 = this.state.name[7].indexOf(filter);
            let itemTable;
            if (filter === ''){
                itemTable = (
                    <tbody>
                        <tr>
                            <td> 1 </td>
                            <td> 从零开始的异世界生活 </td>
                            <td> 在异世界陷入迷茫的普通高中生菜月昴，邂逅了一位银发的美少女。但想助她一臂之力的
                                昴，却一次次地遭遇敌袭，背叛、暴力，甚至是死亡……“死亡重置”——无力的少年拥有的唯一能力，能将死后
                                间倒转回一开始。使用了这般力量，便会失去过去的回忆，可为了守护最重要的人们，昴必须抗争到底。“即使你
                                却了我，我也不会遗忘你</td>
                            <td> <a href="https://bangumi.bilibili.com/anime/3461?from=search&seid=12480599131834855516">Link</a> </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>斩服少女</td>
                            <td>本故事以被武力和恐怖支配的本能字学院为舞台，以为父报仇的转校生少女为中心， 围绕着在学园中“执牛耳者”的学生及学生会四大天王间的激战故事展开。 缠流子和鬼龙院皋月，两人为本作的主人公。在本作中，皋月用极制服的力量支配着学园， 而流子为查明父亲死亡的真相而与皋月对抗。 在这由力量支配的学园中，由于手持片太刀铗的转校生的到来，引起了动乱， 这一场各个能力者均被打倒的故事因此而开始！</td>
                            <td><a href="https://bangumi.bilibili.com/anime/419?from=search&seid=1605314221698094105">Link</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>四月是你的谎言</td>
                            <td>从小接受母亲严格的钢琴训练，并在各种音乐比赛上获胜的“神童”——有马公生，11岁那年因为母亲去世，他从此变得听不见钢琴的声音，因而放弃了弹奏钢琴。 国中三年级时，在青梅竹马椿的引见下，公生认识了与他同年级的小提琴手——宫园薰，并于一场比赛中被薰自由奔放的演奏风格所吸引。自此，公生的日常生活开始有了改变。</td>
                            <td><a href="https://bangumi.bilibili.com/anime/1699">Link</a></td>
                                </tr>
                        <tr>
                            <td>4</td>
                            <td>我们仍未知道那天所看见花的名字。</td>
                            <td>从小一起长大的六个孩子，在升上高中之后彼此有了距离。不太与人们接触的宅男宿海仁太、有点被小太妹熏染的安城鸣子、进入重点高中的松雪集与鹤见知利子、放弃读高中而展开旅行的久川铁道……只有幼年死去的本间芽衣子（只有仁太能看见的灵魂），还是单纯一如从前。 有一天，芽衣子对仁太说：“帮我实现一个愿望吧。”仁太虽然有点为难，却还是答应了她。以此为契机，为了实现芽衣子的愿望，分散的大家又再次聚集在一起……</td>
                            <td><a href="https://bangumi.bilibili.com/anime/835">Link</a></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>甲铁城的卡巴内瑞</td>
                            <td>本作是一部以蒸汽机发达的岛国“日之本”为舞台的蒸汽朋克生存动作剧，作品主要描写了拥有钢铁心脏的僵尸=“卡巴内”与乘上装甲蒸汽机车“甲铁城”的少年少女的存亡之战。该作标题中的“卡巴内瑞”指的是介于“卡巴内”与人类之间的存在。</td>
                            <td><a href="https://bangumi.bilibili.com/anime/3494">Link</a></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>命运石之门</td>
                            <td>本作的故事发生在「Chaos;head」中的“涩谷崩坏”一年半后的世界，而舞台则从涩谷转移到了秋叶原。主角冈部伦太郎是一位深度中二病的大学生，时常幻想自己身肩重任，并自称“狂气的疯狂科学家·凤凰院凶真”。说到底，他的所作所为不过就是在“未来道具研究所”中与两个伙伴开发各种奇奇怪怪又不切实际的东西。然而，这样的他们却在偶然间发明出了可以把电子讯息传送到过去的时间机器。他们对未来及过去的信息有了越来越多的了解，却不知危难正渐渐降临</td>
                            <td><a href="https://bangumi.bilibili.com/anime/836">Link</a></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>魔法少女小圆</td>
                            <td>就读初中二年级的鹿目圆，过着平凡幸福的生活。神秘转学生晓美焰的出现，开始让小圆的命运有了巨大转变。某日一只名为丘比的神秘生物，希望小圆能够与它签订魔法契约，成为“魔法少女”以对抗邪恶的魔女保护世界。正当小圆犹豫烦恼之时，好友沙耶香先一步成为“魔法少女”后，两人才发现原来签订契约后，需付出的代价远比远比想象中巨大甚至残酷，这一切真相都再次冲击小圆想成为“魔法少女”的想法……</td>
                            <td><a href="https://bangumi.bilibili.com/anime/2539">Link</a></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>灵能百分百</td>
                            <td>平凡的中学二年级少年影山茂夫，因其微弱的存在感与名字茂夫的谐音被周遭人称为龙套（モブ），但不起眼的他其实是强大的天生超能力者。历经每一次的成长，龙套开始认为自己的超能力是危险的存在，为了不让超能力失控，龙套无意识的压抑著情感。虽然只想平凡的度过每一天，但各种麻烦却接二连三找上他，随着被压抑的情感在内心一点点膨胀，龙套体内积累的力量似乎也正蠢蠢欲动......</td>
                            <td><a href="https://bangumi.bilibili.com/anime/5058">Link</a></td>
                        </tr>
                    </tbody>
                );
            }
            else if (filtered1 !== -1){
                itemTable = (
                    <thead>
                        <tr>
                            <td>1</td>
                            <td>从零开始的异世界生活</td>
                            <td>在异世界陷入迷茫的普通高中生菜月昴，邂逅了一位银发的美少女。但想助她一臂之力的昴，却一次次地遭遇敌袭，背叛、暴力，甚至是死亡……“死亡重置”——无力的少年拥有的唯一能力，能将死后时间倒转回一开始。使用了这般力量，便会失去过去的回忆，可为了守护最重要的人们，昴必须抗争到底。“即使你忘却了我，我也不会遗忘你。”</td>
                            <td ><a href="https://bangumi.bilibili.com/anime/3461?from=search&seid=12480599131834855516">Link</a></td>
                        </tr>
                    </thead>

                );
            }
            else if (filtered2 !== -1){
                itemTable = (
                    <thead>
                        <tr>
                            <td>2</td>
                            <td>斩服少女</td>
                            <td>本故事以被武力和恐怖支配的本能字学院为舞台，以为父报仇的转校生少女为中心， 围绕着在学园中“执牛耳者”的学生及学生会四大天王间的激战故事展开。 缠流子和鬼龙院皋月，两人为本作的主人公。在本作中，皋月用极制服的力量支配着学园， 而流子为查明父亲死亡的真相而与皋月对抗。 在这由力量支配的学园中，由于手持片太刀铗的转校生的到来，引起了动乱， 这一场各个能力者均被打倒的故事因此而开始！</td>
                            <td><a href="https://bangumi.bilibili.com/anime/419?from=search&seid=1605314221698094105">Link</a></td>
                        </tr>
                    </thead>
                );
     
            }
            else if(filtered3 !== -1){
                itemTable= (
                    <thead>
                        <tr>
                            <td>3</td>
                            <td>四月是你的谎言</td>
                            <td>从小接受母亲严格的钢琴训练，并在各种音乐比赛上获胜的“神童”——有马公生，11岁那年因为母亲去世，他从此变得听不见钢琴的声音，因而放弃了弹奏钢琴。 国中三年级时，在青梅竹马椿的引见下，公生认识了与他同年级的小提琴手——宫园薰，并于一场比赛中被薰自由奔放的演奏风格所吸引。自此，公生的日常生活开始有了改变。</td>
                            <td><a href="https://bangumi.bilibili.com/anime/1699">Link</a></td>
                        </tr>
                    </thead>
                );
            }
            else if(filtered4 !== -1){
                itemTable = (
                    <thead>
                    <tr>
                        <td>4</td>
                        <td>我们仍未知道那天所看见花的名字。</td>
                        <td>从小一起长大的六个孩子，在升上高中之后彼此有了距离。不太与人们接触的宅男宿海仁太、有点被小太妹熏染的安城鸣子、进入重点高中的松雪集与鹤见知利子、放弃读高中而展开旅行的久川铁道……只有幼年死去的本间芽衣子（只有仁太能看见的灵魂），还是单纯一如从前。 有一天，芽衣子对仁太说：“帮我实现一个愿望吧。”仁太虽然有点为难，却还是答应了她。以此为契机，为了实现芽衣子的愿望，分散的大家又再次聚集在一起……</td>
                        <td><a href="https://bangumi.bilibili.com/anime/835">Link</a></td>
                    </tr>

                    </thead>
                );
            }
            else if(filtered5 !== -1){
                itemTable = (
                    <thead>
                    <tr>
                        <td>5</td>
                        <td>甲铁城的卡巴内瑞</td>
                        <td>本作是一部以蒸汽机发达的岛国“日之本”为舞台的蒸汽朋克生存动作剧，作品主要描写了拥有钢铁心脏的僵尸=“卡巴内”与乘上装甲蒸汽机车“甲铁城”的少年少女的存亡之战。该作标题中的“卡巴内瑞”指的是介于“卡巴内”与人类之间的存在。</td>
                        <td><a href="https://bangumi.bilibili.com/anime/3494">Link</a></td>
                    </tr>
                        
                    </thead>
                );
            }
            else if(filtered6 !== -1){
                itemTable = (
                    <thead>
                        <tr>
                        <td>6</td>
                        <td>命运石之门</td>
                        <td>本作的故事发生在「Chaos;head」中的“涩谷崩坏”一年半后的世界，而舞台则从涩谷转移到了秋叶原。主角冈部伦太郎是一位深度中二病的大学生，时常幻想自己身肩重任，并自称“狂气的疯狂科学家·凤凰院凶真”。说到底，他的所作所为不过就是在“未来道具研究所”中与两个伙伴开发各种奇奇怪怪又不切实际的东西。然而，这样的他们却在偶然间发明出了可以把电子讯息传送到过去的时间机器。他们对未来及过去的信息有了越来越多的了解，却不知危难正渐渐降临</td>
                        <td><a href="https://bangumi.bilibili.com/anime/836">Link</a></td>
                        </tr>
                    </thead>
                );
            }
            else if(filtered7 !== -1){
                itemTable = (
                    <thead>
                    <tr>
                        <td>7</td>
                        <td>魔法少女小圆</td>
                        <td>就读初中二年级的鹿目圆，过着平凡幸福的生活。神秘转学生晓美焰的出现，开始让小圆的命运有了巨大转变。某日一只名为丘比的神秘生物，希望小圆能够与它签订魔法契约，成为“魔法少女”以对抗邪恶的魔女保护世界。正当小圆犹豫烦恼之时，好友沙耶香先一步成为“魔法少女”后，两人才发现原来签订契约后，需付出的代价远比远比想象中巨大甚至残酷，这一切真相都再次冲击小圆想成为“魔法少女”的想法……</td>
                        <td><a href="https://bangumi.bilibili.com/anime/2539">Link</a></td>
                    </tr>
                        
                    </thead>
                );
            }
            else if(filtered8 !== -1){
                itemTable = (
                    <thead>
                        <tr>
                        <td>8</td>
                        <td>灵能百分百</td>
                        <td class="col-md-6">平凡的中学二年级少年影山茂夫，因其微弱的存在感与名字茂夫的谐音被周遭人称为龙套（モブ），但不起眼的他其实是强大的天生超能力者。历经每一次的成长，龙套开始认为自己的超能力是危险的存在，为了不让超能力失控，龙套无意识的压抑著情感。虽然只想平凡的度过每一天，但各种麻烦却接二连三找上他，随着被压抑的情感在内心一点点膨胀，龙套体内积累的力量似乎也正蠢蠢欲动......</td>
                        <td><a href="https://bangumi.bilibili.com/anime/5058">Link</a></td>
                        </tr>
                    </thead>
                );
            }
            else{
                itemTable=(
                    <tbody>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> Nothing found in here... </td>
                    </tr>
                    </tbody>
                );
            }

            return(
                <div className="searchBox">
                    <Form>
                        <Col sm={4}>
                            <FormControl type="text" placeholder="Search..." value={this.state.search}
                            onChange={this.updateSearch.bind(this)} />
                        </Col>
                    </Form>
                     <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th className="col-md-10">summary</th>
                                <th className="col-md-1.2">Link</th>
                            </tr>
                        </thead>
                        {itemTable}
                     </Table>
                </div>
            )
        }
}
export default List1;