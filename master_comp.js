Vue.component('master-comp', {
    mixins: [myHelpers],
    created: function(){
      this.buildCategoryArrays();  
      this.currentActiveCategory = this.allCategories[0]; 
      this.eventHub.$on('close-modal', this.closemodal);
    },
    mounted: function(){
      this.setWidthOfTabs();
    },
    data: function () {
      return {
          title: 'Video Gallery',
          galleryOpen: 'no',
          widthOfTabs: '0px',
          currentYoutubeId: 'abckdhjd8d7d6',
          currentActiveCategory: '',
          modalVisible: false,
          isLoading: false,
          allCategories: [],
          arraysByCategory: {}
        }
    },
    methods: {
      showLoader: function(id){
        return id === this.currentYoutubeId
      },
      closemodal: function(){
        this.modalVisible = false;
        var that = this;
        setTimeout(function(){
          that.currentYoutubeId = '';
        }, 500)
      },
      showIframeModal: function(id){
        this.isLoading = true;
        this.currentYoutubeId = id;
         var that = this;
        setTimeout(function(){
          that.modalVisible = true;
          setTimeout(function(){
            that.isLoading = false;
          }, 100)
        }, 500)
      },
      activateTab: function(category){
        this.currentActiveCategory = category;
      },
      buildCategoryArrays: function(){
        var allCategories = this.videos.map(function(item){
          return item.category
        });
        this.allCategories = this.removeDoublesFromArray(allCategories);
        var arraysByCategory = this.buildArraysByCategory();
        this.arraysByCategory = arraysByCategory;
      },
      setWidthOfTabs: function(){
        window.innerWidth > 767 ? this.widthOfTabs = ((document.getElementById('tabs-container').offsetWidth - 30)  / this.allCategories.length) + 'px' : this.widthOfTabs = '100%';
      }
    },
    computed: {
      currentArrayShowing: function(){
        return this.arraysByCategory[this.currentActiveCategory]
      } 
    }
  })
  