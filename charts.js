// Demo Data với cấu trúc THU/CHI chuẩn hóa
const demoData = {
    projects: [
        { id: 'P001', name: 'DA Alpha', budgetThuTotal: 120, budgetChiTotal: 80, actualThu: 115, actualChi: 78 },
        { id: 'P002', name: 'DA Beta', budgetThuTotal: 110, budgetChiTotal: 75, actualThu: 106, actualChi: 70 },
        { id: 'P003', name: 'DA Gamma', budgetThuTotal: 105, budgetChiTotal: 70, actualThu: 98, actualChi: 66 }
    ],

    // Hạng mục THU - Chuẩn hóa theo bảng chi tiết
    thuItems: [
        { code: 'THU.01', name: 'THU.01 - Thu từ Chủ Đầu Tư', shortName: 'Thu từ Chủ ĐT', level: 1 },
        { code: 'THU.02', name: 'THU.02 - Thu Hoạt Động Tài Chính', shortName: 'Thu HĐ Tài chính', level: 1 },
        { code: 'THU.03', name: 'THU.03 - Thu từ Nguồn Khác', shortName: 'Thu Nguồn khác', level: 1 },
        { code: 'THU.04', name: 'THU.04 - Thu Khác', shortName: 'Thu Khác', level: 1 }
    ],

    thuItemsLevel2: [
        { code: 'THU.01.01', name: 'THU.01.01 - Tư vấn', parent: 'THU.01', level: 2 },
        { code: 'THU.01.02', name: 'THU.01.02 - Rao sự', parent: 'THU.01', level: 2 },
        { code: 'THU.01.03', name: 'THU.01.03 - Bản quyền & Khác', parent: 'THU.01', level: 2 }
    ],

    // Hạng mục CHI - Chuẩn hóa theo bảng chi tiết
    chiItems: [
        { code: 'CHI.01', name: 'CHI.01 - Chi cho pháp lý dự án', shortName: 'Pháp lý', level: 1 },
        { code: 'CHI.02', name: 'CHI.02 - Chi cho kiến thiết cơ bản', shortName: 'Kiến thiết', level: 1 },
        { code: 'CHI.03', name: 'CHI.03 - Chi cho công tác bán hàng', shortName: 'Bán hàng', level: 1 },
        { code: 'CHI.04', name: 'CHI.04 - Chi công tác chuẩn bị', shortName: 'Chuẩn bị', level: 1 },
        { code: 'CHI.05', name: 'CHI.05 - Chi công tác thiết bị', shortName: 'Thiết bị', level: 1 },
        { code: 'CHI.06', name: 'CHI.06 - Chi nhân công & thầu phụ', shortName: 'Nhân công', level: 1 },
        { code: 'CHI.07', name: 'CHI.07 - Chi vật tư & NCC', shortName: 'Vật tư', level: 1 },
        { code: 'CHI.08', name: 'CHI.08 - Chi cho hoạt động trực tiếp', shortName: 'HĐ trực tiếp', level: 1 }
    ],

    chiItemsLevel2: [
        { code: 'CHI.01.10', name: 'CHI.01.10 - Hồ sơ pháp lý dự án', parent: 'CHI.01', level: 2 },
        { code: 'CHI.01.20', name: 'CHI.01.20 - Phí giấy phép xây dựng', parent: 'CHI.01', level: 2 }
    ],

    chiItemsLevel3: [
        { code: 'CHI.06.30', name: 'CHI.06.30 - Gói thầu kết cấu', shortName: 'Gói thầu KC', parent: 'CHI.06', level: 3 },
        { code: 'CHI.06.40', name: 'CHI.06.40 - Gói thầu hoàn thiện', parent: 'CHI.06', level: 3 }
    ],

    chiItemsLevel4: [
        { code: 'CHI.06.30.31', name: 'CHI.06.30.31 - Gói thầu kết cấu A', shortName: 'Gói thầu KC A', parent: 'CHI.06.30', level: 4 },
        { code: 'CHI.06.30.32', name: 'CHI.06.30.32 - Gói thầu kết cấu B', parent: 'CHI.06.30', level: 4 },
        { code: 'CHI.06.40.06', name: 'CHI.06.40.06 - Gói thầu A', parent: 'CHI.06.40', level: 4 }
    ],

    versions: {
        thu: { banDau: [42, 23, 12, 8], ganNhat: [45.2, 25, 15, 9], dieuChinh: [48.5, 27, 16.5, 10] },
        chi: { banDau: [1.5, 14.8, 10.3, 7.8, 12, 28.1, 16, 8.5], ganNhat: [1.6, 15.2, 10.8, 8.2, 12.5, 29, 16.5, 9], dieuChinh: [1.7, 15.8, 11.2, 8.5, 13, 30, 17, 9.5] }
    },

    months: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
    approval: { before: { chi: 4.85, vdu: 2.73, fhi: 1.25 }, after: { chi: 5.23, vdu: 2.85, fhi: 1.18 } }
};

