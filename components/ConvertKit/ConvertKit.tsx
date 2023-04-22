
import Link from 'next/link'
import Image from 'next/image'
import s from './ConvertKit.module.css'
import ConvertKitForm from 'convertkit-react/bin/convertkit-react.esm'

const ConvertKit = () => {
  return (
    <div className={s.ConvertKit}>
      <h3>Suscríbete</h3>
      <p>Recibe contenido actualizado en tu email. Odiamos el spam tanto como tú.</p>
      <ConvertKitForm
        template="clare"
        formId="5078656"
        emailPlaceholder="Email"
        namePlaceholder="Nombre"
      />
    </div>
  )
}

export default ConvertKit