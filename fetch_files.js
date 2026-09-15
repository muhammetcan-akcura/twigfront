const fs = require('fs');
const path = require('path');

const targetDir = "c:\\Users\\Monster\\Desktop\\smmexclsivetwig";
const htmlFiles = ["layout.twig", "signin.twig", "signup.twig", "neworder.twig", "massorder.twig", "drip_feed.twig", "services.twig", "orders.twig", "subscriptions.twig", "addfunds.twig", "refunds.twig", "tickets.twig", "viewticket.twig", "resetpassword.twig", "2fa.twig", "setnewpassword.twig", "faq.twig", "api.twig", "terms.twig", "affiliates.twig", "account.twig", "refill.twig", "updates.twig", "blog.twig", "blogpost.twig", "newpage.twig", "child_panel.twig", "child_panel_order.twig", "confirmemail.twig", "notifications.twig", "createinvoice.twig", "extra.twig", "whatsapp.twig", "recommendedservices.twig", "embed-tools.twig", "yt-chanels.twig", "contact.twig", "general-use-policy.twig", "reasons-for-using-the-smm-panel.twig", "howitworks.twig", "accountbenefits.twig"];
const cssFiles = ["bootstrap.css", "style.css"];
const jsFiles = ["bootstrap.js", "script.js"];

const allFiles = [
    ...htmlFiles.map(f => ({ name: f, dir: 'html' })),
    ...cssFiles.map(f => ({ name: f, dir: 'css' })),
    ...jsFiles.map(f => ({ name: f, dir: 'js' }))
];

const { execSync } = require('child_process');