let currentBudgetType = 'total', charts = {};

// Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    event.currentTarget.classList.add('active');
    setTimeout(() => Object.values(charts).forEach(c => c && c.resize()), 100);
}

function toggleBudgetType(type, btn) {
    currentBudgetType = type;
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderBudgetTables();
}

function switchVersion(type, ver, btn) {
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (type === 'thu') renderBarThuTotal(ver);
    else renderBarChiTotal(ver);
}

function toggleMultiSelect(el) {
    document.querySelectorAll('.multi-select').forEach(m => m !== el && m.classList.remove('open'));
    el.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', e => {
    if (!e.target.closest('.multi-select')) document.querySelectorAll('.multi-select').forEach(m => m.classList.remove('open'));
});

// Page 1 Charts
function initPage1() {
    charts.pieStatus = echarts.init(document.getElementById('pieStatus'));
    charts.pieStatus.setOption({
        tooltip: { trigger: 'item' },
        legend: {
            bottom: 0,
            left: 'center',
            textStyle: { color: '#64748B', fontSize: 10 },
            itemGap: 8
        },
        series: [{
            type: 'pie',
            radius: ['35%', '60%'],
            center: ['50%', '45%'],
            label: { show: false },
            data: [
                { value: 2, name: 'Quá hạn', itemStyle: { color: '#DC2626' } },
                { value: 4, name: 'Trong hạn', itemStyle: { color: '#16A34A' } },
                { value: 2, name: 'Đã hoàn thành', itemStyle: { color: '#F59E0B' } }
            ]
        }]
    });
    renderBarThuTotal('v1');
    renderBarChiTotal('v1');
    renderBarThuStructure();
    renderBarChiStructure();
    renderBudgetTables();
}

function renderBarThuTotal(ver) {
    const projects = ['DA 1', 'DA 2', 'DA 3', 'DA 4', 'DA 5'];
    const d1 = ver === 'v1' ? [42, 38, 35, 28, 22] : [45, 41, 38, 31, 25];
    const d2 = ver === 'v1' ? [45, 41, 38, 31, 25] : [48, 44, 41, 34, 28];
    const l1 = ver === 'v1' ? 'Ban đầu' : 'Gần nhất';
    const l2 = ver === 'v1' ? 'Gần nhất' : 'Điều chỉnh';
    if (!charts.barThuTotal) charts.barThuTotal = echarts.init(document.getElementById('barThuTotal'));
    charts.barThuTotal.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: [l1, l2], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        yAxis: { type: 'category', data: projects, axisLabel: { color: '#64748B', fontSize: 10 } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: l1, type: 'bar', data: d1, itemStyle: { color: '#3B82F6' } },
            { name: l2, type: 'bar', data: d2, itemStyle: { color: '#16A34A' } }
        ]
    });
}

function renderBarChiTotal(ver) {
    const projects = ['DA 1', 'DA 2', 'DA 3', 'DA 4', 'DA 5'];
    const d1 = ver === 'v1' ? [38, 32, 28, 22, 18] : [42, 36, 32, 26, 22];
    const d2 = ver === 'v1' ? [42, 36, 32, 26, 22] : [46, 40, 36, 30, 26];
    const l1 = ver === 'v1' ? 'Ban đầu' : 'Gần nhất';
    const l2 = ver === 'v1' ? 'Gần nhất' : 'Điều chỉnh';
    if (!charts.barChiTotal) charts.barChiTotal = echarts.init(document.getElementById('barChiTotal'));
    charts.barChiTotal.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: [l1, l2], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        yAxis: { type: 'category', data: projects, axisLabel: { color: '#64748B', fontSize: 10 } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: l1, type: 'bar', data: d1, itemStyle: { color: '#F59E0B' } },
            { name: l2, type: 'bar', data: d2, itemStyle: { color: '#DC2626' } }
        ]
    });
}

