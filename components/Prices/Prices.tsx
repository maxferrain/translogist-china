import styles from './Prices.module.scss'
import cn from 'classnames'
import {Table, TableColumnsType} from 'antd'
import React from 'react'
import {
    columnsVladivostok,
    columnsVostochniy,
    DataType,
    ports,
    pricesVladivostok,
    pricesVostochniy
} from '@/infoData/pricesData'


const {pricesBlock, pricesContainer, title} = styles


const columns: TableColumnsType<DataType> = [
    {title: 'Порт назначения', dataIndex: 'name', key: 'name'}
]

const Prices = () => {

    return (
        <div className={pricesBlock}>
            <div className={cn('container', pricesContainer)} id="prices">
                <h2 className={title}>Предлагаем <span>лучшие</span> цены на рынке</h2>

                <Table
                    columns={columns}
                    expandable={{expandedRowRender: RowRender, defaultExpandedRowKeys: [0]}}
                    dataSource={ports}
                    pagination={false}
                    size="small"
                />
            </div>
        </div>

    )
}

const tablesData = {
    [ports[0].name]: {
        cols: columnsVostochniy,
        dataSource: pricesVostochniy
    },
    [ports[1].name]: {
        cols: columnsVladivostok,
        dataSource: pricesVladivostok
    }
}

const RowRender = (record: DataType) => {

    return (
        <Table
            columns={tablesData[record.name]?.cols}
            dataSource={tablesData[record.name]?.dataSource}
            pagination={false}
        />
    )
}

export default Prices
