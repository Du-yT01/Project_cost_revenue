// ============================================================
// Demo Data với cấu trúc THU/CHI chuẩn hóa theo Excel VictoryCons
// ============================================================
const demoData = {
    projects: [
        { id: 'P001', name: 'DA Alpha', budgetThuTotal: 120, budgetChiTotal: 80, actualThu: 115, actualChi: 78 },
        { id: 'P002', name: 'DA Beta', budgetThuTotal: 110, budgetChiTotal: 75, actualThu: 106, actualChi: 70 },
        { id: 'P003', name: 'DA Gamma', budgetThuTotal: 105, budgetChiTotal: 70, actualThu: 98, actualChi: 66 }
    ],

    // Chuẩn hóa THU theo Excel
    thuItemsStd: [
        { code: '21', name: 'Thu CĐT', level: 1 },
        { code: '21.10', name: 'Thu Tạm ứng', level: 2 },
        { code: '21.20', name: 'Thu Thanh toán đợt', level: 2 },
        { code: '21.30', name: 'Thu Quyết toán', level: 2 },
        { code: '21.40', name: 'Thu Bảo hành', level: 2 },
        { code: '22', name: 'Thu hoạt động tài chính', level: 1 },
        { code: '22.51', name: 'Thu từ vay bank', level: 2 },
        { code: '22.52', name: 'Thu gốc vay nội bộ, thu tiền mượn', level: 2 },
        { code: '22.53', name: 'Thu hồi các khoản cho vay', level: 2 },
        { code: '23', name: 'Thu khác thuộc dự án', level: 1 },
        { code: '23.99', name: 'Thu khác (thu hoàn ứng, khác…)', level: 2 }
    ],

    // Chuẩn hóa CHI theo Excel — đầy đủ 12 mã cấp 1
    chiItemsStd: [
        { code: '01', name: 'Chi phát triển dự án', level: 1 },
        { code: '02', name: 'Chi kiến thiết cơ bản', level: 1 },
        { code: '03', name: 'Chi cho dịch vụ kinh doanh BĐS', level: 1 },
        { code: '04', name: 'Công tác chuẩn bị', level: 1 },
        { code: '05', name: 'Công tác thiết bị', level: 1 },
        { code: '06', name: 'Chi cho thầu phụ / tổ đội', level: 1 },
        { code: '07', name: 'Chi vật tư', level: 1 },
        { code: '08', name: 'Chi hoạt động trực tiếp', level: 1 },
        { code: '09', name: 'Chi phí gián tiếp', level: 1 },
        { code: '10', name: 'Chi hoạt động tài chính', level: 1 },
        { code: '11', name: 'Chi khác', level: 1 },
        { code: '12', name: 'Dự phòng phí', level: 1 }
    ],

    // Cascading filter data — cấp 2 (đầy đủ theo Excel)
    chiLevel2: {
        '01': [
            { code: '01.51', name: 'Xin chấp thuận chủ trương đầu tư' }, { code: '01.52', name: 'Điều chỉnh cục bộ quy hoạch 1/2000' },
            { code: '01.53', name: 'Thỏa thuận cao độ tĩnh không' }, { code: '01.54', name: 'Thỏa thuận đấu nối hệ thống điện' },
            { code: '01.55', name: 'Thỏa thuận đấu nối hệ thống cấp nước' }, { code: '01.56', name: 'Thủ tục giao đất' },
            { code: '01.57', name: 'Thẩm định giá trị tiền sử dụng đất' }, { code: '01.58', name: 'Cấp giấy chứng nhận QSDĐ' },
            { code: '01.59', name: 'Quy hoạch tổng mặt bằng 1/500' }, { code: '01.60', name: 'Đánh giá tác động môi trường' },
            { code: '01.61', name: 'Thỏa thuận đấu nối giao thông' }, { code: '01.62', name: 'Thỏa thuận đấu nối thoát nước' },
            { code: '01.63', name: 'Thỏa thuận thiết kế đấu nối cấp điện' }, { code: '01.64', name: 'Thỏa thuận thiết kế đấu nối cấp nước' },
            { code: '01.65', name: 'Thỏa thuận phương án kiến trúc cho PCCC' }, { code: '01.66', name: 'Thẩm duyệt hồ sơ PCCC' },
            { code: '01.67', name: 'Thẩm định thiết kế cơ sở công trình' }, { code: '01.68', name: 'Thẩm định thiết kế kỹ thuật công trình' },
            { code: '01.69', name: 'Cấp giấy phép xây dựng' }, { code: '01.70', name: 'Văn bản xác nhận đủ ĐK bán hàng' },
            { code: '01.71', name: 'Nghiệm thu hệ thống PCCC' }, { code: '01.72', name: 'Nghiệm thu công trình đưa vào sử dụng' },
            { code: '01.73', name: 'Xin cấp số nhà' }, { code: '01.74', name: 'VB xác nhận đủ ĐK cấp GCNQSHN&SDĐ' },
            { code: '01.75', name: 'Cấp GCNQSHN&QSDĐ cho khách hàng' }, { code: '01.76', name: 'Cấp GCNQSDĐ cho khách hàng' },
            { code: '01.77', name: 'Cấp GCNSHN&QSDĐ cho khách hàng' }
        ],
        '02': [
            { code: '02.51', name: 'Thiết kế ý tưởng' }, { code: '02.52', name: 'Thiết kế Quy hoạch 1/500' },
            { code: '02.53', name: 'Thiết kế triển khai' }, { code: '02.54', name: 'Thẩm tra' },
            { code: '02.55', name: 'Lập khái toán - dự toán' }, { code: '02.56', name: 'Chi phí tư vấn' },
            { code: '02.57', name: 'Chi phí kiến thiết cơ bản khác' }
        ],
        '03': [
            { code: '03.51', name: 'ADKIT - Tiếp thị, Marketing' }, { code: '03.52', name: 'Site décor' },
            { code: '03.53', name: 'Sự kiện và tài trợ' }, { code: '03.54', name: 'PR truyền thông dự án' },
            { code: '03.55', name: 'Outdoor ad' }, { code: '03.56', name: 'Indoor ad' },
            { code: '03.57', name: 'Digital Marketing' }, { code: '03.58', name: 'Marketing trực tiếp' },
            { code: '03.59', name: 'Quỹ Cộng đồng' }, { code: '03.60', name: 'Chi cho thi công nhà mẫu' },
            { code: '03.61', name: 'Chi cho hoạt động bán hàng' }, { code: '03.62', name: 'Chi phí bán hàng khác' }
        ],
        '04': [
            { code: '04.00', name: 'Chi phí bảo lãnh, bảo hiểm' }, { code: '04.10', name: 'Chi phí tiện ích phục vụ thi công' },
            { code: '04.20', name: 'An toàn lao động & VSMT & PCCC' }, { code: '04.30', name: 'An ninh cho công trường' },
            { code: '04.40', name: 'Trắc đạc công trình' }, { code: '04.50', name: 'Chi phí thiết kế, thẩm tra BPTC, thí nghiệm' },
            { code: '04.70', name: 'Hệ thống điện, nước tạm phục vụ thi công' }, { code: '04.80', name: 'Chi phí xin phép thi công tạm' },
            { code: '04.99', name: 'Chi phí khác (công nhật…)' }
        ],
        '05': [{ code: '05.40', name: 'Thiết bị phục vụ thi công' }],
        '06': [
            { code: '06.10', name: 'Gói thầu cọc' }, { code: '06.20', name: 'Gói thầu Biện pháp thi công' },
            { code: '06.30', name: 'Gói thầu kết cấu' }, { code: '06.40', name: 'Gói thầu hoàn thiện' },
            { code: '06.50', name: 'Kết cấu thép' }, { code: '06.60', name: 'Gói thầu MEP' },
            { code: '06.70', name: 'Gói thầu trung hạ thế, máy biến thế' }, { code: '06.80', name: 'Gói thầu Hạ Tầng - Cảnh quan' }
        ],
        '07': [
            { code: '07.10', name: 'Vật tư cọc' }, { code: '07.20', name: 'Vật tư hệ shoring, sàn đạo, Kingpost' },
            { code: '07.30', name: 'Vật tư kết cấu' }, { code: '07.40', name: 'Vật tư hoàn thiện' },
            { code: '07.50', name: 'Kết cấu thép' }, { code: '07.60', name: 'Vật tư MEP' },
            { code: '07.70', name: 'Vật tư trung hạ thế, máy biến thế' }, { code: '07.80', name: 'Vật tư máy phát điện' },
            { code: '07.90', name: 'Vật tư khác (XD và MEP)' }
        ],
        '08': [
            { code: '08.10', name: 'Chi phí trực tiếp BCH' }, { code: '08.20', name: 'Chi phí hành chính tại công trình' },
            { code: '08.30', name: 'Chi phí trực tiếp khác' }
        ],
        '09': [{ code: '09.10.51', name: 'Chi phí gián tiếp' }],
        '10': [{ code: '10.10.51', name: 'Chi trả nợ gốc vay Bank' }, { code: '10.10.52', name: 'Chi trả tiền mượn' }, { code: '10.10.53', name: 'Chi trả lãi vay Bank' }],
        '11': [{ code: '11.10.51', name: 'Chi hoàn trả tiền tạm ứng cho CĐT' }, { code: '11.10.52', name: 'Chi khác XD' }],
        '12': [{ code: '12.10.51', name: 'Dự phòng phí' }]
    },

    // Cascading filter data — cấp 3 (đầy đủ theo Excel)
    chiLevel3: {
        '04.00': [
            { code: '04.00.51', name: 'Bảo lãnh dự thầu' }, { code: '04.00.52', name: 'Bảo lãnh tạm ứng' },
            { code: '04.00.53', name: 'Bảo lãnh thực hiện hợp đồng' }, { code: '04.00.54', name: 'Bảo lãnh bảo hành' },
            { code: '04.00.61', name: 'Bảo hiểm công trình và bên thứ ba' }, { code: '04.00.62', name: 'Bảo hiểm công nhân' },
            { code: '04.00.63', name: 'Bảo hiểm máy móc thiết bị' }, { code: '04.00.99', name: 'Các bảo hiểm khác' }
        ],
        '04.10': [
            { code: '04.10.51', name: 'Gói thầu hàng rào tạm, cổng tạm' }, { code: '04.10.52', name: 'Gói thầu văn phòng BCH' },
            { code: '04.10.53', name: 'Gói thầu cầu rửa xe, đường tạm' }, { code: '04.10.54', name: 'Gói thầu kho dự án, bãi gia công' },
            { code: '04.10.55', name: 'Gói thầu biển bảng công trình' }, { code: '04.10.99', name: 'Tiện ích phục vụ thi công khác' }
        ],
        '04.20': [
            { code: '04.20.51', name: 'Hộp cứu thương, phòng y tế' }, { code: '04.20.52', name: 'Huấn luyện an toàn' },
            { code: '04.20.53', name: 'Huấn luyện PCCC' }, { code: '04.20.54', name: 'Biển báo an toàn lao động' },
            { code: '04.20.55', name: 'Bảo hộ lao động' }, { code: '04.20.56', name: 'Thiết lập cơ khí tạm ATLĐ' },
            { code: '04.20.61', name: 'Vận chuyển rác thải' }, { code: '04.20.62', name: 'Vệ sinh trong quá trình thi công' },
            { code: '04.20.63', name: 'Kiểm soát, phun thuốc diệt côn trùng' }, { code: '04.20.64', name: 'Quan trắc môi trường' },
            { code: '04.20.71', name: 'Bố trí bình chữa cháy, tiêu lệnh' }, { code: '04.20.72', name: 'Bảo trì, bảo dưỡng' },
            { code: '04.20.99', name: 'ATLĐ & VSMT & PCCC khác' }
        ],
        '04.30': [
            { code: '04.30.51', name: 'Bố trí nhân viên bảo vệ 24/24' }, { code: '04.30.52', name: 'Nhà bảo vệ' },
            { code: '04.30.61', name: 'Thiết lập hệ thống camera' }, { code: '04.30.62', name: 'Thiết lập cổng tự động / Barie' },
            { code: '04.30.99', name: 'Hạng mục an ninh công trường khác' }
        ],
        '04.40': [
            { code: '04.40.51', name: 'Khảo sát công trình lân cận' }, { code: '04.40.61', name: 'Quan trắc lún, nghiêng' },
            { code: '04.40.71', name: 'Trắc đạc cho nhà thầu' }, { code: '04.40.99', name: 'Trắc đạc khác' }
        ],
        '04.50': [
            { code: '04.50.51', name: 'Gói thầu thiết kế' }, { code: '04.50.61', name: 'Gói thầu thẩm tra' },
            { code: '04.50.71', name: 'Gói thầu thí nghiệm' }, { code: '04.50.99', name: 'Thiết kế, thẩm tra BPTC khác' }
        ],
        '04.70': [
            { code: '04.70.51', name: 'Thiết lập hệ thống điện tạm' }, { code: '04.70.52', name: 'Chi phí sử dụng điện thi công' },
            { code: '04.70.61', name: 'Thiết lập hệ thống cấp thoát nước tạm' }, { code: '04.70.62', name: 'Chi phí sử dụng nước thi công' },
            { code: '04.70.99', name: 'Điện nước tạm khác' }
        ],
        '04.80': [
            { code: '04.80.51', name: 'Chi phí xả thải' }, { code: '04.80.61', name: 'Chi phí sử dụng vỉa hè, ký quỹ hạ tầng' },
            { code: '04.80.71', name: 'Chi phí đấu nối thoát nước mưa, thải' }
        ],
        '06.10': [
            { code: '06.10.51', name: 'Gói thầu cọc BTCT' }, { code: '06.10.52', name: 'Gói thầu cọc khoan nhồi' },
            { code: '06.10.53', name: 'Gói thầu cọc Barrette' }, { code: '06.10.99', name: 'Gói thầu cọc khác' }
        ],
        '06.20': [
            { code: '06.20.51', name: 'BPTC: Cọc biện pháp' }, { code: '06.20.52', name: 'BPTC: Hệ văng chống' },
            { code: '06.20.53', name: 'BPTC: Cừ vây Larsen' }, { code: '06.20.54', name: 'BPTC: Cọc xi măng đất' },
            { code: '06.20.55', name: 'BPTC: Cọc, móng cẩu tháp / hoist' }, { code: '06.20.99', name: 'BPTC khác' }
        ],
        '06.30': [
            { code: '06.30.51', name: 'Gói thầu tường Barrette' }, { code: '06.30.52', name: 'Gói thầu công tác đất' },
            { code: '06.30.53', name: 'Gói thầu BTCT' }, { code: '06.30.54', name: 'Gói thầu chống mối' },
            { code: '06.30.55', name: 'Gói thầu chống thấm kết cấu' }, { code: '06.30.56', name: 'Gói thầu cáp dự ứng lực' },
            { code: '06.30.57', name: 'Gói thầu nhân công giàn giáo bao che' }, { code: '06.30.99', name: 'Gói thầu kết cấu khác' }
        ],
        '06.40': [
            { code: '06.40.51', name: 'Gói thầu Hồ' }, { code: '06.40.52', name: 'Gói thầu Chống thấm hoàn thiện' },
            { code: '06.40.53', name: 'Gói thầu Vách, trần' }, { code: '06.40.54', name: 'Gói thầu Sơn nước' },
            { code: '06.40.55', name: 'Gói thầu Sàn gỗ' }, { code: '06.40.56', name: 'Gói thầu Cửa (gỗ, nhựa)' },
            { code: '06.40.57', name: 'Gói thầu Kim loại' }, { code: '06.40.58', name: 'Gói thầu Nhôm kính' },
            { code: '06.40.59', name: 'Gói thầu Đá' }, { code: '06.40.60', name: 'Gói thầu Bảng chỉ dẫn' },
            { code: '06.40.61', name: 'Gói thầu Nội thất' }, { code: '06.40.62', name: 'Gói thầu Vệ sinh CN bàn giao' },
            { code: '06.40.63', name: 'Gói thầu Tường Panel' }, { code: '06.40.99', name: 'Gói thầu hoàn thiện khác' }
        ],
        '06.50': [{ code: '06.50.51', name: 'Gói thầu kết cấu thép' }],
        '06.60': [
            { code: '06.60.51', name: 'Hệ thống điện' }, { code: '06.60.52', name: 'Hệ thống cấp thoát nước' },
            { code: '06.60.53', name: 'Hệ thống ĐHKK' }, { code: '06.60.54', name: 'Hệ thống PCCC' },
            { code: '06.60.55', name: 'Hệ thống XLNT' }, { code: '06.60.56', name: 'Hệ thống công nghệ hồ bơi' },
            { code: '06.60.57', name: 'Hệ thống quản lý xe' }, { code: '06.60.58', name: 'Hệ thống thang máy' },
            { code: '06.60.99', name: 'Hệ thống MEP khác' }
        ],
        '06.70': [{ code: '06.70.51', name: 'Trung thế, hạ thế, TBA' }, { code: '06.70.99', name: 'Hệ thống trung, hạ thế khác' }],
        '05.40': [{ code: '05.40.51', name: 'Cần trục tháp' }, { code: '05.40.52', name: 'Vận thăng' }, { code: '05.40.99', name: 'TB thi công khác' }],
        '07.10': [
            { code: '07.10.51', name: 'Cọc vuông BTCT' }, { code: '07.10.52', name: 'Cọc ly tâm DUL' },
            { code: '07.10.53', name: 'VT cọc khoan nhồi' }, { code: '07.10.54', name: 'VT tường Barrette' },
            { code: '07.10.55', name: 'VT cọc xi măng đất CDM' }, { code: '07.10.56', name: 'VT xử lý đầu cọc' },
            { code: '07.10.99', name: 'Vật tư cọc khác' }
        ],
        '07.20': [{ code: '07.20.51', name: 'Thép hình (thép hình, thép tấm)' }],
        '07.30': [
            { code: '07.30.51', name: 'Đất, cát san lấp' }, { code: '07.30.52', name: 'Cốt thép xây dựng' },
            { code: '07.30.53', name: 'Bê tông' }, { code: '07.30.54', name: 'Ván khuôn' },
            { code: '07.30.55', name: 'VT chống mối' }, { code: '07.30.99', name: 'VT kết cấu khác' }
        ],
        '07.40': [
            { code: '07.40.51', name: 'VT cát, đá, xi măng' }, { code: '07.40.52', name: 'VT gạch xây' },
            { code: '07.40.53', name: 'VT vữa trộn sẵn' }, { code: '07.40.54', name: 'VT hoàn thiện nền' },
            { code: '07.40.55', name: 'VT ốp lát' }, { code: '07.40.56', name: 'VT chống thấm' },
            { code: '07.40.57', name: 'VT thạch cao' }, { code: '07.40.58', name: 'VT sơn nước' },
            { code: '07.40.59', name: 'VT sơn sàn, tường' }, { code: '07.40.60', name: 'VT sàn gỗ' },
            { code: '07.40.61', name: 'VT cửa gỗ' }, { code: '07.40.62', name: 'VT cửa nhựa' },
            { code: '07.40.63', name: 'VT cửa kim loại' }, { code: '07.40.64', name: 'VT nhôm kính' },
            { code: '07.40.65', name: 'VT đá' }, { code: '07.40.66', name: 'VT bảng chỉ dẫn' },
            { code: '07.40.67', name: 'VT nội thất' }, { code: '07.40.99', name: 'VT phụ, hoàn thiện khác' }
        ],
        '07.50': [
            { code: '07.50.51', name: 'VT lắp dựng lan can' }, { code: '07.50.52', name: 'VT mái Canopy' },
            { code: '07.50.53', name: 'VT bulong chờ trong BT' }, { code: '07.50.54', name: 'VT khung kèo thép hình' },
            { code: '07.50.55', name: 'VT cầu thang thép hình' }, { code: '07.50.99', name: 'VT kết cấu thép khác' }
        ],
        '07.60': [
            { code: '07.60.51', name: 'VT Điện, điện nhẹ' }, { code: '07.60.52', name: 'VT ĐHKK' },
            { code: '07.60.53', name: 'VT Cấp thoát nước' }, { code: '07.60.54', name: 'VT Thiết bị vệ sinh' },
            { code: '07.60.99', name: 'VT MEP khác' }
        ],
        '07.70': [
            { code: '07.70.51', name: 'Đường dây trung thế' }, { code: '07.70.52', name: 'Trạm biến thế' },
            { code: '07.70.53', name: 'Tủ điện MSB, tủ điện kế' }, { code: '07.70.54', name: 'Busway, cáp điện' },
            { code: '07.70.99', name: 'Hệ thống khác' }
        ],
        '08.10': [
            { code: '08.10.51', name: 'Lương trực tiếp BCH' }, { code: '08.10.52', name: 'Chi phí thuế TNCN BCH' },
            { code: '08.10.53', name: 'Chi phí công đoàn BCH' }, { code: '08.10.54', name: 'BHXH / Y tế / BH thất nghiệp BCH' },
            { code: '08.10.55', name: 'Chi hỗ trợ công tác xa' }, { code: '08.10.56', name: 'Chi phí thuê ngoài / Outsource' }
        ],
        '08.20': [
            { code: '08.20.51', name: 'Internet, Điện thoại' }, { code: '08.20.52', name: 'Thuê máy in, máy photo' },
            { code: '08.20.53', name: 'Văn phòng phẩm' }, { code: '08.20.54', name: 'Khởi công' },
            { code: '08.20.55', name: 'Thuê nhà, điện, nước cho BCH' }, { code: '08.20.56', name: 'Chi phí nhỏ lẻ hàng tháng' },
            { code: '08.20.57', name: 'Chi phí công nhân trực tiếp' }
        ]
    },

    months: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
    approval: { before: { chi: 4.85, vdu: 2.73, fhi: 1.25 }, after: { chi: 5.23, vdu: 2.85, fhi: 1.18 } }
};

let charts = {};

// ============================================================
// Navigation
// ============================================================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('onclick') && l.getAttribute('onclick').includes(pageId)) {
            l.classList.add('active');
        }
    });
    document.getElementById(pageId).classList.add('active');
    setTimeout(() => Object.values(charts).forEach(c => c && c.resize()), 100);
}

function toggleMultiSelect(el) {
    if (el.classList.contains('disabled')) return;
    document.querySelectorAll('.multi-select').forEach(m => m !== el && m.classList.remove('open'));
    el.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', e => {
    if (!e.target.closest('.multi-select')) document.querySelectorAll('.multi-select').forEach(m => m.classList.remove('open'));
});

// ============================================================
// CASCADING FILTER LOGIC (Duyệt Chi — page2)
// ============================================================
function toggleSelectAll(menuId, isChecked) {
    const checkboxes = document.querySelectorAll(`#${menuId} input[type="checkbox"]:not(.select-all)`);
    checkboxes.forEach(cb => cb.checked = isChecked);
    // Determine level from menuId and trigger onCascadeFilter
    const level = parseInt(menuId.replace('chi', '').replace('Menu', ''));
    if (!isNaN(level)) onCascadeFilter(level);
}

function onCascadeFilter(changedLevel) {
    // Rebuild level 2 based on level 1 selections
    if (changedLevel <= 1) {
        const level1Checked = Array.from(document.querySelectorAll('#chi1Menu input[type="checkbox"]:not(.select-all):checked')).map(cb => cb.value);
        const chi2Menu = document.getElementById('chi2Menu');
        const chi2Container = chi2Menu.closest('.multi-select');
        chi2Menu.innerHTML = '';

        if (level1Checked.length === 0) {
            chi2Container.classList.add('disabled');
        } else {
            chi2Container.classList.remove('disabled');
            chi2Menu.innerHTML = `<label style="padding:6px 12px;font-weight:bold;color:#2563EB;cursor:pointer;display:block;border-bottom:1px solid #E2E8F0;"><input type="checkbox" class="select-all" checked onchange="toggleSelectAll('chi2Menu', this.checked)"> Chọn tất cả</label>`;
            level1Checked.forEach(parentCode => {
                const children = demoData.chiLevel2[parentCode] || [];
                children.forEach(child => {
                    const label = document.createElement('label');
                    label.className = 'multi-select-item chi';
                    label.innerHTML = `<input type="checkbox" value="${child.code}" checked onchange="onCascadeFilter(2)"> ${child.code} — ${child.name}`;
                    chi2Menu.appendChild(label);
                });
            });
        }
    }

    // Rebuild level 3 based on level 2 selections
    if (changedLevel <= 2) {
        const level2Checked = Array.from(document.querySelectorAll('#chi2Menu input[type="checkbox"]:not(.select-all):checked')).map(cb => cb.value);
        const chi3Menu = document.getElementById('chi3Menu');
        const chi3Container = chi3Menu.closest('.multi-select');
        chi3Menu.innerHTML = '';

        if (level2Checked.length === 0) {
            chi3Container.classList.add('disabled');
        } else {
            chi3Container.classList.remove('disabled');
            chi3Menu.innerHTML = `<label style="padding:6px 12px;font-weight:bold;color:#2563EB;cursor:pointer;display:block;border-bottom:1px solid #E2E8F0;"><input type="checkbox" class="select-all" checked onchange="toggleSelectAll('chi3Menu', this.checked)"> Chọn tất cả</label>`;
            level2Checked.forEach(parentCode => {
                const children = demoData.chiLevel3[parentCode] || [];
                children.forEach(child => {
                    const label = document.createElement('label');
                    label.className = 'multi-select-item chi';
                    label.innerHTML = `<input type="checkbox" value="${child.code}" checked onchange="onCascadeFilter(3)"> ${child.code} — ${child.name}`;
                    chi3Menu.appendChild(label);
                });
            });
        }
    }

    // Level 4 — based on level 3
    if (changedLevel <= 3) {
        const level3Checked = Array.from(document.querySelectorAll('#chi3Menu input[type="checkbox"]:not(.select-all):checked')).map(cb => cb.value);
        const chi4Menu = document.getElementById('chi4Menu');
        const chi4Container = chi4Menu.closest('.multi-select');
        chi4Menu.innerHTML = '';
        
        if (level3Checked.length === 0) {
            chi4Menu.innerHTML = '<div style="padding:8px;color:#94A3B8;font-size:11px;text-align:center;">Chọn tầng 3 để xem chi tiết tầng 4</div>';
            chi4Container.classList.add('disabled');
        } else {
            chi4Container.classList.remove('disabled');
            chi4Menu.innerHTML = '<div style="padding:8px;color:#64748B;font-size:11px;text-align:center;">Dữ liệu demo không có chi tiết tầng 4</div>';
        }
    }

    // Update counter displays

    document.querySelectorAll('#page2 .multi-select').forEach(ms => {
        const checkboxes = ms.querySelectorAll('input[type="checkbox"]');
        const checkedCount = ms.querySelectorAll('input[type="checkbox"]:checked').length;
        const totalCount = checkboxes.length;
        const countSpan = ms.querySelector('.multi-select-count');
        if (totalCount === 0) {
            countSpan.textContent = '—';
        } else if (checkedCount === 0) {
            countSpan.textContent = 'Không có';
        } else if (checkedCount === totalCount) {
            countSpan.textContent = 'Tất cả';
        } else {
            countSpan.textContent = `${checkedCount}/${totalCount}`;
        }
    });

    // Re-render page2 content
    updatePage3();
}

// ============================================================
// Matrix Table Expand/Collapse Helper
// ============================================================
function toggleMatrixRow(el) {
    const levelStr = el.getAttribute('data-level');
    if (!levelStr) return;
    const level = parseInt(levelStr);
    const isExpanded = el.getAttribute('data-expanded') !== 'false';
    const nextDisplay = isExpanded ? 'none' : '';
    el.setAttribute('data-expanded', isExpanded ? 'false' : 'true');
    
    // Toggle the indicator icon if present
    const icon = el.querySelector('.toggle-icon');
    if (icon) icon.textContent = isExpanded ? '▶' : '▼';
    
    let sibling = el.nextElementSibling;
    while (sibling) {
        const sibLevelStr = sibling.getAttribute('data-level');
        if (!sibLevelStr) break;
        const sibLevel = parseInt(sibLevelStr);
        if (sibLevel <= level) break; // Reached next sibling at same or higher level
        
        if (!isExpanded) {
            // expanding: we only show immediate children
            if (sibLevel === level + 1) {
                sibling.style.display = '';
            }
        } else {
            // collapsing: hide all descendants
            sibling.style.display = 'none';
            // Also mark them as collapsed so expanding parent doesn't auto expand children incorrectly
            if (sibling.hasAttribute('data-expanded')) {
                sibling.setAttribute('data-expanded', 'false');
                const sibIcon = sibling.querySelector('.toggle-icon');
                if (sibIcon) sibIcon.textContent = '▶';
            }
        }
        sibling = sibling.nextElementSibling;
    }
}

// ============================================================
// PAGE 2: DUYỆT CHI
// ============================================================
function initPage3() {
    onCascadeFilter(1); // Initialize cascading filters
    renderComparisonTable();
    renderComboRevenueCostFHI();
    renderPaymentMatrix();
}

// Comparison Table — New 8-column structure per feedback
function renderComparisonTable(selectedCategories = null) {
    const allItems = [
        { name: '01 — Chi phát triển dự án', code: '01', level: 1, nsda: 2.5, gtHD: 2.3, luykeDuyet: 1.40, nsThang: 0.35, nsThangDaChi: 0.28 },
        { name: '02 — Chi kiến thiết cơ bản', code: '02', level: 1, nsda: 18.5, gtHD: 17.8, luykeDuyet: 14.2, nsThang: 2.50, nsThangDaChi: 2.10 },
        { name: '03 — Chi cho dịch vụ kinh doanh BĐS', code: '03', level: 1, nsda: 12.0, gtHD: 11.5, luykeDuyet: 9.2, nsThang: 1.80, nsThangDaChi: 1.50 },
        { name: '04 — Công tác chuẩn bị', code: '04', level: 1, nsda: 8.2, gtHD: 7.8, luykeDuyet: 6.5, nsThang: 1.20, nsThangDaChi: 0.95 },
        { name: '05 — Công tác thiết bị', code: '05', level: 1, nsda: 15.0, gtHD: 14.2, luykeDuyet: 11.0, nsThang: 2.00, nsThangDaChi: 1.60 },
        { name: '06 — Chi cho thầu phụ / tổ đội', code: '06', level: 1, nsda: 32.0, gtHD: 30.5, luykeDuyet: 26.5, nsThang: 4.50, nsThangDaChi: 3.80 },
        { name: '  06.10 — Gói thầu cọc', code: '06.10', level: 2, nsda: 5.0, gtHD: 4.8, luykeDuyet: 4.2, nsThang: 0.70, nsThangDaChi: 0.60 },
        { name: '  06.20 — Gói thầu BPTC', code: '06.20', level: 2, nsda: 3.5, gtHD: 3.2, luykeDuyet: 2.8, nsThang: 0.50, nsThangDaChi: 0.42 },
        { name: '  06.30 — Gói thầu kết cấu', code: '06.30', level: 2, nsda: 12.0, gtHD: 11.5, luykeDuyet: 9.6, nsThang: 1.80, nsThangDaChi: 1.50 },
        { name: '    06.30.51 — Tường Barrette', code: '06.30.51', level: 3, nsda: 4.0, gtHD: 3.8, luykeDuyet: 3.2, nsThang: 0.60, nsThangDaChi: 0.50 },
        { name: '    06.30.52 — Cọc nhồi', code: '06.30.52', level: 3, nsda: 3.5, gtHD: 3.3, luykeDuyet: 2.8, nsThang: 0.50, nsThangDaChi: 0.42 },
        { name: '  06.40 — Gói thầu hoàn thiện', code: '06.40', level: 2, nsda: 8.0, gtHD: 7.5, luykeDuyet: 6.2, nsThang: 1.00, nsThangDaChi: 0.85 },
        { name: '  06.60 — Gói thầu MEP', code: '06.60', level: 2, nsda: 3.5, gtHD: 3.5, luykeDuyet: 3.0, nsThang: 0.50, nsThangDaChi: 0.43 },
        { name: '07 — Chi vật tư', code: '07', level: 1, nsda: 20.0, gtHD: 19.0, luykeDuyet: 15.0, nsThang: 3.00, nsThangDaChi: 2.50 },
        { name: '08 — Chi hoạt động trực tiếp', code: '08', level: 1, nsda: 10.5, gtHD: 10.0, luykeDuyet: 8.2, nsThang: 1.50, nsThangDaChi: 1.20 },
        { name: '09 — Chi phí gián tiếp', code: '09', level: 1, nsda: 5.5, gtHD: 5.2, luykeDuyet: 4.0, nsThang: 0.80, nsThangDaChi: 0.65 },
        { name: '10 — Chi hoạt động tài chính', code: '10', level: 1, nsda: 3.0, gtHD: 2.8, luykeDuyet: 2.2, nsThang: 0.40, nsThangDaChi: 0.32 },
        { name: '11 — Chi khác', code: '11', level: 1, nsda: 2.0, gtHD: 1.8, luykeDuyet: 1.4, nsThang: 0.25, nsThangDaChi: 0.20 },
        { name: '12 — Dự phòng phí', code: '12', level: 1, nsda: 4.0, gtHD: 0, luykeDuyet: 0, nsThang: 0, nsThangDaChi: 0 }
    ];

    const items = selectedCategories && selectedCategories.length > 0
        ? allItems.filter(item => selectedCategories.some(cat => item.code.startsWith(cat)))
        : allItems;

    if (items.length === 0) {
        document.getElementById('comparisonTable').innerHTML = '<p style="text-align:center;padding:20px;color:#888;">Không có dữ liệu với bộ lọc hiện tại</p>';
        return;
    }

    let html = `<table class="data-table" style="font-size:12px;min-width:1000px;">
    <thead>
        <tr>
            <th style="min-width:220px;position:sticky;left:0;background:#F1F5F9;z-index:3;">(1) Hạng Mục</th>
            <th style="text-align:right;background:#EFF6FF;color:#2563EB;">(2) NSDA</th>
            <th style="text-align:right;background:#EFF6FF;color:#2563EB;">(3) GT Hợp đồng</th>
            <th style="text-align:right;background:#F0FDF4;color:#16A34A;">(4) Lũy kế đã duyệt</th>
            <th style="text-align:right;background:#FFFBEB;color:#D97706;">(5) NS tháng hiện tại</th>
            <th style="text-align:right;background:#FFFBEB;color:#D97706;">(6) NS tháng đã chi</th>
            <th style="text-align:right;background:#FEF2F2;color:#DC2626;">(7) GT còn lại của HĐ</th>
            <th style="text-align:right;background:#FEF2F2;color:#DC2626;">(8) GT còn lại NS tháng</th>
        </tr>
    </thead>
    <tbody>`;

    let totNSDA = 0, totHD = 0, totLK = 0, totNST = 0, totNSC = 0;

    items.forEach((item, idx) => {
        const indent = (item.level - 1) * 14;
        const isBold = item.level === 1;
        const bg = idx % 2 === 0 ? '' : 'background:#FBFCFE;';
        const boldStyle = isBold ? 'font-weight:700;' : 'font-weight:400;';

        const conLaiHD = +(item.gtHD - item.luykeDuyet).toFixed(2);
        const conLaiNS = +(item.nsThang - item.nsThangDaChi).toFixed(2);

        if (item.level === 1) {
            totNSDA += item.nsda; totHD += item.gtHD; totLK += item.luykeDuyet;
            totNST += item.nsThang; totNSC += item.nsThangDaChi;
        }

        const fmtConLai = (v) => {
            const color = v > 0.05 ? '#16A34A' : v < -0.05 ? '#DC2626' : '#64748B';
            return `<span style="color:${color};font-weight:600;">${v.toFixed(1)} tỷ</span>`;
        };

        const nextItem = items[idx + 1];
        const hasChildren = nextItem && nextItem.level > item.level;
        const toggleIcon = hasChildren 
            ? '<span class="toggle-icon" style="display:inline-block;width:12px;color:#64748B;font-size:10px;">▼</span>' 
            : '<span style="display:inline-block;width:12px;"></span>';
        const cursor = hasChildren ? 'cursor:pointer;' : '';
        const click = hasChildren ? 'onclick="toggleMatrixRow(this)"' : '';

        html += `<tr style="${bg}${cursor}" data-level="${item.level}" data-expanded="true" ${click}>
            <td style="padding-left:${8 + indent}px;${boldStyle}${bg}position:sticky;left:0;">${toggleIcon}${item.name.replace(/^\s+/, '')}</td>
            <td style="text-align:right;color:#2563EB;">${item.nsda.toFixed(1)} tỷ</td>
            <td style="text-align:right;color:#2563EB;">${item.gtHD > 0 ? item.gtHD.toFixed(1) + ' tỷ' : '<span style="color:#CBD5E1">—</span>'}</td>
            <td style="text-align:right;color:#16A34A;font-weight:600;">${item.luykeDuyet > 0 ? item.luykeDuyet.toFixed(1) + ' tỷ' : '<span style="color:#CBD5E1">—</span>'}</td>
            <td style="text-align:right;color:#D97706;">${item.nsThang > 0 ? item.nsThang.toFixed(2) + ' tỷ' : '<span style="color:#CBD5E1">—</span>'}</td>
            <td style="text-align:right;color:#D97706;">${item.nsThangDaChi > 0 ? item.nsThangDaChi.toFixed(2) + ' tỷ' : '<span style="color:#CBD5E1">—</span>'}</td>
            <td style="text-align:right;">${item.gtHD > 0 ? fmtConLai(conLaiHD) : '<span style="color:#CBD5E1">—</span>'}</td>
            <td style="text-align:right;">${item.nsThang > 0 ? fmtConLai(conLaiNS) : '<span style="color:#CBD5E1">—</span>'}</td>
        </tr>`;
    });

    // Total row
    const totConLaiHD = +(totHD - totLK).toFixed(1);
    const totConLaiNS = +(totNST - totNSC).toFixed(1);
    html += `<tr style="background:linear-gradient(135deg,#F1F5F9,#E2E8F0);font-weight:700;">
        <td style="position:sticky;left:0;background:#E2E8F0;font-weight:700;">TỔNG</td>
        <td style="text-align:right;color:#2563EB;">${totNSDA.toFixed(1)} tỷ</td>
        <td style="text-align:right;color:#2563EB;">${totHD.toFixed(1)} tỷ</td>
        <td style="text-align:right;color:#16A34A;">${totLK.toFixed(1)} tỷ</td>
        <td style="text-align:right;color:#D97706;">${totNST.toFixed(2)} tỷ</td>
        <td style="text-align:right;color:#D97706;">${totNSC.toFixed(2)} tỷ</td>
        <td style="text-align:right;color:#16A34A;">${totConLaiHD.toFixed(1)} tỷ</td>
        <td style="text-align:right;color:#16A34A;">${totConLaiNS.toFixed(2)} tỷ</td>
    </tr>`;

    document.getElementById('comparisonTable').innerHTML = html + '</tbody></table>';
}

// Combo chart: Doanh Thu - Chi Phí - FHI theo tháng (giữ nguyên)
function renderComboRevenueCostFHI(selectedCategories = null) {
    const months = demoData.months.slice(0, 10);
    let revenue = [8.5, 9.0, 9.2, 9.5, 9.8, 10.2, 10.5, 10.0, 9.8, 9.5];
    let cost = [6.5, 7.0, 7.2, 7.5, 7.8, 8.2, 8.5, 8.0, 7.8, 7.5];

    if (selectedCategories && selectedCategories.length > 0) {
        const ratio = selectedCategories.length / 14;
        cost = cost.map(v => +(v * ratio).toFixed(1));
    }

    const fhi = revenue.map((r, i) => +(r / cost[i]).toFixed(2));

    charts.comboRevenueCostFHI = echarts.init(document.getElementById('comboRevenueCostFHI'));
    charts.comboRevenueCostFHI.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' },
            formatter: params => {
                let html = `<strong>${params[0].axisValue}</strong><br/>`;
                params.forEach(p => {
                    const unit = p.seriesName === 'FHI' ? '' : ' tỷ';
                    html += `<span style="color:${p.color}">●</span> ${p.seriesName}: <strong>${p.value}${unit}</strong><br/>`;
                });
                return html;
            }
        },
        legend: { data: ['Doanh thu', 'Chi phí', 'FHI'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '8%', bottom: '10%', top: '15%', containLabel: true },
        xAxis: { type: 'category', data: months, axisLabel: { color: '#64748B' } },
        yAxis: [
            { type: 'value', name: 'Giá trị (tỷ)', position: 'left', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' }, splitLine: { lineStyle: { color: '#E2E8F0' } } },
            { type: 'value', name: 'FHI', position: 'right', min: 0, max: 2, axisLabel: { color: '#F59E0B' }, splitLine: { show: false } }
        ],
        series: [
            {
                name: 'FHI', type: 'bar', yAxisIndex: 1,
                data: fhi.map(v => ({ value: v, itemStyle: { color: v >= 1 ? 'rgba(22,163,74,0.6)' : 'rgba(220,38,38,0.6)' } })),
                barWidth: '30%', label: { show: true, position: 'top', formatter: '{c}', fontSize: 9, color: '#64748B' }
            },
            { name: 'Doanh thu', type: 'line', smooth: true, data: revenue, lineStyle: { color: '#16A34A', width: 3 }, itemStyle: { color: '#16A34A' }, symbol: 'circle', symbolSize: 6 },
            { name: 'Chi phí', type: 'line', smooth: true, data: cost, lineStyle: { color: '#DC2626', width: 3 }, itemStyle: { color: '#DC2626' }, symbol: 'circle', symbolSize: 6 }
        ]
    });
}

// Payment Matrix — Updated: merge status into due date, add Lũy kế Chi & Công nợ
function renderPaymentMatrix(selectedCategories = null) {
    const allItems = [
        { name: '01 — Chi phát triển dự án', code: '01', level: 1, dueDate: '15/02/2024', status: 'paid', luykeDaDuyet: 1.40, luykeChi: 1.32, congNo: 0.08 },
        { name: '02 — Chi kiến thiết cơ bản', code: '02', level: 1, dueDate: '28/02/2024', status: 'pending', luykeDaDuyet: 14.2, luykeChi: 12.8, congNo: 1.40 },
        { name: '04 — Công tác chuẩn bị', code: '04', level: 1, dueDate: '20/02/2024', status: 'overdue', luykeDaDuyet: 6.5, luykeChi: 5.8, congNo: 0.70 },
        { name: '06 — Chi cho thầu phụ / tổ đội', code: '06', level: 1, dueDate: '10/02/2024', status: 'pending', luykeDaDuyet: 26.5, luykeChi: 23.2, congNo: 3.30 },
        { name: '  06.30 — Gói thầu kết cấu', code: '06.30', level: 2, dueDate: '10/02/2024', status: 'paid', luykeDaDuyet: 9.6, luykeChi: 8.8, congNo: 0.80 },
        { name: '    06.30.51 — Tường Barrette', code: '06.30.51', level: 3, dueDate: '10/02/2024', status: 'paid', luykeDaDuyet: 3.2, luykeChi: 3.0, congNo: 0.20 },
        { name: '  06.40 — Gói thầu hoàn thiện', code: '06.40', level: 2, dueDate: '15/02/2024', status: 'pending', luykeDaDuyet: 6.2, luykeChi: 5.5, congNo: 0.70 },
        { name: '07 — Chi vật tư', code: '07', level: 1, dueDate: '05/03/2024', status: 'pending', luykeDaDuyet: 15.0, luykeChi: 13.5, congNo: 1.50 },
        { name: '08 — Chi hoạt động trực tiếp', code: '08', level: 1, dueDate: '15/03/2024', status: 'overdue', luykeDaDuyet: 8.2, luykeChi: 7.5, congNo: 0.70 }
    ];

    const items = selectedCategories && selectedCategories.length > 0
        ? allItems.filter(item => selectedCategories.some(cat => item.code.startsWith(cat)))
        : allItems;

    if (items.length === 0) {
        document.getElementById('paymentMatrixTable').innerHTML = '<p style="text-align:center;padding:20px;color:#888;">Không có dữ liệu</p>';
        return;
    }

    const statusIcons = {
        'paid': '✓ Đã TT',
        'pending': '⏳ Chờ TT',
        'overdue': '⚠ Quá hạn'
    };
    const statusColors = {
        'paid': '#16A34A',
        'pending': '#F59E0B',
        'overdue': '#DC2626'
    };

    let html = `<table class="data-table"><thead><tr>
        <th>(1) Hạng mục</th>
        <th>(2) Thời hạn TT</th>
        <th style="text-align:right;">(3) LK Chi đã duyệt</th>
        <th style="text-align:right;">(4) Lũy kế Chi</th>
        <th style="text-align:right;">(5) Công nợ còn lại</th>
    </tr></thead><tbody>`;

    items.forEach(i => {
        const indent = (i.level - 1) * 12;
        const nameStyle = i.level === 1 ? 'font-weight:600;' : '';
        const statusStr = `<span style="color:${statusColors[i.status]};font-weight:600;">${statusIcons[i.status]}</span>`;
        const congNoColor = i.congNo > 1 ? '#DC2626' : i.congNo > 0 ? '#F59E0B' : '#16A34A';
        html += `<tr>
            <td style="padding-left:${6 + indent}px;${nameStyle}">${i.name}</td>
            <td>${i.dueDate} ${statusStr}</td>
            <td style="text-align:right;font-weight:500;">${i.luykeDaDuyet.toFixed(1)} tỷ</td>
            <td style="text-align:right;font-weight:500;">${i.luykeChi.toFixed(1)} tỷ</td>
            <td style="text-align:right;font-weight:700;color:${congNoColor};">${i.congNo.toFixed(2)} tỷ</td>
        </tr>`;
    });
    document.getElementById('paymentMatrixTable').innerHTML = html + '</tbody></table>';
}

