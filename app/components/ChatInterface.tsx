// app/components/ChatInterface.tsx
'use client'

import { useState } from 'react'
import { getAIResponse } from '@/app/actions/ai-chat'

export default function ChatInterface() {
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    const prompt = formData.get('prompt') as string
    setLoading(true)

    const result = await getAIResponse(prompt)

    if (result.success) {
      setResponse(result.message)
    }
    setLoading(false)
  }

  return (
    <form action={handleSubmit}>
      <input name="prompt" disabled={loading} />
      <button type="submit" disabled={loading}>
        {loading ? '思考中...' : '送出'}
      </button>
      <div>{response}</div>
    </form>
  )
}