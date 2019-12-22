import { Input, Tooltip, Icon } from 'antd';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';
import queryString from 'query-string';


const UserEdit = () => {
    const [count, setCount] = useState(0);
    const router = useRouter();
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <h1>{router.query.id}</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div>
                <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={
                        <Tooltip title="Extra information">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />

                <br />
                <br />

                <Input prefix="￥" suffix="RMB" />
            </div>
        </div>
    );
}
export default UserEdit;
