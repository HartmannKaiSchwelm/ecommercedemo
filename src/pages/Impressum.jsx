import React from 'react'

const Impressum = () => {
  return (
    <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center justify-center font-quicksand">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-custom-prim p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl mb-6 text-custom-tert font-bold text-center">Impressum</h1>
          <div className="text-custom-quat">
            <h2 className="text-xl mb-4 font-bold">Angaben gemäß § 5 TMG:</h2>
            <p className="mb-1">Kai Hartmann</p>
            <p className="mb-1">Kolpingstr. 4</p>
            <p className="mb-1">58332 Schwelm</p>
            <p className="mb-4">E-Mail: contact@kai-hartmann.com</p>

            <h2 className="text-xl mb-4 font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
            <p className="mb-1">Kai Hartmann (Adresse wie oben)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impressum