function updatePage3() {
    const selectedCategories = Array.from(document.querySelectorAll('#page2 .multi-select-menu input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    renderComparisonTable(selectedCategories);
    renderComboRevenueCostFHI(selectedCategories);
    renderPaymentMatrix(selectedCategories);

    // Update 4 KPI cards (lũy kế)
    const baseData = demoData.approval;
    const filterRatio = Math.max(selectedCategories.length / 14, 0.1);

    const luykeThu = (85.2 * filterRatio).toFixed(1);
    const luykeChi = (72.5 * filterRatio).toFixed(1);
    const luykeSL = (45.8 * filterRatio).toFixed(1);
    const fhiLuyke = (luykeThu / luykeChi).toFixed(2);

    document.getElementById('kpi_luyke_thu').textContent = luykeThu + ' tỷ';
    document.getElementById('kpi_luyke_chi').textContent = luykeChi + ' tỷ';
    document.getElementById('kpi_luyke_sl').textContent = luykeSL + ' tỷ';
    document.getElementById('kpi_fhi_luyke').textContent = fhiLuyke;
}

// ============================================================
// PAGE 1: HIỆU QUẢ DỰ ÁN (giữ nguyên hoàn toàn)
// ============================================================
const cashflowData = {
    months: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
    slKH: [8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5],
    slTT: [7.8, 8.2, 9.1, 9.3, 10.2, 10.8, 11.2, 11.0, 11.8, 12.0, 0, 0],
    chiKH: [5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5],
    chiTT: [4.8, 5.3, 5.8, 6.2, 6.8, 7.2, 7.6, 8.2, 8.7, 9.1, 0, 0],
    thuKH: [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5],
    thuTT: [5.5, 6.2, 7.1, 7.3, 8.1, 8.8, 9.2, 9.0, 9.7, 10.2, 0, 0]
};

function cumSum(arr) {
    let sum = 0;
    return arr.map(v => { sum += v; return +sum.toFixed(1); });
}

function initPage2() {
    renderCashflowGauges();
    renderComboCashflow();
    renderNetCashflowBar();
    renderCashflowTable();
}

function renderCashflowGauges() {
    const activeMonths = cashflowData.thuTT.filter(v => v > 0).length;

    const totalThuTT = cashflowData.thuTT.reduce((a, b) => a + b, 0);
    const totalThuKH = cashflowData.thuKH.slice(0, activeMonths).reduce((a, b) => a + b, 0);
    const thuPct = Math.round(totalThuTT / totalThuKH * 100);

    const totalChiTT = cashflowData.chiTT.reduce((a, b) => a + b, 0);
    const totalChiKH = cashflowData.chiKH.slice(0, activeMonths).reduce((a, b) => a + b, 0);
    const chiPct = Math.round(totalChiTT / totalChiKH * 100);

    const totalSLTT = cashflowData.slTT.reduce((a, b) => a + b, 0);
    const totalSLKH = cashflowData.slKH.slice(0, activeMonths).reduce((a, b) => a + b, 0);
    const slPct = Math.round(totalSLTT / totalSLKH * 100);

    const gaugeOpts = (pct, pointerColor, colorMap) => ({
        series: [{
            type: 'gauge', startAngle: 200, endAngle: -20, min: 0, max: 130,
            radius: '88%', center: ['50%', '65%'],
            pointer: { show: true, length: '60%', width: 5, itemStyle: { color: pointerColor } },
            axisLine: { lineStyle: { width: 14, color: colorMap } },
            axisTick: { show: false }, splitLine: { show: false },
            axisLabel: { show: false },
            title: { show: true, offsetCenter: [0, '68%'], fontSize: 9, color: '#94A3B8', fontWeight: 500 },
            detail: { formatter: '{value}%', fontSize: 22, color: '#0F172A', offsetCenter: [0, '32%'], fontWeight: 700 },
            data: [{ value: pct }]
        }]
    });

    if (!charts.gaugeThu) charts.gaugeThu = echarts.init(document.getElementById('gaugeThu'));
    charts.gaugeThu.setOption(gaugeOpts(thuPct, '#16A34A',
        [[0.5, '#FCA5A5'], [0.7, '#FCD34D'], [0.84, '#4ADE80'], [1, '#16A34A']]));

    if (!charts.gaugeChi) charts.gaugeChi = echarts.init(document.getElementById('gaugeChi'));
    charts.gaugeChi.setOption(gaugeOpts(chiPct, '#DC2626',
        [[0.5, '#4ADE80'], [0.7, '#60A5FA'], [0.84, '#FCD34D'], [1, '#DC2626']]));

    if (!charts.gaugeSanLuong) charts.gaugeSanLuong = echarts.init(document.getElementById('gaugeSanLuong'));
    charts.gaugeSanLuong.setOption(gaugeOpts(slPct, '#2563EB',
        [[0.5, '#FCA5A5'], [0.7, '#FCD34D'], [0.84, '#4ADE80'], [1, '#16A34A']]));
}

function renderComboCashflow() {
    const months = cashflowData.months;
    const cumChiTT = cumSum(cashflowData.chiTT);
    const cumThuTT = cumSum(cashflowData.thuTT);
    const cumChiKH = cumSum(cashflowData.chiKH);
    const cumThuKH = cumSum(cashflowData.thuKH);
    const cumSLTT = cumSum(cashflowData.slTT);
    const cumSLKH = cumSum(cashflowData.slKH);

    charts.comboCashflow = echarts.init(document.getElementById('comboCashflow'));
    charts.comboCashflow.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        legend: {
            data: ['SL Thực lũy kế', 'SL KH lũy kế', 'Chi phí lũy kế', 'Thu lũy kế', 'Chi phí KH lũy kế', 'Thu KH lũy kế'],
            textStyle: { color: '#64748B', fontSize: 10 }, top: 0, itemGap: 12
        },
        grid: { left: '3%', right: '5%', bottom: '10%', top: '14%', containLabel: true },
        xAxis: { type: 'category', data: months, axisLabel: { color: '#64748B', fontSize: 11 }, axisLine: { lineStyle: { color: '#E2E8F0' } } },
        yAxis: [
            { type: 'value', name: 'Lũy kế (tỷ)', position: 'left', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ', fontSize: 10 }, splitLine: { lineStyle: { color: '#E2E8F0', type: 'dashed' } } },
            { type: 'value', name: 'Sản lượng (tỷ)', position: 'right', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ', fontSize: 10 }, splitLine: { show: false } }
        ],
        series: [
            { name: 'SL Thực lũy kế', type: 'bar', yAxisIndex: 1, data: cumSLTT, barWidth: '25%', barGap: '10%', itemStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(37,99,235,0.7)' }, { offset: 1, color: 'rgba(37,99,235,0.2)' }]), borderRadius: [3, 3, 0, 0] }, z: 0 },
            { name: 'SL KH lũy kế', type: 'bar', yAxisIndex: 1, data: cumSLKH, barWidth: '25%', itemStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(148,163,184,0.5)' }, { offset: 1, color: 'rgba(148,163,184,0.15)' }]), borderRadius: [3, 3, 0, 0], borderColor: 'rgba(148,163,184,0.6)', borderWidth: 1, borderType: 'dashed' }, z: 0 },
            { name: 'Chi phí lũy kế', type: 'line', smooth: true, data: cumChiTT, lineStyle: { color: '#DC2626', width: 3 }, itemStyle: { color: '#DC2626' }, symbol: 'circle', symbolSize: 6, z: 5 },
            { name: 'Thu lũy kế', type: 'line', smooth: true, data: cumThuTT, lineStyle: { color: '#16A34A', width: 3 }, itemStyle: { color: '#16A34A' }, symbol: 'circle', symbolSize: 6, z: 5 },
            { name: 'Chi phí KH lũy kế', type: 'line', smooth: true, data: cumChiKH, lineStyle: { color: '#F87171', width: 2, type: 'dashed' }, itemStyle: { color: '#F87171' }, symbol: 'diamond', symbolSize: 5, z: 4 },
            { name: 'Thu KH lũy kế', type: 'line', smooth: true, data: cumThuKH, lineStyle: { color: '#4ADE80', width: 2, type: 'dashed' }, itemStyle: { color: '#4ADE80' }, symbol: 'diamond', symbolSize: 5, z: 4 }
        ]
    });
}

function renderCashflowTable() {
    const months = cashflowData.months;
    const d = cashflowData;

    let html = '<table class="data-table" style="font-size:12px;">';
    html += '<thead><tr>';
    html += '<th style="min-width:60px;text-align:center;position:sticky;left:0;background:#FEE2E2;z-index:3;">Tháng</th>';
    html += '<th style="min-width:90px;text-align:right;background:linear-gradient(135deg,#EFF6FF,#DBEAFE);">KH Sản lượng</th>';
    html += '<th style="min-width:90px;text-align:right;background:linear-gradient(135deg,#EFF6FF,#DBEAFE);">TT Sản lượng</th>';
    html += '<th style="min-width:80px;text-align:right;background:linear-gradient(135deg,#FEF2F2,#FEE2E2);">KH Chi</th>';
    html += '<th style="min-width:80px;text-align:right;background:linear-gradient(135deg,#FEF2F2,#FEE2E2);">TT Chi</th>';
    html += '<th style="min-width:80px;text-align:right;background:linear-gradient(135deg,#F0FDF4,#DCFCE7);">KH Thu</th>';
    html += '<th style="min-width:80px;text-align:right;background:linear-gradient(135deg,#F0FDF4,#DCFCE7);">TT Thu</th>';
    html += '<th style="min-width:100px;text-align:right;background:linear-gradient(135deg,#FFFBEB,#FEF3C7);">Dòng tiền ròng</th>';
    html += '</tr></thead><tbody>';

    let totalSLKH = 0, totalSLTT = 0, totalChiKH = 0, totalChiTT = 0, totalThuKH = 0, totalThuTT = 0, totalNet = 0;

    months.forEach((m, i) => {
        const slKH = d.slKH[i], slTT = d.slTT[i], chiKH = d.chiKH[i], chiTT = d.chiTT[i], thuKH = d.thuKH[i], thuTT = d.thuTT[i];
        const net = +(thuTT - chiTT).toFixed(1);
        totalSLKH += slKH; totalSLTT += slTT; totalChiKH += chiKH; totalChiTT += chiTT; totalThuKH += thuKH; totalThuTT += thuTT; totalNet += net;

        const netColor = net >= 0 ? '#16A34A' : '#DC2626';
        const netIcon = net >= 0 ? '▲' : '▼';
        const isNoData = slTT === 0 && chiTT === 0 && thuTT === 0;
        const rowStyle = isNoData ? 'opacity:0.4;' : '';
        const bgRow = i % 2 === 1 ? 'background:#FBFCFE;' : '';

        html += `<tr style="${rowStyle}${bgRow}">`;
        html += `<td style="text-align:center;font-weight:700;color:var(--primary);background:#FFF5F5;position:sticky;left:0;z-index:1;">${m}</td>`;
        html += `<td style="text-align:right;color:#2563EB;">${slKH.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:#2563EB;font-weight:600;">${isNoData ? '—' : slTT.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:#DC2626;">${chiKH.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:#DC2626;font-weight:600;">${isNoData ? '—' : chiTT.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:#16A34A;">${thuKH.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:#16A34A;font-weight:600;">${isNoData ? '—' : thuTT.toFixed(1)}</td>`;
        html += `<td style="text-align:right;color:${netColor};font-weight:700;">${isNoData ? '—' : netIcon + ' ' + Math.abs(net).toFixed(1)}</td>`;
        html += '</tr>';
    });

    const totalNetVal = +totalNet.toFixed(1);
    const totalNetColor = totalNetVal >= 0 ? '#16A34A' : '#DC2626';
    const totalNetIcon = totalNetVal >= 0 ? '▲' : '▼';
    html += `<tr style="background:linear-gradient(135deg,#F1F5F9,#E2E8F0);font-weight:700;">`;
    html += `<td style="text-align:center;font-weight:700;color:var(--primary);background:#FEE2E2;position:sticky;left:0;z-index:1;">TỔNG</td>`;
    html += `<td style="text-align:right;color:#2563EB;">${totalSLKH.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:#2563EB;">${totalSLTT.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:#DC2626;">${totalChiKH.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:#DC2626;">${totalChiTT.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:#16A34A;">${totalThuKH.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:#16A34A;">${totalThuTT.toFixed(1)}</td>`;
    html += `<td style="text-align:right;color:${totalNetColor};">${totalNetIcon} ${Math.abs(totalNetVal).toFixed(1)}</td>`;
    html += '</tr></tbody></table>';
    document.getElementById('cashflowTable').innerHTML = html;
}

function renderNetCashflowBar() {
    const d = cashflowData;
    const months = d.months;
    const nets = months.map((_, i) => +(d.thuTT[i] - d.chiTT[i]).toFixed(1));
    const hasData = months.map((_, i) => d.thuTT[i] > 0 || d.chiTT[i] > 0);
    let cum = 0;
    const cumNets = nets.map((v, i) => hasData[i] ? +(cum += v).toFixed(1) : null);

    const barColors = nets.map((v, i) => {
        if (!hasData[i]) return 'rgba(203,213,225,0.3)';
        return v >= 0
            ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(22,163,74,0.9)' }, { offset: 1, color: 'rgba(22,163,74,0.35)' }])
            : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(220,38,38,0.9)' }, { offset: 1, color: 'rgba(220,38,38,0.35)' }]);
    });

    if (!charts.barNetCashflow) charts.barNetCashflow = echarts.init(document.getElementById('barNetCashflow'));
    charts.barNetCashflow.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['Dòng tiền ròng', 'Lũy kế ròng'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '8%', bottom: '8%', top: '14%', containLabel: true },
        xAxis: { type: 'category', data: months, axisLabel: { color: '#64748B', fontSize: 11, fontWeight: 600 }, axisTick: { show: false }, axisLine: { lineStyle: { color: '#E2E8F0' } } },
        yAxis: [
            { type: 'value', name: 'Tỷ đồng', axisLabel: { color: '#64748B', fontSize: 10, formatter: v => v + ' tỷ' }, splitLine: { lineStyle: { color: '#E2E8F0', type: 'dashed' } } },
            { type: 'value', name: 'Lũy kế', axisLabel: { color: '#64748B', fontSize: 10, formatter: v => v + ' tỷ' }, splitLine: { show: false } }
        ],
        series: [
            { name: 'Dòng tiền ròng', type: 'bar', yAxisIndex: 0, data: nets.map((v, i) => ({ value: hasData[i] ? v : null, itemStyle: { color: barColors[i], borderRadius: v >= 0 ? [4, 4, 0, 0] : [0, 0, 4, 4] } })), barWidth: '42%', label: { show: true, position: 'top', formatter: p => p.value !== null ? (p.value > 0 ? '+' : '') + p.value : '', fontSize: 9, fontWeight: 700, color: '#374151' } },
            { name: 'Lũy kế ròng', type: 'line', yAxisIndex: 1, data: cumNets, smooth: true, connectNulls: false, lineStyle: { color: '#6366F1', width: 2.5 }, itemStyle: { color: '#6366F1', borderWidth: 2, borderColor: '#fff' }, symbol: 'circle', symbolSize: 7 }
        ]
    });
}

function updatePage2() {
    renderCashflowGauges();
    renderComboCashflow();
    renderNetCashflowBar();
    renderCashflowTable();
}

// ============================================================
// PAGE 3: QUẢN LÝ THU - CHI DỰ ÁN
// ============================================================
function initPage3Detail() {
    const proj = demoData.projects[0];
    renderPage3DetailGauges(proj);
    renderLineCumulativeDetail(proj);
    renderMatrixThuChiTable();
    renderStructureThuDetail();
    renderStructureChiDetail();
    updateFHICards(proj);
}

function onProjectFilterChange(level) {
    // Placeholder for cascading project filter logic
    updatePage3Detail();
}

// Matrix THU-CHI table — Updated with NSDA, %, Excel names, 48 months
function renderMatrixThuChiTable() {
    // Generate 48-month labels
    const months48 = [];
    for (let y = 1; y <= 4; y++) {
        for (let m = 1; m <= 12; m++) {
            months48.push(`Y${y}T${m}`);
        }
    }
    const displayMonths = months48.slice(0, 24); // Show 24 months (2 years) for demo

    // THU items — chuẩn Excel (đầy đủ 22.51→22.53, 23.99)
    const thuItems = [
        { code: 'THU', name: 'THU', level: 0, type: 'thu', nsda: 178.5 },
        { code: '21', name: '21 — Thu CĐT', level: 1, type: 'thu', nsda: 145.0 },
        { code: '21.10', name: '  21.10 — Thu Tạm ứng', level: 2, type: 'thu', nsda: 35.0 },
        { code: '21.20', name: '  21.20 — Thu Thanh toán đợt', level: 2, type: 'thu', nsda: 80.0 },
        { code: '21.30', name: '  21.30 — Thu Quyết toán', level: 2, type: 'thu', nsda: 20.0 },
        { code: '21.40', name: '  21.40 — Thu Bảo hành', level: 2, type: 'thu', nsda: 10.0 },
        { code: '22', name: '22 — Thu hoạt động tài chính', level: 1, type: 'thu', nsda: 25.0 },
        { code: '22.51', name: '  22.51 — Thu từ vay bank', level: 2, type: 'thu', nsda: 12.0 },
        { code: '22.52', name: '  22.52 — Thu gốc vay nội bộ, thu tiền mượn', level: 2, type: 'thu', nsda: 8.0 },
        { code: '22.53', name: '  22.53 — Thu hồi các khoản cho vay', level: 2, type: 'thu', nsda: 5.0 },
        { code: '23', name: '23 — Thu khác thuộc dự án', level: 1, type: 'thu', nsda: 8.5 },
        { code: '23.99', name: '  23.99 — Thu khác (thu hoàn ứng, khác…)', level: 2, type: 'thu', nsda: 8.5 }
    ];

    // CHI items — đầy đủ 01→12 (tên chuẩn Excel)
    const chiItems = [
        { code: 'CHI', name: 'CHI', level: 0, type: 'chi', nsda: 133.2 },
        { code: '01', name: '01 — Chi phát triển dự án', level: 1, type: 'chi', nsda: 2.5 },
        { code: '02', name: '02 — Chi kiến thiết cơ bản', level: 1, type: 'chi', nsda: 18.5 },
        { code: '03', name: '03 — Chi cho dịch vụ kinh doanh BĐS', level: 1, type: 'chi', nsda: 12.0 },
        { code: '04', name: '04 — Công tác chuẩn bị', level: 1, type: 'chi', nsda: 8.2 },
        { code: '05', name: '05 — Công tác thiết bị', level: 1, type: 'chi', nsda: 15.0 },
        { code: '06', name: '06 — Chi cho thầu phụ / tổ đội', level: 1, type: 'chi', nsda: 32.0 },
        { code: '07', name: '07 — Chi vật tư', level: 1, type: 'chi', nsda: 20.0 },
        { code: '08', name: '08 — Chi hoạt động trực tiếp', level: 1, type: 'chi', nsda: 10.5 },
        { code: '09', name: '09 — Chi phí gián tiếp', level: 1, type: 'chi', nsda: 5.5 },
        { code: '10', name: '10 — Chi hoạt động tài chính', level: 1, type: 'chi', nsda: 3.0 },
        { code: '11', name: '11 — Chi khác', level: 1, type: 'chi', nsda: 2.0 },
        { code: '12', name: '12 — Dự phòng phí', level: 1, type: 'chi', nsda: 4.0 }
    ];

    // Generate random monthly data
    const generateData = (nsda, months) => {
        const monthly = months / 2; // Only first half has data
        const perMonth = nsda / monthly;
        return Array.from({ length: months }, (_, i) => i < monthly ? +(perMonth * (0.8 + Math.random() * 0.4)).toFixed(1) : 0);
    };

    thuItems.forEach(item => { item.data = generateData(item.nsda, displayMonths.length); });
    chiItems.forEach(item => { item.data = generateData(item.nsda, displayMonths.length); });

    const allItems = [...thuItems, { code: '', name: '', level: 0, type: 'spacer', data: [], nsda: 0 }, ...chiItems];

    // Build header
    let html = '<table class="data-table" style="font-size:11px;"><thead><tr>';
    html += '<th style="min-width:220px;text-align:left;position:sticky;left:0;background:#F8FAFC;z-index:3;">Hạng mục</th>';
    html += '<th style="min-width:80px;text-align:right;background:#EFF6FF;color:#2563EB;">Tổng NSDA</th>';
    displayMonths.forEach(m => { html += `<th style="min-width:55px;text-align:right;font-size:10px;">${m}</th>`; });
    html += '<th style="min-width:70px;text-align:right;font-weight:bold;background:#F1F5F9;">Tổng TH</th>';
    html += '<th style="min-width:60px;text-align:right;font-weight:bold;background:#FFFBEB;color:#D97706;">Tỷ lệ %</th>';
    html += '</tr></thead><tbody>';

    allItems.forEach((item, idx) => {
        if (item.type === 'spacer') {
            html += '<tr style="height:12px;"><td colspan="' + (displayMonths.length + 4) + '"></td></tr>';
            return;
        }

        const isHeader = item.level === 0;
        const nextItem = allItems[idx + 1];
        const hasChildren = nextItem && nextItem.level > item.level;
        const toggleIcon = hasChildren 
            ? '<span class="toggle-icon" style="display:inline-block;width:12px;color:#64748B;font-size:10px;cursor:pointer;">▼</span>' 
            : '<span style="display:inline-block;width:12px;"></span>';
        const indent = item.level * 14;
        const bgColor = isHeader ? (item.type === 'thu' ? 'rgba(22,163,74,0.1)' : 'rgba(220,38,38,0.1)') : '';
        const fontWeight = isHeader ? 'bold' : 'normal';
        const textColor = item.type === 'thu' ? '#16A34A' : '#DC2626';
        const total = item.data.reduce((a, b) => a + b, 0).toFixed(1);
        const pct = item.nsda > 0 ? ((total / item.nsda) * 100).toFixed(0) : '—';
        
        const cursor = hasChildren ? 'cursor:pointer;' : '';
        const click = hasChildren ? 'onclick="toggleMatrixRow(this)"' : '';

        html += `<tr style="${cursor}background:${bgColor};" data-level="${item.level}" data-expanded="true" ${click}>`;
        html += `<td style="padding-left:${8 + indent}px;font-weight:${fontWeight};text-align:left;position:sticky;left:0;background:${bgColor || '#fff'};z-index:1;white-space:nowrap;">${toggleIcon}${item.name.replace(/^\s+/, '')}</td>`;
        html += `<td style="text-align:right;color:#2563EB;font-weight:600;">${item.nsda.toFixed(1)}</td>`;
        item.data.forEach(v => {
            html += `<td style="text-align:right;color:${textColor};font-size:10px;">${v > 0 ? v.toFixed(1) : ''}</td>`;
        });
        html += `<td style="text-align:right;font-weight:bold;background:#F1F5F9;color:${textColor};">${total}</td>`;
        html += `<td style="text-align:right;font-weight:bold;background:#FFFBEB;color:${pct !== '—' && parseFloat(pct) > 100 ? '#DC2626' : '#D97706'};">${pct}${pct !== '—' ? '%' : ''}</td>`;
        html += '</tr>';
    });

    html += '</tbody></table>';
    document.getElementById('matrixThuChiTable').innerHTML = html;
}

function renderPage3DetailGauges(proj) {
    const thuPct = 82; // Mock %
    const chiPct = 76; // Mock %
    const slPct = 85;  // Mock %

    const makeGaugeOpt = (pct, colorStops) => ({
        series: [{
            type: 'gauge', startAngle: 210, endAngle: -30, min: 0, max: 100,
            radius: '92%', center: ['50%', '60%'],
            pointer: { show: true, length: '65%', width: 5, itemStyle: { color: 'auto' } },
            axisLine: { lineStyle: { width: 10, color: colorStops } },
            axisTick: { show: false }, splitLine: { show: false }, axisLabel: { show: false },
            detail: { formatter: '{value}%', fontSize: 16, fontWeight: 700, color: '#0F172A', offsetCenter: [0, '30%'] },
            title: { show: false },
            data: [{ value: pct }]
        }]
    });

    charts.gaugeThuDetail = echarts.init(document.getElementById('gaugeThuDetail'));
    charts.gaugeThuDetail.setOption(makeGaugeOpt(thuPct, [[0.6, '#FCA5A5'], [0.8, '#FCD34D'], [1, '#4ADE80']]));

    charts.gaugeChiDetail = echarts.init(document.getElementById('gaugeChiDetail'));
    charts.gaugeChiDetail.setOption(makeGaugeOpt(chiPct, [[0.6, '#4ADE80'], [0.8, '#FCD34D'], [1, '#F87171']]));
    
    charts.gaugeSanLuongDetail = echarts.init(document.getElementById('gaugeSanLuongDetail'));
    charts.gaugeSanLuongDetail.setOption(makeGaugeOpt(slPct, [[0.6, '#FCA5A5'], [0.8, '#FCD34D'], [1, '#60A5FA']]));
}

// Lũy Kế chart — wider, with sản lượng line, 48 months
function renderLineCumulativeDetail(proj) {
    // Generate 48 month labels (T1, T2...)
    const months48 = [];
    for (let m = 1; m <= 48; m++) {
        months48.push(`T${m}`);
    }
    const showMonths = months48.slice(0, 24);

    // Generate cumulative data
    const thuData = [], chiData = [], slData = [];
    let cumThu = 0, cumChi = 0, cumSL = 0;
    showMonths.forEach((_, i) => {
        if (i < 12) {
            cumThu += 6 + Math.random() * 4;
            cumChi += 4 + Math.random() * 3;
            cumSL += 5 + Math.random() * 3;
        }
        thuData.push(+cumThu.toFixed(1));
        chiData.push(+cumChi.toFixed(1));
        slData.push(+cumSL.toFixed(1));
    });

    charts.lineCumulativeDetail = echarts.init(document.getElementById('lineCumulativeDetail'));
    charts.lineCumulativeDetail.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Lũy kế Thu', 'Lũy kế Chi', 'Sản lượng TH'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '10%', top: '15%', containLabel: true },
        xAxis: { type: 'category', data: showMonths, axisLabel: { color: '#64748B', fontSize: 9, rotate: 45 } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ', fontSize: 9 } },
        series: [
            { name: 'Lũy kế Thu', type: 'line', smooth: true, data: thuData, lineStyle: { color: '#16A34A', width: 2.5 }, itemStyle: { color: '#16A34A' }, areaStyle: { color: 'rgba(22,163,74,0.08)' }, symbol: 'circle', symbolSize: 3 },
            { name: 'Lũy kế Chi', type: 'line', smooth: true, data: chiData, lineStyle: { color: '#DC2626', width: 2.5 }, itemStyle: { color: '#DC2626' }, areaStyle: { color: 'rgba(220,38,38,0.08)' }, symbol: 'circle', symbolSize: 3 },
            { name: 'Sản lượng TH', type: 'line', smooth: true, data: slData, lineStyle: { color: '#2563EB', width: 2, type: 'dashed' }, itemStyle: { color: '#2563EB' }, symbol: 'diamond', symbolSize: 4 }
        ]
    });
}

function renderStructureThuDetail() {
    const thuCats = ['Thu CĐT', 'Thu HĐ Tài chính', 'Thu khác'];
    const thuActual = [42.5, 20.2, 13.7];
    const thuBudget = [48.2, 27.0, 17.0];

    charts.barStructureThuDetail = echarts.init(document.getElementById('barStructureThuDetail'));
    charts.barStructureThuDetail.setOption({
        tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '22%', bottom: '3%', top: '3%', containLabel: true },
        yAxis: { type: 'category', data: thuCats, axisLabel: { color: '#64748B' } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: 'Thực thu', type: 'bar', data: thuActual, itemStyle: { color: '#16A34A' }, barWidth: '50%', z: 1 },
            {
                name: 'Ngân sách', type: 'scatter', symbol: 'rect', symbolSize: [3, 24],
                data: thuBudget.map((budget, idx) => {
                    const val = thuActual[idx];
                    const pct = ((val / budget) * 100 - 100).toFixed(0);
                    return { value: [budget, idx], label: { show: true, position: 'right', formatter: `${val} tỷ | ${pct >= 0 ? '+' : ''}${pct}%`, fontSize: 10, color: '#333', distance: 8 } };
                }),
                itemStyle: { color: '#1E293B' }, z: 10
            }
        ]
    });
}

