import { ReactNode } from 'react'
import { Dialog } from '@headlessui/react'

type ModalScreenshotTypes = {
  children: ReactNode
  closeModal: any // TODO amend any
}

export const ModalScreenshot = ({
  children,
  closeModal,
}: ModalScreenshotTypes) => {
  return (
    <Dialog
      open={true}
      onClose={() => closeModal()}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-10">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

        <div className="relative max-w-screen-md mx-auto shadow-md">
          <button
            onClick={() => closeModal()}
            className="absolute -top-4 -right-4 bg-black text-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </Dialog>
  )
}
