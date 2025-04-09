import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center justify-center font-quicksand">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-custom-prim p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl mb-6 text-custom-tert font-bold text-center">Privacy Policy</h1>
          <div className="text-custom-quat">
            <h2 className="text-xl mb-4 font-bold">1. Introduction</h2>
            <p className="mb-4">Kai Hartmann ("we", "our", or "us") is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any data you may provide through forms, such as a contact form.</p>
            
            <h2 className="text-xl mb-4 font-bold">2. Data Controller</h2>
            <p className="mb-1">Kai Hartmann</p>
            <p className="mb-1">Kolpingstr. 4</p>
            <p className="mb-1">58332 Schwelm</p>
            <p className="mb-4">E-Mail: contact@kai-hartmann.com</p>
            
            <h2 className="text-xl mb-4 font-bold">3. Data We Collect</h2>
            <p className="mb-2">We may collect and process the following types of data:</p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-1">Personal Identification Information: Name, email address, phone number (only if provided by you via the contact form).</li>
              <li className="mb-1">Technical Data: IP address, browser type and version, time zone setting, operating system, platform, and other technology on the devices you use to access this website.</li>
              <li className="mb-1">Usage Data: Information about how you use our website (pages visited, time spent, etc.).</li>
            </ul>
            <h2 className="text-xl mb-4 font-bold">4. How We Collect Data</h2>
            
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-1">Direct interactions: You may provide your personal data by filling in forms or by corresponding with us via email or phone.</li>
              <li className="mb-1">Automated technologies: As you interact with our website, we may automatically collect technical data using cookies or similar technologies.</li>
            </ul>

            <h2 className="text-xl mb-4 font-bold">5. Use of Data</h2>
            <p className="mb-4">We use your data to:</p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-1">Respond to inquiries submitted via the contact form</li>
              <li className="mb-1">Ensure the proper functioning of the website</li>
              <li className="mb-1">Analyze how visitors use the site to improve content and usability</li>
              <li className="mb-1">Comply with legal obligations</li>
            </ul>
            <p className="mb-2">We do not use your data for marketing purposes or share it with third parties for advertising.</p>
            <h2 className="text-xl mb-4 font-bold">6. Legal Basis</h2>
            <p className="mb-4">We process your personal data under the following legal bases according to Art. 6 GDPR:</p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-1">Consent (Art. 6(1)(a) GDPR): when you voluntarily submit information via the contact form.</li>
              <li className="mb-1">Legitimate interests (Art. 6(1)(f) GDPR): for basic analytics and website operation.</li>
              <li className="mb-1">Legal obligation (Art. 6(1)(c) GDPR): if required for compliance.</li>
              </ul>
            <h2 className="text-xl mb-4 font-bold">7. Data Retention</h2>
            <p className="mb-4">We retain your personal data only as long as necessary to fulfill the purposes for which it was collected, including legal or reporting obligations.</p>
          <h2 className="text-xl mb-4 font-bold">8. Your Rights</h2>
          <p className="mb-4">As a data subject, you have the right to:</p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-1">Access your personal data</li>
            <li className="mb-1">Rectify inaccurate data</li>
            <li className="mb-1">Request deletion ("right to be forgotten")</li>
            <li className="mb-1">Request Restrict processing</li>
            <li className="mb-1">Object to processing</li>
            <li className="mb-1">Request data portability</li>
          </ul>
          <p className="mb-2">To exercise any of these rights, contact us at: contact@kai-hartmann.com</p>
          <h2 className="text-xl mb-4 font-bold">9. Cookies</h2>
          <p className="mb-4">We use essential cookies for functionality and analytics cookies to improve the site. You can disable cookies via your browser settings.</p>
          <h2 className="text-xl mb-4 font-bold">10. Data Security</h2>
          <p className="mb-4">We implement appropriate technical and organizational measures to secure your data. However, no internet transmission is 100% secure.</p>
          <h2 className="text-xl mb-4 font-bold">11. Third-Party Links</h2>
          <p className="mb-4">This website may contain links to other websites. We are not responsible for the privacy policies or practices of those third parties.</p>
          <h2 className="text-xl mb-4 font-bold">12. Changes to this Privacy Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time. The most current version will be posted on this page.</p>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy