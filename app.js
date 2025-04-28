document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.file-actions input[type="text"]');
    const readmeTitle = document.querySelector('.readme-section h3');
    const readmeParagraph = document.querySelector('.readme-section p:first-of-type');
    const highlightColor = 'coral';


  
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
  
      if (searchTerm.includes('branch')) {
        readmeTitle.textContent = 'GIT BRANCH';
        readmeParagraph.textContent = 'branch" (ramificação) é uma cópia separada do código principal, que permite aos desenvolvedores trabalhar em novas funcionalidades ou correções sem afetar o código em produção. É uma ferramenta essencial para o trabalho em equipe e para garantir que alterações sejam feitas de forma isolada e controlada.';
      } 

      else if (searchTerm.includes('merge')) {
        readmeTitle.textContent = 'GIT MERGE';
        readmeParagraph.innerHTML = 'O processo de integrar as alterações de um branch em outro, geralmente o branch principal.<br><br>'
        + `<b style="color: ${highlightColor};">Fast-forward merge:</b> Se o branch principal não teve novas alterações desde que o branch foi criado, o Git simplesmente avança o ponteiro do branch principal para o último commit do branch de origem. <br><br>`
        + `<b style="color: ${highlightColor};">Three-way merge:</b> Se o branch principal tiver novas alterações desde que o branch foi criado, o Git precisa encontrar um ancestral comum e criar um novo commit de merge. `;
    } 

      else{
        readmeTitle.textContent = 'Conceitos Fundamentais';
        readmeParagraph.textContent = 'Digite Branch ou Merge!';
      }
    });
  });