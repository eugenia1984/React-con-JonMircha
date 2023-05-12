import BulmaCardContent from '../atoms/BulmaCardContent'
import BulmaCardImage from '../atoms/BulmaCardImage'

export default function BulmaCard() {
  return (
    <div className="card">
      <BulmaCardImage
        srcImg="https://images.unsplash.com/photo-1635138272112-752d04bacca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        altTxt="Atlanta Botanical Garden"
      />
      <BulmaCardContent />
    </div>
  )
}
