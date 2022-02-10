const nodemailer = require("nodemailer");

const mailSender = async (email, token) => {

    return new Promise( (res, rej) => {
        try{      

            // Mailtrap SMTP
            let transporter = nodemailer.createTransport({

                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: "8f2ab501c9836a",
                  pass: "6439aed821c6ee"
                }
              });

        // send mail with defined transport object
        transporter.sendMail({
            from: '"Game Over 🎮" <gameoverstore@no-reply.com>', // sender address
            to: email, // list of receivers
            subject: "Confirm your account on Game Over ✔", // Subject line
            text: "hanks for signing up with Game Over! Please verify your email address by clicking the link below.", // plain text body
            html: `<div><p>Thanks for signing up with Game Over!</p>Please verify your email address by clicking the link below <a href="http://localhost:3100/api/activate/${token}">Confirm Account</a><p>Have fun, and don't hesitate to contact us with your feedback.</p><p>The Game Over Team<p/></div><img src="cid:uniq-logo.png" alt="logo" />`, // html body
            attachments: [
                {
                  filename: 'logo.png',
                  path: __dirname + '/logo.png',
                  cid: 'uniq-logo.png'
                }
              ]
        
            }, (error, response) => {
                if( error ){
                    console.log('error', error);
                    rej(error);
                } else {
                    res(true);
                }   
        });
        
        } catch( error ){
            console.log('error2', error);
            throw new Error(error);
        }
    });
}

mailSender().catch(console.error);

module.exports = { mailSender }