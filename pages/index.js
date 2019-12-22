import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
} from 'antd'
import {Home} from "./home";
import Link from 'next/link';

import React from 'react';

const FormItem = Form.Item;
const Option = Select.Option;

// const testApp =  () => (
//     <Link href="/home">
//       <a>Home</a>
//     </Link>
// );



class testApp extends React.Component {
    render() {
        return <Link href="/home">
            <a>Home</a>
        </Link>;
    }
}


export default testApp;