import check_file_extension from '../check_file_extension.js'
import { expect } from "chai"


describe('Check File Extension', () => {
  it("check_file_extension('test.js',  'js')    --> true)", () => {
    let result = check_file_extension('test.js', 'js')
    expect(result).to.equal(true)
  })

  it("check_file_extension('test.jpg', 'png')   --> false)", () => {
    let result = check_file_extension('test.jpg', 'png')
    expect(result).to.equal(false)
  })

  it("check_file_extension('test.js',  '.js')   --> true)", () => {
    let result = check_file_extension('test.js', '.js')
    expect(result).to.equal(true)
  })

  it("check_file_extension('test.jpg', '.png')  --> false)", () => {
    let result = check_file_extension('test.jpg', '.png')
    expect(result).to.equal(false)
  })
})