function renderBarThuStructure() {
    const cats = demoData.thuItems.map(i => i.shortName);
    charts.barThuStructure = echarts.init(document.getElementById('barThuStructure'));
    charts.barThuStructure.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Ban đầu', 'Gần nhất', 'Điều chỉnh'], textStyle: { color: '#64748B' }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
        xAxis: { type: 'category', data: cats, axisLabel: { color: '#64748B' } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: 'Ban đầu', type: 'bar', data: demoData.versions.thu.banDau, itemStyle: { color: '#3B82F6' } },
            { name: 'Gần nhất', type: 'bar', data: demoData.versions.thu.ganNhat, itemStyle: { color: '#16A34A' } },
            { name: 'Điều chỉnh', type: 'bar', data: demoData.versions.thu.dieuChinh, itemStyle: { color: '#F59E0B' } }
        ]
    });
}

function renderBarChiStructure() {
    const cats = demoData.chiItems.map(i => i.shortName);
    charts.barChiStructure = echarts.init(document.getElementById('barChiStructure'));
    charts.barChiStructure.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Ban đầu', 'Gần nhất', 'Điều chỉnh'], textStyle: { color: '#64748B' }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '15%', containLabel: true },
        xAxis: { type: 'category', data: cats, axisLabel: { color: '#64748B', rotate: 30, fontSize: 10 } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: 'Ban đầu', type: 'bar', data: demoData.versions.chi.banDau, itemStyle: { color: '#3B82F6' } },
            { name: 'Gần nhất', type: 'bar', data: demoData.versions.chi.ganNhat, itemStyle: { color: '#16A34A' } },
            { name: 'Điều chỉnh', type: 'bar', data: demoData.versions.chi.dieuChinh, itemStyle: { color: '#F59E0B' } }
        ]
    });
}

