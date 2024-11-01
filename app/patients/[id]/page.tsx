export default function PatientDetailPage({ params }: {params:any}) {
    const { id } = params;  // Extract the dynamic segment
    const patient = patients[id];
    const reportRows = patient.reports?.map(report => 
      <div className="grid grid-cols-2 gap-4 text-center items-center justify-center my-10">
        <img src={report.imageUrl} className="min-w-[100%] m-auto"></img>
        <p className="">{report.reportResults}</p>
      </div>
    );
    return (
      <main className="flex flex-col items-center pt-10">
        <h1 className="text-center text-5xl font-bold mb-8">Patient Details</h1>
        <div className="border rounded-lg shadow-lg w-[50%] max-w-4xl p-6 bg-hblue-light/[0.4]">
            <p className="text-lg font-semibold mb-4 text-center">Patient ID: <span className="font-normal text-gray-700">{patient.id}</span></p>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                  <h2 className="font-semibold">Patient Name</h2>
                  <p className="text-gray-700">
                  {patient.firstName}{patient.middleName && ` ${patient.middleName}`} {patient.lastName}
                  </p>
              </div>
              <div>
                  <h2 className="font-semibold">Date of Birth</h2>
                  <p className="text-gray-700">
                  {patient.dateOfBirth.toLocaleDateString('en-US', { year: "numeric", month: "long", day: "numeric" })}
                  </p>
              </div>
              <div className="col-span-2">
                  <h2 className="font-semibold">Sex</h2>
                  <p className="text-gray-700">{patient.sex}</p>
              </div>
            </div>
        </div>
        <h1 className="mt-10 text-4xl font-semibold">Reports</h1>
        <div className="border rounded-lg shadow-lg w-[50%] max-w-4xl p-6 bg-hblue-light/[0.4] mt-2">
          <div className="grid grid-cols-2 gap-4 text-center">
            <h1 className="font-semibold">Report Image</h1>
            <h1 className="font-semibold">Report Result</h1>
          </div>
          {reportRows ? (
            reportRows
          ) : (
            <h1 className="text-xl text-center">No Reports Found for this Patient</h1>
          )}
        </div>
      </main>
    );
  }

  const patients = [
    {
      id: 0,
      dateCreated: new Date(2024, 9, 25),
      firstName: "Rayyan",
      middleName: "Midhat Abdul",
      lastName: "Khalique",
      dateOfBirth: new Date(2009, 3, 3),
      sex: "male",
      reports: null
    },{
      id: 1,
      dateCreated: new Date(2024, 8, 30),
      firstName: "Dylan",
      middleName: "Bhavesh",
      lastName: "Patel",
      dateOfBirth: new Date(2009, 2, 3),
      sex: "male",
      reports: [
        {id: 0, imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAAD+/v4BAQH7+/tHR0dgYGCjo6McHBzZ2dkGBgb4+Pjx8fH19fUKCgru7u5AQEBRUVHMzMx0dHTj4+OYmJgkJCSqqqqMjIywsLDCwsJqamp6eno2NjYvLy+Dg4MVFRW5ublRQvbrAAAGC0lEQVR4nO2dD3P6LAzHgTJdS2m1tm5z/tne/5v8JaGdinXP7RG0ePne5nlzBj6GhLTeESEupNTl35IVw0xVDDNVMcxUxTB/G8Ap8jD9WBFNnyraMGcjxjCKZtWzwCitjFbaaA2/5m40UQbRTsKUZW2FFUnDKCCxxuZvXff+niNbqjDoBVxeebeUqJm5F0tAmMEQsgjRzgGlKIqskh+ivNN2FhBGK1pgyNJ2M4ks8FDJWR81oQb6ZQrBxgAMjHnIYuV8CRjwk4GkfBH6Tvks5DIDn5RKlB/LV3BKlS4MThX3FiE+wCsQKrjEMjnA3Ck5h4IRsDdCDtvsIEoqOQRMcjBKqD6+bb6A+VeZLAChOoVJYpkpDPr+oW4+cfruJ+ufpgVDgm2x3qx6VzjRfpkaDFaTFlC2GCYUKEeUpGAU1cVGlJvtGnd7yGEyZRjcJpstpTBXu5xr+jCKKhftChjVbBcu4PG3SA1GKVcF2xqw8u1eeksrKRhXhOnaCNFsv44ZLEUYd7UCYS/qlaTtPpPjJEnAIIrR+bt02/xVtyQAQ66x+Xztyi+sXa7TTBkGr7s01mBzSMbHC5brzpkyjKZbSPl8QRPtI19m6JsiORi8HyYauLivsuyYxGCzJKLEYGib7GRBu/2PWxxLMbbUpgxDnpljDsuKoTzua5hsdOOcMgzkZITpr4rlsL/sZ8uvYe9MB6b3TFZVNGkE+jo0tTW2/BjNadOGgf+GZYbCaa8PuRBwFQAvtZ/pwbiYwVsWX+vZBmrn0tKdjNLOx8rNacM4z4BPXrqGkpur1KwS3wnCoGfkbvVRQzqwdKHpvohRm12KMN3isLF0IQDri5yDNKJZJAZDX7Q0gKIo6HX/XvSMg0lqn8FlpfDWkrvl378Zb2yIfJkYDN6DNfhFpYMZvpPBLCDyWWrLzBqjlPZnRiktORiakjEjMCY9GLotQ7fJsUg7taHSW2Yu5pX/PppoejDDlM6nlijMSTZ+AphxGyLNmBm3IZ7KMwwTXgzj22CYCGIY3wbvMxHEML4NhokghvFtcDaLIIbxbTBMBDGMb4NhIohhfBsME0EM49t4LhguNMOLYXwbDBNBDOPb4GwWQQzj22CYCOIE4Ntgz0QQe8a3wTARxDHj22DPRBB7xrfBMBHEML4NhokghvFtMEwEMYxvg8uZCGLP+DaeyzMME14cM74N9kwEsWd8GwwTQQzj2+AEEEEM49tgmAhiGN8GZ7MIYhjfBsNEEMP4NhgmghjGt8EwEcQwvo2ngkn04KlrNhgmuMLApHiM3jUbeEQgwwRWEBjzTMvMwHTpHM1ngFEqweNarwjPCH0eGGzR2Oz6uZ/DyAJg7tXqMMwyM0ps1qOeAZjd3ZpQBkvN3+OHT8PDvlQpweCJp93PYfSnMDIr5L4V9yARYWAwwOvDZcQgTFHIdY5n7wYY5j914yi0evDI436bGctmr99iOAtdx3XRrcYpGLQ18/G+APR46HudRo+cW4wrOt5c6bIU7fIKDLZ2eGmpK629OOg5tP5qXJ1JG1Njq0YozGDWo9kMeKqDpWOeabGZcwtB2f4Oc+RxaUzrvHuFGY8lAPJNVRWHvMTjxLGI69ebngaMGs43t7au23zzjq11imq0ZQvCVNgUQc7mTZvX1uo+sf18Jo+DoeFNk+dN02zeusPnzk2Z1tgliXtNZq6X2+ts271tGnh3nrdtG8E1fzLmFki9W69PP3ryyFUWl9JOvFat9/vdcvZuL09+fwTMYnAHOqRvm/kbzCDqhTj8dVXqi5PfHwNT4axci8arDBc4EruI4fuoMdLK6od7RhBM5mB+dcgFDrpSurZoEmHwwmESMFlVXGnT9AtMv9pcAK0ixIz4XzAVZWLZ74rZ0HZ2eHLytH/5B8I1EoT8tuqv2O5Sgf4OI+WQxP6on2SxKsnao1BOYG4WeMZg14cHwhCPrl++Xm9WtaqpUeqjYcp5CH0b2mceDQPlYgAZ177qoTRDtXyjHolwlLr95sRkWNz3l7dZmBDM7VOZDMvtMDEdM52PKYCms4AD6JlYGGayYpipimGmKoaZhP4BtKpZz05VLbAAAAAASUVORK5CYII=", reportResults: "OSCC Not Found"}
      ]
    },{
      id: 2,
      dateCreated: new Date(2024, 9, 31),
      firstName: "Trevon",
      middleName: null,
      lastName: "Nguyen",
      dateOfBirth: new Date(2009, 5, 20),
      sex: "male",
      reports: [
        {id: 0, imageUrl: "data:image/png;base64,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", reportResults: "OSCC Found"},
        {id: 1, imageUrl: "https://www.thecompliancecenter.com/wp-content/uploads/cm/d/c/dc2_hi.gif", reportResults: "OSCC Found"}
      ] 
    },
  ]