// Cơ cấu Chi — đầy đủ 12 mã (01→12)
function renderStructureChiDetail() {
    const chiCats = ['01-PhátTriển', '02-KiếnThiết', '03-DVKD', '04-ChuẩnBị', '05-ThiếtBị', '06-ThầuPhụ', '07-VậtTư', '08-HĐ TT', '09-GiánTiếp', '10-TàiChính', '11-ChiKhác', '12-DựPhòng'];
    const chiActual = [1.6, 15, 10.5, 7.8, 12.5, 28, 16.5, 9.2, 4.8, 2.5, 1.8, 0];
    const chiBudget = [2.5, 18.5, 12.0, 8.2, 15.0, 32.0, 20.0, 10.5, 5.5, 3.0, 2.0, 4.0];

    charts.barStructureChiDetail = echarts.init(document.getElementById('barStructureChiDetail'));
    charts.barStructureChiDetail.setOption({
        tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '18%', bottom: '3%', top: '3%', containLabel: true },
        yAxis: { type: 'category', data: chiCats, axisLabel: { color: '#64748B', fontSize: 9 } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [
            { name: 'Thực chi', type: 'bar', data: chiActual, itemStyle: { color: '#DC2626' }, barWidth: '50%', z: 1 },
            {
                name: 'Ngân sách', type: 'scatter', symbol: 'rect', symbolSize: [3, 18],
                data: chiBudget.map((budget, idx) => {
                    const val = chiActual[idx];
                    const pct = budget > 0 ? ((val / budget) * 100 - 100).toFixed(0) : 0;
                    const isOver = val > budget;
                    return {
                        value: [budget, idx],
                        label: {
                            show: true, position: 'right',
                            formatter: `${val} tỷ | ${pct >= 0 ? '+' : ''}${pct}%`,
                            fontSize: 9, padding: [2, 5], borderRadius: 3,
                            backgroundColor: isOver ? '#DC2626' : '#16A34A', color: '#fff', distance: 6
                        }
                    };
                }),
                itemStyle: { color: '#1E293B' }, z: 10
            }
        ]
    });
}

function updateFHICards(proj) {
    const fhiCurrent = (proj.actualThu / proj.actualChi).toFixed(2);
    const fhiExpected = (proj.budgetThuTotal / proj.budgetChiTotal).toFixed(2);
    document.getElementById('fhiCurrent').textContent = fhiCurrent;
    document.getElementById('fhiExpected').textContent = fhiExpected;

    const statusEl = document.getElementById('fhiCurrentStatus');
    if (fhiCurrent >= 1.2) { statusEl.innerHTML = '✓ Hiệu quả tốt'; statusEl.style.color = '#16A34A'; }
    else if (fhiCurrent >= 1) { statusEl.innerHTML = '⚠ Đạt mức cơ bản'; statusEl.style.color = '#F59E0B'; }
    else { statusEl.innerHTML = '✗ Cần cải thiện'; statusEl.style.color = '#DC2626'; }
}

function updatePage3Detail() {
    const projId = document.getElementById('projectFilterPage3_level2').value;
    const proj = demoData.projects.find(p => p.id === projId) || demoData.projects[0];

    const thuPct = Math.round(proj.actualThu / proj.budgetThuTotal * 100);
    const chiPct = Math.round(proj.actualChi / proj.budgetChiTotal * 100);

    if (charts.gaugeThuDetail) charts.gaugeThuDetail.setOption({ series: [{ data: [{ value: thuPct }] }] });
    if (charts.gaugeChiDetail) charts.gaugeChiDetail.setOption({ series: [{ data: [{ value: chiPct }] }] });

    updateFHICards(proj);
}

// ============================================================
// PAGE 4: QUẢN LÝ HỢP ĐỒNG (new)
// ============================================================
function initPage4() {
    renderContractKPIs();
    renderContractDebtChart();
    renderContractComparisonChart();
    renderContractTableThu();
    renderContractTableChi();
}

function renderContractKPIs() {
    // Static demo data
    document.getElementById('kpiContractHDAB').textContent = '215.5 tỷ';
    document.getElementById('kpiContractInvoice').textContent = '162.3 tỷ';
    document.getElementById('kpiContractPaid').textContent = '138.7 tỷ';
    document.getElementById('kpiContractDebt').textContent = '23.6 tỷ';
}

function renderContractDebtChart() {
    const chiCodes = ['06-ThầuPhụ', '07-VậtTư', '02-KiếnThiết', '05-ThiếtBị', '08-HĐ TT', '04-ChuẩnBị', '09-GiánTiếp', '01-PhátTriển'];
    const debtValues = [8.5, 4.2, 3.5, 2.8, 2.1, 1.5, 0.6, 0.4];

    charts.barContractDebt = echarts.init(document.getElementById('barContractDebt'));
    charts.barContractDebt.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: '3%', right: '12%', bottom: '3%', top: '8%', containLabel: true },
        yAxis: { type: 'category', data: chiCodes, axisLabel: { color: '#64748B', fontSize: 10 } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [{
            type: 'bar', data: debtValues.map((v, i) => ({
                value: v, itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: i < 3 ? '#DC2626' : '#3B82F6' },
                        { offset: 1, color: i < 3 ? '#EF4444' : '#60A5FA' }
                    ]), borderRadius: [0, 6, 6, 0]
                }
            })),
            barWidth: '55%',
            label: { show: true, position: 'right', formatter: '{c} tỷ', color: '#64748B', fontSize: 10, fontWeight: 600 }
        }]
    });
}

function renderContractComparisonChart() {
    const projects = ['L59', 'GSW', 'VHG', 'TPK', 'BDN'];
    const hdData = [82.5, 62.0, 42.0, 36.0, 26.0];
    const invoiceData = [65.0, 50.0, 32.0, 28.0, 20.0];
    const billData = [58.0, 45.0, 28.0, 24.0, 17.0];
    const paidData = [52.0, 40.0, 24.0, 20.0, 14.0];

    charts.barContractComparison = echarts.init(document.getElementById('barContractComparison'));
    charts.barContractComparison.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['HĐ', 'Hoá đơn', 'Bill', 'Nhận TT'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '5%', top: '14%', containLabel: true },
        xAxis: { type: 'category', data: projects, axisLabel: { color: '#1E293B', fontSize: 11, fontWeight: 600 } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' }, splitLine: { lineStyle: { color: '#E2E8F0', type: 'dashed' } } },
        series: [
            { name: 'HĐ', type: 'bar', data: hdData, itemStyle: { color: '#3B82F6', borderRadius: [3, 3, 0, 0] } },
            { name: 'Hoá đơn', type: 'bar', data: invoiceData, itemStyle: { color: '#8B5CF6', borderRadius: [3, 3, 0, 0] } },
            { name: 'Bill', type: 'bar', data: billData, itemStyle: { color: '#F59E0B', borderRadius: [3, 3, 0, 0] } },
            { name: 'Nhận TT', type: 'bar', data: paidData, itemStyle: { color: '#16A34A', borderRadius: [3, 3, 0, 0] } }
        ]
    });
}