function renderBudgetTables() {
    // Định nghĩa data cố định cho mỗi loại ngân sách
    const dataTotal = {
        rows: [
            'THU.01 - Thu từ Chủ ĐT',
            'THU.02 - Thu HĐ Tài chính',
            'THU.03 - Thu Nguồn khác',
            'CHI.01 - Pháp lý',
            'CHI.02 - Kiến thiết',
            'CHI.03 - Bán hàng',
            'CHI.06 - Nhân công',
            'CHI.07 - Vật tư'
        ],
        v1: [[38.2, 40.1, 41.5, 42.8, 43.5, 44.2], [20.5, 21.8, 22.3, 23.1, 23.8, 24.5], [10.8, 11.2, 11.8, 12.5, 13.2, 13.8], [1.2, 1.3, 1.4, 1.5, 1.6, 1.7], [13.5, 14.2, 14.8, 15.5, 16.2, 16.8], [9.2, 9.8, 10.3, 10.8, 11.3, 11.8], [25.5, 26.8, 27.5, 28.2, 29.0, 29.8], [14.2, 15.0, 15.8, 16.5, 17.2, 17.8]],
        v2: [[42.0, 43.5, 45.0, 46.5, 48.0, 49.5], [23.0, 24.5, 26.0, 27.5, 29.0, 30.5], [12.5, 13.2, 13.8, 14.5, 15.2, 15.8], [1.4, 1.5, 1.6, 1.7, 1.8, 1.9], [14.8, 15.5, 16.2, 16.8, 17.5, 18.2], [10.0, 10.5, 11.0, 11.5, 12.0, 12.5], [27.5, 28.5, 29.5, 30.5, 31.5, 32.5], [15.5, 16.2, 16.8, 17.5, 18.2, 18.8]],
        v3: [[45.5, 47.2, 48.8, 50.5, 52.2, 53.8], [25.8, 27.2, 28.5, 29.8, 31.2, 32.5], [14.2, 14.8, 15.5, 16.2, 16.8, 17.5], [1.6, 1.7, 1.8, 1.9, 2.0, 2.1], [16.2, 16.8, 17.5, 18.2, 18.8, 19.5], [11.2, 11.8, 12.3, 12.8, 13.3, 13.8], [30.0, 31.0, 32.0, 33.0, 34.0, 35.0], [17.0, 17.8, 18.5, 19.2, 19.8, 20.5]]
    };

    const dataDetail = {
        rows: [
            'THU.01 - Thu từ Chủ ĐT',
            'THU.01.01 - Tư vấn',
            'THU.01.02 - Rao sự',
            'CHI.01 - Pháp lý',
            'CHI.01.10 - Hồ sơ pháp lý',
            'CHI.06 - Nhân công',
            'CHI.06.30 - Gói thầu KC',
            'CHI.06.30.31 - Gói thầu KC A'
        ],
        v1: [[38.2, 40.1, 41.5, 42.8, 43.5, 44.2], [22.5, 23.8, 24.5, 25.2, 25.8, 26.5], [15.7, 16.3, 16.8, 17.3, 17.8, 18.3], [1.2, 1.3, 1.4, 1.5, 1.6, 1.7], [0.8, 0.9, 0.9, 1.0, 1.0, 1.1], [25.5, 26.8, 27.5, 28.2, 29.0, 29.8], [7.8, 8.2, 8.5, 8.8, 9.2, 9.5], [2.2, 2.3, 2.4, 2.5, 2.6, 2.7]],
        v2: [[42.0, 43.5, 45.0, 46.5, 48.0, 49.5], [25.0, 26.2, 27.0, 27.8, 28.5, 29.2], [17.0, 17.3, 17.8, 18.3, 18.8, 19.3], [1.4, 1.5, 1.6, 1.7, 1.8, 1.9], [0.9, 1.0, 1.0, 1.1, 1.1, 1.2], [27.5, 28.5, 29.5, 30.5, 31.5, 32.5], [8.5, 8.9, 9.2, 9.5, 9.8, 10.2], [2.5, 2.6, 2.7, 2.8, 2.9, 3.0]],
        v3: [[45.5, 47.2, 48.8, 50.5, 52.2, 53.8], [27.8, 29.0, 30.0, 31.0, 32.0, 33.0], [18.5, 18.8, 19.3, 19.8, 20.3, 20.8], [1.6, 1.7, 1.8, 1.9, 2.0, 2.1], [1.0, 1.1, 1.1, 1.2, 1.2, 1.3], [30.0, 31.0, 32.0, 33.0, 34.0, 35.0], [9.5, 9.9, 10.2, 10.5, 10.8, 11.2], [2.8, 2.9, 3.0, 3.1, 3.2, 3.3]]
    };

    const data = currentBudgetType === 'total' ? dataTotal : dataDetail;
    const cols = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'];

    const genTable = (versionData) => {
        let html = '<table class="data-table"><thead><tr><th>Hạng mục</th>';
        cols.forEach(c => html += `<th>${c}</th>`);
        html += '</tr></thead><tbody>';
        data.rows.forEach((rowName, rowIdx) => {
            html += `<tr><td>${rowName}</td>`;
            versionData[rowIdx].forEach(val => html += `<td>${val.toFixed(1)} tỷ</td>`);
            html += '</tr>';
        });
        return html + '</tbody></table>';
    };

    document.getElementById('tableV1').innerHTML = genTable(data.v1);
    document.getElementById('tableV2').innerHTML = genTable(data.v2);
    document.getElementById('tableV3').innerHTML = genTable(data.v3);
}

// Page 2 Charts
function initPage2() {
    renderGauges();
    renderLineCumulative();
    renderMonthlyBars();
    renderStructureBars();
}

