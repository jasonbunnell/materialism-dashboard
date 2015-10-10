var modal_content = '<div class="modal" id="exampleModal" tabindex="-1" role="dialog">' +
                      '<div class="modal-dialog">' +
                        '<div class="modal-content">' +
                          '<div class="modal-header">' +
                            '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                            '<h4 class="modal-title">Test modal</h4>' +
                          '</div>' +
                          '<div class="modal-body">' +
                            '<h4>Text in a modal</h4>' +
                            '<p ng-bind-html="content"></p>' +
                            '<pre>2 + 3 = {{ 2 + 3 }}</pre>' +
                            '<h4>Popover in a modal</h4>' +
                            '<p>This <button role="button" class="btn btn-default popover-test" data-title="A Title" data-content="And here\'s some amazing content. It\'s very engaging. right?" data-toggle="popover">button</button> should trigger a popover on click.</p>' +
                            '<h4>Tooltips in a modal</h4>' +
                            '<p><a href="#" class="tooltip-test" data-title="Tooltip" data-toggle="tooltip">This link</a> and <a href="#" class="tooltip-test" data-title="Tooltip" data-toggle="tooltip">that link</a> should have tooltips on hover.</p>' +
                          '</div>' +
                          '<div class="modal-footer">' +
                            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
                            '<button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>';

$('.messages button[bs-modal="modal"]').on('click', function(e) {
  $('#exampleModal').remove();
  var modal = $(modal_content);
  $('body').append(modal);
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  modal.modal({backdrop: 'static', keyboard: false});
});
