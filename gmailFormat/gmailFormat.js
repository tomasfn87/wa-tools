export default function gmailFormat(email) {
    email = email.trim().toLowerCase();
    var REGoogleMail = /^[^@]+@g(oogle)?mail\.com$/;
    if (REGoogleMail.test(email)) {
        var emailParts = email.split('@');
        emailParts[0] = emailParts[0].replace(/\./g, '');
        return emailParts.join('@')
    }
    return email
}
