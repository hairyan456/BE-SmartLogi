import nodemailer from "nodemailer";
require('dotenv').config();

const getBodyHTMLEmail = (dataSend) => {
    let result = '';

    result = `
<h3>Xin chào ${dataSend.email}!</h3>
<p>Bạn nhận được email này vì đã đặt giao hàng online trên: <a target="_blank " href="http://localhost:3000/">SmartLogi.vn</a></p>
<p>----------Thông tin đơn hàng----------:</p>
<div><b>Mã đơn hàng:</b> ${dataSend.orderId}</div>
<br/>
<div><b>Nơi gửi:</b> ${dataSend.provinceSender}</div>
<div><b>Địa chỉ:</b> ${dataSend.addressSender}</div>
<div><b>Nơi nhận:</b> ${dataSend.provinceReceiver}</div>
<div><b>Địa chỉ:</b> ${dataSend.addressReceiver}</div>
<br/>
<div><b>Khối lượng hàng hóa:</b> ${dataSend.totalWeight + ' kg'}</div>
<div><b>Kích thước:</b> ${dataSend.length} x ${dataSend.width} x ${dataSend.height}</div>
<div><b>Loại hàng hóa:</b> ${dataSend.goodsType} </div>
<br/>
<div><b>Ngày gửi hàng:</b> ${dataSend.selectedDate}</div>
<div><b>Ngày giao dự kiến:</b> ${dataSend.ngayGiaoDuKien}</div>
<div><b>Loại phương tiện:</b> ${dataSend.vehicle}</div>
<div><b>Phương thức vận chuyển:</b> ${dataSend.delivery}</div>
<div><b>Quãng đường:</b> ${dataSend.distance + ' km'} </div>
<br/>
<div><b>Tổng số tiền chi trả:</b> ${dataSend.totalPrice}</div>
<br/>
<p>Chúng tôi sẽ giao đơn hàng của bạn đến địa điểm nhận trong thời gian sớm nhất có thể.</p>
<div>Xin chân thành cảm ơn.</div>
`
    return result;
}

const sendSimpleEmail = async (dataSend) => {
    //create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Smart Logistics" <smartlogibussiness@gmail.com>', // sender address
        to: dataSend.email, // list of receivers
        subject: "Thông báo xác nhận thông tin đơn hàng - SmartLogi", // Subject line
        html: getBodyHTMLEmail(dataSend), // html body
    });
}

module.exports = { sendSimpleEmail }