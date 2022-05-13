function DispaClipBoard($)
{
	this.Width;
	this.Height;
	this.setClipBoard;

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)

		///UserCodeRegionEnd: (do not remove this comment.)
		if (this.setClipBoard!='' && this.setClipBoard != undefined) {
			fcDispaClipBoard(this.setClipBoard)
		}
	}

	function fcDispaClipBoard(texto) {
		var copyText = texto;
		//navigator.clipboard.writeText(copyText);
		if (window.clipboardData && window.clipboardData.setData) {
        
			return clipboardData.setData("Text", copyText); 
			
			} else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
				var textarea = document.createElement("textarea");
				textarea.textContent = copyText;
				textarea.style.position = "fixed";  
				document.body.appendChild(textarea);
				textarea.select();
				try {
					return document.execCommand("copy");  
					} catch (ex) {
					console.warn("Copy to clipboard failed.", ex);
					return false;
					} finally {
					document.body.removeChild(textarea);
				}
			}
		
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)


	///UserCodeRegionEnd: (do not remove this comment.):
}
