Vue.component('videoModal', {
	props: ['current-youtube-id', 'galleryOpen'], 
	  data: function(){
	    return {
        
	    }
      },
	  computed: {
        componentHeight: function(){
            return this.galleryOpen === 'no' ? 'hidden' : 'auto'
        }
	  },
	  methods: {
	    closeModal: function(){
	        this.eventHub.$emit('close-modal');
	    }
	  }
  });