$(function() {

	// On click of order, update details on UI accordingly
	$(".orderSummary").click(function( event ) {

		var recordIndex = $(this).attr('itemid');

		var recordInsertionDate = new Date(recordValues[recordIndex].INSERTION_DATE);

		$( "#orderTitle" ).text(`${recordValues[recordIndex].ORDER_ID} (${recordValues[recordIndex].STATUS})`);
		$( "#orderDate" ).text(`${recordInsertionDate.toString()}`);
		// $( "#orderPaymentScheme" ).text(`${recordValues[recordIndex].PAYMENT_SCHEME}`);
		// $( "#orderPaymentEnvironment" ).text(`${recordValues[recordIndex].ENVIRONMENT}`);
		$( "#orderSummaryJson" ).text(`${recordValues[recordIndex].SUMMARYJSON}`);
		$( "#createOrderCorrelationIds" ).text(`${recordValues[recordIndex].CREATE_ORDER_API.CORRELATION_ID}`);
		$( "#createOrderRequestUrl" ).text(`${recordValues[recordIndex].CREATE_ORDER_API.REQUEST_URL}`);
		$( "#createOrderRequest" ).text(`${recordValues[recordIndex].CREATE_ORDER_API.REQUESTJSON}`);
		$( "#createOrderResponse" ).text(`${recordValues[recordIndex].CREATE_ORDER_API.RESPONSEJSON}`);
		recordValues[recordIndex].CONFIRM_PAYMENT_SOURCE_API.CORRELATION_ID ? $( "#confirmPaymentSourceCorrelationIds" ).text(`${recordValues[recordIndex].CONFIRM_PAYMENT_SOURCE_API.CORRELATION_ID}`) : $( "#confirmPaymentSourceCorrelationIds" ).text('N/A');
		recordValues[recordIndex].CONFIRM_PAYMENT_SOURCE_API.REQUEST_URL ? $( "#confirmPaymentSourceRequestUrl" ).text(`${recordValues[recordIndex].CONFIRM_PAYMENT_SOURCE_API.REQUEST_URL}`) : $( "#confirmPaymentSourceRequestUrl" ).text('');
		recordValues[recordIndex].CONFIRM_PAYMENT_SOURCE_API.REQUESTJSON ? $( "#confirmPaymentSourceRequest" ).text(`${recordValues[recordIndex].CONFIRM_PAYMENT_SOURCE_API.REQUESTJSON}`) : $( "#confirmPaymentSourceRequest" ).text('{}');
		recordValues[recordIndex].CONFIRM_PAYMENT_SOURCE_API.RESPONSEJSON ? $( "#confirmPaymentSourceResponse" ).text(`${recordValues[recordIndex].CONFIRM_PAYMENT_SOURCE_API.RESPONSEJSON}`) : $( "#confirmPaymentSourceResponse" ).text('{}');		
		recordValues[recordIndex].GET_ORDER_API.CORRELATION_ID ? $( "#getOrderCorrelationIds" ).text(`${recordValues[recordIndex].GET_ORDER_API.CORRELATION_ID}`) : $( "#getOrderCorrelationIds" ).text('N/A');
		recordValues[recordIndex].GET_ORDER_API.REQUEST_URL ? $( "#getOrderRequestUrl" ).text(`${recordValues[recordIndex].GET_ORDER_API.REQUEST_URL}`) : $( "#getOrderRequestUrl" ).text('');
		recordValues[recordIndex].GET_ORDER_API.RESPONSEJSON ? $( "#getOrderResponse" ).text(`${recordValues[recordIndex].GET_ORDER_API.RESPONSEJSON}`) : $( "#getOrderResponse" ).text('{}');
		recordValues[recordIndex].CAPTURE_ORDER_API.CORRELATION_ID ? $( "#captureOrderCorrelationIds" ).text(`${recordValues[recordIndex].CAPTURE_ORDER_API.CORRELATION_ID}`) : $( "#captureOrderCorrelationIds" ).text('N/A');
		recordValues[recordIndex].CAPTURE_ORDER_API.REQUEST_URL ? $( "#captureOrderRequestUrl" ).text(`${recordValues[recordIndex].CAPTURE_ORDER_API.REQUEST_URL}`) : $( "#captureOrderRequestUrl" ).text('');
		recordValues[recordIndex].CAPTURE_ORDER_API.REQUESTJSON ? $( "#captureOrderRequest" ).text(`${recordValues[recordIndex].CAPTURE_ORDER_API.REQUESTJSON}`) : $( "#captureOrderRequest" ).text('{}');
		recordValues[recordIndex].CAPTURE_ORDER_API.RESPONSEJSON ? $( "#captureOrderResponse" ).text(`${recordValues[recordIndex].CAPTURE_ORDER_API.RESPONSEJSON}`) : $( "#captureOrderResponse" ).text('{}');
    recordValues[recordIndex].WEBHOOKJSON ? $("#webhookDetails").text(`${recordValues[recordIndex].WEBHOOKJSON}`) : $("#webhookDetails").text('{}');
    



	});

  var clipboard = new ClipboardJS(document.getElementById('clipboardCopy'));
  
  var orderItems = document.querySelectorAll(".orderRecord");
  if (orderItems) {
    orderItems.forEach(val => {
      let status = val.getAttribute('status')
      if (status == "COMPLETED") {
        val.style.backgroundColor = '#e6f2e9';
      } else if (status == "CANCELLED"
        || status == "DECLINED") {
          val.style.backgroundColor = '#eecccc';
      }
    })
  }
});