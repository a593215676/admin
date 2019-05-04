
module.exports ={
   chartSettings : {
        metrics: ['expected', 'actual'],
        dimension: ['星期']
    },
    chartSettings1 : {
        metrics: ['sales', 'dekekopmer','marketing','techology','ministration'],
        dimension: ['name']
    },
    chartSettings2 : {
        roseType:"radius"
    },
    chartSettings3 : {
        metrics: ['expected', 'actual'],
        dimension: ['星期']
    },
    duration: 4000,
    startVal: 0,
    NewVisits:102400,
    Messages: 81212,
    Purchases: 9280,
    Shoppings:13600,
    chartData: {
        columns: ['星期', 'expected', 'actual'],
        rows: [
            { '星期': 'Mon', 'expected': 141, 'actual': 81},
            { '星期': 'Tue', 'expected': 222, 'actual': 181},
            { '星期': 'Wed', 'expected': 41, 'actual': 33},
            { '星期': 'Thu', 'expected': 91, 'actual': 77},
            { '星期': 'Fri', 'expected': 221, 'actual': 102},
            { '星期': 'Sat', 'expected': 83, 'actual': 112},
            { '星期': 'Sun', 'expected': 188, 'actual': 141},
        ]
    },
    chartData1: {
        columns: ['name'],
        rows: [
            { 'name': 'Allocated Budget', 'sales': 141, 'ministration': 81, 'techology': 32,'marketing': 98,'dekekopmer': 67 },
            { 'name': 'Expected Spending', 'sales': 112, 'ministration': 65, 'techology': 57,'marketing': 109,'dekekopmer': 32 },
            { 'name': 'Actual Spending', 'sales': 131, 'ministration': 54, 'techology': 43,'marketing': 53,'dekekopmer': 77},
        ]
    },
    chartData2: {
        columns: ['日期', '访问用户'],
        rows: [
            { '日期': 'Industries', '访问用户': 141 },
            { '日期': 'Technology', '访问用户': 137 },
            { '日期': 'Forex', '访问用户': 87 },
            { '日期': 'Gold', '访问用户': 131 },
            { '日期': 'Forecasts', '访问用户': 99 },
        ]
    },
    chartData3: {
        columns: ['星期', 'expected', 'actual', '下单率'],
        rows: [
            { '星期': 'Mon', 'expected': 141, 'actual': 81},
            { '星期': 'Tue', 'expected': 222, 'actual': 181},
            { '星期': 'Wed', 'expected': 41, 'actual': 33},
            { '星期': 'Thu', 'expected': 91, 'actual': 77},
            { '星期': 'Fri', 'expected': 221, 'actual': 102},
            { '星期': 'Sat', 'expected': 83, 'actual': 112},
            { '星期': 'Sun', 'expected': 188, 'actual': 141},
        ]
    },
    tableList:[
        {Order_No: '4042b6Bb-Ef7E-5Ca2-9A5c-1F2b9e', price: '12,035.3',status: 0},
        {Order_No: 'db2FD0BB-03Eb-cB68-E47a-FB8f5A',price: '3,469.5',status: 0},
        {Order_No: 'e9E550AF-9712-f1CB-3Ed9-bd6b64',price: '3,380.5',status: 1},
        {Order_No: 'F5bD99d5-eA64-Cfad-A8fb-cFD3e4',price: '7,334.98',status: 1},
        {Order_No: '1BdE5d4A-fd26-3eB4-bD68-0d5ef1',price: '10,852.44',status: 0},
        {Order_No: 'DDA4dd0B-dB69-8eC9-f849-F91a8e',price: '5,335.32',status: 1},
        {Order_No: 'aeeC3425-0D70-b2eF-76B5-5298D2',price: '4,874.3',status: 1},
    ],
    TodoList:[
        {
            conts:'star this repository',
            checked:false
        },
        {
            conts:'fork this repository',
            checked:false
        },
        {
            conts: 'follow author',
            checked:false
        },
        {
            conts:   'vue-admin',
            checked:false
        },
        {
            conts:'vue',
            checked:false
        },
        {
            conts:'element-ui',
            checked:false
        },
        {
            conts:'axios',
            checked:false
        },
        {
            conts:'webpack',
            checked:false
        }
    ]
}