function renderGauges() {
    const proj = demoData.projects.find(p => p.id === document.getElementById('projectFilter2').value) || demoData.projects[0];
    const thuPct = Math.round(proj.actualThu / proj.budgetThuTotal * 100);
    const chiPct = Math.round(proj.actualChi / proj.budgetChiTotal * 100);

    charts.gaugeThu = echarts.init(document.getElementById('gaugeThu'));
    charts.gaugeThu.setOption({
        series: [{
            type: 'gauge', startAngle: 180, endAngle: 0, min: 0, max: 100,
            pointer: { show: true, length: '60%', width: 4 },
            axisLine: { lineStyle: { width: 20, color: [[0.6, '#DC2626'], [0.8, '#F59E0B'], [1, '#16A34A']] } },
            axisTick: { show: false }, splitLine: { show: false },
            axisLabel: { distance: -35, color: '#64748B', fontSize: 10 },
            detail: { formatter: '{value}%', fontSize: 20, color: '#0F172A', offsetCenter: [0, '40%'] },
            data: [{ value: thuPct }]
        }]
    });

    charts.gaugeChi = echarts.init(document.getElementById('gaugeChi'));
    charts.gaugeChi.setOption({
        series: [{
            type: 'gauge', startAngle: 180, endAngle: 0, min: 0, max: 100,
            pointer: { show: true, length: '60%', width: 4 },
            axisLine: { lineStyle: { width: 20, color: [[0.6, '#16A34A'], [0.8, '#F59E0B'], [1, '#DC2626']] } },
            axisTick: { show: false }, splitLine: { show: false },
            axisLabel: { distance: -35, color: '#64748B', fontSize: 10 },
            detail: { formatter: '{value}%', fontSize: 20, color: '#0F172A', offsetCenter: [0, '40%'] },
            data: [{ value: chiPct }]
        }]
    });
}

function renderLineCumulative() {
    const cumThu = [7, 14, 21, 28, 36, 43, 51, 59, 67, 75, 82, 85];
    const cumChi = [6, 12, 18, 24, 30, 37, 44, 50, 57, 64, 70, 72];
    charts.lineCumulative = echarts.init(document.getElementById('lineCumulative'));
    charts.lineCumulative.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Lũy kế Thu', 'Lũy kế Chi'], textStyle: { color: '#64748B' }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
        xAxis: { type: 'category', data: demoData.months, axisLabel: { color: '#64748B' } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: 'Lũy kế Thu', type: 'line', smooth: true, data: cumThu, lineStyle: { color: '#16A34A', width: 3 }, itemStyle: { color: '#16A34A' }, areaStyle: { color: 'rgba(22,163,74,0.1)' } },
            { name: 'Lũy kế Chi', type: 'line', smooth: true, data: cumChi, lineStyle: { color: '#DC2626', width: 3 }, itemStyle: { color: '#DC2626' }, areaStyle: { color: 'rgba(220,38,38,0.1)' } }
        ]
    });
}

function renderMonthlyBars() {
    const months = demoData.months.slice(0, 10);
    charts.barMonthlyThu = echarts.init(document.getElementById('barMonthlyThu'));
    charts.barMonthlyThu.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Thực thu', 'Ngân sách'], textStyle: { color: '#64748B' }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
        xAxis: { type: 'category', data: months, axisLabel: { color: '#64748B' } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: 'Thực thu', type: 'bar', data: [6.5, 6.5, 6.5, 6.8, 7.2, 7.5, 7.8, 7.2, 7.0, 5.4], itemStyle: { color: '#16A34A' } },
            { name: 'Ngân sách', type: 'bar', data: [7.0, 7.2, 7.3, 7.0, 7.3, 7.4, 7.5, 8.0, 8.2, 8.3], itemStyle: { color: 'rgba(22,163,74,0.3)' } }
        ]
    });

    charts.barMonthlyChi = echarts.init(document.getElementById('barMonthlyChi'));
    charts.barMonthlyChi.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Thực chi', 'Ngân sách'], textStyle: { color: '#64748B' }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
        xAxis: { type: 'category', data: months, axisLabel: { color: '#64748B' } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: 'Thực chi', type: 'bar', data: [5.5, 5.5, 5.8, 5.7, 5.8, 5.9, 6.3, 6.5, 7.0, 7.2], itemStyle: { color: '#DC2626' } },
            { name: 'Ngân sách', type: 'bar', data: [6.0, 6.1, 6.0, 6.0, 6.1, 6.2, 6.5, 6.8, 7.2, 7.5], itemStyle: { color: 'rgba(220,38,38,0.3)' } }
        ]
    });
}

