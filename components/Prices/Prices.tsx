import styles from './Prices.module.scss'
import cn from 'classnames'
import {Table, TableColumnsType} from 'antd'
import React from 'react'
import {columnsVostochniy, DataType, ports, pricesVladivostok, pricesVostochniy} from '@/infoData/pricesData'


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
                    expandable={{expandedRowRender: RowRender, defaultExpandedRowKeys: ['0']}}
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
        cols: [
            {title: 'Порт отправления', dataIndex: 'city', key: 'city'},
            {title: '20\'DC/Torgmoll', dataIndex: 'Torgmoll', key: 'Torgmoll'},
            {title: '20\'DC/Sinokor', dataIndex: 'Sinokor', key: 'Sinokor'},
            {title: '20\'DC/Fesco', dataIndex: 'Fesco', key: 'Fesco'},
            {title: '20\'DC/Sasco', dataIndex: 'Sasco', key: 'Sasco'},
            {title: '40\'HC/Torgmoll', dataIndex: 'Torgmoll40', key: 'Torgmoll40'},
            {title: '40\'HC/Sinokor', dataIndex: 'Sinokor40', key: 'Sinokor40'},
            {title: '40\'HC/Fesco', dataIndex: 'Fesco40', key: 'Fesco40'},
            {title: '40\'HC/MAS', dataIndex: 'MAS', key: 'MAS'},
            {title: '40\'HC/Sasco', dataIndex: 'Sasco40', key: 'Sasco40'},
        ],
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
