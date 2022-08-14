import React from 'react'

type Props = {
  showCount?: () => void
}

const CallbackChild: React.FC<Props> = () => {
  return (
    <div>
      useCallback Hook
    </div>
  )
}

export default CallbackChild