function renderContractTableThu() {
    const thuRows = [
        { code: 'THU', name: 'THU', level: 0, nsda: 178.5, hd: 172.0, tu: 35.0, hoaDon: 125.0, bill: 110.0, tt: 95.0 },
        { code: '21', name: 'HĐ A/B', level: 1, nsda: 145.0, hd: 140.0, tu: 30.0, hoaDon: 105.0, bill: 92.0, tt: 80.0 },
        { code: '21.10', name: '  Thu Tạm ứng', level: 2, nsda: 35.0, hd: 35.0, tu: 30.0, hoaDon: 35.0, bill: 35.0, tt: 35.0 },
        { code: '21.20', name: '  Thu Thanh toán đợt', level: 2, nsda: 80.0, hd: 78.0, tu: 0, hoaDon: 50.0, bill: 42.0, tt: 35.0 },
        { code: '21.30', name: '  Thu Quyết toán', level: 2, nsda: 20.0, hd: 18.0, tu: 0, hoaDon: 15.0, bill: 12.0, tt: 8.0 },
        { code: '21.40', name: '  Thu Bảo hành', level: 2, nsda: 10.0, hd: 9.0, tu: 0, hoaDon: 5.0, bill: 3.0, tt: 2.0 },
        { code: '22', name: 'Thu hoạt động tài chính', level: 1, nsda: 25.0, hd: 24.0, tu: 5.0, hoaDon: 15.0, bill: 14.0, tt: 12.0 },
        { code: '23', name: 'Thu khác thuộc dự án', level: 1, nsda: 8.5, hd: 8.0, tu: 0, hoaDon: 5.0, bill: 4.0, tt: 3.0 }
    ];

    const thStyle = 'padding:8px 6px;font-size:11px;font-weight:600;white-space:nowrap;border-bottom:2px solid #CBD5E1;';
    let html = '<table style="font-size:11px;border-collapse:collapse;width:100%;min-width:900px;">';
    html += '<thead><tr>';
    html += `<th style="${thStyle}text-align:left;background:#DCFCE7;min-width:180px;">(1) Mã NS</th>`;
    html += `<th style="${thStyle}text-align:right;background:#DCFCE7;">(2) NSDA</th>`;
    html += `<th style="${thStyle}text-align:right;background:#DCFCE7;">(3) Hợp đồng</th>`;
    html += `<th style="${thStyle}text-align:right;background:#DCFCE7;">(4) Tạm ứng</th>`;
    html += `<th style="${thStyle}text-align:right;background:#DCFCE7;">(5) Hoá đơn</th>`;
    html += `<th style="${thStyle}text-align:right;background:#DCFCE7;">(6) Bill</th>`;
    html += `<th style="${thStyle}text-align:right;background:#DCFCE7;">(7) Thanh toán</th>`;
    html += `<th style="${thStyle}text-align:right;background:#FEF2F2;color:#DC2626;">(8) Công nợ</th>`;
    html += '</tr></thead><tbody>';

    thuRows.forEach(row => {
        const indent = row.level * 14;
        const bold = row.level <= 1 ? 'font-weight:700;' : '';
        const bg = row.level === 0 ? 'background:rgba(22,163,74,0.08);' : '';
        const congNo = +(row.bill - row.tt).toFixed(1);
        const td = 'padding:7px 6px;border-bottom:1px solid #E2E8F0;white-space:nowrap;font-size:11px;';

        html += `<tr style="${bg}">`;
        html += `<td style="${td}text-align:left;padding-left:${8 + indent}px;${bold}color:#16A34A;">${row.code} — ${row.name}</td>`;
        html += `<td style="${td}text-align:right;">${row.nsda.toFixed(1)}</td>`;
        html += `<td style="${td}text-align:right;">${row.hd.toFixed(1)}</td>`;
        html += `<td style="${td}text-align:right;">${row.tu > 0 ? row.tu.toFixed(1) : '—'}</td>`;
        html += `<td style="${td}text-align:right;">${row.hoaDon.toFixed(1)}</td>`;
        html += `<td style="${td}text-align:right;">${row.bill.toFixed(1)}</td>`;
        html += `<td style="${td}text-align:right;">${row.tt.toFixed(1)}</td>`;
        html += `<td style="${td}text-align:right;color:${congNo > 0 ? '#DC2626' : '#16A34A'};font-weight:700;">${congNo.toFixed(1)}</td>`;
        html += '</tr>';
    });
    html += '</tbody></table>';
    document.getElementById('contractTableThu').innerHTML = html;
}

function renderContractTableChi() {
    const chiRows = [
        { code: 'CHI', name: 'CHI', level: 0, nsda: 133.2, hd: 125.0, tu: 18.0, hoaDon: 85.0, bill: 72.0, tt: 60.0 },
        { code: '01', name: 'Chi phát triển dự án', level: 1, nsda: 2.5, hd: 2.3, tu: 0.5, hoaDon: 1.8, bill: 1.5, tt: 1.2 },
        { code: '02', name: 'Chi kiến thiết cơ bản', level: 1, nsda: 18.5, hd: 17.8, tu: 3.0, hoaDon: 12.0, bill: 10.0, tt: 8.5 },
        { code: '03', name: 'Chi cho dịch vụ kinh doanh BĐS', level: 1, nsda: 12.0, hd: 11.5, tu: 1.5, hoaDon: 8.0, bill: 6.5, tt: 5.5 },
        { code: '04', name: 'Công tác chuẩn bị', level: 1, nsda: 8.2, hd: 7.8, tu: 1.5, hoaDon: 5.5, bill: 4.5, tt: 3.8 },
        { code: '05', name: 'Công tác thiết bị', level: 1, nsda: 15.0, hd: 14.2, tu: 2.0, hoaDon: 9.0, bill: 7.5, tt: 6.2 },
        { code: '06', name: 'Chi cho thầu phụ / tổ đội', level: 1, nsda: 32.0, hd: 30.5, tu: 5.0, hoaDon: 22.0, bill: 18.5, tt: 15.0 },
        { code: '06.10', name: '  Gói thầu cọc', level: 2, nsda: 5.0, hd: 4.8, tu: 0.8, hoaDon: 3.5, bill: 3.0, tt: 2.5 },
        { code: '06.20', name: '  Gói thầu Biện pháp thi công', level: 2, nsda: 3.5, hd: 3.2, tu: 0.5, hoaDon: 2.5, bill: 2.0, tt: 1.5 },
        { code: '06.30', name: '  Gói thầu kết cấu', level: 2, nsda: 12.0, hd: 11.5, tu: 2.0, hoaDon: 8.5, bill: 7.0, tt: 5.5 },
        { code: '06.40', name: '  Gói thầu hoàn thiện', level: 2, nsda: 5.0, hd: 4.8, tu: 0.7, hoaDon: 3.5, bill: 3.0, tt: 2.5 },
        { code: '06.50', name: '  Kết cấu thép', level: 2, nsda: 2.0, hd: 2.0, tu: 0.3, hoaDon: 1.5, bill: 1.2, tt: 1.0 },
        { code: '06.60', name: '  Gói thầu MEP', level: 2, nsda: 3.0, hd: 2.8, tu: 0.5, hoaDon: 2.0, bill: 1.8, tt: 1.5 },
        { code: '06.70', name: '  Gói thầu trung hạ thế, máy biến thế', level: 2, nsda: 1.0, hd: 1.0, tu: 0.1, hoaDon: 0.3, bill: 0.3, tt: 0.3 },
        { code: '06.80', name: '  Gói thầu Hạ Tầng - Cảnh quan', level: 2, nsda: 0.5, hd: 0.4, tu: 0.1, hoaDon: 0.2, bill: 0.2, tt: 0.2 },
        { code: '07', name: 'Chi vật tư', level: 1, nsda: 20.0, hd: 19.0, tu: 3.0, hoaDon: 14.0, bill: 12.0, tt: 10.0 },
        { code: '08', name: 'Chi hoạt động trực tiếp', level: 1, nsda: 10.5, hd: 10.0, tu: 1.5, hoaDon: 7.0, bill: 6.0, tt: 5.0 },
        { code: '09', name: 'Chi phí gián tiếp', level: 1, nsda: 5.5, hd: 5.2, tu: 0.8, hoaDon: 3.5, bill: 3.0, tt: 2.5 },
        { code: '10', name: 'Chi hoạt động tài chính', level: 1, nsda: 3.0, hd: 2.8, tu: 0.5, hoaDon: 2.0, bill: 1.5, tt: 1.2 },
        { code: '11', name: 'Chi khác', level: 1, nsda: 2.0, hd: 1.8, tu: 0.2, hoaDon: 1.2, bill: 1.0, tt: 0.8 },
        { code: '12', name: 'Dự phòng phí', level: 1, nsda: 4.0, hd: 0, tu: 0, hoaDon: 0, bill: 0, tt: 0 }
    ];

    const thStyle = 'padding:8px 6px;font-size:11px;font-weight:600;white-space:nowrap;border-bottom:2px solid #CBD5E1;';
    let html = '<table style="font-size:11px;border-collapse:collapse;width:100%;min-width:900px;">';
    html += '<thead><tr>';
    html += `<th style="${thStyle}text-align:left;background:#FEE2E2;min-width:220px;">(1) Mã NS</th>`;
    html += `<th style="${thStyle}text-align:right;background:#FEE2E2;">(2) NSDA</th>`;
    html += `<th style="${thStyle}text-align:right;background:#FEE2E2;">(3) Hợp đồng</th>`;
    html += `<th style="${thStyle}text-align:right;background:#FEE2E2;">(4) Tạm ứng</th>`;
    html += `<th style="${thStyle}text-align:right;background:#FEE2E2;">(5) Hoá đơn</th>`;
    html += `<th style="${thStyle}text-align:right;background:#FEE2E2;">(6) Bill</th>`;
    html += `<th style="${thStyle}text-align:right;background:#FEE2E2;">(7) Thanh toán</th>`;
    html += `<th style="${thStyle}text-align:right;background:#FFF1F2;color:#DC2626;">(8) Công nợ</th>`;
    html += '</tr></thead><tbody>';

    chiRows.forEach(row => {
        const indent = row.level * 14;
        const bold = row.level <= 1 ? 'font-weight:700;' : '';
        const bg = row.level === 0 ? 'background:rgba(220,38,38,0.06);' : '';
        const congNo = +(row.bill - row.tt).toFixed(1);
        const td = 'padding:7px 6px;border-bottom:1px solid #E2E8F0;white-space:nowrap;font-size:11px;';

        html += `<tr style="${bg}">`;
        html += `<td style="${td}text-align:left;padding-left:${8 + indent}px;${bold}color:#DC2626;">${row.code} — ${row.name}</td>`;
        html += `<td style="${td}text-align:right;">${row.nsda.toFixed(1)}</td>`;
        html += `<td style="${td}text-align:right;">${row.hd > 0 ? row.hd.toFixed(1) : '—'}</td>`;
        html += `<td style="${td}text-align:right;">${row.tu > 0 ? row.tu.toFixed(1) : '—'}</td>`;
        html += `<td style="${td}text-align:right;">${row.hoaDon > 0 ? row.hoaDon.toFixed(1) : '—'}</td>`;
        html += `<td style="${td}text-align:right;">${row.bill > 0 ? row.bill.toFixed(1) : '—'}</td>`;
        html += `<td style="${td}text-align:right;">${row.tt > 0 ? row.tt.toFixed(1) : '—'}</td>`;
        html += `<td style="${td}text-align:right;color:${congNo > 0 ? '#DC2626' : '#CBD5E1'};font-weight:700;">${congNo > 0 ? congNo.toFixed(1) : '—'}</td>`;
        html += '</tr>';
    });
    html += '</tbody></table>';
    document.getElementById('contractTableChi').innerHTML = html;
}

function updateContractPage() {
    renderContractKPIs();
    renderContractDebtChart();
    renderContractComparisonChart();
    renderContractTableThu();
    renderContractTableChi();
}

// ============================================================
// PAGE 5: QUẢN LÝ NGÂN SÁCH (brand new)
// ============================================================
function initPage5() {
    renderBudgetNewKPIs();
    renderBudgetThuPie();
    renderBudgetChiBar();
    renderBudgetVsActualChart();
    renderBudgetDetailTableNew();
}

function renderBudgetNewKPIs() {
    // Demo values — would be calculated from data
    if (document.getElementById('kpiBudgetGrossProfit')) document.getElementById('kpiBudgetGrossProfit').textContent = '32.5 tỷ';
    if (document.getElementById('kpiBudgetGrossPct')) document.getElementById('kpiBudgetGrossPct').textContent = 'Tỷ suất: 18.2%';
    if (document.getElementById('kpiBudgetAdjProfit')) document.getElementById('kpiBudgetAdjProfit').textContent = '28.8 tỷ';
    if (document.getElementById('kpiBudgetAdjNote')) document.getElementById('kpiBudgetAdjNote').textContent = '-3.7 tỷ so KH ban đầu';
}



function renderBudgetThuPie() {
    charts.pieBudgetThu = echarts.init(document.getElementById('pieBudgetThu'));
    charts.pieBudgetThu.setOption({
        tooltip: { trigger: 'item', formatter: '{b}: {c} tỷ ({d}%)' },
        legend: { orient: 'vertical', right: '5%', top: 'center', textStyle: { color: '#64748B', fontSize: 10 } },
        series: [{
            type: 'pie', radius: ['40%', '70%'], center: ['35%', '50%'],
            data: [
                { value: 145.0, name: 'Thu CĐT (21)', itemStyle: { color: '#16A34A' } },
                { value: 25.0, name: 'Thu HĐ TC (22)', itemStyle: { color: '#3B82F6' } },
                { value: 8.5, name: 'Thu khác (23)', itemStyle: { color: '#F59E0B' } }
            ],
            label: { formatter: '{d}%', fontSize: 10 },
            emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.2)' } }
        }]
    });
}

function renderBudgetChiBar() {
    const codes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const values = [2.5, 18.5, 12.0, 8.2, 15.0, 32.0, 20.0, 10.5, 5.5, 3.0, 2.0, 4.0];

    charts.barBudgetChi = echarts.init(document.getElementById('barBudgetChi'));
    charts.barBudgetChi.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: '3%', right: '8%', bottom: '3%', top: '3%', containLabel: true },
        yAxis: { type: 'category', data: codes, axisLabel: { color: '#64748B', fontSize: 10 } },
        xAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' } },
        series: [{
            type: 'bar',
            data: values.map(v => ({ value: v, itemStyle: { color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#DC2626' }, { offset: 1, color: '#F87171' }]), borderRadius: [0, 4, 4, 0] } })),
            barWidth: '60%',
            label: { show: true, position: 'right', formatter: '{c} tỷ', fontSize: 9, color: '#64748B' }
        }]
    });
}

function renderBudgetVsActualChart() {
    const codes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const khDau = [2.5, 18.5, 12.0, 8.2, 15.0, 32.0, 20.0, 10.5, 5.5, 3.0, 2.0, 4.0];
    const khHienTai = [2.5, 17.5, 11.5, 8.0, 14.5, 30.5, 19.0, 10.0, 5.2, 2.8, 1.8, 3.5];
    const thucTe = [1.6, 15.0, 10.5, 7.8, 12.5, 28.0, 16.5, 9.2, 4.8, 2.5, 1.8, 0];

    charts.barBudgetVsActual = echarts.init(document.getElementById('barBudgetVsActual'));
    charts.barBudgetVsActual.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['KH Đầu dự án', 'KH Hiện tại', 'Thực tế'], textStyle: { color: '#64748B', fontSize: 10 }, top: 0 },
        grid: { left: '3%', right: '4%', bottom: '8%', top: '14%', containLabel: true },
        xAxis: { type: 'category', data: codes, axisLabel: { color: '#1E293B', fontSize: 11, fontWeight: 600 } },
        yAxis: { type: 'value', axisLabel: { color: '#64748B', formatter: v => v + ' tỷ' }, splitLine: { lineStyle: { color: '#E2E8F0', type: 'dashed' } } },
        series: [
            { name: 'KH Đầu dự án', type: 'bar', data: khDau, itemStyle: { color: 'rgba(37,99,235,0.7)', borderRadius: [3, 3, 0, 0] } },
            { name: 'KH Hiện tại', type: 'bar', data: khHienTai, itemStyle: { color: 'rgba(139,92,246,0.7)', borderRadius: [3, 3, 0, 0] } },
            { name: 'Thực tế', type: 'bar', data: thucTe, itemStyle: { color: 'rgba(220,38,38,0.7)', borderRadius: [3, 3, 0, 0] } }
        ]
    });
}

