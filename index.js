;(function () {
  var provinceSelect = document.querySelector('#province')
  var citySelect = document.querySelector('#city')
  var schoolSelect = document.querySelector('#school')
  var init = function () {
    for (var k in province) {
      var option = document.createElement('option')
      option.value = k
      option.innerHTML = province[k]
      provinceSelect.appendChild(option)
    }
    provinceSelect.addEventListener('change', provinceSelectChangeHandler)
    citySelect.addEventListener('change', citySelectChangeHandler)
  }
  function provinceSelectChangeHandler() {
    citySelect.innerHTML = ''
    if (!this.value) {
      return
    }
    for (var k in city[this.value]) {
      var option = document.createElement('option')
      option.value = k
      option.innerHTML = city[this.value][k]
      citySelect.appendChild(option)
    }
    citySelectChangeHandler.call(citySelect)
  }
  function citySelectChangeHandler() {
    schoolSelect.innerHTML = ''
    if (!this.value) {
      return
    }
    for (var i = 0; i < allschool[this.value].length; i++) {
      var option = document.createElement('option')
      option.value = allschool[this.value][i]
      option.innerHTML = allschool[this.value][i]
      schoolSelect.appendChild(option)
    }
  }
  init()
})()