function renderStructureBars() {
    const thuCats = demoData.thuItems.map(i => i.shortName);
    const chiCats = demoData.chiItems.slice(0, 6).map(i => i.shortName);

    charts.barStructureThu = echarts.init(document.getElementById('barStructureThu'));
    charts.barStructureThu.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Thực thu', 'Ngân sách'], textStyle: { color: '#64748B' }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        yAxis: { type: 'category', data: thuCats, axisLabel: { color: '#64748B' } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: 'Thực thu', type: 'bar', data: [38.5, 18.2, 11.7, 8.4], itemStyle: { color: '#16A34A' } },
            { name: 'Ngân sách', type: 'bar', data: [45.2, 25.0, 15.0, 9], itemStyle: { color: 'rgba(22,163,74,0.3)' } }
        ]
    });

    charts.barStructureChi = echarts.init(document.getElementById('barStructureChi'));
    charts.barStructureChi.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Thực chi', 'Ngân sách'], textStyle: { color: '#64748B' }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        yAxis: { type: 'category', data: chiCats, axisLabel: { color: '#64748B' } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: 'Thực chi', type: 'bar', data: [1.5, 14, 9.8, 7.2, 11.5, 26], itemStyle: { color: '#DC2626' } },
            { name: 'Ngân sách', type: 'bar', data: [1.6, 15.2, 10.8, 8.2, 12.5, 29], itemStyle: { color: 'rgba(220,38,38,0.3)' } }
        ]
    });
}

function updatePage2() {
    renderGauges();
    renderLineCumulative();
    renderMonthlyBars();
    renderStructureBars();
}

// Page 3
function initPage3() {
    renderComparisonTable();
    renderWeeklyTable();
}

function renderComparisonTable(selectedCategories = null) {
    // Tất cả items có thể
    const allItems = [
        { name: 'CHI.01 - Pháp lý', code: 'CHI.01', before: 1.4, after: 1.55 },
        { name: 'CHI.02 - Kiến thiết', code: 'CHI.02', before: 14.2, after: 15.0 },
        { name: 'CHI.01.10 - Hồ sơ pháp lý', code: 'CHI.01.10', before: 0.8, after: 0.9 },
        { name: 'CHI.01.20 - Phí giấy phép', code: 'CHI.01.20', before: 0.6, after: 0.65 },
        { name: 'CHI.06 - Nhân công', code: 'CHI.06', before: 26.5, after: 28.1 },
        { name: 'CHI.06.30 - Gói thầu KC', code: 'CHI.06.30', before: 8.2, after: 9.6 },
        { name: 'CHI.06.30.31 - Gói thầu KC A', code: 'CHI.06.30.31', before: null, after: 2.4 },
        { name: 'CHI.06.40.06 - Gói thầu A', code: 'CHI.06.40.06', before: null, after: 2.4 }
    ];

    // Filter theo selected categories
    const items = selectedCategories && selectedCategories.length > 0
        ? allItems.filter(item => selectedCategories.some(cat => item.code.startsWith(cat)))
        : allItems;

    if (items.length === 0) {
        document.getElementById('comparisonTable').innerHTML = '<p style="text-align:center;padding:20px;color:#888;">Không có dữ liệu với bộ lọc hiện tại</p>';
        return;
    }

    let html = '<table class="data-table"><thead><tr><th>Hạng mục</th><th>Trước duyệt</th><th>Sau duyệt</th><th>Chênh lệch</th></tr></thead><tbody>';
    items.forEach(i => {
        const diff = i.before ? i.after - i.before : i.after;
        const diffColor = i.before ? (diff > 0 ? '#F59E0B' : '#16A34A') : '#16A34A';
        const beforeText = i.before ? i.before.toFixed(1) + ' tỷ' : '<span style="color:#888">- (Mới)</span>';
        html += `<tr><td>${i.name}</td><td>${beforeText}</td><td>${i.after.toFixed(1)} tỷ</td><td style="color:${diffColor}">+${diff.toFixed(1)} tỷ</td></tr>`;
    });
    document.getElementById('comparisonTable').innerHTML = html + '</tbody></table>';
}

