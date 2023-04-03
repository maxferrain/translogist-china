export interface ExpandedDataType {
    key: number
    city: string
    Torgmoll?: string
    Sinokor?: string
    Fesco?: string
    Sasco?: string
    Torgmoll40?: string
    Sinokor40?: string
    Fesco40?: string
    MAS?: string
    Sasco40?: string
}

export interface DataType {
    key: string | number;
    name: string;
}

export const columnsVostochniy = [
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
]
export const pricesVostochniy: ExpandedDataType[] = [
    {
        key: 0,
        city: 'Shanghai',
        Torgmoll: '3 700 A$',
        Sinokor: '5 000 A$',
        Fesco: '4 960 A$',
        Sasco: '3 760 A$',
        Torgmoll40: '5 400 A$',
        Sinokor40: '7 160 A$',
        Fesco40: '6 260 A$',
        MAS: '4 910 A$',
        Sasco40: '5 110 A$'
    },
    {
        key: 1,
        city: 'Ningbo',
        Torgmoll: '',
        Sinokor: '5 000 A$',
        Fesco: '4 960 A$',
        Sasco: '3 760 A$',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40: '',
    },
    {
        key: 2,
        city: 'Qingdao',
        Torgmoll: '3 700 A$',
        Sinokor: '5 000 A$',
        Fesco: '5 160 A$',
        Sasco: '4 110 A$',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40: '',
    },
    {
        key: 3,
        city: 'Xiamen',
        Torgmoll: '3 800 A$',
        Sinokor: '5 000 A$',
        Fesco: '5 060 A$',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40:'',
    },
    {
        key: 4,
        city: 'Huangpu',
        Torgmoll: '3 910 A$',
        Sinokor: '5 000 A$',
        Fesco: '5 310 A$',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40:'',
    },
    {
        key: 5,
        city: 'Yantian',
        Torgmoll: '3 910 A$',
        Sinokor: '',
        Fesco: '5 060 A$',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40:'',
    },
    {
        key: 6,
        city: 'Dalian',
        Torgmoll: '',
        Sinokor: '5 000 A$',
        Fesco: '5 810 A$',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40:'',
    },
    {
        key: 7,
        city: 'Xingang',
        Torgmoll: '3 600 A$',
        Sinokor: '5 000 A$',
        Fesco: '4 960 A$',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40: '',
    },
    {
        key: 8,
        city: 'Busan',
        Torgmoll: '3 900 A$',
        Sinokor: '5 000 A$',
        Fesco: '3 510 A$',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40: '',
    },
    {
        key: 9,
        city: 'Shantou',
        Torgmoll: '5 000 A$',
        Sinokor: '',
        Fesco: '5 910 A$',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40: '',
    },
    {
        key: 10,
        city: 'Shekou',
        Torgmoll: '5 000 A$',
        Sinokor: '',
        Fesco: '',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40: '',
    },
    {
        key: 11,
        city: 'Taicang',
        Torgmoll: '',
        Sinokor: '',
        Fesco: '5 810 A$',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40: '',
    },
    {
        key: 12,
        city: 'Zhapu',
        Torgmoll: '',
        Sinokor: '',
        Fesco: '5 160 A$',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40: '',
    },
    {
        key: 13,
        city: 'Humen',
        Torgmoll: '',
        Sinokor: '',
        Fesco: '',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40: '',
    },
    {
        key: 14,
        city: 'Nansha',
        Torgmoll: '',
        Sinokor: '5 200 A$',
        Fesco: '',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40: '',
    },
    {
        key: 15,
        city: 'Rizhao',
        Torgmoll: '3 900 A$',
        Sinokor: '',
        Fesco: '5 260 A$',
        Sasco: '',
        Torgmoll40: '',
        Sinokor40: '',
        Fesco40: '',
        MAS: '',
        Sasco40: ''
    },
]

export const columnsVladivostok = [
    {title: 'Порт отправления', dataIndex: 'city', key: 'city'},
    {title: '20\'DC/Gangtong', dataIndex: 'Torgmoll', key: 'Torgmoll'},
    {title: '20\'DC/OVP', dataIndex: 'Sinokor', key: 'Sinokor'},
    {title: '20\'DC/Sinokor', dataIndex: 'Fesco', key: 'Fesco'},
    {title: '20\'DC/GFL', dataIndex: 'Sasco', key: 'Sasco'},
    {title: '40\'HC/Torgmoll', dataIndex: 'Torgmoll40', key: 'Torgmoll40'},
    {title: '40\'HC/Sinokor', dataIndex: 'Sinokor40', key: 'Sinokor40'},
    {title: '40\'HC/Fesco', dataIndex: 'Fesco40', key: 'Fesco40'},
    {title: '40\'HC/MAS', dataIndex: 'MAS', key: 'MAS'},
    {title: '40\'HC/Sasco', dataIndex: 'Sasco40', key: 'Sasco40'},
]
export const pricesVladivostok: ExpandedDataType[] = [
    {
        key: 0,
        city: 'Shanghai',
        Torgmoll: '122',
        Sinokor: '1344'
    },
    {
        key: 2,
        city: 'rtgr',
        Torgmoll: 'test2',
        Sinokor: 'test2'
    },
    {
        key: 3,
        city: 'rhf',
        Torgmoll: 'test3',
        Sinokor: 'test3'
    }
]

export const ports: DataType[] = [
    {key: 0, name: 'VOSTOCHNY (Восточный)'},
    {key: 1, name: 'VLADIVOSTOK (ВМТП)'},
    {key: 2, name: 'FISH PORT (ВМКТ)'},
]
