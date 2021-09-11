(function() {
    (function() {
      var logo, logo_css, magicFocus;
      logo = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>codepen-logo</title><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.139 21.651l1.35-1.35a.387.387 0 0 0 0-.54l-3.49-3.49a.387.387 0 0 0-.54 0l-1.35 1.35a.39.39 0 0 0 0 .54l3.49 3.49a.38.38 0 0 0 .54 0zm6.922.153l2.544-2.543a.722.722 0 0 0 0-1.018l-6.582-6.58a.722.722 0 0 0-1.018 0l-2.543 2.544a.719.719 0 0 0 0 1.018l6.58 6.579c.281.28.737.28 1.019 0zm14.779-5.85l-7.786-7.79a.554.554 0 0 0-.788 0l-5.235 5.23a.558.558 0 0 0 0 .789l7.79 7.789c.216.216.568.216.785 0l5.236-5.236a.566.566 0 0 0 0-.786l-.002.003zm-3.89 2.806a.813.813 0 1 1 0-1.626.813.813 0 0 1 0 1.626z" fill="#FFF" fill-rule="evenodd"/></svg>';
      logo_css = '.mM{display:block;border-radius:50%;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);position:fixed;bottom:1em;right:1em;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all 240ms ease-in-out;transition:all 240ms ease-in-out;z-index:9999;opacity:0.75}.mM svg{display:block}.mM:hover{opacity:1;-webkit-transform:scale(1.125);transform:scale(1.125)}';
      document.head.insertAdjacentHTML('beforeend', '<style>' + logo_css + '</style>');
      document.body.insertAdjacentHTML('beforeend', '<a href="https://codepen.io/mican/" target="_blank" class="mM">' + logo + '</a>');
      return magicFocus = class magicFocus {};
      return {
        constructor: function(parent) {
          var i, input, len, ref, results;
          this.parent = parent;
          if (!this.parent) {
            return;
          }
          this.focus = document.createElement('div');
          this.focus.classList.add('magic-focus');
          this.parent.classList.add('has-magic-focus');
          this.parent.appendChild(this.focus);
          ref = this.parent.querySelectorAll('input, textarea, select');
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            input = ref[i];
            input.addEventListener('focus', function() {
              return window.magicFocus.show();
            });
            results.push(input.addEventListener('blur', function() {
              return window.magicFocus.hide();
            }));
          }
          return results;
        },
        show: () => {
          var base, base1, el;
          if (!(typeof (base = ['INPUT', 'SELECT', 'TEXTAREA']).includes === "function" ? base.includes((el = document.activeElement).nodeName) : void 0)) {
            return;
          }
          clearTimeout(this.reset);
          if (typeof (base1 = ['checkbox', 'radio']).includes === "function" ? base1.includes(el.type) : void 0) {
            el = document.querySelector(`[for=${el.id}]`);
          }
          this.focus.style.top = `${el.offsetTop || 0}px`;
          this.focus.style.left = `${el.offsetLeft || 0}px`;
          this.focus.style.width = `${el.offsetWidth || 0}px`;
          return this.focus.style.height = `${el.offsetHeight || 0}px`;
        },
        hide: () => {
          var base, el;
          if (!(typeof (base = ['INPUT', 'SELECT', 'TEXTAREA', 'LABEL']).includes === "function" ? base.includes((el = document.activeElement).nodeName) : void 0)) {
            this.focus.style.width = 0;
          }
          return this.reset = setTimeout(function() {
            return window.magicFocus.focus.removeAttribute('style');
          }, 200);
        }
      };
    })();
  
    // initialize
    window.magicFocus = new magicFocus(document.querySelector('.form'));
  
    $(function() {
      return $('.select').customSelect();
    });
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0gsUUFBQSxJQUFBLEVBQUEsUUFBQSxFQUFBO0lBQUUsSUFBQSxHQUFPO0lBQ1AsUUFBQSxHQUFXO0lBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBZCxDQUFpQyxXQUFqQyxFQUE4QyxTQUFBLEdBQVksUUFBWixHQUF1QixVQUFyRTtJQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWQsQ0FBaUMsV0FBakMsRUFBOEMsaUVBQUEsR0FBb0UsSUFBcEUsR0FBMkUsTUFBekg7QUFDQSxXQUFvQixhQUFOLE1BQUEsV0FBQSxDQUFBO1dBRWQ7TUFBQSxXQUFBLEVBQWEsUUFBQSxPQUFBLENBQUE7QUFFZixZQUFBLENBQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQTtRQUZnQixJQUFDLENBQUE7UUFFYixLQUFjLElBQUMsQ0FBQSxNQUFmO0FBQUEsaUJBQUE7O1FBRUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QjtRQUNULElBQUMsQ0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQWpCLENBQXFCLGFBQXJCO1FBQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBbEIsQ0FBc0IsaUJBQXRCO1FBQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxXQUFSLENBQW9CLElBQUMsQ0FBQSxLQUFyQjtBQUVBO0FBQUE7UUFBQSxLQUFBLHFDQUFBOztVQUNFLEtBQUssQ0FBQyxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxRQUFBLENBQUEsQ0FBQTttQkFDOUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFsQixDQUFBO1VBRDhCLENBQWhDO3VCQUVBLEtBQUssQ0FBQyxnQkFBTixDQUF1QixNQUF2QixFQUErQixRQUFBLENBQUEsQ0FBQTttQkFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFsQixDQUFBO1VBRDZCLENBQS9CO1FBSEYsQ0FBQTs7TUFUVyxDQUFiO01BZUEsSUFBQSxFQUFNLENBQUEsQ0FBQSxHQUFBO0FBRVIsWUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBO1FBQUksb0ZBQTJDLENBQUMsU0FBVSxDQUFDLEVBQUEsR0FBSyxRQUFRLENBQUMsYUFBZixDQUE2QixDQUFDLG1CQUFwRjtBQUFBLGlCQUFBOztRQUVBLFlBQUEsQ0FBYSxJQUFDLENBQUEsS0FBZDtRQUVBLDBFQUFzRSxDQUFDLFNBQVUsRUFBRSxDQUFDLGNBQXBGO1VBQUEsRUFBQSxHQUFLLFFBQVEsQ0FBQyxhQUFULENBQXVCLENBQUEsS0FBQSxDQUFBLENBQVEsRUFBRSxDQUFDLEVBQVgsQ0FBQSxDQUFBLENBQXZCLEVBQUw7O1FBRUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBYixHQUFtQixDQUFBLENBQUEsQ0FBRyxFQUFFLENBQUMsU0FBSCxJQUFjLENBQWpCLENBQUEsRUFBQTtRQUNuQixJQUFDLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CLENBQUEsQ0FBQSxDQUFHLEVBQUUsQ0FBQyxVQUFILElBQWUsQ0FBbEIsQ0FBQSxFQUFBO1FBQ3BCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQWIsR0FBcUIsQ0FBQSxDQUFBLENBQUcsRUFBRSxDQUFDLFdBQUgsSUFBZ0IsQ0FBbkIsQ0FBQSxFQUFBO2VBQ3JCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQWIsR0FBc0IsQ0FBQSxDQUFBLENBQUcsRUFBRSxDQUFDLFlBQUgsSUFBaUIsQ0FBcEIsQ0FBQSxFQUFBO01BWGxCLENBZk47TUE0QkEsSUFBQSxFQUFNLENBQUEsQ0FBQSxHQUFBO0FBRVIsWUFBQSxJQUFBLEVBQUE7UUFBSSw2RkFBb0UsQ0FBQyxTQUFVLENBQUMsRUFBQSxHQUFLLFFBQVEsQ0FBQyxhQUFmLENBQTZCLENBQUMsbUJBQTdHO1VBQUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBYixHQUFxQixFQUFyQjs7ZUFFQSxJQUFDLENBQUEsS0FBRCxHQUFTLFVBQUEsQ0FBVyxRQUFBLENBQUEsQ0FBQTtpQkFDbEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZUFBeEIsQ0FBd0MsT0FBeEM7UUFEa0IsQ0FBWCxFQUVQLEdBRk87TUFKTDtJQTVCTjtFQVBDLENBQUEsSUFBSDs7O0VBNkNBLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLElBQUksVUFBSixDQUFlLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBQWY7O0VBRXBCLENBQUEsQ0FBRSxRQUFBLENBQUEsQ0FBQTtXQUNBLENBQUEsQ0FBRSxTQUFGLENBQVksQ0FBQyxZQUFiLENBQUE7RUFEQSxDQUFGO0FBL0NBIiwic291cmNlc0NvbnRlbnQiOlsiZG8gLT5cbiAgbG9nbyA9ICc8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPmNvZGVwZW4tbG9nbzwvdGl0bGU+PHBhdGggZD1cIk0xNiAzMkM3LjE2MyAzMiAwIDI0LjgzNyAwIDE2UzcuMTYzIDAgMTYgMHMxNiA3LjE2MyAxNiAxNi03LjE2MyAxNi0xNiAxNnpNNy4xMzkgMjEuNjUxbDEuMzUtMS4zNWEuMzg3LjM4NyAwIDAgMCAwLS41NGwtMy40OS0zLjQ5YS4zODcuMzg3IDAgMCAwLS41NCAwbC0xLjM1IDEuMzVhLjM5LjM5IDAgMCAwIDAgLjU0bDMuNDkgMy40OWEuMzguMzggMCAwIDAgLjU0IDB6bTYuOTIyLjE1M2wyLjU0NC0yLjU0M2EuNzIyLjcyMiAwIDAgMCAwLTEuMDE4bC02LjU4Mi02LjU4YS43MjIuNzIyIDAgMCAwLTEuMDE4IDBsLTIuNTQzIDIuNTQ0YS43MTkuNzE5IDAgMCAwIDAgMS4wMThsNi41OCA2LjU3OWMuMjgxLjI4LjczNy4yOCAxLjAxOSAwem0xNC43NzktNS44NWwtNy43ODYtNy43OWEuNTU0LjU1NCAwIDAgMC0uNzg4IDBsLTUuMjM1IDUuMjNhLjU1OC41NTggMCAwIDAgMCAuNzg5bDcuNzkgNy43ODljLjIxNi4yMTYuNTY4LjIxNi43ODUgMGw1LjIzNi01LjIzNmEuNTY2LjU2NiAwIDAgMCAwLS43ODZsLS4wMDIuMDAzem0tMy44OSAyLjgwNmEuODEzLjgxMyAwIDEgMSAwLTEuNjI2LjgxMy44MTMgMCAwIDEgMCAxLjYyNnpcIiBmaWxsPVwiI0ZGRlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+J1xuICBsb2dvX2NzcyA9ICcubU17ZGlzcGxheTpibG9jaztib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtwb3NpdGlvbjpmaXhlZDtib3R0b206MWVtO3JpZ2h0OjFlbTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAyNDBtcyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAyNDBtcyBlYXNlLWluLW91dDt6LWluZGV4Ojk5OTk7b3BhY2l0eTowLjc1fS5tTSBzdmd7ZGlzcGxheTpibG9ja30ubU06aG92ZXJ7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTI1KTt0cmFuc2Zvcm06c2NhbGUoMS4xMjUpfSdcbiAgZG9jdW1lbnQuaGVhZC5pbnNlcnRBZGphY2VudEhUTUwgJ2JlZm9yZWVuZCcsICc8c3R5bGU+JyArIGxvZ29fY3NzICsgJzwvc3R5bGU+J1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCAnYmVmb3JlZW5kJywgJzxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vbWljYW4vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJtTVwiPicgKyBsb2dvICsgJzwvYT4nXG4gIHJldHVybiAgICAgICAgY2xhc3MgbWFnaWNGb2N1c1xuICBcbiAgY29uc3RydWN0b3I6IChAcGFyZW50KSAtPlxuICAgIFxuICAgIHJldHVybiB1bmxlc3MgQHBhcmVudFxuICAgICAgICBcbiAgICBAZm9jdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdkaXYnXG4gICAgQGZvY3VzLmNsYXNzTGlzdC5hZGQgJ21hZ2ljLWZvY3VzJ1xuICAgIEBwYXJlbnQuY2xhc3NMaXN0LmFkZCAnaGFzLW1hZ2ljLWZvY3VzJ1xuICAgIEBwYXJlbnQuYXBwZW5kQ2hpbGQgQGZvY3VzXG5cbiAgICBmb3IgaW5wdXQgaW4gQHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpICAgICAgXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyICdmb2N1cycsIC0+XG4gICAgICAgIHdpbmRvdy5tYWdpY0ZvY3VzLnNob3coKVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciAnYmx1cicsIC0+XG4gICAgICAgIHdpbmRvdy5tYWdpY0ZvY3VzLmhpZGUoKVxuICAgIFxuICBzaG93OiA9PlxuICAgIFxuICAgIHJldHVybiB1bmxlc3MgWydJTlBVVCcsJ1NFTEVDVCcsJ1RFWFRBUkVBJ10uaW5jbHVkZXM/IChlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLm5vZGVOYW1lXG4gICAgXG4gICAgY2xlYXJUaW1lb3V0KEByZXNldClcbiAgICAgICAgICAgICAgICAgICBcbiAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZm9yPSN7ZWwuaWR9XVwiKSBpZiBbJ2NoZWNrYm94JywgJ3JhZGlvJ10uaW5jbHVkZXM/IGVsLnR5cGVcblxuICAgIEBmb2N1cy5zdHlsZS50b3AgPSBcIiN7ZWwub2Zmc2V0VG9wfHwwfXB4XCJcbiAgICBAZm9jdXMuc3R5bGUubGVmdCA9IFwiI3tlbC5vZmZzZXRMZWZ0fHwwfXB4XCJcbiAgICBAZm9jdXMuc3R5bGUud2lkdGggPSBcIiN7ZWwub2Zmc2V0V2lkdGh8fDB9cHhcIlxuICAgIEBmb2N1cy5zdHlsZS5oZWlnaHQgPSBcIiN7ZWwub2Zmc2V0SGVpZ2h0fHwwfXB4XCJcbiAgICAgIFxuICBoaWRlOiA9PlxuICAgICAgIFxuICAgIEBmb2N1cy5zdHlsZS53aWR0aCA9IDAgdW5sZXNzIFsnSU5QVVQnLCdTRUxFQ1QnLCdURVhUQVJFQScsICdMQUJFTCddLmluY2x1ZGVzPyAoZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5ub2RlTmFtZVxuICAgICAgICBcbiAgICBAcmVzZXQgPSBzZXRUaW1lb3V0IC0+XG4gICAgICB3aW5kb3cubWFnaWNGb2N1cy5mb2N1cy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAsIDIwMFxuXG4jIGluaXRpYWxpemVcbiAgICBcbndpbmRvdy5tYWdpY0ZvY3VzID0gbmV3IG1hZ2ljRm9jdXMgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKVxuXG4kIC0+XG4gICQoJy5zZWxlY3QnKS5jdXN0b21TZWxlY3QoKSJdfQ==
  //# sourceURL=coffeescript