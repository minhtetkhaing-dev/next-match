import React from 'react'
import Link from 'next/link'

export default function MembersPage() {
  return (
    <div>
        <h3 className='text-3xl'>
            This willl be the members page
        </h3>
        <Link 
            href="/"
        >
            Go Back Home
        </Link>
    </div>
  )
}