async function fetchFiles() {
    for (const file of allFiles) {
        const url = `https://smmexclusive.com/admin/api/appearance/themes/29/files/view/${file.name}`;
        const referer = `https://smmexclusive.com/admin/appearance/file-edit?name=${file.name}&theme_id=29`;
        console.log(`Fetching ${file.name} using curl.exe...`);
        
        const curlCmd = `curl.exe -s --url "${url}" ` +
            `-H "Accept: application/json, text/plain, */*" ` +
            `-H "Accept-Language: en-US,en;q=0.9,tr;q=0.8" ` +
            `-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyaWQiOjIwNDQyNjM5LCJzdSI6ZmFsc2UsInR5cCI6NCwicGlkIjo3ODk1LCJhaWQiOjM2NjU0LCJvdHAiOnRydWUsImlhdCI6MTc4OTQ4NDI2NiwibmJmIjoxNzg5NDg0MjY2LCJleHAiOjE3ODk0ODQzODZ9.xDwezP2QMpuyqQze_OyCt0k5fgScP5QuRh7gW5-eZXg" ` +
            `-H "Connection: keep-alive" ` +
            `-b "edebbbebca8250315f3cc74b4465fb452dc92f0117091249cd6f309819b4c68f=1771a892e3390f864b7e47967898fcd76017f593878ca4a7356094d067249ba0a%3A2%3A%7Bi%3A0%3Bs%3A64%3A%22edebbbebca8250315f3cc74b4465fb452dc92f0117091249cd6f309819b4c68f%22%3Bi%3A1%3Bs%3A64%3A%2237b5093429b429dbf6b4743ad83c2318eb4fcecbc757d8e9cd3bded14fb8c7b3%22%3B%7D; 369ea9b19d28a118a05449e6c92343322ff36dcca19d7be956ed44fb767f1b53=91def3bf98dd9f1564c001c7aa1911db06c2221f171edf4cd625c109190305e0a%3A2%3A%7Bi%3A0%3Bs%3A64%3A%22369ea9b19d28a118a05449e6c92343322ff36dcca19d7be956ed44fb767f1b53%22%3Bi%3A1%3Bs%3A64%3A%22dfce37886678c8364bdaf56b81b79c57b97c3aef815b9fc9049aaa2fdb60cb32%22%3B%7D; 81c33a46050120f83c8f1623b6f7c611a312bbeced1488f0ffdcfdba18da4fc2=05f5d6eed17b316789c479c9ce9aa9495c369b0e38855408d8751a5aed171960a%3A2%3A%7Bi%3A0%3Bs%3A64%3A%2281c33a46050120f83c8f1623b6f7c611a312bbeced1488f0ffdcfdba18da4fc2%22%3Bi%3A1%3Bs%3A64%3A%228a82b452f86e53c6f85193475efea771a2c8f2d99c1800f42dd4fdc14e51e1be%22%3B%7D; 1bdc2844dd32aac531b8c0f06cdb6474151abee4623abab72fc9a19a4d6940f1=7c2dc2dc879015c5bb56c49318c03eec0e2e98bbc1c9b032aadf451189984e8aa%3A2%3A%7Bi%3A0%3Bs%3A64%3A%221bdc2844dd32aac531b8c0f06cdb6474151abee4623abab72fc9a19a4d6940f1%22%3Bi%3A1%3Bs%3A64%3A%2271e12574dd876b160e1dd640ea466c5da481499a37ccabdc664f39c8e94a9695%22%3B%7D; usrtrcng=0b654947487350fe34a5c373b86fe75c10899117b341c72716e2cbdbfdfdd706a%3A2%3A%7Bi%3A0%3Bs%3A8%3A%22usrtrcng%22%3Bi%3A1%3Bs%3A115%3A%22%7B%22first_visit_at%22%3A1762413622%2C%22first_visit_referer%22%3A%22https%3A%5C%2F%5C%2Fsmmexclusive.com%5C%2F%22%2C%22first_visit_ip%22%3A%2291.93.235.120%22%7D%22%3B%7D; _usid=9e2500fe49d5633ec4a09eec5731a831ce18f2cf57585b74dcf179c4b766a14da%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_usid%22%3Bi%3A1%3Bs%3A47%3A%227a872ad2-8343-4649-b785-d72fbef97bf4%7C1777383612%22%3B%7D; _ppref=aa6d1e5d36f1c78d0082d62151cd28a8addd5969fd05c425227be7cccade3b4ca%3A2%3A%7Bi%3A0%3Bs%3A6%3A%22_ppref%22%3Bi%3A1%3Bs%3A138%3A%22%7B%22first_visit_at%22%3A1762413622%2C%22first_visit_referer%22%3A%22https%3A%5C%2F%5C%2Fsmmexclusive.com%5C%2F%22%2C%22first_visit_ip%22%3A%2291.93.235.120%22%2C%22expire_at%22%3A1810023109%7D%22%3B%7D; lang=b47b6d7a599c611952dad0394a4289ecbc8d08b73172671bb684786c30ef9556a%3A2%3A%7Bi%3A0%3Bs%3A4%3A%22lang%22%3Bi%3A1%3Bs%3A2%3A%22en%22%3B%7D; hash=047e1c9a6b6aa3e663f795a0fb515f555da0a80379e20670bef7a5edf539e942a%3A2%3A%7Bi%3A0%3Bs%3A4%3A%22hash%22%3Bi%3A1%3Bs%3A64%3A%224779f153bc4b6fac77e16069e038841177a67f4b57be661b950c15a77e8cbc16%22%3B%7D; _csrf=6aa6984ca7b10d408da0c7b382474871cba52575f83ddd8ed5167657596ba5aba%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22G84zlk93hmF86krG79SBOyN6XRWmeV7v%22%3B%7D; PHPSESSID=2ig68he22773p9u8ib8h5s5vpd; guest_user_first_visit=8e00982bb97dd1fa7d553273b577fea0577ec4ae5c980f4c4d7b23118ab2a04fa%3A2%3A%7Bi%3A0%3Bs%3A22%3A%22guest_user_first_visit%22%3Bi%3A1%3Bs%3A4%3A%22true%22%3B%7D; g_state={\\\"i_l\\\":0,\\\"i_ll\\\":1789483307966,\\\"i_b\\\":\\\"2inJda+h+NS/M/AIWxtZdwLlED+7kVke1U8rW7+TTbE\\\",\\\"i_e\\\":{\\\"enable_itp_optimization\\\":24},\\\"i_et\\\":1789483307966}; refresh_token=e2fe8514aba4686a6f977e779b8f6addc1e13d439f36b66f82f346f5a6ff1392a%3A2%3A%7Bi%3A0%3Bs%3A13%3A%22refresh_token%22%3Bi%3A1%3Bs%3A227%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXAiOjUsInBpZCI6Nzg5NSwiYWlkIjozNjY1NCwib3RwIjp0cnVlLCJpYXQiOjE3ODk0NTY1NDgsIm5iZiI6MTc4OTQ1NjU0OCwiZXhwIjoxNzg5NDg2MDY2LCJ0aWQiOjIwNDQyNjM5fQ.RBGZM1g2ur_k86896uv-7E106R9UpunT7veNmBY1MW4%22%3B%7D; _csrf_admin=7415f3af0275660ffd855498c8fdb50b3493d409052721c089eb437847323ce0a%3A2%3A%7Bi%3A0%3Bs%3A11%3A%22_csrf_admin%22%3Bi%3A1%3Bs%3A32%3A%22P45NHDg7d63utMmYlVsAsZ7TT2lsw_fX%22%3B%7D" ` +
            `-H "Referer: ${referer}" ` +
            `-H "Sec-Fetch-Dest: empty" ` +
            `-H "Sec-Fetch-Mode: cors" ` +
            `-H "Sec-Fetch-Site: same-origin" ` +
            `-H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36" ` +
            `-H "X-Requested-With: XMLHttpRequest" ` +
            `-H "sec-ch-ua: \\"Google Chrome\\";v=\\"153\\", \\"Not_A Brand\\";v=\\"8\\", \\"Chromium\\";v=\\"153\\"" ` +
            `-H "sec-ch-ua-mobile: ?0" ` +
            `-H "sec-ch-ua-platform: \\"Windows\\""`;

        try {
            const out = execSync(curlCmd, { encoding: 'utf-8', stdio: 'pipe' });
            const data = JSON.parse(out);
            if (data && data.file && data.file.content !== undefined) {
                const filePath = path.join(targetDir, file.dir, file.name);
                fs.writeFileSync(filePath, data.file.content, 'utf8');
                console.log(`Saved ${file.name}`);
            } else {
                console.log(`Failed to extract content for ${file.name}`, data);
            }
        } catch (err) {
            console.error(`Error fetching ${file.name}:`, err.message);
        }
    }
}
fetchFiles();
