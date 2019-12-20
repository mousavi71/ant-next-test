import { List, Avatar, Button, Skeleton } from 'antd';

import reqwest from 'reqwest';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class LoadMoreList extends React.Component {
    // state = {
    //     initLoading: true,
    //     loading: false,
    //     data: [],
    //     list: [],
    // };

    state = {
        initLoading: false,
        loading: false,
        data: [{
            loading: false,
            name: {
                first: 'sajjad',
                last: 'mousavi'
            }
        },{
            loading: false,
            name: {
                first: 'gholi',
                last: 'gholi'
            }
        },{
            loading: false,
            name: {
                first: 'asghar',
                last: 'asghar'
            }
        },{
            loading: false,
            name: {
                first: 'gholam',
                last: 'gholam'
            }
        }],
        list: [{
            loading: false,
            name: {
                first: 'sajjad',
                last: 'mousavi'
            }
        },{
            loading: false,
            name: {
                first: 'gholi',
                last: 'gholi'
            }
        },{
            loading: false,
            name: {
                first: 'asghar',
                last: 'asghar'
            }
        },{
            loading: false,
            name: {
                first: 'gholam',
                last: 'gholam'
            }
        }],
    };

    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            },
        });
    };

    edit = (index) => {
        let newList = this.state.list;
        newList.splice(index, 1);
        console.log(this.state, index, newList);
        this.setState({
            loading: true,
            list: newList,
        });

    };
    add = () => {

    };
    onLoadMore = () => {
        this.edit();
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                    // In real scene, you can using public method of react-virtualized:
                    // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };

    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;

        return (
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item, index) => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit">edit</a>, <a onClick={this.edit.bind(this, index)} key="list-loadmore-more">delete</a>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <div>content</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        );
    }
}
// import React, { useState } from 'react';
// export default function Example() {
//     // Declare a new state variable, which we'll call "count"
//     const [count, setCount] = useState(0);
//
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }
// export default Example;
export default LoadMoreList;

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
//
// export default Welcome;
