import React, {FC, useContext} from "react";
import classNames from "classnames";

import {TabsContext} from "./index";

export interface TabItemProps {
    /** tabsItem key */
    index: number,
    /** tabsItem 标题 */
    title: string,
    /** tabsItem className */
    className ?: string,
}

export const TabItem: FC<TabItemProps> = (props) => {
    const {index, title, className} = props;

    const context = useContext(TabsContext);
    console.log(context); // 拿到父组件传过来的值
    // console.log(index); // 获取index

    const classes = classNames(className, {
        'li': context.index !== index,
        'is_active': context.index === index
    });

    // 点击事件（切换选中）
    const handleClick = () => {
        if (context.onSelect && context.index !== index) {
            context.onSelect(index)
        }
    };
    return (
        <div className={classes} onClick={handleClick}>
            {title}
        </div>
    );
};
TabItem.displayName = "TabItem";

export default TabItem;
