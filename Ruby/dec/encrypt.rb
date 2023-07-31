require 'openssl'
require 'base64'
require 'json'
require 'date'
tomorrow = Date.today + 1
data = {
  xing_email: "email@exame.com",
  xing_user_id: "123",
  recruiter_account_id: "456",
  subdomain: 'subdomain',
  language: "en",
  client_id: '123456',
  expires_at: tomorrow.to_time.to_i
};

cipher = OpenSSL::Cipher.new('aes-256-cbc')
cipher.encrypt

cipher.iv = 'aaaaaaaaaaaaaaaa';


cipher.key = '01234567890123456789012345678901'

encrypted_text = cipher.update(data.to_json) + cipher.final

pp Base64.urlsafe_encode64(encrypted_text)

