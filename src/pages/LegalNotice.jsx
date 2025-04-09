import React from 'react'
import Footer from '../components/Footer.jsx'
const LegalNotice = () => {
  return (
    <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center justify-center font-quicksand">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-custom-prim p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl mb-6 text-custom-tert font-bold text-center">Legal Notice (Impressum)</h1>
          
          <div className="mb-8">
            <p className="mb-4 text-custom-quat">Information according to § 5 TMG</p>
            <p className="mb-4 text-custom-quat">Responsible for content:</p>
            <p className="mb-1">Kai Hartmann</p>
            <p className="mb-1">Kolpingstr. 4</p>
            <p className="mb-1">58332 Schwelm</p>
            <p className="mb-4">E-Mail: contact@kai-hartmann.com</p>

            <h2 className="text-xl mb-4 font-bold text-custom-tert">Responsible for content according to § 55 Abs. 2 RStV:</h2>
            <p className="mb-1">Kai Hartmann (Address as above)</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl mb-4 font-bold text-custom-tert">Disclaimer</h2>
            <p className="mb-2 font-semibold">Liability for Content</p>
            <p className="mb-4 text-custom-quat">The content of this website has been created with great care. However, we do not guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with § 7 para.1 TMG. According to §§ 8 to 10 TMG, however, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
          
            <p className="mb-2 font-semibold">Liability for Links</p>
            <p className="mb-4 text-custom-quat">Our website contains links to external websites of third parties. We have no influence on the contents of those pages. Therefore, we cannot assume any liability for such external content. The respective provider or operator of the linked pages is always responsible for their content.</p>
          </div>
          
          <div className="mb-4">
            <h2 className="text-xl mb-4 font-bold text-custom-tert">Copyright</h2>
            <p className="mb-4 text-custom-quat">The content and works on this website are subject to German copyright law. Reproduction, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of the respective author or creator.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegalNotice