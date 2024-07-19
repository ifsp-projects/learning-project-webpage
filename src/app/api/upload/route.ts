import { v2 as cloudinary } from 'cloudinary'
import { NextResponse } from 'next/server'

import { cloudinaryAPK } from '@/environments/cloudinaryAPK'
import { cloudinaryName } from '@/environments/cloudinaryName'
import { cloudinarySecret } from '@/environments/cloudinarySecret'

cloudinary.config({
  cloud_name: cloudinaryName,
  api_key: cloudinaryAPK,
  api_secret: cloudinarySecret
})

export async function POST(request: Request) {
  const { path } = await request.json()

  if (!path) {
    return NextResponse.json(
      { message: 'ERROR! Image path not defined' },
      { status: 400 }
    )
  }

  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      transformation: [{ width: 512, height: 512, crop: 'scale' }]
    }

    const result = await cloudinary.uploader.upload(path, options)

    return NextResponse.json(result, { status: 200 })
  } catch (ApiRequestError) {
    console.error(ApiRequestError)
    return NextResponse.json(
      { message: 'ERROR! Error at save image in cloudinary cloud' },
      { status: 500 }
    )
  }
}
