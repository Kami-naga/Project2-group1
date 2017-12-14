import React, { Component } from 'react';

class List3 extends React.Component{
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
                    <td>为美好的世界献上祝福！</td>
                    <td>喜爱游戏的家里蹲少年佐藤和真的人生突然闭幕。
                        但是他的眼前出现自称女神的美少女。
                        转生到异世界的和真就此为了满足食衣住而努力工作！
                        原本只想安稳度日的和真，却因为带去的女神接二连三引发问题，
                        甚至被魔王军盯上了!?</td>
                    <td href="http://www.yidm.com/article/html/1/1582/index.html">Link</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>NO GAME NO LIFE 游戏人生</td>
                    <td>在网络上成为都市传说的天才玩家兄妹·空和白实际是家里蹲尼特族。他们将将世界称为“垃圾游戏”。某天，这两个人某一天被自称“神”的少年召唤到了异世界。那是被神明禁止了战争，一切交由游戏来决定"的世界——没错，就连国境线也是一样。被其他种族逼入绝境，只剩下最后一座都市的“人类种”。空和白，两名废人兄妹到底能否在异世界成为“人类的救世主”？——那么，让我们开始游戏吧！</td>
                    <td href="http://www.8wenku.com/book/1186">Link</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}

export default List3;