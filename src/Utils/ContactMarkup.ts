export const generateContactHtml = (email: string,subject : string , message : string): string => {
    const emailHtml = /*html*/`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Welcome to FeedbackSense!</title>
        <style>
            /* Add your custom styles here */

            body {
                font-family: Arial, sans-serif;
                background-color: #f5f5f5;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            h1 {
                color: #333333;
                text-align: center;
            }

            p {
                color: #666666;
                line-height: 1.5;
                margin-bottom: 20px;
            }

            .btn {
                display: inline-block;
                padding: 5px 25px;
                background-color: #006DFF;
                color: #ffffff;
                text-decoration: none;
                border-radius: 10px;
            }

            .btn:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Contact made to FeedbackSense Website!</h1>
            <p>Email : ${email},</p>
            <p>Subject : ${subject},</p>
            <p>Message : ${message},</p>
        </div>
    </body>
    </html>
    `;

    return emailHtml;
}