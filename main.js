var pointer
var memory
var raw_program
var program
var program_i
var run_btn = document.getElementById("run")
var output = document.getElementById("output")
var sleep_time = 30

function run() {
  switch(program.slice(program_i, program_i + 3)) {
    case "010":
      memory[pointer]++
      if (memory[pointer] == 256) {
        memory[pointer] = 0
      }
      break
    case "011":
      memory[pointer]--
      if (memory[pointer] == -1) {
        memory[pointer] = 255
      }
      break
    case "000":
      pointer++
      if (pointer == memory.length) memory.push(0)
      break
    case "001":
      pointer--
      break
    case "100":
      output.innerText += String.fromCharCode(memory[pointer])
      break
    case "110":
      if (memory[pointer] == 0) {
        var scope_num = 0
        for(var i=program_i+3; i+3<program.length; i+=3) {
          if (program.slice(i, i + 3) == "110") {
            scope_num++
          } else if (program.slice(i, i + 3) == "111" && scope_num != 0) {
            scope_num--
          } else if (program.slice(i, i + 3) == "111") {
            program_i = i
            break
          }
        }
      }
      break
    case "111":
      if (memory[pointer] != 0) {
        var scope_num = 0
        for(var i=program_i-3; i>=0; i-=3) {
          if (program.slice(i, i + 3) == "111") {
            scope_num++
          } else if (program.slice(i, i + 3) == "110" && scope_num != 0) {
            scope_num--
          } else if (program.slice(i, i + 3) == "110") {
            program_i = i
            break
          }
        }
      }
      break
  }
  program_i +=3
  show()
  if (program_i < program.length) setTimeout(run, sleep_time)
  else run_btn.disabled = false
}

function show() {
  var program_elm = ""
  var count_commands = 0
  for (var i=0; i<raw_program.length; i++) {
    var is_command = /[01]/.test(raw_program[i])
    if (count_commands == program_i && is_command) program_elm += `<span class="running">`
    program_elm += `<span>${raw_program[i]}</span>`
    if (count_commands == program_i + 2 && is_command) program_elm += `</span>`

    if (is_command) count_commands++
  }
  document.getElementById("program").innerHTML = program_elm

  var memory_elm = ""
  memory.forEach((value, i)=>{
    if (i == pointer) {
      memory_elm += `<div class="value pointer">${("000" + value).slice(-3)}</div>`
    } else {
      memory_elm += `<div class="value">${("000" + value).slice(-3)}</div>`
    }
  })
  document.getElementById("memory").innerHTML = memory_elm
}

run_btn.addEventListener("click", ()=>{
  run_btn.disabled = true
  pointer = 0
  memory = [0]
  raw_program = document.getElementById("input_program").value
  program = raw_program.replace(/[^01]/g, "")
  program_i = 0
  output.innerText = null
  show()
  setTimeout(run, sleep_time)
})