function renderBudgetDetailTableNew() {
    // type: 'sl'=sản lượng, 'thu'=thu, 'chi'=chi, 'header'=tiêu đề nhóm (có mã), 'subheader'=tiêu đề nhóm con (không mã, in nghiêng, nền xám), 'summary'/'pct'/'profit'=tổng hợp
    const rows = [
        // ─── SẢN LƯỢNG ───
        { code: '', name: 'SẢN LƯỢNG THỰC HIỆN', level: 0, type: 'subheader' },
        { code: '51.10', name: 'Sản lượng thực hiện', level: 1, type: 'sl', khDau: 180.0, khHT: 175.0, giaoThau: 160.0, daThuChi: 145.0, note: '' },
        // ─── THU ───
        { code: '', name: 'THU', level: 0, type: 'subheader' },
        { code: '21', name: 'Thu CĐT', level: 1, type: 'thu', khDau: 145.0, khHT: 140.0, giaoThau: 135.0, daThuChi: 125.0, note: '' },
        { code: '21.10', name: 'Thu Tạm ứng', level: 2, type: 'thu', khDau: 35.0, khHT: 35.0, giaoThau: 35.0, daThuChi: 35.0, note: 'Đã thu đủ' },
        { code: '21.20', name: 'Thu Thanh toán đợt', level: 2, type: 'thu', khDau: 80.0, khHT: 78.0, giaoThau: 72.0, daThuChi: 65.0, note: '' },
        { code: '21.30', name: 'Thu Quyết toán', level: 2, type: 'thu', khDau: 20.0, khHT: 18.0, giaoThau: 18.0, daThuChi: 15.0, note: '' },
        { code: '21.40', name: 'Thu Bảo hành', level: 2, type: 'thu', khDau: 10.0, khHT: 9.0, giaoThau: 10.0, daThuChi: 10.0, note: '' },
        { code: '22', name: 'Thu hoạt động tài chính', level: 1, type: 'thu', khDau: 25.0, khHT: 24.0, giaoThau: 22.0, daThuChi: 20.0, note: '' },
        { code: '22.51', name: 'Thu từ vay bank', level: 2, type: 'thu', khDau: 12.0, khHT: 12.0, giaoThau: 10.0, daThuChi: 10.0, note: '' },
        { code: '22.52', name: 'Thu gốc vay nội bộ, thu tiền mượn', level: 2, type: 'thu', khDau: 8.0, khHT: 7.0, giaoThau: 7.0, daThuChi: 6.0, note: '' },
        { code: '22.53', name: 'Thu hồi các khoản cho vay, thu hồi tiền cho mượn', level: 2, type: 'thu', khDau: 5.0, khHT: 5.0, giaoThau: 5.0, daThuChi: 4.0, note: '' },
        { code: '23', name: 'Thu khác thuộc dự án', level: 1, type: 'thu', khDau: 8.5, khHT: 8.0, giaoThau: 8.0, daThuChi: 7.0, note: '' },
        { code: '23.99', name: 'Thu khác (thu hoàn ứng, khác…)', level: 2, type: 'thu', khDau: 8.5, khHT: 8.0, giaoThau: 8.0, daThuChi: 7.0, note: '' },
        // ─── CHI ───
        { code: '', name: 'CHI', level: 0, type: 'subheader' },
        // 01
        { code: '01', name: 'Chi phát triển dự án', level: 1, type: 'chi', khDau: 2.5, khHT: 2.5, giaoThau: 2.3, daThuChi: 1.6, note: '' },
        { code: '01.51', name: 'Xin chấp thuận chủ trương đầu tư', level: 2, type: 'chi', khDau: 0.3, khHT: 0.3, giaoThau: 0.3, daThuChi: 0.2, note: '' },
        { code: '01.59', name: 'Quy hoạch tổng mặt bằng 1/500', level: 2, type: 'chi', khDau: 0.5, khHT: 0.5, giaoThau: 0.4, daThuChi: 0.3, note: '' },
        { code: '01.69', name: 'Cấp giấy phép xây dựng', level: 2, type: 'chi', khDau: 0.4, khHT: 0.4, giaoThau: 0.4, daThuChi: 0.3, note: '' },
        { code: '01.77', name: 'Cấp GCNSHN&QSDĐ cho khách hàng', level: 2, type: 'chi', khDau: 1.3, khHT: 1.3, giaoThau: 1.2, daThuChi: 0.8, note: '' },
        // 02
        { code: '02', name: 'Chi kiến thiết cơ bản', level: 1, type: 'chi', khDau: 18.5, khHT: 17.5, giaoThau: 17.0, daThuChi: 15.0, note: '' },
        { code: '02.51', name: 'Thiết kế ý tưởng', level: 2, type: 'chi', khDau: 3.0, khHT: 2.8, giaoThau: 2.8, daThuChi: 2.5, note: '' },
        { code: '02.53', name: 'Thiết kế triển khai', level: 2, type: 'chi', khDau: 5.5, khHT: 5.2, giaoThau: 5.0, daThuChi: 4.5, note: '' },
        { code: '02.55', name: 'Lập khái toán - dự toán', level: 2, type: 'chi', khDau: 4.0, khHT: 4.0, giaoThau: 3.8, daThuChi: 3.5, note: '' },
        { code: '02.56', name: 'Chi phí tư vấn', level: 2, type: 'chi', khDau: 3.5, khHT: 3.2, giaoThau: 3.2, daThuChi: 2.8, note: '' },
        { code: '02.57', name: 'Chi phí kiến thiết cơ bản khác', level: 2, type: 'chi', khDau: 2.5, khHT: 2.3, giaoThau: 2.2, daThuChi: 1.7, note: '' },
        // 03
        { code: '03', name: 'Chi cho dịch vụ kinh doanh BĐS', level: 1, type: 'chi', khDau: 12.0, khHT: 11.5, giaoThau: 11.0, daThuChi: 10.5, note: '' },
        { code: '03.51', name: 'ADKIT - Tiếp thị, Marketing', level: 2, type: 'chi', khDau: 3.0, khHT: 2.8, giaoThau: 2.5, daThuChi: 2.5, note: '' },
        { code: '03.52', name: 'Site décor', level: 2, type: 'chi', khDau: 1.5, khHT: 1.5, giaoThau: 1.5, daThuChi: 1.5, note: '' },
        { code: '03.60', name: 'Chi cho thi công nhà mẫu', level: 2, type: 'chi', khDau: 4.0, khHT: 3.8, giaoThau: 3.5, daThuChi: 3.2, note: '' },
        { code: '03.61', name: 'Chi cho hoạt động bán hàng', level: 2, type: 'chi', khDau: 2.5, khHT: 2.5, giaoThau: 2.5, daThuChi: 2.3, note: '' },
        { code: '03.62', name: 'Chi phí bán hàng khác', level: 2, type: 'chi', khDau: 1.0, khHT: 0.9, giaoThau: 1.0, daThuChi: 1.0, note: '' },
        // 04 — có tiêu đề nhóm con
        { code: '04', name: 'Công tác chuẩn bị', level: 1, type: 'chi', khDau: 8.2, khHT: 8.0, giaoThau: 7.5, daThuChi: 7.8, note: 'Vượt KH' },
        { code: '04.00', name: 'Chi phí bảo lãnh, bảo hiểm', level: 2, type: 'chi', khDau: 1.2, khHT: 1.2, giaoThau: 1.1, daThuChi: 1.1, note: '' },
        { code: '', name: 'Chi phí bảo lãnh', level: 3, type: 'subheader' },
        { code: '04.00.51', name: 'Bảo lãnh dự thầu', level: 3, type: 'chi', khDau: 0.1, khHT: 0.1, giaoThau: 0.1, daThuChi: 0.1, note: '' },
        { code: '04.00.52', name: 'Bảo lãnh tạm ứng', level: 3, type: 'chi', khDau: 0.15, khHT: 0.15, giaoThau: 0.15, daThuChi: 0.15, note: '' },
        { code: '04.00.53', name: 'Bảo lãnh thực hiện hợp đồng', level: 3, type: 'chi', khDau: 0.2, khHT: 0.2, giaoThau: 0.2, daThuChi: 0.2, note: '' },
        { code: '04.00.54', name: 'Bảo lãnh bảo hành', level: 3, type: 'chi', khDau: 0.15, khHT: 0.15, giaoThau: 0.15, daThuChi: 0.15, note: '' },
        { code: '', name: 'Chi phí bảo hiểm', level: 3, type: 'subheader' },
        { code: '04.00.61', name: 'Bảo hiểm công trình và bên thứ ba', level: 3, type: 'chi', khDau: 0.3, khHT: 0.3, giaoThau: 0.25, daThuChi: 0.25, note: '' },
        { code: '04.00.62', name: 'Bảo hiểm công nhân', level: 3, type: 'chi', khDau: 0.15, khHT: 0.15, giaoThau: 0.12, daThuChi: 0.12, note: '' },
        { code: '04.00.63', name: 'Bảo hiểm máy móc thiết bị', level: 3, type: 'chi', khDau: 0.1, khHT: 0.1, giaoThau: 0.08, daThuChi: 0.08, note: '' },
        { code: '04.00.99', name: 'Các bảo hiểm khác', level: 3, type: 'chi', khDau: 0.05, khHT: 0.05, giaoThau: 0.05, daThuChi: 0.05, note: '' },
        { code: '04.10', name: 'Chi phí tiện ích phục vụ thi công', level: 2, type: 'chi', khDau: 1.5, khHT: 1.5, giaoThau: 1.4, daThuChi: 1.5, note: '' },
        { code: '04.10.51', name: 'Gói thầu hàng rào tạm, cổng tạm', level: 3, type: 'chi', khDau: 0.3, khHT: 0.3, giaoThau: 0.28, daThuChi: 0.3, note: '' },
        { code: '04.10.52', name: 'Gói thầu văn phòng BCH', level: 3, type: 'chi', khDau: 0.4, khHT: 0.4, giaoThau: 0.38, daThuChi: 0.4, note: '' },
        { code: '04.10.53', name: 'Gói thầu cầu rửa xe, đường tạm', level: 3, type: 'chi', khDau: 0.35, khHT: 0.35, giaoThau: 0.32, daThuChi: 0.35, note: '' },
        { code: '04.10.99', name: 'Tiện ích phục vụ thi công khác', level: 3, type: 'chi', khDau: 0.45, khHT: 0.45, giaoThau: 0.42, daThuChi: 0.45, note: '' },
        { code: '04.20', name: 'An toàn lao động & VSMT & PCCC', level: 2, type: 'chi', khDau: 2.0, khHT: 2.0, giaoThau: 1.8, daThuChi: 2.0, note: '' },
        { code: '', name: 'An toàn lao động (bao gồm cơ khí tạm ATLĐ)', level: 3, type: 'subheader' },
        { code: '04.20.51', name: 'Hộp cứu thương, phòng y tế', level: 3, type: 'chi', khDau: 0.1, khHT: 0.1, giaoThau: 0.1, daThuChi: 0.1, note: '' },
        { code: '04.20.55', name: 'Bảo hộ lao động', level: 3, type: 'chi', khDau: 0.3, khHT: 0.3, giaoThau: 0.28, daThuChi: 0.3, note: '' },
        { code: '', name: 'Vệ sinh môi trường', level: 3, type: 'subheader' },
        { code: '04.20.61', name: 'Vận chuyển rác thải', level: 3, type: 'chi', khDau: 0.4, khHT: 0.4, giaoThau: 0.35, daThuChi: 0.4, note: '' },
        { code: '', name: 'Phòng cháy chữa cháy tạm phục vụ thi công', level: 3, type: 'subheader' },
        { code: '04.20.71', name: 'Bố trí bình chữa cháy, tiêu lệnh', level: 3, type: 'chi', khDau: 0.15, khHT: 0.15, giaoThau: 0.12, daThuChi: 0.15, note: '' },
        { code: '04.20.99', name: 'ATLĐ & VSMT & PCCC khác', level: 3, type: 'chi', khDau: 1.05, khHT: 1.05, giaoThau: 0.95, daThuChi: 1.05, note: '' },
        { code: '04.30', name: 'An ninh cho công trường', level: 2, type: 'chi', khDau: 1.0, khHT: 1.0, giaoThau: 0.9, daThuChi: 1.0, note: '' },
        { code: '', name: 'Bảo vệ', level: 3, type: 'subheader' },
        { code: '04.30.51', name: 'Bố trí nhân viên bảo vệ 24/24', level: 3, type: 'chi', khDau: 0.6, khHT: 0.6, giaoThau: 0.55, daThuChi: 0.6, note: '' },
        { code: '', name: 'Thiết lập hệ thống kiểm soát, giám sát ra vào', level: 3, type: 'subheader' },
        { code: '04.30.61', name: 'Thiết lập hệ thống camera', level: 3, type: 'chi', khDau: 0.25, khHT: 0.25, giaoThau: 0.22, daThuChi: 0.25, note: '' },
        { code: '04.30.99', name: 'Hạng mục an ninh công trường khác', level: 3, type: 'chi', khDau: 0.15, khHT: 0.15, giaoThau: 0.13, daThuChi: 0.15, note: '' },
        { code: '04.40', name: 'Trắc đạc công trình', level: 2, type: 'chi', khDau: 0.5, khHT: 0.5, giaoThau: 0.45, daThuChi: 0.5, note: '' },
        { code: '04.50', name: 'Chi phí thiết kế, thẩm tra BPTC, thí nghiệm', level: 2, type: 'chi', khDau: 0.8, khHT: 0.7, giaoThau: 0.65, daThuChi: 0.6, note: '' },
        { code: '04.70', name: 'Hệ thống điện, nước tạm phục vụ thi công', level: 2, type: 'chi', khDau: 0.8, khHT: 0.8, giaoThau: 0.75, daThuChi: 0.8, note: '' },
        { code: '04.80', name: 'Chi phí xin phép thi công tạm', level: 2, type: 'chi', khDau: 0.2, khHT: 0.2, giaoThau: 0.2, daThuChi: 0.2, note: '' },
        { code: '04.99', name: 'Chi phí khác (công nhật…)', level: 2, type: 'chi', khDau: 0.2, khHT: 0.1, giaoThau: 0.15, daThuChi: 0.1, note: '' },
        // 05
        { code: '05', name: 'Công tác thiết bị', level: 1, type: 'chi', khDau: 15.0, khHT: 14.5, giaoThau: 14.0, daThuChi: 12.5, note: '' },
        { code: '05.40', name: 'Thiết bị phục vụ thi công', level: 2, type: 'chi', khDau: 15.0, khHT: 14.5, giaoThau: 14.0, daThuChi: 12.5, note: '' },
        // 06
        { code: '06', name: 'Chi cho thầu phụ / tổ đội', level: 1, type: 'chi', khDau: 32.0, khHT: 30.5, giaoThau: 28.0, daThuChi: 28.0, note: '' },
        { code: '06.10', name: 'Gói thầu cọc', level: 2, type: 'chi', khDau: 5.0, khHT: 4.8, giaoThau: 4.5, daThuChi: 4.5, note: '' },
        { code: '06.10.51', name: 'Gói thầu cọc BTCT', level: 3, type: 'chi', khDau: 2.0, khHT: 1.8, giaoThau: 1.8, daThuChi: 1.8, note: '' },
        { code: '06.10.52', name: 'Gói thầu cọc khoan nhồi', level: 3, type: 'chi', khDau: 2.5, khHT: 2.5, giaoThau: 2.2, daThuChi: 2.2, note: '' },
        { code: '06.10.99', name: 'Gói thầu cọc khác', level: 3, type: 'chi', khDau: 0.5, khHT: 0.5, giaoThau: 0.5, daThuChi: 0.5, note: '' },
        { code: '06.20', name: 'Gói thầu Biện pháp thi công', level: 2, type: 'chi', khDau: 3.5, khHT: 3.2, giaoThau: 3.0, daThuChi: 3.0, note: '' },
        { code: '06.30', name: 'Gói thầu kết cấu', level: 2, type: 'chi', khDau: 12.0, khHT: 11.5, giaoThau: 10.5, daThuChi: 10.5, note: '' },
        { code: '06.30.51', name: 'Gói thầu tường Barrette', level: 3, type: 'chi', khDau: 4.0, khHT: 3.8, giaoThau: 3.5, daThuChi: 3.5, note: '' },
        { code: '06.30.52', name: 'Gói thầu công tác đất', level: 3, type: 'chi', khDau: 2.0, khHT: 2.0, giaoThau: 1.8, daThuChi: 1.8, note: '' },
        { code: '06.30.53', name: 'Gói thầu BTCT', level: 3, type: 'chi', khDau: 3.0, khHT: 2.8, giaoThau: 2.5, daThuChi: 2.5, note: '' },
        { code: '06.30.55', name: 'Gói thầu chống thấm kết cấu', level: 3, type: 'chi', khDau: 1.5, khHT: 1.5, giaoThau: 1.5, daThuChi: 1.5, note: '' },
        { code: '06.30.99', name: 'Gói thầu kết cấu khác', level: 3, type: 'chi', khDau: 1.5, khHT: 1.4, giaoThau: 1.2, daThuChi: 1.2, note: '' },
        { code: '06.40', name: 'Gói thầu hoàn thiện', level: 2, type: 'chi', khDau: 5.0, khHT: 4.8, giaoThau: 4.5, daThuChi: 4.5, note: '' },
        { code: '06.40.51', name: 'Gói thầu Hồ', level: 3, type: 'chi', khDau: 1.0, khHT: 1.0, giaoThau: 0.9, daThuChi: 0.9, note: '' },
        { code: '06.40.53', name: 'Gói thầu Vách, trần', level: 3, type: 'chi', khDau: 1.2, khHT: 1.2, giaoThau: 1.1, daThuChi: 1.1, note: '' },
        { code: '06.40.58', name: 'Gói thầu Nhôm kính', level: 3, type: 'chi', khDau: 1.5, khHT: 1.3, giaoThau: 1.3, daThuChi: 1.3, note: '' },
        { code: '06.40.99', name: 'Gói thầu hoàn thiện khác', level: 3, type: 'chi', khDau: 1.3, khHT: 1.3, giaoThau: 1.2, daThuChi: 1.2, note: '' },
        { code: '06.50', name: 'Kết cấu thép', level: 2, type: 'chi', khDau: 2.0, khHT: 2.0, giaoThau: 1.8, daThuChi: 1.8, note: '' },
        { code: '06.60', name: 'Gói thầu MEP', level: 2, type: 'chi', khDau: 3.0, khHT: 2.8, giaoThau: 2.5, daThuChi: 2.5, note: '' },
        { code: '06.60.51', name: 'Hệ thống điện', level: 3, type: 'chi', khDau: 0.8, khHT: 0.7, giaoThau: 0.65, daThuChi: 0.65, note: '' },
        { code: '06.60.52', name: 'Hệ thống cấp thoát nước', level: 3, type: 'chi', khDau: 0.6, khHT: 0.6, giaoThau: 0.55, daThuChi: 0.55, note: '' },
        { code: '06.60.53', name: 'Hệ thống ĐHKK', level: 3, type: 'chi', khDau: 0.5, khHT: 0.5, giaoThau: 0.45, daThuChi: 0.45, note: '' },
        { code: '06.60.54', name: 'Hệ thống PCCC', level: 3, type: 'chi', khDau: 0.4, khHT: 0.4, giaoThau: 0.35, daThuChi: 0.35, note: '' },
        { code: '06.60.99', name: 'Hệ thống MEP khác', level: 3, type: 'chi', khDau: 0.7, khHT: 0.6, giaoThau: 0.5, daThuChi: 0.5, note: '' },
        { code: '06.70', name: 'Gói thầu trung hạ thế, máy biến thế', level: 2, type: 'chi', khDau: 1.0, khHT: 1.0, giaoThau: 0.8, daThuChi: 0.8, note: '' },
        { code: '06.80', name: 'Gói thầu Hạ Tầng - Cảnh quan', level: 2, type: 'chi', khDau: 0.5, khHT: 0.4, giaoThau: 0.4, daThuChi: 0.4, note: '' },
        // 07
        { code: '07', name: 'Chi vật tư', level: 1, type: 'chi', khDau: 20.0, khHT: 19.0, giaoThau: 18.0, daThuChi: 16.5, note: '' },
        { code: '07.10', name: 'Vật tư cọc', level: 2, type: 'chi', khDau: 3.5, khHT: 3.3, giaoThau: 3.0, daThuChi: 2.8, note: '' },
        { code: '07.20', name: 'Vật tư hệ shoring, sàn đạo, Kingpost', level: 2, type: 'chi', khDau: 1.5, khHT: 1.5, giaoThau: 1.4, daThuChi: 1.3, note: '' },
        { code: '07.30', name: 'Vật tư kết cấu', level: 2, type: 'chi', khDau: 5.0, khHT: 4.8, giaoThau: 4.5, daThuChi: 4.2, note: '' },
        { code: '07.40', name: 'Vật tư hoàn thiện', level: 2, type: 'chi', khDau: 4.5, khHT: 4.2, giaoThau: 4.0, daThuChi: 3.5, note: '' },
        { code: '07.50', name: 'Kết cấu thép', level: 2, type: 'chi', khDau: 1.5, khHT: 1.5, giaoThau: 1.4, daThuChi: 1.2, note: '' },
        { code: '07.60', name: 'Vật tư MEP', level: 2, type: 'chi', khDau: 2.0, khHT: 1.8, giaoThau: 1.8, daThuChi: 1.5, note: '' },
        { code: '07.70', name: 'Vật tư trung hạ thế, máy biến thế', level: 2, type: 'chi', khDau: 1.0, khHT: 1.0, giaoThau: 1.0, daThuChi: 1.0, note: '' },
        { code: '07.80', name: 'Vật tư máy phát điện', level: 2, type: 'chi', khDau: 0.5, khHT: 0.5, giaoThau: 0.5, daThuChi: 0.5, note: '' },
        { code: '07.90', name: 'Vật tư khác (XD và MEP)', level: 2, type: 'chi', khDau: 0.5, khHT: 0.4, giaoThau: 0.4, daThuChi: 0.5, note: '' },
        // 08
        { code: '08', name: 'Chi hoạt động trực tiếp', level: 1, type: 'chi', khDau: 10.5, khHT: 10.0, giaoThau: 9.5, daThuChi: 9.2, note: '' },
        { code: '08.10', name: 'Chi phí trực tiếp BCH', level: 2, type: 'chi', khDau: 5.5, khHT: 5.2, giaoThau: 5.0, daThuChi: 4.8, note: '' },
        { code: '08.10.51', name: 'Lương trực tiếp BCH', level: 3, type: 'chi', khDau: 3.0, khHT: 2.8, giaoThau: 2.8, daThuChi: 2.6, note: '' },
        { code: '08.10.54', name: 'BHXH / Y tế / BH thất nghiệp BCH', level: 3, type: 'chi', khDau: 1.0, khHT: 1.0, giaoThau: 0.9, daThuChi: 0.9, note: '' },
        { code: '08.10.56', name: 'Chi phí thuê ngoài / Outsource', level: 3, type: 'chi', khDau: 1.5, khHT: 1.4, giaoThau: 1.3, daThuChi: 1.3, note: '' },
        { code: '08.20', name: 'Chi phí hành chính tại công trình', level: 2, type: 'chi', khDau: 3.5, khHT: 3.3, giaoThau: 3.0, daThuChi: 3.0, note: '' },
        { code: '08.20.55', name: 'Thuê nhà, điện, nước cho BCH', level: 3, type: 'chi', khDau: 1.2, khHT: 1.2, giaoThau: 1.1, daThuChi: 1.1, note: '' },
        { code: '08.20.57', name: 'Chi phí công nhân trực tiếp', level: 3, type: 'chi', khDau: 1.5, khHT: 1.3, giaoThau: 1.2, daThuChi: 1.2, note: '' },
        { code: '08.30', name: 'Chi phí trực tiếp khác', level: 2, type: 'chi', khDau: 1.5, khHT: 1.5, giaoThau: 1.5, daThuChi: 1.4, note: '' },
        // 09
        { code: '09', name: 'Chi phí gián tiếp', level: 1, type: 'chi', khDau: 5.5, khHT: 5.2, giaoThau: 4.8, daThuChi: 4.8, note: '' },
        { code: '09.10.51', name: 'Chi phí gián tiếp', level: 2, type: 'chi', khDau: 5.5, khHT: 5.2, giaoThau: 4.8, daThuChi: 4.8, note: '' },
        // 10
        { code: '10', name: 'Chi hoạt động tài chính', level: 1, type: 'chi', khDau: 3.0, khHT: 2.8, giaoThau: 2.5, daThuChi: 2.5, note: '' },
        { code: '10.10.51', name: 'Chi trả nợ gốc vay Bank', level: 2, type: 'chi', khDau: 1.5, khHT: 1.4, giaoThau: 1.2, daThuChi: 1.2, note: '' },
        { code: '10.10.52', name: 'Chi trả tiền mượn', level: 2, type: 'chi', khDau: 0.5, khHT: 0.5, giaoThau: 0.5, daThuChi: 0.5, note: '' },
        { code: '10.10.53', name: 'Chi trả lãi vay Bank', level: 2, type: 'chi', khDau: 1.0, khHT: 0.9, giaoThau: 0.8, daThuChi: 0.8, note: '' },
        // 11
        { code: '11', name: 'Chi khác', level: 1, type: 'chi', khDau: 2.0, khHT: 1.8, giaoThau: 1.5, daThuChi: 1.8, note: '' },
        { code: '11.10.51', name: 'Chi hoàn trả tiền tạm ứng cho CĐT', level: 2, type: 'chi', khDau: 1.2, khHT: 1.0, giaoThau: 0.8, daThuChi: 1.0, note: '' },
        { code: '11.10.52', name: 'Chi khác XD', level: 2, type: 'chi', khDau: 0.8, khHT: 0.8, giaoThau: 0.7, daThuChi: 0.8, note: '' },
        // 12
        { code: '12', name: 'Dự phòng phí', level: 1, type: 'chi', khDau: 4.0, khHT: 3.5, giaoThau: 0, daThuChi: 0, note: 'Chưa sử dụng' },
        { code: '12.10.51', name: 'Dự phòng phí', level: 2, type: 'chi', khDau: 4.0, khHT: 3.5, giaoThau: 0, daThuChi: 0, note: '' },
        // ─── TỔNG HỢP ───
        { code: '', name: 'Lợi nhuận gộp dự án = Thu − Chi (01→08)', level: 0, type: 'summary', khDau: 45.3, khHT: 44.0, giaoThau: 45.0, daThuChi: 42.0, note: '' },
        { code: '', name: 'Tỷ suất lợi nhuận gộp (%)', level: 0, type: 'pct', khDau: 25.4, khHT: 25.6, giaoThau: 27.3, daThuChi: 27.6, note: '' },
        { code: '', name: 'Chi phí quản lý (CP gián tiếp + Lãi vay)', level: 0, type: 'summary', khDau: 8.5, khHT: 8.0, giaoThau: 7.3, daThuChi: 7.3, note: '' },
        { code: '', name: 'Dự phòng phí', level: 0, type: 'summary', khDau: 4.0, khHT: 3.5, giaoThau: 0, daThuChi: 0, note: '' },
        { code: '', name: 'Thuế TNDN (20%)', level: 0, type: 'summary', khDau: 6.56, khHT: 6.50, giaoThau: 7.54, daThuChi: 6.94, note: '' },
        { code: '', name: 'LỢI NHUẬN SAU THUẾ', level: 0, type: 'profit', khDau: 26.24, khHT: 26.0, giaoThau: 30.16, daThuChi: 27.76, note: '' },
        { code: '', name: 'Tỷ suất lợi nhuận sau thuế (%)', level: 0, type: 'pct', khDau: 14.7, khHT: 15.1, giaoThau: 18.3, daThuChi: 18.3, note: '' }
    ];

    const thStyle = 'padding:8px 6px;font-size:11px;font-weight:600;white-space:nowrap;border-bottom:2px solid #CBD5E1;';
    let html = '<table style="font-size:11px;border-collapse:collapse;width:100%;min-width:1000px;">';
    html += '<thead><tr>';
    html += `<th style="${thStyle}text-align:left;background:#F1F5F9;min-width:60px;">(1) Mã NS</th>`;
    html += `<th style="${thStyle}text-align:left;background:#F1F5F9;min-width:220px;">(2) Nội dung</th>`;
    html += `<th style="${thStyle}text-align:right;background:#EFF6FF;color:#2563EB;">(3) KH Đầu DA</th>`;
    html += `<th style="${thStyle}text-align:right;background:#EFF6FF;color:#2563EB;">(4) KH Hiện tại</th>`;
    html += `<th style="${thStyle}text-align:right;background:#F0FDF4;color:#16A34A;">(5) GT giao thầu</th>`;
    html += `<th style="${thStyle}text-align:right;background:#FFFBEB;color:#D97706;">(6) Đã thu/chi</th>`;
    html += `<th style="${thStyle}text-align:right;background:#FEF2F2;color:#DC2626;">(7) GT còn lại</th>`;
    html += `<th style="${thStyle}text-align:left;background:#F1F5F9;min-width:100px;">(8) Ghi chú</th>`;
    html += '</tr></thead><tbody>';

    rows.forEach(row => {
        const indent = row.level * 14;
        const td = 'padding:7px 6px;border-bottom:1px solid #E2E8F0;white-space:nowrap;font-size:11px;';

        // ─── Sub-header rows: no code, italic, grey background, no data ───
        if (row.type === 'subheader') {
            html += `<tr style="background:#F1F5F9;">`;
            html += `<td style="${td}color:#94A3B8;"></td>`;
            html += `<td style="${td}text-align:left;padding-left:${8 + indent}px;font-style:italic;font-weight:600;color:#475569;" colspan="7">${row.name}</td>`;
            html += '</tr>';
            return;
        }

        const conLai = +(row.giaoThau - row.daThuChi).toFixed(2);

        let bg = '', textColor = '#64748B', bold = '';
        if (row.type === 'sl') { bg = 'background:rgba(37,99,235,0.06);'; textColor = '#2563EB'; bold = 'font-weight:700;'; }
        else if (row.type === 'thu' && row.level <= 1) { textColor = '#16A34A'; bold = 'font-weight:600;'; if (row.level === 0) bg = 'background:rgba(22,163,74,0.08);'; }
        else if (row.type === 'thu') { textColor = '#16A34A'; }
        else if (row.type === 'chi' && row.level <= 1) { textColor = '#DC2626'; bold = 'font-weight:600;'; if (row.level === 0) bg = 'background:rgba(220,38,38,0.06);'; }
        else if (row.type === 'chi') { textColor = '#DC2626'; }
        else if (row.type === 'summary') { bg = 'background:#F8FAFC;'; bold = 'font-weight:600;'; textColor = '#0F172A'; }
        else if (row.type === 'pct') { bg = 'background:#FFFBEB;'; bold = 'font-weight:600;'; textColor = '#D97706'; }
        else if (row.type === 'profit') { bg = 'background:linear-gradient(135deg,#DCFCE7,#F0FDF4);'; bold = 'font-weight:700;'; textColor = '#16A34A'; }

        const fmt = (v, isPct) => {
            if (v === 0 && (row.code === '12' || row.code === '12.10.51')) return '—';
            if (isPct) return v.toFixed(1) + '%';
            return v.toFixed(2);
        };
        const isPct = row.type === 'pct';

        let toggleIcon = '<span style="display:inline-block;width:12px;"></span>';
        let cursor = '';
        let click = '';
        
        // Only look at items with codes to handle toggle
        if (row.code) {
            let nextIndex = rows.indexOf(row) + 1;
            // Skip subheaders when checking children
            while (rows[nextIndex] && rows[nextIndex].type === 'subheader') nextIndex++;
            const nextItem = rows[nextIndex];
            
            const hasChildren = nextItem && nextItem.level > row.level && nextItem.code;
            if (hasChildren) {
                toggleIcon = '<span class="toggle-icon" style="display:inline-block;width:12px;color:#64748B;font-size:10px;cursor:pointer;">▼</span>';
                cursor = 'cursor:pointer;';
                click = 'onclick="toggleMatrixRow(this)"';
            }
        }

        html += `<tr style="${bg}${cursor}" data-level="${row.level}" data-expanded="true" ${click}>`;
        html += `<td style="${td}text-align:left;${bold}color:${textColor};">${row.code}</td>`;
        html += `<td style="${td}text-align:left;padding-left:${8 + indent}px;${bold}color:${textColor};">${toggleIcon}${row.name}</td>`;
        html += `<td style="${td}text-align:right;">${fmt(row.khDau, isPct)}</td>`;
        html += `<td style="${td}text-align:right;">${fmt(row.khHT, isPct)}</td>`;
        html += `<td style="${td}text-align:right;">${row.giaoThau > 0 || row.type === 'pct' ? fmt(row.giaoThau, isPct) : '—'}</td>`;
        html += `<td style="${td}text-align:right;">${row.daThuChi > 0 || row.type === 'pct' ? fmt(row.daThuChi, isPct) : '—'}</td>`;
        html += `<td style="${td}text-align:right;color:${conLai > 0.01 ? '#16A34A' : conLai < -0.01 ? '#DC2626' : '#CBD5E1'};font-weight:600;">${row.giaoThau > 0 ? conLai.toFixed(2) : '—'}</td>`;
        html += `<td style="${td}text-align:left;color:#94A3B8;font-size:10px;">${row.note}</td>`;
        html += '</tr>';
    });

    html += '</tbody></table>';
    document.getElementById('budgetDetailTableNew').innerHTML = html;
}

function updateBudgetPageNew() {
    renderBudgetNewKPIs();
    renderBudgetDetailTableNew();
}

// ============================================================
// Resize handler
// ============================================================
window.addEventListener('resize', () => Object.values(charts).forEach(c => c && c.resize()));

// ============================================================
// Init — Updated for 5 pages
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initPage2();       // page1 = Hiệu Quả Dự Án (giữ nguyên)
    initPage3();       // page2 = Duyệt Chi
    initPage3Detail(); // page3 = Quản Lý Thu-Chi DA
    initPage4();       // page4 = Quản Lý Hợp Đồng
    initPage5();       // page5 = Quản Lý Ngân Sách
});
