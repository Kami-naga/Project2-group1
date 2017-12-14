import React, { Component } from 'react';

class List2 extends React.Component{
    render(){
        return(
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>summary</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>一拳超人</td>
                    <td>一拳超人漫画 ，主人公埼玉原本是一名整日奔波于求职的普通人。3年前的一天偶然遇到了要对淘气少年下杀手的异变螃蟹人后，回忆起年少年时“想要成为英雄”的梦想，最终拼尽全力救下了淘气少年。之后通过拼命锻炼，埼玉终于脱胎换骨获得了最强的力量，但同时失去了头发成了光头。在独自做了一段时间英雄后，正式加入英雄协会，与众多英雄一起开始了对抗各种怪人以及恶势力的生活……</td>
                    <td href="http://manhua.dmzj.com/yiquanchaoren">Link</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>齐木楠雄的灾难</td>
                    <td>高中生·齐木楠雄是超能力者。心灵感应、念动力、透视、预知、瞬间移动、千里眼等，不论任何事情都自由自在。但这任谁都羡慕不已的最强能力，实际上对于本人而言是引来灾难的不幸元凶。因此，他在别人面前封印了超能力，以不起眼、不和他人有所牵扯为信条，默默无闻地过日子。但不知为何，他的身边总是聚集着不可思议的人类（生物），风暴般的灾难接连不断地降临！</td>
                    <td href="http://manhua.dmzj.com/chaonenglizheqimunanxiongdezainan">Link</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}

export default List2;