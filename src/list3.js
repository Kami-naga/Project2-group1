import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { FormControl,Col,Form} from 'react-bootstrap';

class List3 extends React.Component{
    constructor(){
        super();
        this.state = {
            name:[],
            search: ''
        }
        this.state.name.push("为美好的世界献上祝福！");
        this.state.name.push("NO GAME NO LIFE 游戏人生");
        this.state.name.push("只有神知道的世界");
        this.state.name.push("魔法禁书目录");
        this.state.name.push("OVERLORD");
        this.state.name.push("Fate Zero");
        this.state.name.push("狼与香辛料");
        this.state.name.push("刀剑神域");
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
                    <td>1</td>
                    <td>为美好的世界献上祝福！</td>
                    <td>喜爱游戏的家里蹲少年佐藤和真的人生突然闭幕。
                        但是他的眼前出现自称女神的美少女。
                        转生到异世界的和真就此为了满足食衣住而努力工作！
                        原本只想安稳度日的和真，却因为带去的女神接二连三引发问题，
                        甚至被魔王军盯上了!?</td>
                    <td><a href="http://www.yidm.com/article/html/1/1582/index.html">Link</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>NO GAME NO LIFE 游戏人生</td>
                    <td>在网络上成为都市传说的天才玩家兄妹·空和白实际是家里蹲尼特族。他们将将世界称为“垃圾游戏”。某天，这两个人某一天被自称“神”的少年召唤到了异世界。那是被神明禁止了战争，一切交由游戏来决定"的世界——没错，就连国境线也是一样。被其他种族逼入绝境，只剩下最后一座都市的“人类种”。空和白，两名废人兄妹到底能否在异世界成为“人类的救世主”？——那么，让我们开始游戏吧！</td>
                    <td> <a href="http://www.8wenku.com/book/1186">Link</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>只有神知道的世界</td>
                    <td>“我被救了吗，被那天使般的女孩子——”攻略之神，桂木桂马遇见的是拥有桂马不擅长属性的不可思议的女孩子。 为了攻略这个女孩子而苦战不已的看、桂马面前又出现一个游魂的携带者…… GAL的天才，被称为攻略之神的少年桂马和地狱派遣的可爱恶魔艾露希攻略现实女孩子的《只有神知道的世界》。</td>
                    <td> <a href="http://www.8wenku.com/book/432">Link</a></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>魔法禁书目录</td>
                    <td>故事讲述的是从东京都西部被分割出来的这座都市中，“超能力开发”被列为学校课程的一部分（学生作为人体科学实验对象）。在二百三十万人口中，有八成都是学生，所以被称为学园都市。他们每天都在超能力开发上进行相互竞争。根据能力高低不同，可以分为6级，从无能力（level 0）到超能力（level 5）。故事的主角上条当麻是学园里的一个无能力者，但并非完全没有能力，他的能力是能够将一切异能之力无效化。他只有右手能够使用这种能力，还给自己的这种连上帝的奇迹都能抹杀的能力取名为“幻想杀手”。而正因为他的右手似乎把神的祝福都给抹杀掉的缘故，导致自己一直过著不幸的生活。某一个暑假的日子，在家里的阳台上，他遇见了一位修女；这位少女自称自己的名字叫“茵蒂克丝”，并是从魔法的世界逃了出来，现在正在被魔法师追赶中。就这样，掌握了十万三千本究极魔法书的少女与拥有抹杀一切奇迹的神上之手的少年，将面临一系列故事……</td>
                    <td> <a href="http://www.shencou.com/read/0/84/">Link</a></td>
                </tr>                
                <tr>
                    <td>5</td>
                    <td>OVERLORD</td>
                    <td>一款席卷游戏界的网路游戏「YGGDRASIL」，有一天突然毫无预警地停止一切服务——原本应该是如此。但是不知为何它却成了一款即使过了结束时间，玩家角色依然不会登出的游戏。NPC开始拥有自己的思想。 现实世界当中一名喜欢电玩的普通青年，似乎和整个公会一起穿越到异世界，变成拥有骷髅外表的最强魔法师「飞鼠」。他率领的公会「安兹．乌尔．恭」将展开前所未有的奇幻传说！</td>
                    <td> <a href="http://www.8wenku.com/book/1498">Link</a></td>
                </tr>                
                <tr>
                    <td>6</td>
                    <td>Fate Zero</td>
                    <td>第4次圣杯战争的火焰已经落下，驰骋在混杂着胜利与悲怨的、被称为冬木战场的魔术师们，与他们召唤的英灵并肩作战，但是他们之中有一位魔术师却是孤身1人，他就是言峰绮礼，在其纠结的宿命之下，言峰绮礼彷徨的追问着答案…… 自己为什么会接受令咒？战斗的命运却驱使着言峰绮礼遇到了他一生的夙敌，那就是—— 卫宫切嗣，那个比谁都要残忍，比任何人都不可饶恕，一心想要得到能创造奇迹的圣杯的男子。 第4次圣杯战争，开始……</td>
                    <td> <a href="http://www.8wenku.com/book/301">Link</a></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>狼与香辛料</td>
                    <td>到处旅行靠贩卖一些小商品为生的商人罗伦斯，从因为收获祭而沸腾的帕斯罗村回来后却发现自己的运货马车中貌似有什么东西在里面，罗伦斯把麦束拨开一看，里面却睡着一个长有狼耳和狼尾巴的少女。这位少女自称是“掌控丰收的贤狼——赫萝”，靠麦子为生的她如果遗失了脖子上挂的帕斯罗当地麦子就会死。赫萝死赖着罗伦斯希望他能够带她回到遥远的北方故乡，见到少女的一只手变化成狼脚的罗伦斯，虽然一边怀疑赫萝的身份，但一边也答应让想回到出生的「遥远的北方」的少女一同旅行，于是，狼女与商人“完全没有剑与魔法的”旅行由此展开。</td>
                    <td> <a href="http://q.dmzj.com/244/index.shtml">Link</a></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>刀剑神域</td>
                    <td>主角桐谷和人是使用世界首款完全潜行游戏“刀剑神域（Sword Art Online）”的玩家。曾经很幸运的参与过封闭测试，并买下正式版的和人，正准备体验游戏的第一次正式营运。但在登入后不久，和人发现“登出”指令竟然消失，而与此同时自称是SAO游戏设计者“茅场晶彦”的人说：“无法完成攻略就无法离开游戏，只有打倒位于“艾恩葛朗特”顶楼，第100层的头目－达成“完全攻略”才是离开这个世界唯一的方法。并且，在游戏内GAME OVER或是尝试脱下NERvGear，玩家会立刻被NERvGear发出的高频率微波破坏脑部而死亡。”唯有接受这个矛盾事实的人，才能够存活下去。</td>
                    <td> <a href="http://www.shencou.com/read/0/2/">Link</a></td>
                </tr>
                </tbody>

            )
        }
        else if(filtered1 !== -1){
            itemTable = (
                <thead>
                    <tr>
                        <td>1</td>
                        <td>为美好的世界献上祝福！</td>
                        <td>喜爱游戏的家里蹲少年佐藤和真的人生突然闭幕。
                            但是他的眼前出现自称女神的美少女。
                            转生到异世界的和真就此为了满足食衣住而努力工作！
                            原本只想安稳度日的和真，却因为带去的女神接二连三引发问题，
                            甚至被魔王军盯上了!?</td>
                        <td><a href="http://www.yidm.com/article/html/1/1582/index.html">Link</a></td>
                    </tr>
                </thead>
            )
        }
        else if(filtered2 !== -1){
            itemTable = (
                <thead>
                    <tr>
                        <td>2</td>
                        <td>NO GAME NO LIFE 游戏人生</td>
                        <td>在网络上成为都市传说的天才玩家兄妹·空和白实际是家里蹲尼特族。他们将将世界称为“垃圾游戏”。某天，这两个人某一天被自称“神”的少年召唤到了异世界。那是被神明禁止了战争，一切交由游戏来决定"的世界——没错，就连国境线也是一样。被其他种族逼入绝境，只剩下最后一座都市的“人类种”。空和白，两名废人兄妹到底能否在异世界成为“人类的救世主”？——那么，让我们开始游戏吧！</td>
                        <td> <a href="http://www.8wenku.com/book/1186">Link</a></td>
                    </tr>
                </thead>
            );
        }
        else if(filtered3 !== -1){
            itemTable = (
                <thead>
                 <tr>
                    <td>3</td>
                    <td>只有神知道的世界</td>
                    <td>“我被救了吗，被那天使般的女孩子——”攻略之神，桂木桂马遇见的是拥有桂马不擅长属性的不可思议的女孩子。 为了攻略这个女孩子而苦战不已的看、桂马面前又出现一个游魂的携带者…… GAL的天才，被称为攻略之神的少年桂马和地狱派遣的可爱恶魔艾露希攻略现实女孩子的《只有神知道的世界》。</td>
                    <td> <a href="http://www.8wenku.com/book/432">Link</a></td>
                </tr>
                </thead>
            );
        }
        else if(filtered4 !== -1){
            itemTable = (
                <thead>
                <tr>
                    <td>4</td>
                    <td>魔法禁书目录</td>
                    <td>故事讲述的是从东京都西部被分割出来的这座都市中，“超能力开发”被列为学校课程的一部分（学生作为人体科学实验对象）。在二百三十万人口中，有八成都是学生，所以被称为学园都市。他们每天都在超能力开发上进行相互竞争。根据能力高低不同，可以分为6级，从无能力（level 0）到超能力（level 5）。故事的主角上条当麻是学园里的一个无能力者，但并非完全没有能力，他的能力是能够将一切异能之力无效化。他只有右手能够使用这种能力，还给自己的这种连上帝的奇迹都能抹杀的能力取名为“幻想杀手”。而正因为他的右手似乎把神的祝福都给抹杀掉的缘故，导致自己一直过著不幸的生活。某一个暑假的日子，在家里的阳台上，他遇见了一位修女；这位少女自称自己的名字叫“茵蒂克丝”，并是从魔法的世界逃了出来，现在正在被魔法师追赶中。就这样，掌握了十万三千本究极魔法书的少女与拥有抹杀一切奇迹的神上之手的少年，将面临一系列故事……</td>
                    <td> <a href="http://www.shencou.com/read/0/84/">Link</a></td>
                </tr>  
                </thead>
            );
        }
        else if(filtered5 !== -1){
            itemTable = (
                <thead>
                <tr>
                    <td>5</td>
                    <td>OVERLORD</td>
                    <td>一款席卷游戏界的网路游戏「YGGDRASIL」，有一天突然毫无预警地停止一切服务——原本应该是如此。但是不知为何它却成了一款即使过了结束时间，玩家角色依然不会登出的游戏。NPC开始拥有自己的思想。 现实世界当中一名喜欢电玩的普通青年，似乎和整个公会一起穿越到异世界，变成拥有骷髅外表的最强魔法师「飞鼠」。他率领的公会「安兹．乌尔．恭」将展开前所未有的奇幻传说！</td>
                    <td> <a href="http://www.8wenku.com/book/1498">Link</a></td>
                </tr> 
                </thead>
            );
        }
        else if(filtered6 !== -1){
            itemTable = (
                <thead>
                <tr>
                    <td>6</td>
                    <td>Fate Zero</td>
                    <td>第4次圣杯战争的火焰已经落下，驰骋在混杂着胜利与悲怨的、被称为冬木战场的魔术师们，与他们召唤的英灵并肩作战，但是他们之中有一位魔术师却是孤身1人，他就是言峰绮礼，在其纠结的宿命之下，言峰绮礼彷徨的追问着答案…… 自己为什么会接受令咒？战斗的命运却驱使着言峰绮礼遇到了他一生的夙敌，那就是—— 卫宫切嗣，那个比谁都要残忍，比任何人都不可饶恕，一心想要得到能创造奇迹的圣杯的男子。 第4次圣杯战争，开始……</td>
                    <td> <a href="http://www.8wenku.com/book/301">Link</a></td>
                </tr>

                </thead>
            );
        }
        else if(filtered7 !== -1){
            itemTable = (
                <thead>
                <tr>
                    <td>7</td>
                    <td>狼与香辛料</td>
                    <td>到处旅行靠贩卖一些小商品为生的商人罗伦斯，从因为收获祭而沸腾的帕斯罗村回来后却发现自己的运货马车中貌似有什么东西在里面，罗伦斯把麦束拨开一看，里面却睡着一个长有狼耳和狼尾巴的少女。这位少女自称是“掌控丰收的贤狼——赫萝”，靠麦子为生的她如果遗失了脖子上挂的帕斯罗当地麦子就会死。赫萝死赖着罗伦斯希望他能够带她回到遥远的北方故乡，见到少女的一只手变化成狼脚的罗伦斯，虽然一边怀疑赫萝的身份，但一边也答应让想回到出生的「遥远的北方」的少女一同旅行，于是，狼女与商人“完全没有剑与魔法的”旅行由此展开。</td>
                    <td> <a href="http://q.dmzj.com/244/index.shtml">Link</a></td>
                </tr>
                </thead>
            );
        }
        else if(filtered8 !== -1){
            itemTable = (
                <thead>
                <tr>
                    <td>8</td>
                    <td>刀剑神域</td>
                    <td>主角桐谷和人是使用世界首款完全潜行游戏“刀剑神域（Sword Art Online）”的玩家。曾经很幸运的参与过封闭测试，并买下正式版的和人，正准备体验游戏的第一次正式营运。但在登入后不久，和人发现“登出”指令竟然消失，而与此同时自称是SAO游戏设计者“茅场晶彦”的人说：“无法完成攻略就无法离开游戏，只有打倒位于“艾恩葛朗特”顶楼，第100层的头目－达成“完全攻略”才是离开这个世界唯一的方法。并且，在游戏内GAME OVER或是尝试脱下NERvGear，玩家会立刻被NERvGear发出的高频率微波破坏脑部而死亡。”唯有接受这个矛盾事实的人，才能够存活下去。</td>
                    <td> <a href="http://www.shencou.com/read/0/2/">Link</a></td>
                </tr>
                </thead>
            );
        }

        else{
            itemTable = (
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
                <Form className="searchBar">
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
                        <th class="col-md-10">summary</th>
                        <th>Link</th>
                    </tr>
                    </thead>
                    {itemTable}
                </Table>
            </div>
        )
    }}

export default List3;