import React from 'react';
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/Select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                placeholder={'Search...'}
                value={filter.search}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                defaultValue={'Sort by'}
                options={[
                    {value: 'title', name: 'Name'},
                    {value: 'body', name: 'Description'},
                ]}
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    );
};

export default PostFilter;