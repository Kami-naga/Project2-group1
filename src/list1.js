import React, { Component } from 'react';

class List1 extends React.Component{
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
                    <td>Re：从零开始的异世界生活</td>
                    <td>在异世界陷入迷茫的普通高中生菜月昴，邂逅了一位银发的美少女。但想助她一臂之力的昴，却一次次地遭遇敌袭，背叛、暴力，甚至是死亡……“死亡重置”——无力的少年拥有的唯一能力，能将死后时间倒转回一开始。使用了这般力量，便会失去过去的回忆，可为了守护最重要的人们，昴必须抗争到底。“即使你忘却了我，我也不会遗忘你。”</td>
                    <td href="https://bangumi.bilibili.com/anime/3461?from=search&seid=12480599131834855516">Link</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>斩服少女</td>
                    <td>本故事以被武力和恐怖支配的本能字学院为舞台，以为父报仇的转校生少女为中心， 围绕着在学园中“执牛耳者”的学生及学生会四大天王间的激战故事展开。 缠流子和鬼龙院皋月，两人为本作的主人公。在本作中，皋月用极制服的力量支配着学园， 而流子为查明父亲死亡的真相而与皋月对抗。 在这由力量支配的学园中，由于手持片太刀铗的转校生的到来，引起了动乱， 这一场各个能力者均被打倒的故事因此而开始！</td>
                    <td href="https://bangumi.bilibili.com/anime/419?from=search&seid=1605314221698094105">Link</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}

export default List1;