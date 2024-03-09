import { ReactNode } from 'react'

export default function Specs({
  specs,
}: {
  specs: {
    category: string
    value: string | ReactNode
    value2?: string | ReactNode
  }[]
}) {
  return (
    <div className="w-full overflow-x-scroll lg:w-3/4 lg:px-8">
      <div className="mx-0 mt-8 flow-root">
        <table className="min-w-max md:min-w-full">
          <colgroup>
            <col className="w-1/6 md:w-1/3" />
            <col className="w-1/3" />
            {specs.some((spec) => spec.value2) && <col className="w-1/3" />}
          </colgroup>
          <tbody>
            {specs.map((spec, idx) => (
              <tr key={idx} className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-lg">
                  <div className="font-medium text-gray-900">
                    {spec.category}
                  </div>
                </td>
                <td className="table-cell px-3 py-5 text-center text-lg text-gray-700">
                  {spec.value}
                </td>
                {spec.value2 && (
                  <td className="table-cell px-3 py-5 text-center text-lg text-gray-700">
                    {spec.value2}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