function renderWeeklyTable(selectedCategories = null) {
    // Tất cả items có thể
    const allItems = [
        { name: 'CHI.01 - Pháp lý', code: 'CHI.01' },
        { name: 'CHI.02 - Kiến thiết', code: 'CHI.02' },
        { name: 'CHI.01.10 - Hồ sơ pháp lý', code: 'CHI.01.10' },
        { name: 'CHI.06 - Nhân công', code: 'CHI.06' },
        { name: 'CHI.06.30 - Gói thầu KC', code: 'CHI.06.30' },
        { name: 'CHI.06.30.31 - KC A', code: 'CHI.06.30.31' },
        { name: 'CHI.06.40.06 - Gói A', code: 'CHI.06.40.06' }
    ];

    // Filter theo selected categories
    const items = selectedCategories && selectedCategories.length > 0
        ? allItems.filter(item => selectedCategories.some(cat => item.code.startsWith(cat)))
        : allItems;

    if (items.length === 0) {
        document.getElementById('weeklyTable').innerHTML = '<p style="text-align:center;padding:20px;color:#888;">Không có dữ liệu với bộ lọc hiện tại</p>';
        return;
    }

    let html = '<table class="data-table"><thead><tr><th>Hạng mục</th><th>Tuần 1</th><th>Tuần 2</th><th>Tuần 3</th><th>Tuần 4</th><th>Tuần 5</th><th>Tổng</th></tr></thead><tbody>';
    items.forEach(item => {
        const weeks = Array.from({ length: 5 }, () => (Math.random() * 0.5 + 0.2).toFixed(1));
        const total = weeks.reduce((a, b) => parseFloat(a) + parseFloat(b), 0).toFixed(1);
        html += `<tr><td>${item.name}</td>`;
        weeks.forEach(w => html += `<td>${w} tỷ</td>`);
        html += `<td style="font-weight:bold">${total} tỷ</td></tr>`;
    });
    document.getElementById('weeklyTable').innerHTML = html + '</tbody></table>';
}

function updatePage3() {
    // Lấy danh sách categories được chọn
    const selectedCategories = Array.from(document.querySelectorAll('.multi-select-menu input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    // Cập nhật multi-select counters
    document.querySelectorAll('.multi-select').forEach(ms => {
        const checkboxes = ms.querySelectorAll('input[type="checkbox"]');
        const checkedCount = ms.querySelectorAll('input[type="checkbox"]:checked').length;
        const totalCount = checkboxes.length;
        const countSpan = ms.querySelector('.multi-select-count');

        if (checkedCount === 0) {
            countSpan.textContent = 'Không có';
        } else if (checkedCount === totalCount) {
            countSpan.textContent = 'Tất cả';
        } else {
            countSpan.textContent = `${checkedCount}/${totalCount}`;
        }
    });

    // Render bảng với filtered data
    renderComparisonTable(selectedCategories);
    renderWeeklyTable(selectedCategories);

    // Tính toán KPIs dựa trên categories được chọn
    const baseData = demoData.approval;

    // Giả lập việc tính toán dựa trên số categories được chọn
    const filterRatio = selectedCategories.length / 14; // 14 là tổng số categories

    const data = {
        before: {
            chi: baseData.before.chi * filterRatio,
            vdu: baseData.before.vdu * filterRatio,
            fhi: baseData.before.fhi * filterRatio
        },
        after: {
            chi: baseData.after.chi * filterRatio,
            vdu: baseData.after.vdu * filterRatio,
            fhi: baseData.after.fhi * filterRatio
        }
    };

    const chiDiff = ((data.after.chi - data.before.chi) * 1000).toFixed(0);
    const vduDiff = ((data.after.vdu - data.before.vdu) * 1000).toFixed(0);
    const fhiDiff = (data.after.fhi - data.before.fhi).toFixed(2);

    document.getElementById('kpi_chi_after').textContent = data.after.chi.toFixed(2) + ' tỷ';
    document.getElementById('kpi_chi_change').textContent = '+' + chiDiff + ' tr vs trước';
    document.getElementById('kpi_vdu').textContent = data.after.vdu.toFixed(2) + ' tỷ';
    document.getElementById('kpi_vdu_change').textContent = '+' + vduDiff + ' tr vs trước';
    document.getElementById('kpi_fhi').textContent = data.after.fhi.toFixed(2);
    document.getElementById('kpi_fhi_change').textContent = fhiDiff + ' vs trước';
}

// Resize handler
window.addEventListener('resize', () => Object.values(charts).forEach(c => c && c.resize()));

// Init
document.addEventListener('DOMContentLoaded', () => {
    initPage1();
    initPage2();
    initPage3();
});
