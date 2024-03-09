const tabs=document.querySelectorAll('[data-target]'),
      tabContents=document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
      const target= document.getElementById(tab.dataset.target.substring(1));

      tabContents.forEach(tabContent => {
        tabContent.classList.remove('qualification_active')
      })
      target.classList.add('qualification_active')

      tabs.forEach(tab=>{
        tab.classList.remove('qualification_active')
      })
      tab.classList.add('qualification_active')
    })
})

const tabs1=document.querySelectorAll('[data-target-secondary]'),
      tabContents1=document.querySelectorAll('[data-content-secondary]')

tabs1.forEach(tab1=>{
    tab1.addEventListener('click',()=>{
      const target1 = document.getElementById(tab1.dataset.targetSecondary.substring(1));

      tabContents1.forEach(tabContent1 => {
        tabContent1.classList.remove('qualification_active_secondary')
      })
      target1.classList.add('qualification_active_secondary')

      tabs1.forEach(ta1b=>{
        tab1.classList.remove('qualification_active_secondary')
      })
      tab1.classList.add('qualification_active_secondary')
    })
})
