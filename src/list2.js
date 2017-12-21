import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
class List2 extends React.Component{
    constructor(){
        super();
        this.state = {
            name:[],
            search: ''
        }
        this.state.name.push("一拳超人");
        this.state.name.push("齐木楠雄的灾难");
        this.state.name.push("七龙珠");
        this.state.name.push("柯南");
        this.state.name.push("妖精的尾巴");
        this.state.name.push("死神");
        this.state.name.push("火影忍者");
        this.state.name.push("海贼王");
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
        if (filter == '') {
            itemTable = (
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>一拳超人</td>
                        <td>一拳超人漫画 ，主人公埼玉原本是一名整日奔波于求职的普通人。3年前的一天偶然遇到了要对淘气少年下杀手的异变螃蟹人后，回忆起年少年时“想要成为英雄”的梦想，最终拼尽全力救下了淘气少年。之后通过拼命锻炼，埼玉终于脱胎换骨获得了最强的力量，但同时失去了头发成了光头。在独自做了一段时间英雄后，正式加入英雄协会，与众多英雄一起开始了对抗各种怪人以及恶势力的生活……</td>
                        <td><a href="http://manhua.dmzj.com/yiquanchaoren">Link</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>齐木楠雄的灾难</td>
                        <td>高中生·齐木楠雄是超能力者。心灵感应、念动力、透视、预知、瞬间移动、千里眼等，不论任何事情都自由自在。但这任谁都羡慕不已的最强能力，实际上对于本人而言是引来灾难的不幸元凶。因此，他在别人面前封印了超能力，以不起眼、不和他人有所牵扯为信条，默默无闻地过日子。但不知为何，他的身边总是聚集着不可思议的人类（生物），风暴般的灾难接连不断地降临！</td>
                        <td ><a href="http://manhua.dmzj.com/chaonenglizheqimunanxiongdezainan">Link</a></td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>七龙珠</td>
                    <td>独自住在深山的少年孙悟空，遇上搜集七龙珠的少女科学家布尔玛，布尔玛为得到悟空拥有的四星七龙珠而带同悟空踏上找寻七龙珠的旅程。</td>
                    <td ><a href="http://manhua.dmzj.com/qilongzhuwanquanban">Link</a></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>柯南</td>
                    <td>工藤新一，帝丹高中二年级学生，与小兰是青梅竹马，两人感情很好。继承了父亲的超强推理能力，被誉为高中生名侦探。他喜欢看推理小说，最崇拜福尔摩斯，另外踢足球的水平也是一流。不幸被卷入黑衣组织的交易被灌下毒药APTX4869，但是没有死，只是变成了小孩，改名江户川柯南……</td>
                    <td ><a href="http://manhua.dmzj.com/kenan">Link</a></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>妖精的尾巴</td>
                    <td>魔法师协会分布在全世界各地，那里是魔法师介绍工作和传达情报的场所。梦想成为一名独挡一面魔法师的少女露茜，遇上了能吃火，用火攻击，操纵灭火龙法的魔法师，夏。来自妖精的尾巴魔法公会的夏邀请露茜加入，可是，那里……一群“怪人”集合成的问题魔法协会！虽然有点危险，但看起来还是蛮好玩的，属于妖精的尾巴的门扉，现在为你打开！ </td>
                    <td ><a href="http://manhua.dmzj.com/yaojingdeweiba">Link</a></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>死神</td>
                    <td>除了能够看到灵魂，别无是处的普通高中生——黑崎一护有一天邂逅了一名少女，接着人生就发生了很大的转变。自称为死神的少女——朽木路奇亚，追着被称做虚的恶灵突然出现到了一护面前。由于一护的灵力很高，他就成为了虚下手的对像。身受重伤的路基亚无法解决恶灵，不得已只有把死神的能力分给一护，成为死神的一护与失去死神力量的路奇亚就一起开始了新的战斗……</td>
                    <td ><a href="http://manhua.dmzj.com/sishen">Link</a></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>火影忍者</td>
                    <td>从小身上封印着邪恶的九尾妖狐，无父无母的鸣人受尽了村人的冷落，但是他却不知道原因，只是拼命用各种恶作剧试图吸引大家的注意力，人们却反而更远离他。好在还是有依卡鲁老师关心他，鸣人的性格才没有变得扭曲，他总是干劲十足，嘻嘻哈哈，超级乐观。为了让更多的人认可自己，鸣人的目标是——成为第五代火影！</td>
                    <td ><a href="http://manhua.dmzj.com/huoyingrenzhe">Link</a></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>海贼王</td>
                    <td>财富，权力，曾经拥有一切的海贼王戈尔多·罗杰，在临死前畱下暸一句话：“想要我的财富吗？那就去找吧，我的一切都在那裏，在那伟大的航道！”于是越来越多的人奔嚮大海，驶入伟大的航道，世界迎来暸大海贼时代！很多年后，一个小孩对这一个断暸手臂的海贼髮誓：“我一定要成为海贼王！”于是10年后，一个伟大的传说开始暸。这是个关于一群爱做梦孩子的故事，他们拥有热情，他们拥有毅力，他们拥有伙伴……</td>
                    <td ><a href="http://manhua.dmzj.com/haizeiwang">Link</a></td>
                </tr>
                </tbody>
            );
        }
        else if(filtered1 !== -1){
            itemTable = (
                <thead>
                    <tr>
                        <td>1</td>
                        <td>一拳超人</td>
                        <td>一拳超人漫画 ，主人公埼玉原本是一名整日奔波于求职的普通人。3年前的一天偶然遇到了要对淘气少年下杀手的异变螃蟹人后，回忆起年少年时“想要成为英雄”的梦想，最终拼尽全力救下了淘气少年。之后通过拼命锻炼，埼玉终于脱胎换骨获得了最强的力量，但同时失去了头发成了光头。在独自做了一段时间英雄后，正式加入英雄协会，与众多英雄一起开始了对抗各种怪人以及恶势力的生活……</td>
                        <td><a href="http://manhua.dmzj.com/yiquanchaoren">Link</a></td>
                    </tr>
                </thead>
            );
        }
        else if(filtered2 !== -1 ){
            itemTable = (
                <thead>
                    <thead>
                        <tr>
                            <td>2</td>
                            <td>齐木楠雄的灾难</td>
                            <td>高中生·齐木楠雄是超能力者。心灵感应、念动力、透视、预知、瞬间移动、千里眼等，不论任何事情都自由自在。但这任谁都羡慕不已的最强能力，实际上对于本人而言是引来灾难的不幸元凶。因此，他在别人面前封印了超能力，以不起眼、不和他人有所牵扯为信条，默默无闻地过日子。但不知为何，他的身边总是聚集着不可思议的人类（生物），风暴般的灾难接连不断地降临！</td>
                            <td ><a href="http://manhua.dmzj.com/chaonenglizheqimunanxiongdezainan">Link</a></td>
                        </tr>
                    </thead>

                </thead>
            );
        }
        else if (filtered3 !== -1){
            itemTable = (
                <thead>
                    <tr>
                    <td>3</td>
                    <td>七龙珠</td>
                    <td>独自住在深山的少年孙悟空，遇上搜集七龙珠的少女科学家布尔玛，布尔玛为得到悟空拥有的四星七龙珠而带同悟空踏上找寻七龙珠的旅程。</td>
                    <td ><a href="http://manhua.dmzj.com/qilongzhuwanquanban">Link</a></td>
                </tr>
                </thead>
            );
        }
        else if (filtered4 !== -1){
            itemTable = (
                <thead>
                <tr>
                    <td>4</td>
                    <td>柯南</td>
                    <td>工藤新一，帝丹高中二年级学生，与小兰是青梅竹马，两人感情很好。继承了父亲的超强推理能力，被誉为高中生名侦探。他喜欢看推理小说，最崇拜福尔摩斯，另外踢足球的水平也是一流。不幸被卷入黑衣组织的交易被灌下毒药APTX4869，但是没有死，只是变成了小孩，改名江户川柯南……</td>
                    <td ><a href="http://manhua.dmzj.com/kenan">Link</a></td>
                </tr>
                </thead>
            );
        }
        else if (filtered5 !== -1){
            itemTable = (
                <thead>
                <tr>
                    <td>5</td>
                    <td>妖精的尾巴</td>
                    <td>魔法师协会分布在全世界各地，那里是魔法师介绍工作和传达情报的场所。梦想成为一名独挡一面魔法师的少女露茜，遇上了能吃火，用火攻击，操纵灭火龙法的魔法师，夏。来自妖精的尾巴魔法公会的夏邀请露茜加入，可是，那里……一群“怪人”集合成的问题魔法协会！虽然有点危险，但看起来还是蛮好玩的，属于妖精的尾巴的门扉，现在为你打开！ </td>
                    <td ><a href="http://manhua.dmzj.com/yaojingdeweiba">Link</a></td>
                </tr>
                </thead>
            );
        }
        else if (filtered6 !== -1){
            itemTable = (
                <thead>
                <tr>
                    <td>6</td>
                    <td>死神</td>
                    <td>除了能够看到灵魂，别无是处的普通高中生——黑崎一护有一天邂逅了一名少女，接着人生就发生了很大的转变。自称为死神的少女——朽木路奇亚，追着被称做虚的恶灵突然出现到了一护面前。由于一护的灵力很高，他就成为了虚下手的对像。身受重伤的路基亚无法解决恶灵，不得已只有把死神的能力分给一护，成为死神的一护与失去死神力量的路奇亚就一起开始了新的战斗……</td>
                    <td ><a href="http://manhua.dmzj.com/sishen">Link</a></td>
                </tr>
                </thead>
            );
        }
        else if (filtered7 !== -1){
            itemTable = (
                <thead>
                <tr>
                    <td>7</td>
                    <td>火影忍者</td>
                    <td>从小身上封印着邪恶的九尾妖狐，无父无母的鸣人受尽了村人的冷落，但是他却不知道原因，只是拼命用各种恶作剧试图吸引大家的注意力，人们却反而更远离他。好在还是有依卡鲁老师关心他，鸣人的性格才没有变得扭曲，他总是干劲十足，嘻嘻哈哈，超级乐观。为了让更多的人认可自己，鸣人的目标是——成为第五代火影！</td>
                    <td ><a href="http://manhua.dmzj.com/huoyingrenzhe">Link</a></td>
                </tr>
                </thead>
            );
        }
        else if (filtered8 !== -1){
            itemTable = (
                <thead>
                    <tr>
                    <td>8</td>
                    <td>海贼王</td>
                    <td>财富，权力，曾经拥有一切的海贼王戈尔多·罗杰，在临死前畱下暸一句话：“想要我的财富吗？那就去找吧，我的一切都在那裏，在那伟大的航道！”于是越来越多的人奔嚮大海，驶入伟大的航道，世界迎来暸大海贼时代！很多年后，一个小孩对这一个断暸手臂的海贼髮誓：“我一定要成为海贼王！”于是10年后，一个伟大的传说开始暸。这是个关于一群爱做梦孩子的故事，他们拥有热情，他们拥有毅力，他们拥有伙伴……</td>
                    <td ><a href="http://manhua.dmzj.com/haizeiwang">Link</a></td>
                </tr>
                </thead>
            );
        }

        else{
            itemTable = (
                <p> Nothing found in here </p>
            );
        }
        return(
            <div className ="searchBox">
                <input type="text" value={this.state.search} placeholder="Search..."
                 onChange={this.updateSearch.bind(this)}/>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>summary</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    {itemTable}

                </Table>
            </div>
        )
    }
}

export default List2;